var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// <define:process.env>
var define_process_env_default = { BUILD_TIME: "2023-01-18T05:35:36.207Z", VERSION: "0.2.3", PROD: "1", MOCK: "0", DEBUG: "0" };

// https://esm.sh/v103/webextension-polyfill@0.10.0/deno/webextension-polyfill.development.js
var __create = Object.create;
var __defProp2 = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp2(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var require_browser_polyfill = __commonJS({
  "esm-build-0c7d71bb13feb1b6b51a58e6bd0be4e9860b770d-2ccc2e20/node_modules/webextension-polyfill/dist/browser-polyfill.js"(exports, module) {
    (function(global, factory) {
      if (typeof define === "function" && define.amd) {
        define("webextension-polyfill", ["module"], factory);
      } else if (typeof exports !== "undefined") {
        factory(module);
      } else {
        var mod = {
          exports: {}
        };
        factory(mod);
        global.browser = mod.exports;
      }
    })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : exports, function(module2) {
      "use strict";
      if (!globalThis.chrome?.runtime?.id) {
        throw new Error("This script should only be loaded in a browser extension.");
      }
      if (typeof globalThis.browser === "undefined" || Object.getPrototypeOf(globalThis.browser) !== Object.prototype) {
        const CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE = "The message port closed before a response was received.";
        const wrapAPIs = (extensionAPIs) => {
          const apiMetadata = {
            "alarms": {
              "clear": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "clearAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "get": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "bookmarks": {
              "create": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "get": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getChildren": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getRecent": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getSubTree": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getTree": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "move": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeTree": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "search": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "update": {
                "minArgs": 2,
                "maxArgs": 2
              }
            },
            "browserAction": {
              "disable": {
                "minArgs": 0,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "enable": {
                "minArgs": 0,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "getBadgeBackgroundColor": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getBadgeText": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getPopup": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getTitle": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "openPopup": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "setBadgeBackgroundColor": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setBadgeText": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setIcon": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "setPopup": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setTitle": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              }
            },
            "browsingData": {
              "remove": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "removeCache": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeCookies": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeDownloads": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeFormData": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeHistory": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeLocalStorage": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removePasswords": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removePluginData": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "settings": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "commands": {
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "contextMenus": {
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "update": {
                "minArgs": 2,
                "maxArgs": 2
              }
            },
            "cookies": {
              "get": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAll": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAllCookieStores": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "set": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "devtools": {
              "inspectedWindow": {
                "eval": {
                  "minArgs": 1,
                  "maxArgs": 2,
                  "singleCallbackArg": false
                }
              },
              "panels": {
                "create": {
                  "minArgs": 3,
                  "maxArgs": 3,
                  "singleCallbackArg": true
                },
                "elements": {
                  "createSidebarPane": {
                    "minArgs": 1,
                    "maxArgs": 1
                  }
                }
              }
            },
            "downloads": {
              "cancel": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "download": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "erase": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getFileIcon": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "open": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "pause": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeFile": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "resume": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "search": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "show": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              }
            },
            "extension": {
              "isAllowedFileSchemeAccess": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "isAllowedIncognitoAccess": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "history": {
              "addUrl": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "deleteAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "deleteRange": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "deleteUrl": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getVisits": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "search": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "i18n": {
              "detectLanguage": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAcceptLanguages": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "identity": {
              "launchWebAuthFlow": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "idle": {
              "queryState": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "management": {
              "get": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "getSelf": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "setEnabled": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "uninstallSelf": {
                "minArgs": 0,
                "maxArgs": 1
              }
            },
            "notifications": {
              "clear": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "create": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "getPermissionLevel": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "update": {
                "minArgs": 2,
                "maxArgs": 2
              }
            },
            "pageAction": {
              "getPopup": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getTitle": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "hide": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setIcon": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "setPopup": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "setTitle": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              },
              "show": {
                "minArgs": 1,
                "maxArgs": 1,
                "fallbackToNoCallback": true
              }
            },
            "permissions": {
              "contains": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "request": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "runtime": {
              "getBackgroundPage": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "getPlatformInfo": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "openOptionsPage": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "requestUpdateCheck": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "sendMessage": {
                "minArgs": 1,
                "maxArgs": 3
              },
              "sendNativeMessage": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "setUninstallURL": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "sessions": {
              "getDevices": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getRecentlyClosed": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "restore": {
                "minArgs": 0,
                "maxArgs": 1
              }
            },
            "storage": {
              "local": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getBytesInUse": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              },
              "managed": {
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getBytesInUse": {
                  "minArgs": 0,
                  "maxArgs": 1
                }
              },
              "sync": {
                "clear": {
                  "minArgs": 0,
                  "maxArgs": 0
                },
                "get": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "getBytesInUse": {
                  "minArgs": 0,
                  "maxArgs": 1
                },
                "remove": {
                  "minArgs": 1,
                  "maxArgs": 1
                },
                "set": {
                  "minArgs": 1,
                  "maxArgs": 1
                }
              }
            },
            "tabs": {
              "captureVisibleTab": {
                "minArgs": 0,
                "maxArgs": 2
              },
              "create": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "detectLanguage": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "discard": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "duplicate": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "executeScript": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "get": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getCurrent": {
                "minArgs": 0,
                "maxArgs": 0
              },
              "getZoom": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getZoomSettings": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "goBack": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "goForward": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "highlight": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "insertCSS": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "move": {
                "minArgs": 2,
                "maxArgs": 2
              },
              "query": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "reload": {
                "minArgs": 0,
                "maxArgs": 2
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "removeCSS": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "sendMessage": {
                "minArgs": 2,
                "maxArgs": 3
              },
              "setZoom": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "setZoomSettings": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "update": {
                "minArgs": 1,
                "maxArgs": 2
              }
            },
            "topSites": {
              "get": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "webNavigation": {
              "getAllFrames": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "getFrame": {
                "minArgs": 1,
                "maxArgs": 1
              }
            },
            "webRequest": {
              "handlerBehaviorChanged": {
                "minArgs": 0,
                "maxArgs": 0
              }
            },
            "windows": {
              "create": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "get": {
                "minArgs": 1,
                "maxArgs": 2
              },
              "getAll": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getCurrent": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "getLastFocused": {
                "minArgs": 0,
                "maxArgs": 1
              },
              "remove": {
                "minArgs": 1,
                "maxArgs": 1
              },
              "update": {
                "minArgs": 2,
                "maxArgs": 2
              }
            }
          };
          if (Object.keys(apiMetadata).length === 0) {
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          }
          class DefaultWeakMap extends WeakMap {
            constructor(createItem, items = void 0) {
              super(items);
              this.createItem = createItem;
            }
            get(key) {
              if (!this.has(key)) {
                this.set(key, this.createItem(key));
              }
              return super.get(key);
            }
          }
          const isThenable = (value) => {
            return value && typeof value === "object" && typeof value.then === "function";
          };
          const makeCallback = (promise, metadata) => {
            return (...callbackArgs) => {
              if (extensionAPIs.runtime.lastError) {
                promise.reject(new Error(extensionAPIs.runtime.lastError.message));
              } else if (metadata.singleCallbackArg || callbackArgs.length <= 1 && metadata.singleCallbackArg !== false) {
                promise.resolve(callbackArgs[0]);
              } else {
                promise.resolve(callbackArgs);
              }
            };
          };
          const pluralizeArguments = (numArgs) => numArgs == 1 ? "argument" : "arguments";
          const wrapAsyncFunction = (name, metadata) => {
            return function asyncFunctionWrapper(target, ...args) {
              if (args.length < metadata.minArgs) {
                throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
              }
              if (args.length > metadata.maxArgs) {
                throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
              }
              return new Promise((resolve, reject) => {
                if (metadata.fallbackToNoCallback) {
                  try {
                    target[name](...args, makeCallback({
                      resolve,
                      reject
                    }, metadata));
                  } catch (cbError) {
                    console.warn(`${name} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, cbError);
                    target[name](...args);
                    metadata.fallbackToNoCallback = false;
                    metadata.noCallback = true;
                    resolve();
                  }
                } else if (metadata.noCallback) {
                  target[name](...args);
                  resolve();
                } else {
                  target[name](...args, makeCallback({
                    resolve,
                    reject
                  }, metadata));
                }
              });
            };
          };
          const wrapMethod = (target, method, wrapper) => {
            return new Proxy(method, {
              apply(targetMethod, thisObj, args) {
                return wrapper.call(thisObj, target, ...args);
              }
            });
          };
          let hasOwnProperty = Function.call.bind(Object.prototype.hasOwnProperty);
          const wrapObject = (target, wrappers = {}, metadata = {}) => {
            let cache = /* @__PURE__ */ Object.create(null);
            let handlers = {
              has(proxyTarget2, prop) {
                return prop in target || prop in cache;
              },
              get(proxyTarget2, prop, receiver) {
                if (prop in cache) {
                  return cache[prop];
                }
                if (!(prop in target)) {
                  return void 0;
                }
                let value = target[prop];
                if (typeof value === "function") {
                  if (typeof wrappers[prop] === "function") {
                    value = wrapMethod(target, target[prop], wrappers[prop]);
                  } else if (hasOwnProperty(metadata, prop)) {
                    let wrapper = wrapAsyncFunction(prop, metadata[prop]);
                    value = wrapMethod(target, target[prop], wrapper);
                  } else {
                    value = value.bind(target);
                  }
                } else if (typeof value === "object" && value !== null && (hasOwnProperty(wrappers, prop) || hasOwnProperty(metadata, prop))) {
                  value = wrapObject(value, wrappers[prop], metadata[prop]);
                } else if (hasOwnProperty(metadata, "*")) {
                  value = wrapObject(value, wrappers[prop], metadata["*"]);
                } else {
                  Object.defineProperty(cache, prop, {
                    configurable: true,
                    enumerable: true,
                    get() {
                      return target[prop];
                    },
                    set(value2) {
                      target[prop] = value2;
                    }
                  });
                  return value;
                }
                cache[prop] = value;
                return value;
              },
              set(proxyTarget2, prop, value, receiver) {
                if (prop in cache) {
                  cache[prop] = value;
                } else {
                  target[prop] = value;
                }
                return true;
              },
              defineProperty(proxyTarget2, prop, desc) {
                return Reflect.defineProperty(cache, prop, desc);
              },
              deleteProperty(proxyTarget2, prop) {
                return Reflect.deleteProperty(cache, prop);
              }
            };
            let proxyTarget = Object.create(target);
            return new Proxy(proxyTarget, handlers);
          };
          const wrapEvent = (wrapperMap) => ({
            addListener(target, listener, ...args) {
              target.addListener(wrapperMap.get(listener), ...args);
            },
            hasListener(target, listener) {
              return target.hasListener(wrapperMap.get(listener));
            },
            removeListener(target, listener) {
              target.removeListener(wrapperMap.get(listener));
            }
          });
          const onRequestFinishedWrappers = new DefaultWeakMap((listener) => {
            if (typeof listener !== "function") {
              return listener;
            }
            return function onRequestFinished(req) {
              const wrappedReq = wrapObject(
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
            };
          });
          const onMessageWrappers = new DefaultWeakMap((listener) => {
            if (typeof listener !== "function") {
              return listener;
            }
            return function onMessage(message, sender, sendResponse) {
              let didCallSendResponse = false;
              let wrappedSendResponse;
              let sendResponsePromise = new Promise((resolve) => {
                wrappedSendResponse = function(response) {
                  didCallSendResponse = true;
                  resolve(response);
                };
              });
              let result;
              try {
                result = listener(message, sender, wrappedSendResponse);
              } catch (err) {
                result = Promise.reject(err);
              }
              const isResultThenable = result !== true && isThenable(result);
              if (result !== true && !isResultThenable && !didCallSendResponse) {
                return false;
              }
              const sendPromisedResult = (promise) => {
                promise.then((msg) => {
                  sendResponse(msg);
                }, (error) => {
                  let message2;
                  if (error && (error instanceof Error || typeof error.message === "string")) {
                    message2 = error.message;
                  } else {
                    message2 = "An unexpected error occurred";
                  }
                  sendResponse({
                    __mozWebExtensionPolyfillReject__: true,
                    message: message2
                  });
                }).catch((err) => {
                  console.error("Failed to send onMessage rejected reply", err);
                });
              };
              if (isResultThenable) {
                sendPromisedResult(result);
              } else {
                sendPromisedResult(sendResponsePromise);
              }
              return true;
            };
          });
          const wrappedSendMessageCallback = ({
            reject,
            resolve
          }, reply) => {
            if (extensionAPIs.runtime.lastError) {
              if (extensionAPIs.runtime.lastError.message === CHROME_SEND_MESSAGE_CALLBACK_NO_RESPONSE_MESSAGE) {
                resolve();
              } else {
                reject(new Error(extensionAPIs.runtime.lastError.message));
              }
            } else if (reply && reply.__mozWebExtensionPolyfillReject__) {
              reject(new Error(reply.message));
            } else {
              resolve(reply);
            }
          };
          const wrappedSendMessage = (name, metadata, apiNamespaceObj, ...args) => {
            if (args.length < metadata.minArgs) {
              throw new Error(`Expected at least ${metadata.minArgs} ${pluralizeArguments(metadata.minArgs)} for ${name}(), got ${args.length}`);
            }
            if (args.length > metadata.maxArgs) {
              throw new Error(`Expected at most ${metadata.maxArgs} ${pluralizeArguments(metadata.maxArgs)} for ${name}(), got ${args.length}`);
            }
            return new Promise((resolve, reject) => {
              const wrappedCb = wrappedSendMessageCallback.bind(null, {
                resolve,
                reject
              });
              args.push(wrappedCb);
              apiNamespaceObj.sendMessage(...args);
            });
          };
          const staticWrappers = {
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
          };
          const settingMetadata = {
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
          apiMetadata.privacy = {
            network: {
              "*": settingMetadata
            },
            services: {
              "*": settingMetadata
            },
            websites: {
              "*": settingMetadata
            }
          };
          return wrapObject(extensionAPIs, staticWrappers, apiMetadata);
        };
        module2.exports = wrapAPIs(chrome);
      } else {
        module2.exports = globalThis.browser;
      }
    });
  }
});
var __module = __toESM(require_browser_polyfill());
var { default: __default, ...__rest } = __module;
var mod_default = __default !== void 0 ? __default : __rest;

// browser/import_browser_polyfill.ts
globalThis.browser = mod_default;

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

// buildin_config.json
var buildin_config_default = {
  "minVersion": "0.0.20",
  "immediateTranslationTextCount": 4e3,
  "interval": 36e5,
  "cache": true,
  "donateUrl": "https://immersive-translate.owenyoung.com/donate.html",
  "feedbackUrl": "https://github.com/immersive-translate/next-immersive-translate/issues",
  "translationServices": {
    "volcAlpha": {
      "placeholderDelimiters": [
        "{",
        "}"
      ]
    },
    "volc": {
      "placeholderDelimiters": [
        "{",
        "}"
      ]
    },
    "tencent": {
      "placeholderDelimiters": [
        "{",
        "}"
      ]
    },
    "transmart": {
      "placeholderDelimiters": [
        "#",
        "#"
      ]
    },
    "baidu": {
      "placeholderDelimiters": [
        "#",
        "#"
      ]
    },
    "caiyun": {
      "placeholderDelimiters": [
        "{",
        "}"
      ]
    },
    "youdao": {
      "placeholderDelimiters": [
        "\u{1F6A0}",
        "\u{1F6A0}"
      ]
    }
  },
  "shortcuts": {
    "toggleTranslatePage": "Alt+A",
    "toggleTranslateTheWholePage": "Alt+W",
    "toggleTranslateToThePageEndImmediately": "Alt+S"
  },
  "translationParagraphLanguagePattern": {
    "matches": [
      "www.reddit.com",
      "old.reddit.com",
      "twitter.com",
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
      "web.telegram.org",
      "*.slack.com"
    ],
    "excludeMatches": [],
    "selectorMatches": [
      "meta[property='al:ios:url'][content^='medium://']"
    ],
    "selectorExcludeMatches": []
  },
  "sourceLanguageUrlPattern": {},
  "generalRule": {
    "_comment": "",
    "normalizeBody": "",
    "wrapperPrefix": "smart",
    "wrapperSuffix": "smart",
    "isPdf": false,
    "isTransformPreTagNewLine": false,
    "urlChangeDelay": 20,
    "paragraphMinTextCount": 8,
    "paragraphMinWordCount": 2,
    "blockMinTextCount": 32,
    "blockMinWordCount": 5,
    "containerMinTextCount": 18,
    "lineBreakMaxTextCount": 0,
    "globalAttributes": {},
    "globalStyles": {
      ".sr-only": "display:none"
    },
    "selectors": [],
    "preWhitespaceDetectedTags": [
      "DIV",
      "SPAN"
    ],
    "stayOriginalSelectors": [],
    "additionalSelectors": [
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
      ".title",
      ".abstract",
      ".titleLink",
      ".summary",
      ".content",
      ".headline",
      ".page-content"
    ],
    "atomicBlockTags": [],
    "excludeSelectors": [],
    "additionalExcludeSelectors": [
      ".social-share",
      ".breadcrumbs",
      ".post__footer",
      ".btn",
      ".reference-citations",
      ".share-nav",
      ".o-share",
      "[data-toolbar=share]"
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
      "META"
    ],
    "metaTags": [
      "META",
      "SCRIPT",
      "STYLE",
      "NOSCRIPT"
    ],
    "additionalExcludeTags": [],
    "stayOriginalTags": [
      "CODE",
      "TT",
      "IMG",
      "SUP"
    ],
    "additionalStayOriginalTags": [],
    "inlineTags": [
      "A",
      "ABBR",
      "FONT",
      "ACRONYM",
      "B",
      "INS",
      "DEL",
      "BDO",
      "MARK",
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
      "KBD",
      "TT",
      "VAR",
      "IMG",
      "CODE",
      "SCRIPT",
      "STYLE",
      "LINK",
      "TIME",
      "META"
    ],
    "additionalInlineTags": [],
    "extraInlineSelectors": [],
    "additionalInlineSelectors": [],
    "extraBlockSelectors": [],
    "allBlockTags": [
      "HGROUP",
      "CONTENT",
      "ADDRESS",
      "ARTICLE",
      "ASIDE",
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
      "SOURCE"
    ]
  },
  "rules": [
    {
      "matches": [
        "moz-extension://*/pdf/index.html*"
      ],
      "isPdf": true,
      "wrapperPrefix": "",
      "wrapperSuffix": "",
      "urlChangeDelay": 0,
      "selectors": [
        ".textLayer"
      ],
      "excludeSelectors": [
        ".annotationLayer"
      ],
      "globalStyles": {
        "div.page": "width: 98%;",
        ".textLayer": "overflow:visible;opacity: 1;"
      }
    },
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
      ],
      "wrapperSuffix": "<br><br>",
      "stayOriginalSelectors": [
        ".chemf",
        ".mwe-math-element",
        "[role=math]",
        ".nowrap"
      ],
      "extraInlineSelectors": [
        ".chemf",
        ".mwe-math-element",
        "[role=math]",
        ".nowrap"
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
      "matches": [
        "*.quora.com",
        "quora.com"
      ],
      "additionalSelectors": [
        ".puppeteer_test_question_title",
        ".puppeteer_test_answer_content",
        ".q-text"
      ],
      "globalStyles": {
        ".qu-truncateLines--3": "-webkit-line-clamp: unset;"
      }
    },
    {
      "matches": [
        "old.reddit.com/*/.compact",
        "old.reddit.com/.compact",
        "www.reddit.com/*/.compact",
        "www.reddit.com/.compact"
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
      "matches": "www.reddit.com",
      "selectors": [
        "h1",
        ".PostHeader__post-title-line",
        "[data-click-id=body] h3",
        "[data-click-id=background] h3",
        "[data-testid=comment]",
        "[data-adclicklocation=media]",
        ".PostContent",
        ".Comment__body",
        "faceplate-batch .md"
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
        ".markdown-body",
        ".Layout-sidebar p"
      ],
      "excludeSelectors": [
        ".css-truncate",
        "[data-test-selector='commit-tease-commit-message']",
        "div.blob-wrapper-embedded"
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
      "matches": "m.youtube.com",
      "selectors": [
        ".comment-text"
      ],
      "atomicBlockSelectors": [
        ".comment-text"
      ],
      "globalStyles": {
        ".comment-text": "max-height:unset;"
      }
    },
    {
      "matches": "www.youtube.com",
      "selectors": [
        "yt-formatted-string[slot=content].ytd-comment-renderer",
        "yt-formatted-string.ytd-video-renderer",
        "h1 > yt-formatted-string.ytd-watch-metadata",
        "yt-formatted-string#video-title",
        "span#video-title"
      ],
      "wrapperPrefix": "<br>",
      "wrapperSuffix": "<br>",
      "globalStyles": {
        "ytd-expander.ytd-comment-renderer": "--ytd-expander-max-lines: 1000;",
        "h1.ytd-watch-metadata": "-webkit-line-clamp: unset;max-height: unset;",
        "yt-formatted-string#video-title": "-webkit-line-clamp: unset;max-height: unset;",
        "#video-title": "-webkit-line-clamp: unset;max-height: unset;"
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
      "matches": [
        "scholar.google.com"
      ],
      "wrapperPrefix": "\n",
      "selectors": [
        "h3 a[data-clk]",
        "div.gs_rs"
      ],
      "atomicBlockSelectors": [
        ".gs_rs",
        "h3 a[data-clk]"
      ]
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
      "matches": "https://discord.com/channels/*",
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
      "wrapperPrefix": "<br>",
      "wrapperSuffix": "<br><br>"
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
        "table h3",
        "table h3 + div",
        "div[data-content-feature='1'] > div",
        "a [aria-level='3']",
        "a [aria-level='3'] + div",
        ".Uroaid",
        "div[style='-webkit-line-clamp:2']",
        "div[style='-webkit-line-clamp: unset;max-height: unset;]"
      ],
      "detectParagraphLanguage": true,
      "wrapperSuffix": "",
      "globalStyles": {
        "div[data-content-feature='1'] > div": "-webkit-line-clamp: unset;max-height: unset;",
        "a h3 + div": "position: relative;",
        "div[style='-webkit-line-clamp:2']": "-webkit-line-clamp: unset;max-height: unset;"
      },
      "extraBlockSelectors": [
        ".MUFPAc"
      ]
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
      "selectorMatches": [
        "div#mastodon"
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
    },
    {
      "matches": [
        "weibo.com"
      ],
      "selectors": [
        "div[class^='detail_wbtext']"
      ]
    },
    {
      "matches": [
        "medium.com",
        "*.medium.com"
      ],
      "selectorMatches": [
        "meta[property='al:ios:url'][content^='medium://']"
      ],
      "urlChangeDelay": 2e3,
      "selectors": [
        "article section",
        "h2",
        "[aria-hidden='false'] pre",
        "article p"
      ],
      "excludeSelectors": [
        "[aria-label='Post Preview Reading Time']"
      ],
      "globalStyles": {
        "h2": "-webkit-line-clamp: unset;max-height:unset;",
        "article p": "-webkit-line-clamp: unset;max-height:unset;"
      }
    },
    {
      "selectorMatches": [
        "meta[property='og:site_name'][content='Nitter']"
      ],
      "selectors": [
        ".tweet-content",
        ".quote-text"
      ]
    },
    {
      "matches": "*.fandom.com",
      "additionalSelectors": [
        ".mcf-card-article__title"
      ]
    },
    {
      "matches": [
        "www.washingtonpost.com"
      ],
      "additionalSelectors": [
        "[data-qa='article-body']"
      ]
    },
    {
      "matches": "www.economist.com",
      "extraInlineSelectors": "span[data-caps='initial']"
    },
    {
      "matches": "www.healthline.com",
      "excludeSelectors": ".icon-hl-trusted-source-after"
    },
    {
      "matches": "www.amazon.com",
      "selectors": [
        "h1",
        "h2 > a > span",
        "[data-a-expander-name='book_description_expander'] > div",
        "[data-feature-name='editorialReviews']",
        '[data-a-expander-name="review_text_read_more"] > div > span',
        '[data-feature-name="featurebullets"]',
        '[data-feature-name="aplus"'
      ],
      "excludeBlockSelectors": [
        "div.reviewText > span"
      ],
      "globalStyles": {
        ".s-line-clamp-2": "-webkit-line-clamp: unset;max-height: unset;",
        "[data-a-expander-name='review_text_read_more']": " max-height: unset;"
      }
    },
    {
      "matches": "www.bloomberg.com",
      "urlChangeDelay": 2e3
    },
    {
      "matches": "xueshu.baidu.com",
      "globalStyles": {
        ".abstract_wr": "height: unset; overflow: visible; max-height:unset;"
      }
    },
    {
      "matches": "www.sciencedirect.com",
      "urlChangeDelay": 2e3
    },
    {
      "matches": "www.thehighestofthemountains.com",
      "extraBlockSelectors": "div"
    },
    {
      "matches": "telegra.ph",
      "normalizeBody": "div.ql-editor[contenteditable='false']"
    },
    {
      "matches": [
        "*.annas-archive.org",
        "annas-archive.org"
      ],
      "selectors": [
        "div[class='truncate text-xl font-bold']",
        "div[class='truncate text-sm']"
      ],
      "globalStyles": {
        "div[id^='link-index-']": "height: unset; max-height: unset;"
      },
      "normalizeBody": "body"
    }
  ]
};

// utils/platform.ts
var DENO = "DENO";
var CHROME = "CHROME";
var FIREFOX = "FIREFOX";
function isBrowser(toCheck) {
  let currentBrowser = CHROME;
  try {
    const userAgent = navigator?.userAgent || "";
    if (/firefox/i.test(userAgent)) {
      currentBrowser = FIREFOX;
    } else if (/deno/i.test(userAgent)) {
      currentBrowser = DENO;
    }
  } catch (_2) {
  }
  if (!toCheck)
    currentBrowser;
  if (toCheck === CHROME && currentBrowser === CHROME)
    return true;
  if (toCheck === FIREFOX && currentBrowser === FIREFOX)
    return true;
  if (toCheck === DENO && currentBrowser === DENO)
    return true;
  return false;
}
function isChrome() {
  return isBrowser(CHROME);
}
function isDeno() {
  return typeof Deno !== "undefined";
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

// constant.ts
var brandName = "Immersive Translate";
var brandId = "immersive-translate";
var pdfViewerUrl = "pdf/index.html";
var brandIdForJs = "immersiveTranslate";
var targetContainerElementAttributeName = `${brandIdForJs}Container`;
var specifiedTargetContainerElementAttributeName = `${brandIdForJs}SpecifiedContainer`;
var buildinConfigStorageKey = "buildinConfig";
var contextOpenOptionsMenuId = `openOptionsPage`;
var contextTranslateLocalPdfFileMenuId = `translateLocalPdfFile`;
var hostname = "immersive-translate.owenyoung.com";
var homepage = `https://${hostname}/`;
var buildinConfigSyncUrl = `https://${hostname}/buildin_config.json`;
var sourceElementMarkAttributeName = `${brandIdForJs}Mark`;
var elementMarkRootKey = `${brandIdForJs}Root`;
var sourceElementEffectAttributeName = `data-${brandId}-effect`;
var sourceElementTranslatedMarkAttributeName = `${brandIdForJs}TranslatedMark`;
var sourceElementParagraphAttributeName = `${brandIdForJs}ParagraphId`;
var sourceAtomicBlockElementMarkAttributeName = `${brandIdForJs}AtomicBlockMark`;
var sourceElementExcludeAttributeName = `${brandIdForJs}ExcludeMark`;
var sourceElementStayOriginalAttributeName = `${brandIdForJs}StayOriginalMark`;
var sourcePreWhitespaceMarkAttributeName = `${brandIdForJs}PreWhitespaceMark`;
var sourceInlineElementMarkAttributeName = `${brandIdForJs}InlineMark`;
var sourceBlockElementMarkAttributeName = `${brandIdForJs}BlockMark`;
var sourceElementLeft = `${brandIdForJs}Left`;
var sourceElementRight = `${brandIdForJs}Right`;
var sourceElementWidth = `${brandIdForJs}Width`;
var sourceElementHeight = `${brandIdForJs}Height`;
var sourceElementTop = `${brandIdForJs}Top`;
var sourceElementFontSize = `${brandIdForJs}FontSize`;
var sourceElementWithGlobalStyleMarkAttributeName = `${brandIdForJs}GlobalStyleMark`;
var translationTargetElementWrapperClass = `${brandId}-target-wrapper`;
var translationPdfTargetContainerClass = `${brandId}-pdf-target-container`;
var translationTargetInnerElementWrapperClass = `${brandId}-target-inner`;
var translationSourceElementsWrapperClass = `${brandId}-source-wrapper`;
var translationTargetTranslationElementBlockWrapperClass = `${brandId}-target-translation-block-wrapper`;
var translationTargetTranslationPdfElementBlockWrapperClass = `${brandId}-target-translation-pdf-block-wrapper`;
var translationTargetTranslationElementPreWhitespaceWrapperClass = `${brandId}-target-translation-pre-whitespace`;
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
var fallbackLanguage = "zh-CN";

// config.ts
function getEnvUserConfig() {
  if (env.PROD === "1") {
    return {};
  }
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
  const shortcutsFromBrowser = {};
  if (!isMonkey()) {
    const commandResult = await browserAPI.commands.getAll();
    for (const command of commandResult) {
      if (command.name && command.shortcut) {
        shortcutsFromBrowser[command.name] = command.shortcut;
      }
    }
  }
  const defaultConfig = {
    ...finalBuildInConfig,
    "targetLanguage": fallbackLanguage,
    "interfaceLanguage": fallbackLanguage,
    debug: false,
    alpha: false,
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
    "translationBodyAreaPattern",
    "translationParagraphLanguagePattern",
    "translationThemePatterns",
    "translationGeneralConfig",
    "shortcuts"
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
    } else if (configKey === "translationServices") {
      const userConfigValue = mergedUserConfig[configKey] || {};
      const buildInConfigValue = finalBuildInConfig[configKey] || {};
      const buildInConfigKeys = Object.keys(buildInConfigValue);
      const userConfigKeys = Object.keys(userConfigValue);
      const allUniqueKeys = [
        .../* @__PURE__ */ new Set([...buildInConfigKeys, ...userConfigKeys])
      ];
      const finalConfigValue = {};
      for (const key2 of allUniqueKeys) {
        finalConfigValue[key2] = {
          ...buildInConfigValue[key2],
          ...userConfigValue[key2]
        };
      }
      finalConfig[configKey] = finalConfigValue;
    } else if (typeof mergedUserConfig[configKey] !== "string" && typeof mergedUserConfig[configKey] !== "boolean" && typeof mergedUserConfig[configKey] !== "number" && assignKeys.includes(configKey)) {
      if (mergedUserConfig[configKey]) {
        finalConfig[configKey] = Object.assign(
          finalConfig[configKey],
          mergedUserConfig[configKey]
        );
      }
      if (configKey === "shortcuts") {
        finalConfig[configKey] = {
          ...finalConfig[configKey],
          ...shortcutsFromBrowser
        };
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
  finalConfig.donateUrl = finalBuildInConfig.donateUrl;
  finalConfig.minVersion = finalBuildInConfig.minVersion;
  finalConfig.feedbackUrl = finalBuildInConfig.feedbackUrl;
  return finalConfig;
}

// https://deno.land/std@0.171.0/async/deferred.ts
function deferred() {
  let methods;
  let state = "pending";
  const promise = new Promise((resolve, reject) => {
    methods = {
      async resolve(value) {
        await value;
        state = "fulfilled";
        resolve(value);
      },
      reject(reason) {
        state = "rejected";
        reject(reason);
      }
    };
  });
  Object.defineProperty(promise, "state", { get: () => state });
  return Object.assign(promise, methods);
}

// https://deno.land/std@0.171.0/async/delay.ts
function delay(ms, options = {}) {
  const { signal, persistent } = options;
  if (signal?.aborted) {
    return Promise.reject(new DOMException("Delay was aborted.", "AbortError"));
  }
  return new Promise((resolve, reject) => {
    const abort = () => {
      clearTimeout(i4);
      reject(new DOMException("Delay was aborted.", "AbortError"));
    };
    const done = () => {
      signal?.removeEventListener("abort", abort);
      resolve();
    };
    const i4 = setTimeout(done, ms);
    signal?.addEventListener("abort", abort, { once: true });
    if (persistent === false) {
      try {
        Deno.unrefTimer(i4);
      } catch (error) {
        if (!(error instanceof ReferenceError)) {
          throw error;
        }
        console.error("`persistent` option is only available in Deno");
      }
    }
  });
}

// https://deno.land/std@0.171.0/async/mux_async_iterator.ts
var MuxAsyncIterator = class {
  #iteratorCount = 0;
  #yields = [];
  #throws = [];
  #signal = deferred();
  add(iterable) {
    ++this.#iteratorCount;
    this.#callIteratorNext(iterable[Symbol.asyncIterator]());
  }
  async #callIteratorNext(iterator) {
    try {
      const { value, done } = await iterator.next();
      if (done) {
        --this.#iteratorCount;
      } else {
        this.#yields.push({ iterator, value });
      }
    } catch (e3) {
      this.#throws.push(e3);
    }
    this.#signal.resolve();
  }
  async *iterate() {
    while (this.#iteratorCount > 0) {
      await this.#signal;
      for (let i4 = 0; i4 < this.#yields.length; i4++) {
        const { iterator, value } = this.#yields[i4];
        yield value;
        this.#callIteratorNext(iterator);
      }
      if (this.#throws.length) {
        for (const e3 of this.#throws) {
          throw e3;
        }
        this.#throws.length = 0;
      }
      this.#yields.length = 0;
      this.#signal = deferred();
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
function k(e3, t4) {
  for (var _2 in t4)
    e3[_2] = t4[_2];
  return e3;
}
function j(e3) {
  var t4 = e3.parentNode;
  t4 && t4.removeChild(e3);
}
function w(e3, t4, _2, r, l4) {
  var o4 = { type: e3, props: t4, key: _2, ref: r, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: l4 ?? ++$ };
  return l4 == null && d.vnode != null && d.vnode(o4), o4;
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
  for (var _2; t4 < e3.__k.length; t4++)
    if ((_2 = e3.__k[t4]) != null && _2.__e != null)
      return _2.__e;
  return typeof e3.type == "function" ? C(e3) : null;
}
function z(e3) {
  var t4, _2;
  if ((e3 = e3.__) != null && e3.__c != null) {
    for (e3.__e = e3.__c.base = null, t4 = 0; t4 < e3.__k.length; t4++)
      if ((_2 = e3.__k[t4]) != null && _2.__e != null) {
        e3.__e = e3.__c.base = _2.__e;
        break;
      }
    return z(e3);
  }
}
function M(e3) {
  (!e3.__d && (e3.__d = true) && S.push(e3) && !D.__r++ || F !== d.debounceRendering) && ((F = d.debounceRendering) || setTimeout)(D);
}
function D() {
  for (var e3; D.__r = S.length; )
    e3 = S.sort(function(t4, _2) {
      return t4.__v.__b - _2.__v.__b;
    }), S = [], e3.some(function(t4) {
      var _2, r, l4, o4, s6, f2;
      t4.__d && (s6 = (o4 = (_2 = t4).__v).__e, (f2 = _2.__P) && (r = [], (l4 = k({}, o4)).__v = o4.__v + 1, W(f2, o4, l4, _2.__n, f2.ownerSVGElement !== void 0, o4.__h != null ? [s6] : null, r, s6 ?? C(o4), o4.__h), K(r, o4), o4.__e != s6 && z(o4)));
    });
}
function G(e3, t4, _2, r, l4, o4, s6, f2, p6, a2) {
  var n3, h3, c3, i4, u4, b5, v4, y4 = r && r.__k || V, g5 = y4.length;
  for (_2.__k = [], n3 = 0; n3 < t4.length; n3++)
    if ((i4 = _2.__k[n3] = (i4 = t4[n3]) == null || typeof i4 == "boolean" ? null : typeof i4 == "string" || typeof i4 == "number" || typeof i4 == "bigint" ? w(null, i4, null, null, i4) : Array.isArray(i4) ? w(L, { children: i4 }, null, null, null) : i4.__b > 0 ? w(i4.type, i4.props, i4.key, i4.ref ? i4.ref : null, i4.__v) : i4) != null) {
      if (i4.__ = _2, i4.__b = _2.__b + 1, (c3 = y4[n3]) === null || c3 && i4.key == c3.key && i4.type === c3.type)
        y4[n3] = void 0;
      else
        for (h3 = 0; h3 < g5; h3++) {
          if ((c3 = y4[h3]) && i4.key == c3.key && i4.type === c3.type) {
            y4[h3] = void 0;
            break;
          }
          c3 = null;
        }
      W(e3, i4, c3 = c3 || T, l4, o4, s6, f2, p6, a2), u4 = i4.__e, (h3 = i4.ref) && c3.ref != h3 && (v4 || (v4 = []), c3.ref && v4.push(c3.ref, null, i4), v4.push(h3, i4.__c || u4, i4)), u4 != null ? (b5 == null && (b5 = u4), typeof i4.type == "function" && i4.__k === c3.__k ? i4.__d = p6 = q(i4, p6, e3) : p6 = J(e3, i4, c3, y4, u4, p6), typeof _2.type == "function" && (_2.__d = p6)) : p6 && c3.__e == p6 && p6.parentNode != e3 && (p6 = C(c3));
    }
  for (_2.__e = b5, n3 = g5; n3--; )
    y4[n3] != null && (typeof _2.type == "function" && y4[n3].__e != null && y4[n3].__e == _2.__d && (_2.__d = C(r, n3 + 1)), X(y4[n3], y4[n3]));
  if (v4)
    for (n3 = 0; n3 < v4.length; n3++)
      Q(v4[n3], v4[++n3], v4[++n3]);
}
function q(e3, t4, _2) {
  for (var r, l4 = e3.__k, o4 = 0; l4 && o4 < l4.length; o4++)
    (r = l4[o4]) && (r.__ = e3, t4 = typeof r.type == "function" ? q(r, t4, _2) : J(_2, r, r, l4, r.__e, t4));
  return t4;
}
function J(e3, t4, _2, r, l4, o4) {
  var s6, f2, p6;
  if (t4.__d !== void 0)
    s6 = t4.__d, t4.__d = void 0;
  else if (_2 == null || l4 != o4 || l4.parentNode == null)
    e:
      if (o4 == null || o4.parentNode !== e3)
        e3.appendChild(l4), s6 = null;
      else {
        for (f2 = o4, p6 = 0; (f2 = f2.nextSibling) && p6 < r.length; p6 += 2)
          if (f2 == l4)
            break e;
        e3.insertBefore(l4, o4), s6 = o4;
      }
  return s6 !== void 0 ? s6 : l4.nextSibling;
}
function _e(e3, t4, _2, r, l4) {
  var o4;
  for (o4 in _2)
    o4 === "children" || o4 === "key" || o4 in t4 || N(e3, o4, null, _2[o4], r);
  for (o4 in t4)
    l4 && typeof t4[o4] != "function" || o4 === "children" || o4 === "key" || o4 === "value" || o4 === "checked" || _2[o4] === t4[o4] || N(e3, o4, t4[o4], _2[o4], r);
}
function I(e3, t4, _2) {
  t4[0] === "-" ? e3.setProperty(t4, _2) : e3[t4] = _2 == null ? "" : typeof _2 != "number" || Z.test(t4) ? _2 : _2 + "px";
}
function N(e3, t4, _2, r, l4) {
  var o4;
  e:
    if (t4 === "style")
      if (typeof _2 == "string")
        e3.style.cssText = _2;
      else {
        if (typeof r == "string" && (e3.style.cssText = r = ""), r)
          for (t4 in r)
            _2 && t4 in _2 || I(e3.style, t4, "");
        if (_2)
          for (t4 in _2)
            r && _2[t4] === r[t4] || I(e3.style, t4, _2[t4]);
      }
    else if (t4[0] === "o" && t4[1] === "n")
      o4 = t4 !== (t4 = t4.replace(/Capture$/, "")), t4 = t4.toLowerCase() in e3 ? t4.toLowerCase().slice(2) : t4.slice(2), e3.l || (e3.l = {}), e3.l[t4 + o4] = _2, _2 ? r || e3.addEventListener(t4, o4 ? R : O, o4) : e3.removeEventListener(t4, o4 ? R : O, o4);
    else if (t4 !== "dangerouslySetInnerHTML") {
      if (l4)
        t4 = t4.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if (t4 !== "href" && t4 !== "list" && t4 !== "form" && t4 !== "tabIndex" && t4 !== "download" && t4 in e3)
        try {
          e3[t4] = _2 ?? "";
          break e;
        } catch {
        }
      typeof _2 == "function" || (_2 != null && (_2 !== false || t4[0] === "a" && t4[1] === "r") ? e3.setAttribute(t4, _2) : e3.removeAttribute(t4));
    }
}
function O(e3) {
  this.l[e3.type + false](d.event ? d.event(e3) : e3);
}
function R(e3) {
  this.l[e3.type + true](d.event ? d.event(e3) : e3);
}
function W(e3, t4, _2, r, l4, o4, s6, f2, p6) {
  var a2, n3, h3, c3, i4, u4, b5, v4, y4, g5, x5, H5, E3, m4 = t4.type;
  if (t4.constructor !== void 0)
    return null;
  _2.__h != null && (p6 = _2.__h, f2 = t4.__e = _2.__e, t4.__h = null, o4 = [f2]), (a2 = d.__b) && a2(t4);
  try {
    e:
      if (typeof m4 == "function") {
        if (v4 = t4.props, y4 = (a2 = m4.contextType) && r[a2.__c], g5 = a2 ? y4 ? y4.props.value : a2.__ : r, _2.__c ? b5 = (n3 = t4.__c = _2.__c).__ = n3.__E : ("prototype" in m4 && m4.prototype.render ? t4.__c = n3 = new m4(v4, g5) : (t4.__c = n3 = new U(v4, g5), n3.constructor = m4, n3.render = oe), y4 && y4.sub(n3), n3.props = v4, n3.state || (n3.state = {}), n3.context = g5, n3.__n = r, h3 = n3.__d = true, n3.__h = []), n3.__s == null && (n3.__s = n3.state), m4.getDerivedStateFromProps != null && (n3.__s == n3.state && (n3.__s = k({}, n3.__s)), k(n3.__s, m4.getDerivedStateFromProps(v4, n3.__s))), c3 = n3.props, i4 = n3.state, h3)
          m4.getDerivedStateFromProps == null && n3.componentWillMount != null && n3.componentWillMount(), n3.componentDidMount != null && n3.__h.push(n3.componentDidMount);
        else {
          if (m4.getDerivedStateFromProps == null && v4 !== c3 && n3.componentWillReceiveProps != null && n3.componentWillReceiveProps(v4, g5), !n3.__e && n3.shouldComponentUpdate != null && n3.shouldComponentUpdate(v4, n3.__s, g5) === false || t4.__v === _2.__v) {
            n3.props = v4, n3.state = n3.__s, t4.__v !== _2.__v && (n3.__d = false), n3.__v = t4, t4.__e = _2.__e, t4.__k = _2.__k, t4.__k.forEach(function(A4) {
              A4 && (A4.__ = t4);
            }), n3.__h.length && s6.push(n3);
            break e;
          }
          n3.componentWillUpdate != null && n3.componentWillUpdate(v4, n3.__s, g5), n3.componentDidUpdate != null && n3.__h.push(function() {
            n3.componentDidUpdate(c3, i4, u4);
          });
        }
        if (n3.context = g5, n3.props = v4, n3.__v = t4, n3.__P = e3, x5 = d.__r, H5 = 0, "prototype" in m4 && m4.prototype.render)
          n3.state = n3.__s, n3.__d = false, x5 && x5(t4), a2 = n3.render(n3.props, n3.state, n3.context);
        else
          do
            n3.__d = false, x5 && x5(t4), a2 = n3.render(n3.props, n3.state, n3.context), n3.state = n3.__s;
          while (n3.__d && ++H5 < 25);
        n3.state = n3.__s, n3.getChildContext != null && (r = k(k({}, r), n3.getChildContext())), h3 || n3.getSnapshotBeforeUpdate == null || (u4 = n3.getSnapshotBeforeUpdate(c3, i4)), E3 = a2 != null && a2.type === L && a2.key == null ? a2.props.children : a2, G(e3, Array.isArray(E3) ? E3 : [E3], t4, _2, r, l4, o4, s6, f2, p6), n3.base = t4.__e, t4.__h = null, n3.__h.length && s6.push(n3), b5 && (n3.__E = n3.__ = null), n3.__e = false;
      } else
        o4 == null && t4.__v === _2.__v ? (t4.__k = _2.__k, t4.__e = _2.__e) : t4.__e = ne(_2.__e, t4, _2, r, l4, o4, s6, p6);
    (a2 = d.diffed) && a2(t4);
  } catch (A4) {
    t4.__v = null, (p6 || o4 != null) && (t4.__e = f2, t4.__h = !!p6, o4[o4.indexOf(f2)] = null), d.__e(A4, t4, _2);
  }
}
function K(e3, t4) {
  d.__c && d.__c(t4, e3), e3.some(function(_2) {
    try {
      e3 = _2.__h, _2.__h = [], e3.some(function(r) {
        r.call(_2);
      });
    } catch (r) {
      d.__e(r, _2.__v);
    }
  });
}
function ne(e3, t4, _2, r, l4, o4, s6, f2) {
  var p6, a2, n3, h3 = _2.props, c3 = t4.props, i4 = t4.type, u4 = 0;
  if (i4 === "svg" && (l4 = true), o4 != null) {
    for (; u4 < o4.length; u4++)
      if ((p6 = o4[u4]) && "setAttribute" in p6 == !!i4 && (i4 ? p6.localName === i4 : p6.nodeType === 3)) {
        e3 = p6, o4[u4] = null;
        break;
      }
  }
  if (e3 == null) {
    if (i4 === null)
      return document.createTextNode(c3);
    e3 = l4 ? document.createElementNS("http://www.w3.org/2000/svg", i4) : document.createElement(i4, c3.is && c3), o4 = null, f2 = false;
  }
  if (i4 === null)
    h3 === c3 || f2 && e3.data === c3 || (e3.data = c3);
  else {
    if (o4 = o4 && P.call(e3.childNodes), a2 = (h3 = _2.props || T).dangerouslySetInnerHTML, n3 = c3.dangerouslySetInnerHTML, !f2) {
      if (o4 != null)
        for (h3 = {}, u4 = 0; u4 < e3.attributes.length; u4++)
          h3[e3.attributes[u4].name] = e3.attributes[u4].value;
      (n3 || a2) && (n3 && (a2 && n3.__html == a2.__html || n3.__html === e3.innerHTML) || (e3.innerHTML = n3 && n3.__html || ""));
    }
    if (_e(e3, c3, h3, l4, f2), n3)
      t4.__k = [];
    else if (u4 = t4.props.children, G(e3, Array.isArray(u4) ? u4 : [u4], t4, _2, r, l4 && i4 !== "foreignObject", o4, s6, o4 ? o4[0] : _2.__k && C(_2, 0), f2), o4 != null)
      for (u4 = o4.length; u4--; )
        o4[u4] != null && j(o4[u4]);
    f2 || ("value" in c3 && (u4 = c3.value) !== void 0 && (u4 !== e3.value || i4 === "progress" && !u4 || i4 === "option" && u4 !== h3.value) && N(e3, "value", u4, h3.value, false), "checked" in c3 && (u4 = c3.checked) !== void 0 && u4 !== e3.checked && N(e3, "checked", u4, h3.checked, false));
  }
  return e3;
}
function Q(e3, t4, _2) {
  try {
    typeof e3 == "function" ? e3(t4) : e3.current = t4;
  } catch (r) {
    d.__e(r, _2);
  }
}
function X(e3, t4, _2) {
  var r, l4;
  if (d.unmount && d.unmount(e3), (r = e3.ref) && (r.current && r.current !== e3.__e || Q(r, null, t4)), (r = e3.__c) != null) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (o4) {
        d.__e(o4, t4);
      }
    r.base = r.__P = null, e3.__c = void 0;
  }
  if (r = e3.__k)
    for (l4 = 0; l4 < r.length; l4++)
      r[l4] && X(r[l4], t4, typeof e3.type != "function");
  _2 || e3.__e == null || j(e3.__e), e3.__ = e3.__e = e3.__d = void 0;
}
function oe(e3, t4, _2) {
  return this.constructor(e3, _2);
}
P = V.slice, d = { __e: function(e3, t4, _2, r) {
  for (var l4, o4, s6; t4 = t4.__; )
    if ((l4 = t4.__c) && !l4.__)
      try {
        if ((o4 = l4.constructor) && o4.getDerivedStateFromError != null && (l4.setState(o4.getDerivedStateFromError(e3)), s6 = l4.__d), l4.componentDidCatch != null && (l4.componentDidCatch(e3, r || {}), s6 = l4.__d), s6)
          return l4.__E = l4;
      } catch (f2) {
        e3 = f2;
      }
  throw e3;
} }, $ = 0, Y = function(e3) {
  return e3 != null && e3.constructor === void 0;
}, U.prototype.setState = function(e3, t4) {
  var _2;
  _2 = this.__s != null && this.__s !== this.state ? this.__s : this.__s = k({}, this.state), typeof e3 == "function" && (e3 = e3(k({}, _2), this.props)), e3 && k(_2, e3), e3 != null && this.__v && (t4 && this.__h.push(t4), M(this));
}, U.prototype.forceUpdate = function(e3) {
  this.__v && (this.__e = true, e3 && this.__h.push(e3), M(this));
}, U.prototype.render = L, S = [], D.__r = 0, B = 0;

// https://esm.sh/stable/preact@10.11.0/deno/hooks.js
var i;
var n;
var d2;
var N2;
var q2 = [];
var l = [];
var V2 = d.__b;
var g = d.__r;
var b = d.diffed;
var C2 = d.__c;
var A = d.unmount;
function R2() {
  for (var _2; _2 = q2.shift(); )
    if (_2.__P && _2.__H)
      try {
        _2.__H.__h.forEach(m), _2.__H.__h.forEach(p), _2.__H.__h = [];
      } catch (t4) {
        _2.__H.__h = [], d.__e(t4, _2.__v);
      }
}
d.__b = function(_2) {
  typeof _2.type != "function" || _2.o || _2.type === L ? _2.o || (_2.o = _2.__ && _2.__.o ? _2.__.o : "") : _2.o = (_2.__ && _2.__.o ? _2.__.o : "") + (_2.__ && _2.__.__k ? _2.__.__k.indexOf(_2) : 0), n = null, V2 && V2(_2);
}, d.__r = function(_2) {
  g && g(_2), i = 0;
  var t4 = (n = _2.__c).__H;
  t4 && (d2 === n ? (t4.__h = [], n.__h = [], t4.__.forEach(function(u4) {
    u4.__N && (u4.__ = u4.__N), u4.__V = l, u4.__N = u4.i = void 0;
  })) : (t4.__h.forEach(m), t4.__h.forEach(p), t4.__h = [])), d2 = n;
}, d.diffed = function(_2) {
  b && b(_2);
  var t4 = _2.__c;
  t4 && t4.__H && (t4.__H.__h.length && (q2.push(t4) !== 1 && N2 === d.requestAnimationFrame || ((N2 = d.requestAnimationFrame) || S2)(R2)), t4.__H.__.forEach(function(u4) {
    u4.i && (u4.__H = u4.i), u4.__V !== l && (u4.__ = u4.__V), u4.i = void 0, u4.__V = l;
  })), d2 = n = null;
}, d.__c = function(_2, t4) {
  t4.some(function(u4) {
    try {
      u4.__h.forEach(m), u4.__h = u4.__h.filter(function(o4) {
        return !o4.__ || p(o4);
      });
    } catch (o4) {
      t4.some(function(r) {
        r.__h && (r.__h = []);
      }), t4 = [], d.__e(o4, u4.__v);
    }
  }), C2 && C2(_2, t4);
}, d.unmount = function(_2) {
  A && A(_2);
  var t4, u4 = _2.__c;
  u4 && u4.__H && (u4.__H.__.forEach(function(o4) {
    try {
      m(o4);
    } catch (r) {
      t4 = r;
    }
  }), u4.__H = void 0, t4 && d.__e(t4, u4.__v));
};
var F2 = typeof requestAnimationFrame == "function";
function S2(_2) {
  var t4, u4 = function() {
    clearTimeout(o4), F2 && cancelAnimationFrame(t4), setTimeout(_2);
  }, o4 = setTimeout(u4, 100);
  F2 && (t4 = requestAnimationFrame(u4));
}
function m(_2) {
  var t4 = n, u4 = _2.__c;
  typeof u4 == "function" && (_2.__c = void 0, u4()), n = t4;
}
function p(_2) {
  var t4 = n;
  _2.__c = _2.__(), n = t4;
}

// https://esm.sh/v103/memoize-one@6.0.0/deno/memoize-one.js
var s = Number.isNaN || function(r) {
  return typeof r == "number" && r !== r;
};

// https://esm.sh/v103/@twind/core@1.0.1/deno/core.js
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
function D2() {
}
var w2 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function jt(t4) {
  var e3;
  return ((e3 = t4.match(/[-=:;]/g)) == null ? void 0 : e3.length) || 0;
}
function X2(t4) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(t4) ? +RegExp.$1 / (RegExp.$2 ? 15 : 1) / 10 : 0, 15) << 22 | Math.min(jt(t4), 15) << 18;
}
var qt = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function at({ n: t4, i: e3, v: r = [] }, n3, i4, l4) {
  for (let a2 of (t4 && (t4 = lt({ n: t4, i: e3, v: r })), l4 = [...x(l4)], r)) {
    let s6 = n3.theme("screens", a2);
    for (let u4 of x(s6 && kt(s6) || n3.v(a2))) {
      var o4;
      l4.push(u4), i4 |= s6 ? 67108864 | X2(u4) : a2 == "dark" ? 1073741824 : u4[0] == "@" ? X2(u4) : (o4 = u4, 1 << ~(/:([a-z-]+)/.test(o4) && ~qt.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: t4, p: i4, r: l4, i: e3 };
}
var ut = /* @__PURE__ */ new Map();
function tt(t4) {
  if (t4.d) {
    let e3 = [], r = Y2(t4.r.reduce((n3, i4) => i4[0] == "@" ? (e3.push(i4), n3) : i4 ? Y2(n3, (l4) => Y2(i4, (o4) => {
      let a2 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o4);
      if (a2) {
        let s6 = l4.indexOf(a2[1]);
        return ~s6 ? l4.slice(0, s6) + a2[0] + l4.slice(s6 + a2[1].length) : Z2(l4, o4);
      }
      return Z2(o4, l4);
    })) : n3, "&"), (n3) => Z2(n3, t4.n ? "." + W2(t4.n) : ""));
    return r && e3.push(r.replace(/:merge\((.+?)\)/g, "$1")), e3.reduceRight((n3, i4) => i4 + "{" + n3 + "}", t4.d);
  }
}
function Y2(t4, e3) {
  return t4.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, n3, i4) => e3(n3) + i4);
}
function Z2(t4, e3) {
  return t4.replace(/&/g, e3);
}
var Dt = new Intl.Collator("en", { numeric: true });
function St(t4, e3) {
  for (var r = 0, n3 = t4.length; r < n3; ) {
    let i4 = n3 + r >> 1;
    0 >= Mt(t4[i4], e3) ? r = i4 + 1 : n3 = i4;
  }
  return n3;
}
function Mt(t4, e3) {
  let r = t4.p & w2.o;
  return r == (e3.p & w2.o) && (r == w2.b || r == w2.o) ? 0 : t4.p - e3.p || t4.o - e3.o || Dt.compare(t4.n, e3.n);
}
function H(t4, e3) {
  return Math.round(parseInt(t4, 16) * e3);
}
function T2(t4, e3 = {}) {
  if (typeof t4 == "function")
    return t4(e3);
  let { opacityValue: r = "1", opacityVariable: n3 } = e3, i4 = n3 ? `var(${n3})` : r;
  if (t4.includes("<alpha-value>"))
    return t4.replace("<alpha-value>", i4);
  if (t4[0] == "#" && (t4.length == 4 || t4.length == 7)) {
    let l4 = (t4.length - 1) / 3, o4 = [17, 1, 0.062272][l4 - 1];
    return `rgba(${[H(t4.substr(1, l4), o4), H(t4.substr(1 + l4, l4), o4), H(t4.substr(1 + 2 * l4, l4), o4), i4]})`;
  }
  return i4 == "1" ? t4 : i4 == "0" ? "#0000" : t4.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${i4})`);
}
function ct(t4, e3, r, n3, i4 = []) {
  return function l4(o4, { n: a2, p: s6, r: u4 = [], i: f2 }, c3) {
    let p6 = [], d4 = "", v4 = 0, g5 = 0;
    for (let h3 in o4 || {}) {
      var y4, A4;
      let b5 = o4[h3];
      if (h3[0] == "@") {
        if (!b5)
          continue;
        if (h3[1] == "a") {
          p6.push(...ht(a2, s6, N3("" + b5), c3, s6, u4, f2, true));
          continue;
        }
        if (h3[1] == "l") {
          for (let m4 of x(b5))
            p6.push(...l4(m4, { n: a2, p: (y4 = w2[h3[7]], s6 & ~w2.o | y4), r: u4, i: f2 }, c3));
          continue;
        }
        if (h3[1] == "i") {
          p6.push(...x(b5).map((m4) => ({ p: -1, o: 0, r: [], d: h3 + " " + m4 })));
          continue;
        }
        if (h3[1] == "k") {
          p6.push({ p: w2.d, o: 0, r: [h3], d: l4(b5, { p: w2.d }, c3).map(tt).join("") });
          continue;
        }
        if (h3[1] == "f") {
          p6.push(...x(b5).map((m4) => ({ p: w2.d, o: 0, r: [h3], d: l4(m4, { p: w2.d }, c3).map(tt).join("") })));
          continue;
        }
      }
      if (typeof b5 != "object" || Array.isArray(b5))
        h3 == "label" && b5 ? a2 = b5 + V3(JSON.stringify([s6, f2, o4])) : (b5 || b5 === 0) && (h3 = h3.replace(/[A-Z]/g, (m4) => "-" + m4.toLowerCase()), g5 += 1, v4 = Math.max(v4, (A4 = h3)[0] == "-" ? 0 : jt(A4) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7}$)|([fl].{5}l|g.{8}$|pl))/.test(A4) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), d4 += (d4 ? ";" : "") + x(b5).map((m4) => c3.s(h3, ft("" + m4, c3.theme) + (f2 ? " !important" : ""))).join(";"));
      else if (h3[0] == "@" || h3.includes("&")) {
        let m4 = s6;
        h3[0] == "@" && (h3 = h3.replace(/\bscreen\(([^)]+)\)/g, (C6, $4) => {
          let j5 = c3.theme("screens", $4);
          return j5 ? (m4 |= 67108864, kt(j5, "")) : C6;
        }), m4 |= X2(h3)), p6.push(...l4(b5, { n: a2, p: m4, r: [...u4, h3], i: f2 }, c3));
      } else
        p6.push(...l4(b5, { p: s6, r: [...u4, h3] }, c3));
    }
    return p6.unshift({ n: a2, p: s6, o: Math.max(0, 15 - g5) + 1.5 * Math.min(v4 || 15, 15), r: u4, d: d4 }), p6.sort(Mt);
  }(t4, at(e3, r, n3, i4), r);
}
function ft(t4, e3) {
  return t4.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, n3, i4, l4, o4) => {
    let a2 = e3(i4, o4);
    return typeof a2 == "function" && /color|fill|stroke/i.test(i4) ? T2(a2) : "" + a2;
  });
}
function pt(t4, e3) {
  let r, n3 = [];
  for (let i4 of t4)
    i4.d && i4.n ? r?.p == i4.p && "" + r.r == "" + i4.r ? (r.c = [r.c, i4.c].filter(Boolean).join(" "), r.d = r.d + ";" + i4.d) : n3.push(r = { ...i4, n: i4.n && e3 }) : n3.push({ ...i4, n: i4.n && e3 });
  return n3;
}
function B2(t4, e3, r = w2.u, n3, i4) {
  let l4 = [];
  for (let o4 of t4)
    for (let a2 of function(s6, u4, f2, c3, p6) {
      var d4;
      s6 = { ...s6, i: s6.i || p6 };
      let v4 = function(g5, y4) {
        let A4 = ut.get(g5.n);
        return A4 ? A4(g5, y4) : y4.r(g5.n, g5.v[0] == "dark");
      }(s6, u4);
      return v4 ? typeof v4 == "string" ? ({ r: c3, p: f2 } = at(s6, u4, f2, c3), pt(B2(N3(v4), u4, f2, c3, s6.i), s6.n)) : Array.isArray(v4) ? v4.map((g5) => {
        var y4, A4;
        return { o: 0, ...g5, r: [...x(c3), ...x(g5.r)], p: (y4 = f2, A4 = (d4 = g5.p) != null ? d4 : f2, y4 & ~w2.o | A4) };
      }) : ct(v4, s6, u4, f2, c3) : [{ c: lt(s6), p: 0, o: 0, r: [] }];
    }(o4, e3, r, n3, i4))
      l4.splice(St(l4, a2), 0, a2);
  return l4;
}
function ht(t4, e3, r, n3, i4, l4, o4, a2) {
  return pt((a2 ? r.flatMap((s6) => B2([s6], n3, i4, l4, o4)) : B2(r, n3, i4, l4, o4)).map((s6) => s6.p & w2.o && (s6.n || e3 == w2.b) ? { ...s6, p: s6.p & ~w2.o | e3, o: 0 } : s6), t4);
}
function Ot(t4, e3, r, n3) {
  var i4;
  return i4 = (l4, o4) => {
    let { n: a2, p: s6, r: u4, i: f2 } = at(l4, o4, e3);
    return r && ht(a2, e3, r, o4, s6, u4, f2, n3);
  }, ut.set(t4, i4), t4;
}
function K2(t4, e3) {
  if (t4[t4.length - 1] != "(") {
    let r = [], n3 = false, i4 = false, l4 = "";
    for (let o4 of t4)
      if (!(o4 == "(" || /[~@]$/.test(o4))) {
        if (o4[0] == "!" && (o4 = o4.slice(1), n3 = !n3), o4.endsWith(":")) {
          r[o4 == "dark:" ? "unshift" : "push"](o4.slice(0, -1));
          continue;
        }
        o4[0] == "-" && (o4 = o4.slice(1), i4 = !i4), o4.endsWith("-") && (o4 = o4.slice(0, -1)), o4 && o4 != "&" && (l4 += (l4 && "-") + o4);
      }
    l4 && (i4 && (l4 = "-" + l4), e3[0].push({ n: l4, v: r.filter(Jt), i: n3 }));
  }
}
function Jt(t4, e3, r) {
  return r.indexOf(t4) == e3;
}
var yt = /* @__PURE__ */ new Map();
function N3(t4) {
  let e3 = yt.get(t4);
  if (!e3) {
    let r = [], n3 = [[]], i4 = 0, l4 = 0, o4 = null, a2 = 0, s6 = (u4, f2 = 0) => {
      i4 != a2 && (r.push(t4.slice(i4, a2 + f2)), u4 && K2(r, n3)), i4 = a2 + 1;
    };
    for (; a2 < t4.length; a2++) {
      let u4 = t4[a2];
      if (l4)
        t4[a2 - 1] != "\\" && (l4 += +(u4 == "[") || -(u4 == "]"));
      else if (u4 == "[")
        l4 += 1;
      else if (o4)
        t4[a2 - 1] != "\\" && o4.test(t4.slice(a2)) && (o4 = null, i4 = a2 + RegExp.lastMatch.length);
      else if (u4 == "/" && t4[a2 - 1] != "\\" && (t4[a2 + 1] == "*" || t4[a2 + 1] == "/"))
        o4 = t4[a2 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (u4 == "(")
        s6(), r.push(u4);
      else if (u4 == ":")
        t4[a2 + 1] != ":" && s6(false, 1);
      else if (/[\s,)]/.test(u4)) {
        s6(true);
        let f2 = r.lastIndexOf("(");
        if (u4 == ")") {
          let c3 = r[f2 - 1];
          if (/[~@]$/.test(c3)) {
            let p6 = n3.shift();
            r.length = f2, K2([...r, "#"], n3);
            let { v: d4 } = n3[0].pop();
            for (let v4 of p6)
              v4.v.splice(+(v4.v[0] == "dark") - +(d4[0] == "dark"), d4.length);
            K2([...r, Ot(c3.length > 1 ? c3.slice(0, -1) + V3(JSON.stringify([c3, p6])) : c3 + "(" + st(p6) + ")", w2.a, p6, /@$/.test(c3))], n3);
          }
          f2 = r.lastIndexOf("(", f2 - 1);
        }
        r.length = f2 + 1;
      } else
        /[~@]/.test(u4) && t4[a2 + 1] == "(" && n3.unshift([]);
    }
    s6(true), yt.set(t4, e3 = n3[0]);
  }
  return e3;
}
function Ct(t4, e3, r) {
  return e3.reduce((n3, i4, l4) => n3 + r(i4) + t4[l4 + 1], t4[0]);
}
function G2(t4, e3) {
  return Array.isArray(t4) && Array.isArray(t4.raw) ? Ct(t4, e3, (r) => Q2(r).trim()) : e3.filter(Boolean).reduce((r, n3) => r + Q2(n3), t4 ? Q2(t4) : "");
}
function Q2(t4) {
  let e3, r = "";
  if (t4 && typeof t4 == "object")
    if (Array.isArray(t4))
      (e3 = G2(t4[0], t4.slice(1))) && (r += " " + e3);
    else
      for (let n3 in t4)
        t4[n3] && (r += " " + n3);
  else
    t4 != null && typeof t4 != "boolean" && (r += " " + t4);
  return r;
}
var ae = Et("@");
var ue = Et("~");
function Et(t4) {
  return new Proxy(function(r, ...n3) {
    return e3("", r, n3);
  }, { get: (r, n3) => n3 in r ? r[n3] : function(i4, ...l4) {
    return e3(n3, i4, l4);
  } });
  function e3(r, n3, i4) {
    return st(N3(r + t4 + "(" + G2(n3, i4) + ")"));
  }
}
function U2(t4, e3) {
  return Array.isArray(t4) ? mt(Ct(t4, e3, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof t4 == "string" ? mt(t4) : [t4];
}
var Bt = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function mt(t4) {
  let e3;
  t4 = t4.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], n3 = [r[0]], i4 = [];
  for (; e3 = Bt.exec(t4); )
    e3[4] && (r.shift(), i4.shift()), e3[3] ? (i4.unshift(e3[3]), r.unshift({}), n3.push(i4.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))) : e3[4] || (r[0][e3[1]] && (r.unshift({}), n3.push(i4.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))), r[0][e3[1]] = e3[2]);
  return n3;
}
function dt(t4, ...e3) {
  var r, n3;
  let i4 = U2(t4, e3), l4 = (((r = i4.find((o4) => o4.label)) == null ? void 0 : r.label) || "css") + V3(JSON.stringify(i4));
  return n3 = (o4, a2) => pt(i4.flatMap((s6) => ct(s6, o4, a2, w2.o)), l4), ut.set(l4, n3), l4;
}
var ce = new Proxy(function(t4, e3) {
  return bt("animation", t4, e3);
}, { get: (t4, e3) => e3 in t4 ? t4[e3] : function(r, n3) {
  return bt(e3, r, n3);
} });
function bt(t4, e3, r) {
  return { toString: () => dt({ label: t4, "@layer components": { ...typeof e3 == "object" ? e3 : { animation: e3 }, animationName: "" + r } }) };
}
var Ut = Symbol();
var z2 = new Proxy(D2, { apply: (t4, e3, r) => F3(r[0]), get(t4, e3) {
  let r = F3[e3];
  return typeof r == "function" ? function() {
    return r.apply(F3, arguments);
  } : r;
} });
var xe = function t(e3) {
  return new Proxy(function(r, ...n3) {
    return xt(e3, "", r, n3);
  }, { get: (r, n3) => n3 === "bind" ? t : n3 in r ? r[n3] : function(i4, ...l4) {
    return xt(e3, n3, i4, l4);
  } });
}();
function xt(t4, e3, r, n3) {
  return { toString() {
    let i4 = U2(r, n3), l4 = W2(e3 + V3(JSON.stringify([e3, i4])));
    return (typeof t4 == "function" ? t4 : z2)(dt({ [`@keyframes ${l4}`]: U2(r, n3) })), l4;
  } };
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/defaultTheme.js
var s3 = "inherit";
var d3 = "currentColor";
var p2 = "transparent";
var x2 = "#000";
var b2 = "#fff";
var u = { 50: "#f8fafc", 100: "#f1f5f9", 200: "#e2e8f0", 300: "#cbd5e1", 400: "#94a3b8", 500: "#64748b", 600: "#475569", 700: "#334155", 800: "#1e293b", 900: "#0f172a" };
var g2 = { 50: "#f9fafb", 100: "#f3f4f6", 200: "#e5e7eb", 300: "#d1d5db", 400: "#9ca3af", 500: "#6b7280", 600: "#4b5563", 700: "#374151", 800: "#1f2937", 900: "#111827" };
var h = { 50: "#fafafa", 100: "#f4f4f5", 200: "#e4e4e7", 300: "#d4d4d8", 400: "#a1a1aa", 500: "#71717a", 600: "#52525b", 700: "#3f3f46", 800: "#27272a", 900: "#18181b" };
var y2 = { 50: "#fafafa", 100: "#f5f5f5", 200: "#e5e5e5", 300: "#d4d4d4", 400: "#a3a3a3", 500: "#737373", 600: "#525252", 700: "#404040", 800: "#262626", 900: "#171717" };
var k2 = { 50: "#fafaf9", 100: "#f5f5f4", 200: "#e7e5e4", 300: "#d6d3d1", 400: "#a8a29e", 500: "#78716c", 600: "#57534e", 700: "#44403c", 800: "#292524", 900: "#1c1917" };
var C3 = { 50: "#fef2f2", 100: "#fee2e2", 200: "#fecaca", 300: "#fca5a5", 400: "#f87171", 500: "#ef4444", 600: "#dc2626", 700: "#b91c1c", 800: "#991b1b", 900: "#7f1d1d" };
var T3 = { 50: "#fff7ed", 100: "#ffedd5", 200: "#fed7aa", 300: "#fdba74", 400: "#fb923c", 500: "#f97316", 600: "#ea580c", 700: "#c2410c", 800: "#9a3412", 900: "#7c2d12" };
var F4 = { 50: "#fffbeb", 100: "#fef3c7", 200: "#fde68a", 300: "#fcd34d", 400: "#fbbf24", 500: "#f59e0b", 600: "#d97706", 700: "#b45309", 800: "#92400e", 900: "#78350f" };
var w3 = { 50: "#fefce8", 100: "#fef9c3", 200: "#fef08a", 300: "#fde047", 400: "#facc15", 500: "#eab308", 600: "#ca8a04", 700: "#a16207", 800: "#854d0e", 900: "#713f12" };
var A2 = { 50: "#f7fee7", 100: "#ecfccb", 200: "#d9f99d", 300: "#bef264", 400: "#a3e635", 500: "#84cc16", 600: "#65a30d", 700: "#4d7c0f", 800: "#3f6212", 900: "#365314" };
var D3 = { 50: "#f0fdf4", 100: "#dcfce7", 200: "#bbf7d0", 300: "#86efac", 400: "#4ade80", 500: "#22c55e", 600: "#16a34a", 700: "#15803d", 800: "#166534", 900: "#14532d" };
var U3 = { 50: "#ecfdf5", 100: "#d1fae5", 200: "#a7f3d0", 300: "#6ee7b7", 400: "#34d399", 500: "#10b981", 600: "#059669", 700: "#047857", 800: "#065f46", 900: "#064e3b" };
var E = { 50: "#f0fdfa", 100: "#ccfbf1", 200: "#99f6e4", 300: "#5eead4", 400: "#2dd4bf", 500: "#14b8a6", 600: "#0d9488", 700: "#0f766e", 800: "#115e59", 900: "#134e4a" };
var L2 = { 50: "#ecfeff", 100: "#cffafe", 200: "#a5f3fc", 300: "#67e8f9", 400: "#22d3ee", 500: "#06b6d4", 600: "#0891b2", 700: "#0e7490", 800: "#155e75", 900: "#164e63" };
var S3 = { 50: "#f0f9ff", 100: "#e0f2fe", 200: "#bae6fd", 300: "#7dd3fc", 400: "#38bdf8", 500: "#0ea5e9", 600: "#0284c7", 700: "#0369a1", 800: "#075985", 900: "#0c4a6e" };
var v = { 50: "#eff6ff", 100: "#dbeafe", 200: "#bfdbfe", 300: "#93c5fd", 400: "#60a5fa", 500: "#3b82f6", 600: "#2563eb", 700: "#1d4ed8", 800: "#1e40af", 900: "#1e3a8a" };
var z3 = { 50: "#eef2ff", 100: "#e0e7ff", 200: "#c7d2fe", 300: "#a5b4fc", 400: "#818cf8", 500: "#6366f1", 600: "#4f46e5", 700: "#4338ca", 800: "#3730a3", 900: "#312e81" };
var O2 = { 50: "#f5f3ff", 100: "#ede9fe", 200: "#ddd6fe", 300: "#c4b5fd", 400: "#a78bfa", 500: "#8b5cf6", 600: "#7c3aed", 700: "#6d28d9", 800: "#5b21b6", 900: "#4c1d95" };
var R3 = { 50: "#faf5ff", 100: "#f3e8ff", 200: "#e9d5ff", 300: "#d8b4fe", 400: "#c084fc", 500: "#a855f7", 600: "#9333ea", 700: "#7e22ce", 800: "#6b21a8", 900: "#581c87" };
var W3 = { 50: "#fdf4ff", 100: "#fae8ff", 200: "#f5d0fe", 300: "#f0abfc", 400: "#e879f9", 500: "#d946ef", 600: "#c026d3", 700: "#a21caf", 800: "#86198f", 900: "#701a75" };
var I2 = { 50: "#fdf2f8", 100: "#fce7f3", 200: "#fbcfe8", 300: "#f9a8d4", 400: "#f472b6", 500: "#ec4899", 600: "#db2777", 700: "#be185d", 800: "#9d174d", 900: "#831843" };
var M2 = { 50: "#fff1f2", 100: "#ffe4e6", 200: "#fecdd3", 300: "#fda4af", 400: "#fb7185", 500: "#f43f5e", 600: "#e11d48", 700: "#be123c", 800: "#9f1239", 900: "#881337" };
var l2 = { __proto__: null, inherit: s3, current: d3, transparent: p2, black: x2, white: b2, slate: u, gray: g2, zinc: h, neutral: y2, stone: k2, red: C3, orange: T3, amber: F4, yellow: w3, lime: A2, green: D3, emerald: U3, teal: E, cyan: L2, sky: S3, blue: v, indigo: z3, violet: O2, purple: R3, fuchsia: W3, pink: I2, rose: M2 };
var H2 = { screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px", "2xl": "1536px" }, colors: l2, columns: { auto: "auto", "3xs": "16rem", "2xs": "18rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem" }, spacing: { px: "1px", 0: "0px", ...a(4, "rem", 4, 0.5, 0.5), ...a(12, "rem", 4, 5), 14: "3.5rem", ...a(64, "rem", 4, 16, 4), 72: "18rem", 80: "20rem", 96: "24rem" }, durations: { 75: "75ms", 100: "100ms", 150: "150ms", 200: "200ms", 300: "300ms", 500: "500ms", 700: "700ms", 1e3: "1000ms" }, animation: { none: "none", spin: "spin 1s linear infinite", ping: "ping 1s cubic-bezier(0,0,0.2,1) infinite", pulse: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite", bounce: "bounce 1s infinite" }, aspectRatio: { auto: "auto", square: "1/1", video: "16/9" }, backdropBlur: o3("blur"), backdropBrightness: o3("brightness"), backdropContrast: o3("contrast"), backdropGrayscale: o3("grayscale"), backdropHueRotate: o3("hueRotate"), backdropInvert: o3("invert"), backdropOpacity: o3("opacity"), backdropSaturate: o3("saturate"), backdropSepia: o3("sepia"), backgroundColor: o3("colors"), backgroundImage: { none: "none" }, backgroundOpacity: o3("opacity"), backgroundSize: { auto: "auto", cover: "cover", contain: "contain" }, blur: { none: "none", 0: "0", sm: "4px", DEFAULT: "8px", md: "12px", lg: "16px", xl: "24px", "2xl": "40px", "3xl": "64px" }, brightness: { ...a(200, "", 100, 0, 50), ...a(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, borderColor: ({ theme: e3 }) => ({ DEFAULT: e3("colors.gray.200", "currentColor"), ...e3("colors") }), borderOpacity: o3("opacity"), borderRadius: { none: "0px", sm: "0.125rem", DEFAULT: "0.25rem", md: "0.375rem", lg: "0.5rem", xl: "0.75rem", "2xl": "1rem", "3xl": "1.5rem", "1/2": "50%", full: "9999px" }, borderSpacing: o3("spacing"), borderWidth: { DEFAULT: "1px", ...n2(8, "px") }, boxShadow: { sm: "0 1px 2px 0 rgba(0,0,0,0.05)", DEFAULT: "0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px -1px rgba(0,0,0,0.1)", md: "0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -2px rgba(0,0,0,0.1)", lg: "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", xl: "0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1)", "2xl": "0 25px 50px -12px rgba(0,0,0,0.25)", inner: "inset 0 2px 4px 0 rgba(0,0,0,0.05)", none: "0 0 #0000" }, boxShadowColor: o3("colors"), caretColor: o3("colors"), accentColor: ({ theme: e3 }) => ({ auto: "auto", ...e3("colors") }), contrast: { ...a(200, "", 100, 0, 50), 75: "0.75", 125: "1.25" }, content: { none: "none" }, divideColor: o3("borderColor"), divideOpacity: o3("borderOpacity"), divideWidth: o3("borderWidth"), dropShadow: { sm: "0 1px 1px rgba(0,0,0,0.05)", DEFAULT: ["0 1px 2px rgba(0,0,0,0.1)", "0 1px 1px rgba(0,0,0,0.06)"], md: ["0 4px 3px rgba(0,0,0,0.07)", "0 2px 2px rgba(0,0,0,0.06)"], lg: ["0 10px 8px rgba(0,0,0,0.04)", "0 4px 3px rgba(0,0,0,0.1)"], xl: ["0 20px 13px rgba(0,0,0,0.03)", "0 8px 5px rgba(0,0,0,0.08)"], "2xl": "0 25px 25px rgba(0,0,0,0.15)", none: "0 0 #0000" }, fill: o3("colors"), grayscale: { DEFAULT: "100%", 0: "0" }, hueRotate: { 0: "0deg", 15: "15deg", 30: "30deg", 60: "60deg", 90: "90deg", 180: "180deg" }, invert: { DEFAULT: "100%", 0: "0" }, flex: { 1: "1 1 0%", auto: "1 1 auto", initial: "0 1 auto", none: "none" }, flexBasis: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 6), ...i2(12, 12), auto: "auto", full: "100%" }), flexGrow: { DEFAULT: 1, 0: 0 }, flexShrink: { DEFAULT: 1, 0: 0 }, fontFamily: { sans: 'ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"'.split(","), serif: 'ui-serif,Georgia,Cambria,"Times New Roman",Times,serif'.split(","), mono: 'ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'.split(",") }, fontSize: { xs: ["0.75rem", "1rem"], sm: ["0.875rem", "1.25rem"], base: ["1rem", "1.5rem"], lg: ["1.125rem", "1.75rem"], xl: ["1.25rem", "1.75rem"], "2xl": ["1.5rem", "2rem"], "3xl": ["1.875rem", "2.25rem"], "4xl": ["2.25rem", "2.5rem"], "5xl": ["3rem", "1"], "6xl": ["3.75rem", "1"], "7xl": ["4.5rem", "1"], "8xl": ["6rem", "1"], "9xl": ["8rem", "1"] }, fontWeight: { thin: "100", extralight: "200", light: "300", normal: "400", medium: "500", semibold: "600", bold: "700", extrabold: "800", black: "900" }, gap: o3("spacing"), gradientColorStops: o3("colors"), gridAutoColumns: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridAutoRows: { auto: "auto", min: "min-content", max: "max-content", fr: "minmax(0,1fr)" }, gridColumn: { auto: "auto", "span-full": "1 / -1" }, gridRow: { auto: "auto", "span-full": "1 / -1" }, gridTemplateColumns: { none: "none" }, gridTemplateRows: { none: "none" }, height: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 6), min: "min-content", max: "max-content", fit: "fit-content", auto: "auto", full: "100%", screen: "100vh" }), inset: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 4), auto: "auto", full: "100%" }), keyframes: { spin: { from: { transform: "rotate(0deg)" }, to: { transform: "rotate(360deg)" } }, ping: { "0%": { transform: "scale(1)", opacity: "1" }, "75%,100%": { transform: "scale(2)", opacity: "0" } }, pulse: { "0%,100%": { opacity: "1" }, "50%": { opacity: ".5" } }, bounce: { "0%, 100%": { transform: "translateY(-25%)", animationTimingFunction: "cubic-bezier(0.8,0,1,1)" }, "50%": { transform: "none", animationTimingFunction: "cubic-bezier(0,0,0.2,1)" } } }, letterSpacing: { tighter: "-0.05em", tight: "-0.025em", normal: "0em", wide: "0.025em", wider: "0.05em", widest: "0.1em" }, lineHeight: { ...a(10, "rem", 4, 3), none: "1", tight: "1.25", snug: "1.375", normal: "1.5", relaxed: "1.625", loose: "2" }, margin: ({ theme: e3 }) => ({ auto: "auto", ...e3("spacing") }), maxHeight: ({ theme: e3 }) => ({ full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh", ...e3("spacing") }), maxWidth: ({ theme: e3, breakpoints: f2 }) => ({ ...f2(e3("screens")), none: "none", 0: "0rem", xs: "20rem", sm: "24rem", md: "28rem", lg: "32rem", xl: "36rem", "2xl": "42rem", "3xl": "48rem", "4xl": "56rem", "5xl": "64rem", "6xl": "72rem", "7xl": "80rem", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", prose: "65ch" }), minHeight: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content", screen: "100vh" }, minWidth: { 0: "0px", full: "100%", min: "min-content", max: "max-content", fit: "fit-content" }, opacity: { ...a(100, "", 100, 0, 10), 5: "0.05", 25: "0.25", 75: "0.75", 95: "0.95" }, order: { first: "-9999", last: "9999", none: "0" }, padding: o3("spacing"), placeholderColor: o3("colors"), placeholderOpacity: o3("opacity"), outlineColor: o3("colors"), outlineOffset: n2(8, "px"), outlineWidth: n2(8, "px"), ringColor: ({ theme: e3 }) => ({ ...e3("colors"), DEFAULT: e3("colors.blue.500", "#3b82f6") }), ringOffsetColor: o3("colors"), ringOffsetWidth: n2(8, "px"), ringOpacity: ({ theme: e3 }) => ({ ...e3("opacity"), DEFAULT: "0.5" }), ringWidth: { DEFAULT: "3px", ...n2(8, "px") }, rotate: { ...n2(2, "deg"), ...n2(12, "deg", 3), ...n2(180, "deg", 45) }, saturate: a(200, "", 100, 0, 50), scale: { ...a(150, "", 100, 0, 50), ...a(110, "", 100, 90, 5), 75: "0.75", 125: "1.25" }, scrollMargin: o3("spacing"), scrollPadding: o3("spacing"), sepia: { 0: "0", DEFAULT: "100%" }, skew: { ...n2(2, "deg"), ...n2(12, "deg", 3) }, space: o3("spacing"), stroke: o3("colors"), strokeWidth: a(2), textColor: o3("colors"), textDecorationColor: o3("colors"), textDecorationThickness: { "from-font": "from-font", auto: "auto", ...n2(8, "px") }, textUnderlineOffset: { auto: "auto", ...n2(8, "px") }, textIndent: o3("spacing"), textOpacity: o3("opacity"), transitionDuration: ({ theme: e3 }) => ({ ...e3("durations"), DEFAULT: "150ms" }), transitionDelay: o3("durations"), transitionProperty: { none: "none", all: "all", DEFAULT: "color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter", colors: "color,background-color,border-color,text-decoration-color,fill,stroke", opacity: "opacity", shadow: "box-shadow", transform: "transform" }, transitionTimingFunction: { DEFAULT: "cubic-bezier(0.4,0,0.2,1)", linear: "linear", in: "cubic-bezier(0.4,0,1,1)", out: "cubic-bezier(0,0,0.2,1)", "in-out": "cubic-bezier(0.4,0,0.2,1)" }, translate: ({ theme: e3 }) => ({ ...e3("spacing"), ...i2(2, 4), full: "100%" }), width: ({ theme: e3 }) => ({ min: "min-content", max: "max-content", fit: "fit-content", screen: "100vw", ...e3("flexBasis") }), willChange: { scroll: "scroll-position" }, zIndex: { ...a(50, "", 1, 0, 10), auto: "auto" } };
function i2(e3, f2) {
  let t4 = {};
  do
    for (var r = 1; r < e3; r++)
      t4[`${r}/${e3}`] = Number((r / e3 * 100).toFixed(6)) + "%";
  while (++e3 <= f2);
  return t4;
}
function n2(e3, f2, t4 = 0) {
  let r = {};
  for (; t4 <= e3; t4 = 2 * t4 || 1)
    r[t4] = t4 + f2;
  return r;
}
function a(e3, f2 = "", t4 = 1, r = 0, m4 = 1, c3 = {}) {
  for (; r <= e3; r += m4)
    c3[r] = r / t4 + f2;
  return c3;
}
function o3(e3) {
  return ({ theme: f2 }) => f2(e3);
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/preflight.js
var i3 = { "*,::before,::after": { boxSizing: "border-box", borderWidth: "0", borderStyle: "solid", borderColor: "theme(borderColor.DEFAULT, currentColor)" }, "::before,::after": { "--tw-content": "''" }, html: { lineHeight: 1.5, WebkitTextSizeAdjust: "100%", MozTabSize: "4", tabSize: 4, fontFamily: `theme(fontFamily.sans, ${H2.fontFamily.sans})` }, body: { margin: "0", lineHeight: "inherit" }, hr: { height: "0", color: "inherit", borderTopWidth: "1px" }, "abbr:where([title])": { textDecoration: "underline dotted" }, "h1,h2,h3,h4,h5,h6": { fontSize: "inherit", fontWeight: "inherit" }, a: { color: "inherit", textDecoration: "inherit" }, "b,strong": { fontWeight: "bolder" }, "code,kbd,samp,pre": { fontFamily: `theme(fontFamily.mono, ${H2.fontFamily.mono})`, fontSize: "1em" }, small: { fontSize: "80%" }, "sub,sup": { fontSize: "75%", lineHeight: 0, position: "relative", verticalAlign: "baseline" }, sub: { bottom: "-0.25em" }, sup: { top: "-0.5em" }, table: { textIndent: "0", borderColor: "inherit", borderCollapse: "collapse" }, "button,input,optgroup,select,textarea": { fontFamily: "inherit", fontSize: "100%", lineHeight: "inherit", color: "inherit", margin: "0", padding: "0" }, "button,select": { textTransform: "none" }, "button,[type='button'],[type='reset'],[type='submit']": { WebkitAppearance: "button", backgroundColor: "transparent", backgroundImage: "none" }, ":-moz-focusring": { outline: "auto" }, ":-moz-ui-invalid": { boxShadow: "none" }, progress: { verticalAlign: "baseline" }, "::-webkit-inner-spin-button,::-webkit-outer-spin-button": { height: "auto" }, "[type='search']": { WebkitAppearance: "textfield", outlineOffset: "-2px" }, "::-webkit-search-decoration": { WebkitAppearance: "none" }, "::-webkit-file-upload-button": { WebkitAppearance: "button", font: "inherit" }, summary: { display: "list-item" }, "blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre": { margin: "0" }, fieldset: { margin: "0", padding: "0" }, legend: { padding: "0" }, "ol,ul,menu": { listStyle: "none", margin: "0", padding: "0" }, textarea: { resize: "vertical" }, "input::placeholder,textarea::placeholder": { opacity: 1, color: "theme(colors.gray.400, #9ca3af)" }, 'button,[role="button"]': { cursor: "pointer" }, ":disabled": { cursor: "default" }, "img,svg,video,canvas,audio,iframe,embed,object": { display: "block", verticalAlign: "middle" }, "img,video": { maxWidth: "100%", height: "auto" }, "[hidden]": { display: "none" } };

// https://esm.sh/v103/@twind/core@1.1.2/deno/core.js
var B3;
function ae2(e3) {
  return [...e3.v, (e3.i ? "!" : "") + e3.n].join(":");
}
function ue2(e3, t4 = ",") {
  return e3.map(ae2).join(t4);
}
var Y3 = typeof CSS < "u" && CSS.escape || ((e3) => e3.replace(/[!"'`*+.,;:\\/<=>?@#$%&^|~()[\]{}]/g, "\\$&").replace(/^\d/, "\\3$& "));
function T4(e3) {
  for (var t4 = 9, r = e3.length; r--; )
    t4 = Math.imul(t4 ^ e3.charCodeAt(r), 1597334677);
  return "#" + ((t4 ^ t4 >>> 9) >>> 0).toString(36);
}
function Ce(e3, t4 = "@media ") {
  return t4 + b3(e3).map((r) => (typeof r == "string" && (r = { min: r }), r.raw || Object.keys(r).map((i4) => `(${i4}-width:${r[i4]})`).join(" and "))).join(",");
}
function b3(e3 = []) {
  return Array.isArray(e3) ? e3 : e3 == null ? [] : [e3];
}
function F5() {
}
var S4 = { d: 0, b: 134217728, c: 268435456, a: 671088640, u: 805306368, o: 939524096 };
function Ee(e3) {
  return e3.match(/[-=:;]/g)?.length || 0;
}
function re(e3) {
  return Math.min(/(?:^|width[^\d]+)(\d+(?:.\d+)?)(p)?/.test(e3) ? Math.max(0, 29.63 * (+RegExp.$1 / (RegExp.$2 ? 15 : 1)) ** 0.137 - 43) : 0, 15) << 22 | Math.min(Ee(e3), 15) << 18;
}
var Ue = ["rst-c", "st-ch", "h-chi", "y-lin", "nk", "sited", "ecked", "pty", "ad-on", "cus-w", "ver", "cus", "cus-v", "tive", "sable", "tiona", "quire"];
function ce2({ n: e3, i: t4, v: r = [] }, i4, n3, l4) {
  e3 && (e3 = ae2({ n: e3, i: t4, v: r })), l4 = [...b3(l4)];
  for (let s6 of r) {
    let f2 = i4.theme("screens", s6);
    for (let a2 of b3(f2 && Ce(f2) || i4.v(s6))) {
      var o4;
      l4.push(a2), n3 |= f2 ? 67108864 | re(a2) : s6 == "dark" ? 1073741824 : a2[0] == "@" ? re(a2) : (o4 = a2, 1 << ~(/:([a-z-]+)/.test(o4) && ~Ue.indexOf(RegExp.$1.slice(2, 7)) || -18));
    }
  }
  return { n: e3, p: n3, r: l4, i: t4 };
}
var pe = /* @__PURE__ */ new Map();
function ne2(e3) {
  if (e3.d) {
    let t4 = [], r = H3(e3.r.reduce((i4, n3) => n3[0] == "@" ? (t4.push(n3), i4) : n3 ? H3(i4, (l4) => H3(n3, (o4) => {
      let s6 = /(:merge\(.+?\))(:[a-z-]+|\\[.+])/.exec(o4);
      if (s6) {
        let f2 = l4.indexOf(s6[1]);
        return ~f2 ? l4.slice(0, f2) + s6[0] + l4.slice(f2 + s6[1].length) : Q3(l4, o4);
      }
      return Q3(o4, l4);
    })) : i4, "&"), (i4) => Q3(i4, e3.n ? "." + Y3(e3.n) : ""));
    return r && t4.push(r.replace(/:merge\((.+?)\)/g, "$1")), t4.reduceRight((i4, n3) => n3 + "{" + i4 + "}", e3.d);
  }
}
function H3(e3, t4) {
  return e3.replace(/ *((?:\(.+?\)|\[.+?\]|[^,])+) *(,|$)/g, (r, i4, n3) => t4(i4) + n3);
}
function Q3(e3, t4) {
  return e3.replace(/&/g, t4);
}
var $e = new Intl.Collator("en", { numeric: true });
function Me(e3, t4) {
  for (var r = 0, i4 = e3.length; r < i4; ) {
    let n3 = i4 + r >> 1;
    0 >= Ne(e3[n3], t4) ? r = n3 + 1 : i4 = n3;
  }
  return i4;
}
function Ne(e3, t4) {
  let r = e3.p & S4.o;
  return r == (t4.p & S4.o) && (r == S4.b || r == S4.o) ? 0 : e3.p - t4.p || e3.o - t4.o || $e.compare(we(e3.n), we(t4.n)) || $e.compare(Ae(e3.n), Ae(t4.n));
}
function we(e3) {
  return (e3 || "").split(/:/).pop().split("/").pop() || "\0";
}
function Ae(e3) {
  return (e3 || "").replace(/\W/g, (t4) => String.fromCharCode(127 + t4.charCodeAt(0))) + "\0";
}
function X3(e3, t4) {
  return Math.round(parseInt(e3, 16) * t4);
}
function P2(e3, t4 = {}) {
  if (typeof e3 == "function")
    return e3(t4);
  let { opacityValue: r = "1", opacityVariable: i4 } = t4, n3 = i4 ? `var(${i4})` : r;
  if (e3.includes("<alpha-value>"))
    return e3.replace("<alpha-value>", n3);
  if (e3[0] == "#" && (e3.length == 4 || e3.length == 7)) {
    let l4 = (e3.length - 1) / 3, o4 = [17, 1, 0.062272][l4 - 1];
    return `rgba(${[X3(e3.substr(1, l4), o4), X3(e3.substr(1 + l4, l4), o4), X3(e3.substr(1 + 2 * l4, l4), o4), n3]})`;
  }
  return n3 == "1" ? e3 : n3 == "0" ? "#0000" : e3.replace(/^(rgb|hsl)(\([^)]+)\)$/, `$1a$2,${n3})`);
}
function de(e3, t4, r, i4, n3 = []) {
  return function l4(o4, { n: s6, p: f2, r: a2 = [], i: c3 }, u4) {
    let p6 = [], g5 = "", h3 = 0, $4 = 0;
    for (let y4 in o4 || {}) {
      var A4, R6;
      let d4 = o4[y4];
      if (y4[0] == "@") {
        if (!d4)
          continue;
        if (y4[1] == "a") {
          p6.push(...ge(s6, f2, I3("" + d4), u4, f2, a2, c3, true));
          continue;
        }
        if (y4[1] == "l") {
          for (let w6 of b3(d4))
            p6.push(...l4(w6, { n: s6, p: (A4 = S4[y4[7]], f2 & ~S4.o | A4), r: a2, i: c3 }, u4));
          continue;
        }
        if (y4[1] == "i") {
          p6.push(...b3(d4).map((w6) => ({ p: -1, o: 0, r: [], d: y4 + " " + w6 })));
          continue;
        }
        if (y4[1] == "k") {
          p6.push({ p: S4.d, o: 0, r: [y4], d: l4(d4, { p: S4.d }, u4).map(ne2).join("") });
          continue;
        }
        if (y4[1] == "f") {
          p6.push(...b3(d4).map((w6) => ({ p: S4.d, o: 0, r: [y4], d: l4(w6, { p: S4.d }, u4).map(ne2).join("") })));
          continue;
        }
      }
      if (typeof d4 != "object" || Array.isArray(d4))
        y4 == "label" && d4 ? s6 = d4 + T4(JSON.stringify([f2, c3, o4])) : (d4 || d4 === 0) && (y4 = y4.replace(/[A-Z]/g, (w6) => "-" + w6.toLowerCase()), $4 += 1, h3 = Math.max(h3, (R6 = y4)[0] == "-" ? 0 : Ee(R6) + (/^(?:(border-(?!w|c|sty)|[tlbr].{2,4}m?$|c.{7,8}$)|([fl].{5}l|g.{8}$|pl))/.test(R6) ? +!!RegExp.$1 || -!!RegExp.$2 : 0) + 1), g5 += (g5 ? ";" : "") + b3(d4).map((w6) => u4.s(y4, he("" + w6, u4.theme) + (c3 ? " !important" : ""))).join(";"));
      else if (y4[0] == "@" || y4.includes("&")) {
        let w6 = f2;
        y4[0] == "@" && (y4 = y4.replace(/\bscreen\(([^)]+)\)/g, (j5, M5) => {
          let N6 = u4.theme("screens", M5);
          return N6 ? (w6 |= 67108864, Ce(N6, "")) : j5;
        }), w6 |= re(y4)), p6.push(...l4(d4, { n: s6, p: w6, r: [...a2, y4], i: c3 }, u4));
      } else
        p6.push(...l4(d4, { p: f2, r: [...a2, y4] }, u4));
    }
    return p6.unshift({ n: s6, p: f2, o: Math.max(0, 15 - $4) + 1.5 * Math.min(h3 || 15, 15), r: a2, d: g5 }), p6.sort(Ne);
  }(e3, ce2(t4, r, i4, n3), r);
}
function he(e3, t4) {
  return e3.replace(/theme\((["'`])?(.+?)\1(?:\s*,\s*(["'`])?(.+?)\3)?\)/g, (r, i4, n3, l4, o4 = "") => {
    let s6 = t4(n3, o4);
    return typeof s6 == "function" && /color|fill|stroke/i.test(n3) ? P2(s6) : "" + b3(s6).filter((f2) => Object(f2) !== f2);
  });
}
function ye(e3, t4) {
  let r, i4 = [];
  for (let n3 of e3)
    n3.d && n3.n ? r?.p == n3.p && "" + r.r == "" + n3.r ? (r.c = [r.c, n3.c].filter(Boolean).join(" "), r.d = r.d + ";" + n3.d) : i4.push(r = { ...n3, n: n3.n && t4 }) : i4.push({ ...n3, n: n3.n && t4 });
  return i4;
}
function W4(e3, t4, r = S4.u, i4, n3) {
  let l4 = [];
  for (let o4 of e3)
    for (let s6 of function(f2, a2, c3, u4, p6) {
      f2 = { ...f2, i: f2.i || p6 };
      let g5 = function(h3, $4) {
        let A4 = pe.get(h3.n);
        return A4 ? A4(h3, $4) : $4.r(h3.n, h3.v[0] == "dark");
      }(f2, a2);
      return g5 ? typeof g5 == "string" ? ({ r: u4, p: c3 } = ce2(f2, a2, c3, u4), ye(W4(I3(g5), a2, c3, u4, f2.i), f2.n)) : Array.isArray(g5) ? g5.map((h3) => {
        var $4, A4;
        return { o: 0, ...h3, r: [...b3(u4), ...b3(h3.r)], p: ($4 = c3, A4 = h3.p ?? c3, $4 & ~S4.o | A4) };
      }) : de(g5, f2, a2, c3, u4) : [{ c: ae2(f2), p: 0, o: 0, r: [] }];
    }(o4, t4, r, i4, n3))
      l4.splice(Me(l4, s6), 0, s6);
  return l4;
}
function ge(e3, t4, r, i4, n3, l4, o4, s6) {
  return ye((s6 ? r.flatMap((f2) => W4([f2], i4, n3, l4, o4)) : W4(r, i4, n3, l4, o4)).map((f2) => f2.p & S4.o && (f2.n || t4 == S4.b) ? { ...f2, p: f2.p & ~S4.o | t4, o: 0 } : f2), e3);
}
function _e2(e3, t4, r, i4) {
  var n3;
  return n3 = (l4, o4) => {
    let { n: s6, p: f2, r: a2, i: c3 } = ce2(l4, o4, t4);
    return r && ge(s6, t4, r, o4, f2, a2, c3, i4);
  }, pe.set(e3, n3), e3;
}
function K3(e3, t4, r) {
  if (e3[e3.length - 1] != "(") {
    let i4 = [], n3 = false, l4 = false, o4 = "";
    for (let s6 of e3)
      if (!(s6 == "(" || /[~@]$/.test(s6))) {
        if (s6[0] == "!" && (s6 = s6.slice(1), n3 = !n3), s6.endsWith(":")) {
          i4[s6 == "dark:" ? "unshift" : "push"](s6.slice(0, -1));
          continue;
        }
        s6[0] == "-" && (s6 = s6.slice(1), l4 = !l4), s6.endsWith("-") && (s6 = s6.slice(0, -1)), s6 && s6 != "&" && (o4 += (o4 && "-") + s6);
      }
    o4 && (l4 && (o4 = "-" + o4), t4[0].push({ n: o4, v: i4.filter(Be), i: n3 }));
  }
}
function Be(e3, t4, r) {
  return r.indexOf(e3) == t4;
}
var Se = /* @__PURE__ */ new Map();
function I3(e3) {
  let t4 = Se.get(e3);
  if (!t4) {
    let r = [], i4 = [[]], n3 = 0, l4 = 0, o4 = null, s6 = 0, f2 = (a2, c3 = 0) => {
      n3 != s6 && (r.push(e3.slice(n3, s6 + c3)), a2 && K3(r, i4)), n3 = s6 + 1;
    };
    for (; s6 < e3.length; s6++) {
      let a2 = e3[s6];
      if (l4)
        e3[s6 - 1] != "\\" && (l4 += +(a2 == "[") || -(a2 == "]"));
      else if (a2 == "[")
        l4 += 1;
      else if (o4)
        e3[s6 - 1] != "\\" && o4.test(e3.slice(s6)) && (o4 = null, n3 = s6 + RegExp.lastMatch.length);
      else if (a2 == "/" && e3[s6 - 1] != "\\" && (e3[s6 + 1] == "*" || e3[s6 + 1] == "/"))
        o4 = e3[s6 + 1] == "*" ? /^\*\// : /^[\r\n]/;
      else if (a2 == "(")
        f2(), r.push(a2);
      else if (a2 == ":")
        e3[s6 + 1] != ":" && f2(false, 1);
      else if (/[\s,)]/.test(a2)) {
        f2(true);
        let c3 = r.lastIndexOf("(");
        if (a2 == ")") {
          let u4 = r[c3 - 1];
          if (/[~@]$/.test(u4)) {
            let p6 = i4.shift();
            r.length = c3, K3([...r, "#"], i4);
            let { v: g5 } = i4[0].pop();
            for (let h3 of p6)
              h3.v.splice(+(h3.v[0] == "dark") - +(g5[0] == "dark"), g5.length);
            K3([...r, _e2(u4.length > 1 ? u4.slice(0, -1) + T4(JSON.stringify([u4, p6])) : u4 + "(" + ue2(p6) + ")", S4.a, p6, /@$/.test(u4))], i4);
          }
          c3 = r.lastIndexOf("(", c3 - 1);
        }
        r.length = c3 + 1;
      } else
        /[~@]/.test(a2) && e3[s6 + 1] == "(" && i4.unshift([]);
    }
    f2(true), Se.set(e3, t4 = i4[0]);
  }
  return t4;
}
function Ve(e3, t4, r) {
  return t4.reduce((i4, n3, l4) => i4 + r(n3) + e3[l4 + 1], e3[0]);
}
function Z3(e3, t4) {
  return Array.isArray(e3) && Array.isArray(e3.raw) ? Ve(e3, t4, (r) => ee(r).trim()) : t4.filter(Boolean).reduce((r, i4) => r + ee(i4), e3 ? ee(e3) : "");
}
function ee(e3) {
  let t4, r = "";
  if (e3 && typeof e3 == "object")
    if (Array.isArray(e3))
      (t4 = Z3(e3[0], e3.slice(1))) && (r += " " + t4);
    else
      for (let i4 in e3)
        e3[i4] && (r += " " + i4);
  else
    e3 != null && typeof e3 != "boolean" && (r += " " + e3);
  return r;
}
var pt2 = ze("@");
var dt2 = ze("~");
function ze(e3) {
  return new Proxy(function(i4, ...n3) {
    return t4("", i4, n3);
  }, { get(r, i4) {
    return i4 in r ? r[i4] : function(l4, ...o4) {
      return t4(i4, l4, o4);
    };
  } });
  function t4(r, i4, n3) {
    return ue2(I3(r + e3 + "(" + Z3(i4, n3) + ")"));
  }
}
function G3(e3, t4) {
  return Array.isArray(e3) ? ve(Ve(e3, t4, (r) => r != null && typeof r != "boolean" ? r : "")) : typeof e3 == "string" ? ve(e3) : [e3];
}
var We = / *(?:(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}))/g;
function ve(e3) {
  let t4;
  e3 = e3.replace(/\/\*[^]*?\*\/|\s\s+|\n/gm, " ");
  let r = [{}], i4 = [r[0]], n3 = [];
  for (; t4 = We.exec(e3); )
    t4[4] && (r.shift(), n3.shift()), t4[3] ? (n3.unshift(t4[3]), r.unshift({}), i4.push(n3.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))) : t4[4] || (r[0][t4[1]] && (r.unshift({}), i4.push(n3.reduce((l4, o4) => ({ [o4]: l4 }), r[0]))), r[0][t4[1]] = t4[2]);
  return i4;
}
function me(e3, ...t4) {
  var r;
  let i4 = G3(e3, t4), n3 = (i4.find((l4) => l4.label)?.label || "css") + T4(JSON.stringify(i4));
  return r = (l4, o4) => ye(i4.flatMap((s6) => de(s6, l4, o4, S4.o)), n3), pe.set(n3, r), n3;
}
var ht2 = new Proxy(function(e3, t4) {
  return Re("animation", e3, t4);
}, { get(e3, t4) {
  return t4 in e3 ? e3[t4] : function(i4, n3) {
    return Re(t4, i4, n3);
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
  return typeof e3 == "function" ? e3 : typeof e3 == "string" && /^[\w-]+$/.test(e3) ? (r, i4) => ({ [e3]: t4 ? t4(r, i4) : le(r, 1) }) : (r) => e3 || { [r[1]]: le(r, 2) };
}
function le(e3, t4, r = e3.slice(t4).find(Boolean) || e3.$$ || e3.input) {
  return e3.input[0] == "-" ? `calc(${r} * -1)` : r;
}
function gt(e3, t4, r, i4) {
  return [e3, Ge(t4, r, i4)];
}
function Ge(e3, t4, r) {
  let i4 = typeof t4 == "string" ? (n3, l4) => ({ [t4]: r ? r(n3, l4) : n3._ }) : t4 || (({ 1: n3, _: l4 }, o4, s6) => ({ [n3 || s6]: l4 }));
  return (n3, l4) => {
    let o4 = ke(e3 || n3[1]), s6 = l4.theme(o4, n3.$$) ?? oe2(n3.$$, o4, l4);
    if (s6 != null)
      return n3._ = le(n3, 0, s6), i4(n3, l4, o4);
  };
}
function mt2(e3, t4 = {}, r) {
  return [e3, Ye(t4, r)];
}
function Ye(e3 = {}, t4) {
  return (r, i4) => {
    let { section: n3 = ke(r[0]).replace("-", "") + "Color" } = e3, [l4, o4] = Ze(r.$$);
    if (!l4)
      return;
    let s6 = i4.theme(n3, l4) || oe2(l4, n3, i4);
    if (!s6 || typeof s6 == "object")
      return;
    let { opacityVariable: f2 = `--tw-${r[0].replace(/-$/, "")}-opacity`, opacitySection: a2 = n3.replace("Color", "Opacity"), property: c3 = n3, selector: u4 } = e3, p6 = i4.theme(a2, o4 || "DEFAULT") || o4 && oe2(o4, a2, i4), g5 = t4 || (({ _: $4 }) => {
      let A4 = He(c3, $4);
      return u4 ? { [u4]: A4 } : A4;
    });
    r._ = { value: P2(s6, { opacityVariable: f2 || void 0, opacityValue: p6 || void 0 }), color: ($4) => P2(s6, $4), opacityVariable: f2 || void 0, opacityValue: p6 || void 0 };
    let h3 = g5(r, i4);
    if (!r.dark) {
      let $4 = i4.d(n3, l4, s6);
      $4 && $4 !== s6 && (r._ = { value: P2($4, { opacityVariable: f2 || void 0, opacityValue: p6 || "1" }), color: (A4) => P2($4, A4), opacityVariable: f2 || void 0, opacityValue: p6 || void 0 }, h3 = { "&": h3, [i4.v("dark")]: g5(r, i4) });
    }
    return h3;
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
    if (e3 = se(he(e3.slice(1, -1), r.theme)), !t4)
      return e3;
    if (!(/color|fill|stroke/i.test(t4) && !(/^color:/.test(e3) || /^(#|((hsl|rgb)a?|hwb|lab|lch|color)\(|[a-z]+$)/.test(e3)) || /image/i.test(t4) && !(/^image:/.test(e3) || /^[a-z-]+\(/.test(e3)) || /weight/i.test(t4) && !(/^(number|any):/.test(e3) || /^\d+$/.test(e3)) || /position/i.test(t4) && /^(length|size):/.test(e3)))
      return e3.replace(/^[a-z-]+:/, "");
  }
}
function ke(e3) {
  return e3.replace(/-./g, (t4) => t4[1].toUpperCase());
}
function se(e3) {
  return e3.includes("url(") ? e3.replace(/(.*?)(url\(.*?\))(.*?)/g, (t4, r = "", i4, n3 = "") => se(r) + i4 + se(n3)) : e3.replace(/(^|[^\\])_+/g, (t4, r) => r + " ".repeat(t4.length - r.length)).replace(/\\_/g, "_").replace(/(calc|min|max|clamp)\(.+\)/g, (t4) => t4.replace(/(-?\d*\.?\d(?!\b-.+[,)](?![^+\-/*])\D)(?:%|[a-z]+)?|\))([+\-/*])/g, "$1 $2 "));
}
var Qe = Symbol();
var D4 = new Proxy(F5, { apply(e3, t4, r) {
  return B3(r[0]);
}, get(e3, t4) {
  let r = B3[t4];
  return typeof r == "function" ? function() {
    return r.apply(B3, arguments);
  } : r;
} });
var Rt = function e2(t4) {
  return new Proxy(function(i4, ...n3) {
    return xe2(t4, "", i4, n3);
  }, { get(r, i4) {
    return i4 === "bind" ? e2 : i4 in r ? r[i4] : function(l4, ...o4) {
      return xe2(t4, i4, l4, o4);
    };
  } });
}();
function xe2(e3, t4, r, i4) {
  return { toString() {
    let n3 = G3(r, i4), l4 = Y3(t4 + T4(JSON.stringify([t4, n3])));
    return (typeof e3 == "function" ? e3 : D4)(me({ [`@keyframes ${l4}`]: G3(r, i4) })), l4;
  } };
}

// https://esm.sh/v103/@twind/preset-tailwind@1.0.1/deno/rules.js
var j2 = [yt2("\\[([-\\w]+):(.+)]", ({ 1: t4, 2: r }, a2) => ({ "@layer overrides": { "&": { [t4]: oe2(`[${r}]`, t4, a2) } } })), yt2("(group|peer)(~[^-[]+)?", ({ input: t4 }, { h: r }) => [{ c: r(t4) }]), gt("aspect-", "aspectRatio"), yt2("container", (t4, { theme: r }) => {
  let { screens: a2 = r("screens"), center: i4, padding: l4 } = r("container"), d4 = { width: "100%", marginRight: i4 && "auto", marginLeft: i4 && "auto", ...g5("xs") };
  for (let f2 in a2) {
    let c3 = a2[f2];
    typeof c3 == "string" && (d4[Ce(c3)] = { "&": { maxWidth: c3, ...g5(f2) } });
  }
  return d4;
  function g5(f2) {
    let c3 = l4 && (typeof l4 == "string" ? l4 : l4[f2] || l4.DEFAULT);
    if (c3)
      return { paddingRight: c3, paddingLeft: c3 };
  }
}), gt("content-", "content", ({ _: t4 }) => ({ "--tw-content": t4, content: "var(--tw-content)" })), yt2("(?:box-)?decoration-(slice|clone)", "boxDecorationBreak"), yt2("box-(border|content)", "boxSizing", ({ 1: t4 }) => t4 + "-box"), yt2("hidden", { display: "none" }), yt2("table-(auto|fixed)", "tableLayout"), yt2(["(block|flex|table|grid|inline|contents|flow-root|list-item)", "(inline-(block|flex|table|grid))", "(table-(caption|cell|column|row|(column|row|footer|header)-group))"], "display"), "(float)-(left|right|none)", "(clear)-(left|right|none|both)", "(overflow(?:-[xy])?)-(auto|hidden|clip|visible|scroll)", "(isolation)-(auto)", yt2("isolate", "isolation"), yt2("object-(contain|cover|fill|none|scale-down)", "objectFit"), gt("object-", "objectPosition"), yt2("object-(top|bottom|center|(left|right)(-(top|bottom))?)", "objectPosition", u2), yt2("overscroll(-[xy])?-(auto|contain|none)", ({ 1: t4 = "", 2: r }) => ({ ["overscroll-behavior" + t4]: r })), yt2("(static|fixed|absolute|relative|sticky)", "position"), gt("-?inset(-[xy])?(?:$|-)", "inset", ({ 1: t4, _: r }) => ({ top: t4 != "-x" && r, right: t4 != "-y" && r, bottom: t4 != "-x" && r, left: t4 != "-y" && r })), gt("-?(top|bottom|left|right)(?:$|-)", "inset"), yt2("visible", "visibility"), yt2("invisible", { visibility: "hidden" }), gt("-?z-", "zIndex"), yt2("flex-((row|col)(-reverse)?)", "flexDirection", v2), yt2("flex-(wrap|wrap-reverse|nowrap)", "flexWrap"), gt("(flex-(?:grow|shrink))(?:$|-)"), gt("(flex)-"), gt("grow(?:$|-)", "flexGrow"), gt("shrink(?:$|-)", "flexShrink"), gt("basis-", "flexBasis"), gt("-?(order)-"), "-?(order)-(\\d+)", gt("grid-cols-", "gridTemplateColumns"), yt2("grid-cols-(\\d+)", "gridTemplateColumns", $2), gt("col-", "gridColumn"), yt2("col-(span)-(\\d+)", "gridColumn", S5), gt("col-start-", "gridColumnStart"), yt2("col-start-(auto|\\d+)", "gridColumnStart"), gt("col-end-", "gridColumnEnd"), yt2("col-end-(auto|\\d+)", "gridColumnEnd"), gt("grid-rows-", "gridTemplateRows"), yt2("grid-rows-(\\d+)", "gridTemplateRows", $2), gt("row-", "gridRow"), yt2("row-(span)-(\\d+)", "gridRow", S5), gt("row-start-", "gridRowStart"), yt2("row-start-(auto|\\d+)", "gridRowStart"), gt("row-end-", "gridRowEnd"), yt2("row-end-(auto|\\d+)", "gridRowEnd"), yt2("grid-flow-((row|col)(-dense)?)", "gridAutoFlow", (t4) => u2(v2(t4))), yt2("grid-flow-(dense)", "gridAutoFlow"), gt("auto-cols-", "gridAutoColumns"), gt("auto-rows-", "gridAutoRows"), gt("gap-x(?:$|-)", "gap", "columnGap"), gt("gap-y(?:$|-)", "gap", "rowGap"), gt("gap(?:$|-)", "gap"), "(justify-(?:items|self))-", yt2("justify-", "justifyContent", x3), yt2("(content|items|self)-", (t4) => ({ ["align-" + t4[1]]: x3(t4) })), yt2("(place-(content|items|self))-", ({ 1: t4, $$: r }) => ({ [t4]: ("wun".includes(r[3]) ? "space-" : "") + r })), gt("p([xytrbl])?(?:$|-)", "padding", w4("padding")), gt("-?m([xytrbl])?(?:$|-)", "margin", w4("margin")), gt("-?space-(x|y)(?:$|-)", "space", ({ 1: t4, _: r }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t4}-reverse`]: "0", ["margin-" + { y: "top", x: "left" }[t4]]: `calc(${r} * calc(1 - var(--tw-space-${t4}-reverse)))`, ["margin-" + { y: "bottom", x: "right" }[t4]]: `calc(${r} * var(--tw-space-${t4}-reverse))` } })), yt2("space-(x|y)-reverse", ({ 1: t4 }) => ({ "&>:not([hidden])~:not([hidden])": { [`--tw-space-${t4}-reverse`]: "1" } })), gt("w-", "width"), gt("min-w-", "minWidth"), gt("max-w-", "maxWidth"), gt("h-", "height"), gt("min-h-", "minHeight"), gt("max-h-", "maxHeight"), gt("font-", "fontWeight"), gt("font-", "fontFamily", "fontFamily", s4), yt2("antialiased", { WebkitFontSmoothing: "antialiased", MozOsxFontSmoothing: "grayscale" }), yt2("subpixel-antialiased", { WebkitFontSmoothing: "auto", MozOsxFontSmoothing: "auto" }), yt2("italic", "fontStyle"), yt2("not-italic", { fontStyle: "normal" }), yt2("(ordinal|slashed-zero|(normal|lining|oldstyle|proportional|tabular)-nums|(diagonal|stacked)-fractions)", ({ 1: t4, 2: r = "", 3: a2 }) => r == "normal" ? { fontVariantNumeric: "normal" } : { ["--tw-" + (a2 ? "numeric-fraction" : "pt".includes(r[0]) ? "numeric-spacing" : r ? "numeric-figure" : t4)]: t4, fontVariantNumeric: "var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ordinal": "var(--tw-empty,/*!*/ /*!*/)", "--tw-slashed-zero": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-figure": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-spacing": "var(--tw-empty,/*!*/ /*!*/)", "--tw-numeric-fraction": "var(--tw-empty,/*!*/ /*!*/)" } } }), gt("tracking-", "letterSpacing"), gt("leading-", "lineHeight"), yt2("list-(inside|outside)", "listStylePosition"), gt("list-", "listStyleType"), yt2("list-", "listStyleType"), gt("placeholder-opacity-", "placeholderOpacity", ({ _: t4 }) => ({ "&::placeholder": { "--tw-placeholder-opacity": t4 } })), mt2("placeholder-", { property: "color", selector: "&::placeholder" }), yt2("text-(left|center|right|justify|start|end)", "textAlign"), yt2("text-(ellipsis|clip)", "textOverflow"), gt("text-opacity-", "textOpacity", "--tw-text-opacity"), mt2("text-", { property: "color" }), gt("text-", "fontSize", ({ _: t4 }) => typeof t4 == "string" ? { fontSize: t4 } : { fontSize: t4[0], ...typeof t4[1] == "string" ? { lineHeight: t4[1] } : t4[1] }), gt("indent-", "textIndent"), yt2("(overline|underline|line-through)", "textDecorationLine"), yt2("no-underline", { textDecorationLine: "none" }), gt("underline-offset-", "textUnderlineOffset"), mt2("decoration-", { section: "textDecorationColor", opacityVariable: false, opacitySection: "opacity" }), gt("decoration-", "textDecorationThickness"), yt2("decoration-", "textDecorationStyle"), yt2("(uppercase|lowercase|capitalize)", "textTransform"), yt2("normal-case", { textTransform: "none" }), yt2("truncate", { overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }), yt2("align-", "verticalAlign"), yt2("whitespace-", "whiteSpace"), yt2("break-normal", { wordBreak: "normal", overflowWrap: "normal" }), yt2("break-words", { overflowWrap: "break-word" }), yt2("break-all", { wordBreak: "break-all" }), mt2("caret-", { opacityVariable: false, opacitySection: "opacity" }), mt2("accent-", { opacityVariable: false, opacitySection: "opacity" }), yt2("bg-gradient-to-([trbl]|[tb][rl])", "backgroundImage", ({ 1: t4 }) => `linear-gradient(to ${p3(t4, " ")},var(--tw-gradient-stops))`), mt2("from-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t4 }) => ({ "--tw-gradient-from": t4.value, "--tw-gradient-to": t4.color({ opacityValue: "0" }), "--tw-gradient-stops": "var(--tw-gradient-from),var(--tw-gradient-to)" })), mt2("via-", { section: "gradientColorStops", opacityVariable: false, opacitySection: "opacity" }, ({ _: t4 }) => ({ "--tw-gradient-to": t4.color({ opacityValue: "0" }), "--tw-gradient-stops": `var(--tw-gradient-from),${t4.value},var(--tw-gradient-to)` })), mt2("to-", { section: "gradientColorStops", property: "--tw-gradient-to", opacityVariable: false, opacitySection: "opacity" }), yt2("bg-(fixed|local|scroll)", "backgroundAttachment"), yt2("bg-origin-(border|padding|content)", "backgroundOrigin", ({ 1: t4 }) => t4 + "-box"), yt2(["bg-(no-repeat|repeat(-[xy])?)", "bg-repeat-(round|space)"], "backgroundRepeat"), yt2("bg-blend-", "backgroundBlendMode"), yt2("bg-clip-(border|padding|content|text)", "backgroundClip", ({ 1: t4 }) => t4 + (t4 == "text" ? "" : "-box")), gt("bg-opacity-", "backgroundOpacity", "--tw-bg-opacity"), mt2("bg-", { section: "backgroundColor" }), gt("bg-", "backgroundImage"), gt("bg-", "backgroundPosition"), yt2("bg-(top|bottom|center|(left|right)(-(top|bottom))?)", "backgroundPosition", u2), gt("bg-", "backgroundSize"), gt("rounded(?:$|-)", "borderRadius"), gt("rounded-([trbl]|[tb][rl])(?:$|-)", "borderRadius", ({ 1: t4, _: r }) => {
  let a2 = { t: ["tl", "tr"], r: ["tr", "br"], b: ["bl", "br"], l: ["bl", "tl"] }[t4] || [t4, t4];
  return { [`border-${p3(a2[0])}-radius`]: r, [`border-${p3(a2[1])}-radius`]: r };
}), yt2("border-(collapse|separate)", "borderCollapse"), gt("border-opacity(?:$|-)", "borderOpacity", "--tw-border-opacity"), yt2("border-(solid|dashed|dotted|double|none)", "borderStyle"), gt("border-spacing(-[xy])?(?:$|-)", "borderSpacing", ({ 1: t4, _: r }) => ({ "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-border-spacing-x": 0, "--tw-border-spacing-y": 0 } }, ["--tw-border-spacing" + (t4 || "-x")]: r, ["--tw-border-spacing" + (t4 || "-y")]: r, "border-spacing": "var(--tw-border-spacing-x) var(--tw-border-spacing-y)" })), mt2("border-([xytrbl])-", { section: "borderColor" }, w4("border", "Color")), mt2("border-"), gt("border-([xytrbl])(?:$|-)", "borderWidth", w4("border", "Width")), gt("border(?:$|-)", "borderWidth"), gt("divide-opacity(?:$|-)", "divideOpacity", ({ _: t4 }) => ({ "&>:not([hidden])~:not([hidden])": { "--tw-divide-opacity": t4 } })), yt2("divide-(solid|dashed|dotted|double|none)", ({ 1: t4 }) => ({ "&>:not([hidden])~:not([hidden])": { borderStyle: t4 } })), yt2("divide-([xy]-reverse)", ({ 1: t4 }) => ({ "&>:not([hidden])~:not([hidden])": { ["--tw-divide-" + t4]: "1" } })), gt("divide-([xy])(?:$|-)", "divideWidth", ({ 1: t4, _: r }) => {
  let a2 = { x: "lr", y: "tb" }[t4];
  return { "&>:not([hidden])~:not([hidden])": { [`--tw-divide-${t4}-reverse`]: "0", [`border-${p3(a2[0])}Width`]: `calc(${r} * calc(1 - var(--tw-divide-${t4}-reverse)))`, [`border-${p3(a2[1])}Width`]: `calc(${r} * var(--tw-divide-${t4}-reverse))` } };
}), mt2("divide-", { property: "borderColor", selector: "&>:not([hidden])~:not([hidden])" }), gt("ring-opacity(?:$|-)", "ringOpacity", "--tw-ring-opacity"), mt2("ring-offset-", { property: "--tw-ring-offset-color", opacityVariable: false }), gt("ring-offset(?:$|-)", "ringOffsetWidth", "--tw-ring-offset-width"), yt2("ring-inset", { "--tw-ring-inset": "inset" }), mt2("ring-", { property: "--tw-ring-color" }), gt("ring(?:$|-)", "ringWidth", ({ _: t4 }, { theme: r }) => ({ "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)", "--tw-ring-shadow": `var(--tw-ring-inset) 0 0 0 calc(${t4} + var(--tw-ring-offset-width)) var(--tw-ring-color)`, boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000", "&": { "--tw-ring-inset": "var(--tw-empty,/*!*/ /*!*/)", "--tw-ring-offset-width": r("ringOffsetWidth", "", "0px"), "--tw-ring-offset-color": P2(r("ringOffsetColor", "", "#fff")), "--tw-ring-color": P2(r("ringColor", "", "#93c5fd"), { opacityVariable: "--tw-ring-opacity" }), "--tw-ring-opacity": r("ringOpacity", "", "0.5") } } } })), mt2("shadow-", { section: "boxShadowColor", opacityVariable: false, opacitySection: "opacity" }, ({ _: t4 }) => ({ "--tw-shadow-color": t4.value, "--tw-shadow": "var(--tw-shadow-colored)" })), gt("shadow(?:$|-)", "boxShadow", ({ _: t4 }) => ({ "--tw-shadow": s4(t4), "--tw-shadow-colored": s4(t4).replace(/([^,]\s+)(?:#[a-f\d]+|(?:(?:hsl|rgb)a?|hwb|lab|lch|color|var)\(.+?\)|[a-z]+)(,|$)/g, "$1var(--tw-shadow-color)$2"), boxShadow: "var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-ring-offset-shadow": "0 0 #0000", "--tw-ring-shadow": "0 0 #0000", "--tw-shadow": "0 0 #0000", "--tw-shadow-colored": "0 0 #0000" } } })), gt("(opacity)-"), yt2("mix-blend-", "mixBlendMode"), ...k3(), ...k3("backdrop-"), gt("transition(?:$|-)", "transitionProperty", (t4, { theme: r }) => ({ transitionProperty: s4(t4), transitionTimingFunction: t4._ == "none" ? void 0 : s4(r("transitionTimingFunction", "")), transitionDuration: t4._ == "none" ? void 0 : s4(r("transitionDuration", "")) })), gt("duration(?:$|-)", "transitionDuration", "transitionDuration", s4), gt("ease(?:$|-)", "transitionTimingFunction", "transitionTimingFunction", s4), gt("delay(?:$|-)", "transitionDelay", "transitionDelay", s4), gt("animate(?:$|-)", "animation", (t4, { theme: r, h: a2 }) => {
  let i4 = s4(t4), l4 = i4.split(" "), d4 = r("keyframes", l4[0]);
  return d4 ? { ["@keyframes " + (l4[0] = a2(l4[0]))]: d4, animation: l4.join(" ") } : { animation: i4 };
}), "(transform)-(none)", yt2("transform", h2), yt2("transform-(cpu|gpu)", ({ 1: t4 }) => ({ "--tw-transform": C4(t4 == "gpu") })), gt("scale(-[xy])?-", "scale", ({ 1: t4, _: r }) => ({ ["--tw-scale" + (t4 || "-x")]: r, ["--tw-scale" + (t4 || "-y")]: r, ...h2() })), gt("-?(rotate)-", "rotate", y3), gt("-?(translate-[xy])-", "translate", y3), gt("-?(skew-[xy])-", "skew", y3), yt2("origin-(center|((top|bottom)(-(left|right))?)|left|right)", "transformOrigin", u2), "(appearance)-", gt("(columns)-"), "(columns)-(\\d+)", "(break-(?:before|after|inside))-", gt("(cursor)-"), "(cursor)-", yt2("snap-(none)", "scroll-snap-type"), yt2("snap-(x|y|both)", ({ 1: t4 }) => ({ "scroll-snap-type": t4 + " var(--tw-scroll-snap-strictness)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-scroll-snap-strictness": "proximity" } } })), yt2("snap-(mandatory|proximity)", "--tw-scroll-snap-strictness"), yt2("snap-(?:(start|end|center)|align-(none))", "scroll-snap-align"), yt2("snap-(normal|always)", "scroll-snap-stop"), yt2("scroll-(auto|smooth)", "scroll-behavior"), gt("scroll-p([xytrbl])?(?:$|-)", "padding", w4("scroll-padding")), gt("-?scroll-m([xytrbl])?(?:$|-)", "scroll-margin", w4("scroll-margin")), yt2("touch-(auto|none|manipulation)", "touch-action"), yt2("touch-(pinch-zoom|pan-(?:(x|left|right)|(y|up|down)))", ({ 1: t4, 2: r, 3: a2 }) => ({ [`--tw-${r ? "pan-x" : a2 ? "pan-y" : t4}`]: t4, "touch-action": "var(--tw-touch-action)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-pan-x": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pan-y": "var(--tw-empty,/*!*/ /*!*/)", "--tw-pinch-zoom": "var(--tw-empty,/*!*/ /*!*/)", "--tw-touch-action": "var(--tw-pan-x) var(--tw-pan-y) var(--tw-pinch-zoom)" } } })), yt2("outline-none", { outline: "2px solid transparent", "outline-offset": "2px" }), yt2("outline", { outlineStyle: "solid" }), yt2("outline-(dashed|dotted|double|hidden)", "outlineStyle"), gt("(outline-offset)-"), mt2("outline-", { opacityVariable: false, opacitySection: "opacity" }), gt("outline-", "outlineWidth"), "(pointer-events)-", gt("(will-change)-"), "(will-change)-", ["resize(?:-(none|x|y))?", "resize", ({ 1: t4 }) => ({ x: "horizontal", y: "vertical" })[t4] || t4 || "both"], yt2("select-(none|text|all|auto)", "userSelect"), mt2("fill-", { section: "fill", opacityVariable: false, opacitySection: "opacity" }), mt2("stroke-", { section: "stroke", opacityVariable: false, opacitySection: "opacity" }), gt("stroke-", "strokeWidth"), yt2("sr-only", { position: "absolute", width: "1px", height: "1px", padding: "0", margin: "-1px", overflow: "hidden", whiteSpace: "nowrap", clip: "rect(0,0,0,0)", borderWidth: "0" }), yt2("not-sr-only", { position: "static", width: "auto", height: "auto", padding: "0", margin: "0", overflow: "visible", whiteSpace: "normal", clip: "auto" })];
function u2(t4) {
  return (typeof t4 == "string" ? t4 : t4[1]).replace(/-/g, " ").trim();
}
function v2(t4) {
  return (typeof t4 == "string" ? t4 : t4[1]).replace("col", "column");
}
function p3(t4, r = "-") {
  let a2 = [];
  for (let i4 of t4)
    a2.push({ t: "top", r: "right", b: "bottom", l: "left" }[i4]);
  return a2.join(r);
}
function s4(t4) {
  return t4 && "" + (t4._ || t4);
}
function x3({ $$: t4 }) {
  return ({ r: "flex-", "": "flex-", w: "space-", u: "space-", n: "space-" }[t4[3] || ""] || "") + t4;
}
function w4(t4, r = "") {
  return ({ 1: a2, _: i4 }) => {
    let l4 = { x: "lr", y: "tb" }[a2] || a2 + a2;
    return l4 ? { ...He(t4 + "-" + p3(l4[0]) + r, i4), ...He(t4 + "-" + p3(l4[1]) + r, i4) } : He(t4 + r, i4);
  };
}
function k3(t4 = "") {
  let r = ["blur", "brightness", "contrast", "grayscale", "hue-rotate", "invert", t4 && "opacity", "saturate", "sepia", !t4 && "drop-shadow"].filter(Boolean), a2 = {};
  for (let i4 of r)
    a2[`--tw-${t4}${i4}`] = "var(--tw-empty,/*!*/ /*!*/)";
  return a2 = { [`${t4}filter`]: r.map((i4) => `var(--tw-${t4}${i4})`).join(" "), "@layer defaults": { "*,::before,::after,::backdrop": a2 } }, [`(${t4}filter)-(none)`, yt2(`${t4}filter`, a2), ...r.map((i4) => gt(`${i4[0] == "h" ? "-?" : ""}(${t4}${i4})(?:$|-)`, i4, ({ 1: l4, _: d4 }) => ({ [`--tw-${l4}`]: b3(d4).map((g5) => `${i4}(${g5})`).join(" "), ...a2 })))];
}
function y3({ 1: t4, _: r }) {
  return { ["--tw-" + t4]: r, ...h2() };
}
function h2() {
  return { transform: "var(--tw-transform)", "@layer defaults": { "*,::before,::after,::backdrop": { "--tw-translate-x": "0", "--tw-translate-y": "0", "--tw-rotate": "0", "--tw-skew-x": "0", "--tw-skew-y": "0", "--tw-scale-x": "1", "--tw-scale-y": "1", "--tw-transform": C4() } } };
}
function C4(t4) {
  return [t4 ? "translate3d(var(--tw-translate-x),var(--tw-translate-y),0)" : "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))", "rotate(var(--tw-rotate))", "skewX(var(--tw-skew-x))", "skewY(var(--tw-skew-y))", "scaleX(var(--tw-scale-x))", "scaleY(var(--tw-scale-y))"].join(" ");
}
function S5({ 1: t4, 2: r }) {
  return `${t4} ${r} / ${t4} ${r}`;
}
function $2({ 1: t4 }) {
  return `repeat(${t4},minmax(0,1fr))`;
}

// https://esm.sh/v103/notie@4.3.1/deno/notie.js
var Me2 = Object.create;
var xe3 = Object.defineProperty;
var He2 = Object.getOwnPropertyDescriptor;
var Se2 = Object.getOwnPropertyNames;
var we2 = Object.getPrototypeOf;
var Oe = Object.prototype.hasOwnProperty;
var Ae2 = (y4, o4) => () => (o4 || y4((o4 = { exports: {} }).exports, o4), o4.exports);
var De = (y4, o4, v4, b5) => {
  if (o4 && typeof o4 == "object" || typeof o4 == "function")
    for (let m4 of Se2(o4))
      !Oe.call(y4, m4) && m4 !== v4 && xe3(y4, m4, { get: () => o4[m4], enumerable: !(b5 = He2(o4, m4)) || b5.enumerable });
  return y4;
};
var Ie = (y4, o4, v4) => (v4 = y4 != null ? Me2(we2(y4)) : {}, De(o4 || !y4 || !y4.__esModule ? xe3(v4, "default", { value: y4, enumerable: true }) : v4, y4));
var ye2 = Ae2((ie3, pe2) => {
  (function(y4, o4) {
    typeof ie3 == "object" && typeof pe2 == "object" ? pe2.exports = o4() : typeof define == "function" && define.amd ? define([], o4) : typeof ie3 == "object" ? ie3.notie = o4() : y4.notie = o4();
  })(ie3, function() {
    return function(y4) {
      function o4(b5) {
        if (v4[b5])
          return v4[b5].exports;
        var m4 = v4[b5] = { i: b5, l: false, exports: {} };
        return y4[b5].call(m4.exports, m4, m4.exports, o4), m4.l = true, m4.exports;
      }
      var v4 = {};
      return o4.m = y4, o4.c = v4, o4.i = function(b5) {
        return b5;
      }, o4.d = function(b5, m4, ce3) {
        o4.o(b5, m4) || Object.defineProperty(b5, m4, { configurable: false, enumerable: true, get: ce3 });
      }, o4.n = function(b5) {
        var m4 = b5 && b5.__esModule ? function() {
          return b5.default;
        } : function() {
          return b5;
        };
        return o4.d(m4, "a", m4), m4;
      }, o4.o = function(b5, m4) {
        return Object.prototype.hasOwnProperty.call(b5, m4);
      }, o4.p = "", o4(o4.s = 1);
    }([function(y4, o4) {
      y4.exports = function(v4) {
        return v4.webpackPolyfill || (v4.deprecate = function() {
        }, v4.paths = [], v4.children || (v4.children = []), Object.defineProperty(v4, "loaded", { enumerable: true, get: function() {
          return v4.l;
        } }), Object.defineProperty(v4, "id", { enumerable: true, get: function() {
          return v4.i;
        } }), v4.webpackPolyfill = 1), v4;
      };
    }, function(y4, o4, v4) {
      "use strict";
      (function(b5) {
        var m4, ce3, re3, V5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(A4) {
          return typeof A4;
        } : function(A4) {
          return A4 && typeof Symbol == "function" && A4.constructor === Symbol && A4 !== Symbol.prototype ? "symbol" : typeof A4;
        };
        (function(A4, u4) {
          V5(o4) === "object" && V5(b5) === "object" ? b5.exports = u4() : (ce3 = [], m4 = u4, re3 = typeof m4 == "function" ? m4.apply(o4, ce3) : m4, re3 !== void 0 && (b5.exports = re3));
        })(void 0, function() {
          return function(A4) {
            function u4(g5) {
              if (X5[g5])
                return X5[g5].exports;
              var T6 = X5[g5] = { i: g5, l: false, exports: {} };
              return A4[g5].call(T6.exports, T6, T6.exports, u4), T6.l = true, T6.exports;
            }
            var X5 = {};
            return u4.m = A4, u4.c = X5, u4.i = function(g5) {
              return g5;
            }, u4.d = function(g5, T6, B5) {
              u4.o(g5, T6) || Object.defineProperty(g5, T6, { configurable: false, enumerable: true, get: B5 });
            }, u4.n = function(g5) {
              var T6 = g5 && g5.__esModule ? function() {
                return g5.default;
              } : function() {
                return g5;
              };
              return u4.d(T6, "a", T6), T6;
            }, u4.o = function(g5, T6) {
              return Object.prototype.hasOwnProperty.call(g5, T6);
            }, u4.p = "", u4(u4.s = 0);
          }([function(A4, u4, X5) {
            function g5(t4, c3) {
              var s6 = {};
              for (var d4 in t4)
                c3.indexOf(d4) >= 0 || Object.prototype.hasOwnProperty.call(t4, d4) && (s6[d4] = t4[d4]);
              return s6;
            }
            Object.defineProperty(u4, "__esModule", { value: true });
            var T6 = typeof Symbol == "function" && V5(Symbol.iterator) === "symbol" ? function(t4) {
              return typeof t4 > "u" ? "undefined" : V5(t4);
            } : function(t4) {
              return t4 && typeof Symbol == "function" && t4.constructor === Symbol && t4 !== Symbol.prototype ? "symbol" : typeof t4 > "u" ? "undefined" : V5(t4);
            }, B5 = Object.assign || function(t4) {
              for (var c3 = 1; c3 < arguments.length; c3++) {
                var s6 = arguments[c3];
                for (var d4 in s6)
                  Object.prototype.hasOwnProperty.call(s6, d4) && (t4[d4] = s6[d4]);
              }
              return t4;
            }, J3 = { top: "top", bottom: "bottom" }, e3 = { alertTime: 3, dateMonths: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], overlayClickDismiss: true, overlayOpacity: 0.75, transitionCurve: "ease", transitionDuration: 0.3, transitionSelector: "all", classes: { container: "notie-container", textbox: "notie-textbox", textboxInner: "notie-textbox-inner", button: "notie-button", element: "notie-element", elementHalf: "notie-element-half", elementThird: "notie-element-third", overlay: "notie-overlay", backgroundSuccess: "notie-background-success", backgroundWarning: "notie-background-warning", backgroundError: "notie-background-error", backgroundInfo: "notie-background-info", backgroundNeutral: "notie-background-neutral", backgroundOverlay: "notie-background-overlay", alert: "notie-alert", inputField: "notie-input-field", selectChoiceRepeated: "notie-select-choice-repeated", dateSelectorInner: "notie-date-selector-inner", dateSelectorUp: "notie-date-selector-up" }, ids: { overlay: "notie-overlay" }, positions: { alert: J3.top, force: J3.top, confirm: J3.top, input: J3.top, select: J3.bottom, date: J3.top } }, ge2 = u4.setOptions = function(t4) {
              e3 = B5({}, e3, t4, { classes: B5({}, e3.classes, t4.classes), ids: B5({}, e3.ids, t4.ids), positions: B5({}, e3.positions, t4.positions) });
            }, fe = function() {
              return new Promise(function(t4) {
                return setTimeout(t4, 0);
              });
            }, oe3 = function(t4) {
              return new Promise(function(c3) {
                return setTimeout(c3, 1e3 * t4);
              });
            }, R6 = function() {
              document.activeElement && document.activeElement.blur();
            }, W6 = function() {
              var t4 = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c3) {
                var s6 = 16 * Math.random() | 0, d4 = c3 === "x" ? s6 : 3 & s6 | 8;
                return d4.toString(16);
              });
              return "notie-" + t4;
            }, le2 = { 1: e3.classes.backgroundSuccess, success: e3.classes.backgroundSuccess, 2: e3.classes.backgroundWarning, warning: e3.classes.backgroundWarning, 3: e3.classes.backgroundError, error: e3.classes.backgroundError, 4: e3.classes.backgroundInfo, info: e3.classes.backgroundInfo, 5: e3.classes.backgroundNeutral, neutral: e3.classes.backgroundNeutral }, me2 = function() {
              return e3.transitionSelector + " " + e3.transitionDuration + "s " + e3.transitionCurve;
            }, $4 = function(t4) {
              return t4.keyCode === 13;
            }, ee3 = function(t4) {
              return t4.keyCode === 27;
            }, K4 = function(t4, c3) {
              t4.classList.add(e3.classes.container), t4.style[c3] = "-10000px", document.body.appendChild(t4), t4.style[c3] = "-" + t4.offsetHeight + "px", t4.listener && window.addEventListener("keydown", t4.listener), fe().then(function() {
                t4.style.transition = me2(), t4.style[c3] = 0;
              });
            }, O4 = function(t4, c3) {
              var s6 = document.getElementById(t4);
              s6 && (s6.style[c3] = "-" + s6.offsetHeight + "px", s6.listener && window.removeEventListener("keydown", s6.listener), oe3(e3.transitionDuration).then(function() {
                s6.parentNode && s6.parentNode.removeChild(s6);
              }));
            }, te = function(t4, c3) {
              var s6 = document.createElement("div");
              s6.id = e3.ids.overlay, s6.classList.add(e3.classes.overlay), s6.classList.add(e3.classes.backgroundOverlay), s6.style.opacity = 0, t4 && e3.overlayClickDismiss && (s6.onclick = function() {
                O4(t4.id, c3), j5();
              }), document.body.appendChild(s6), fe().then(function() {
                s6.style.transition = me2(), s6.style.opacity = e3.overlayOpacity;
              });
            }, j5 = function() {
              var t4 = document.getElementById(e3.ids.overlay);
              t4.style.opacity = 0, oe3(e3.transitionDuration).then(function() {
                t4.parentNode && t4.parentNode.removeChild(t4);
              });
            }, F7 = u4.hideAlerts = function(t4) {
              var c3 = document.getElementsByClassName(e3.classes.alert);
              if (c3.length) {
                for (var s6 = 0; s6 < c3.length; s6++) {
                  var d4 = c3[s6];
                  O4(d4.id, d4.position);
                }
                t4 && oe3(e3.transitionDuration).then(function() {
                  return t4();
                });
              }
            }, he2 = u4.alert = function(t4) {
              var c3 = t4.type, s6 = c3 === void 0 ? 4 : c3, d4 = t4.text, i4 = t4.time, k5 = i4 === void 0 ? e3.alertTime : i4, H5 = t4.stay, S8 = H5 !== void 0 && H5, h3 = t4.position, p6 = h3 === void 0 ? e3.positions.alert || p6.top : h3;
              R6(), F7();
              var l4 = document.createElement("div"), f2 = W6();
              l4.id = f2, l4.position = p6, l4.classList.add(e3.classes.textbox), l4.classList.add(le2[s6]), l4.classList.add(e3.classes.alert), l4.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>", l4.onclick = function() {
                return O4(f2, p6);
              }, l4.listener = function(n3) {
                ($4(n3) || ee3(n3)) && F7();
              }, K4(l4, p6), k5 && k5 < 1 && (k5 = 1), !S8 && k5 && oe3(k5).then(function() {
                return O4(f2, p6);
              });
            }, ke2 = u4.force = function(t4, c3) {
              var s6 = t4.type, d4 = s6 === void 0 ? 5 : s6, i4 = t4.text, k5 = t4.buttonText, H5 = k5 === void 0 ? "OK" : k5, S8 = t4.callback, h3 = t4.position, p6 = h3 === void 0 ? e3.positions.force || p6.top : h3;
              R6(), F7();
              var l4 = document.createElement("div"), f2 = W6();
              l4.id = f2;
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.textbox), n3.classList.add(e3.classes.backgroundInfo), n3.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + i4 + "</div>";
              var r = document.createElement("div");
              r.classList.add(e3.classes.button), r.classList.add(le2[d4]), r.innerHTML = H5, r.onclick = function() {
                O4(f2, p6), j5(), S8 ? S8() : c3 && c3();
              }, l4.appendChild(n3), l4.appendChild(r), l4.listener = function(C6) {
                $4(C6) && r.click();
              }, K4(l4, p6), te();
            }, Ce2 = u4.confirm = function(t4, c3, s6) {
              var d4 = t4.text, i4 = t4.submitText, k5 = i4 === void 0 ? "Yes" : i4, H5 = t4.cancelText, S8 = H5 === void 0 ? "Cancel" : H5, h3 = t4.submitCallback, p6 = t4.cancelCallback, l4 = t4.position, f2 = l4 === void 0 ? e3.positions.confirm || f2.top : l4;
              R6(), F7();
              var n3 = document.createElement("div"), r = W6();
              n3.id = r;
              var C6 = document.createElement("div");
              C6.classList.add(e3.classes.textbox), C6.classList.add(e3.classes.backgroundInfo), C6.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>";
              var x5 = document.createElement("div");
              x5.classList.add(e3.classes.button), x5.classList.add(e3.classes.elementHalf), x5.classList.add(e3.classes.backgroundSuccess), x5.innerHTML = k5, x5.onclick = function() {
                O4(r, f2), j5(), h3 ? h3() : c3 && c3();
              };
              var a2 = document.createElement("div");
              a2.classList.add(e3.classes.button), a2.classList.add(e3.classes.elementHalf), a2.classList.add(e3.classes.backgroundError), a2.innerHTML = S8, a2.onclick = function() {
                O4(r, f2), j5(), p6 ? p6() : s6 && s6();
              }, n3.appendChild(C6), n3.appendChild(x5), n3.appendChild(a2), n3.listener = function(E3) {
                $4(E3) ? x5.click() : ee3(E3) && a2.click();
              }, K4(n3, f2), te(n3, f2);
            }, ve2 = function(t4, c3, s6) {
              var d4 = t4.text, i4 = t4.submitText, k5 = i4 === void 0 ? "Submit" : i4, H5 = t4.cancelText, S8 = H5 === void 0 ? "Cancel" : H5, h3 = t4.submitCallback, p6 = t4.cancelCallback, l4 = t4.position, f2 = l4 === void 0 ? e3.positions.input || f2.top : l4, n3 = g5(t4, ["text", "submitText", "cancelText", "submitCallback", "cancelCallback", "position"]);
              R6(), F7();
              var r = document.createElement("div"), C6 = W6();
              r.id = C6;
              var x5 = document.createElement("div");
              x5.classList.add(e3.classes.textbox), x5.classList.add(e3.classes.backgroundInfo), x5.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + d4 + "</div>";
              var a2 = document.createElement("input");
              a2.classList.add(e3.classes.inputField), a2.setAttribute("autocapitalize", n3.autocapitalize || "none"), a2.setAttribute("autocomplete", n3.autocomplete || "off"), a2.setAttribute("autocorrect", n3.autocorrect || "off"), a2.setAttribute("autofocus", n3.autofocus || "true"), a2.setAttribute("inputmode", n3.inputmode || "verbatim"), a2.setAttribute("max", n3.max || ""), a2.setAttribute("maxlength", n3.maxlength || ""), a2.setAttribute("min", n3.min || ""), a2.setAttribute("minlength", n3.minlength || ""), a2.setAttribute("placeholder", n3.placeholder || ""), a2.setAttribute("spellcheck", n3.spellcheck || "default"), a2.setAttribute("step", n3.step || "any"), a2.setAttribute("type", n3.type || "text"), a2.value = n3.value || "", n3.allowed && (a2.oninput = function() {
                var M5 = void 0;
                if (Array.isArray(n3.allowed)) {
                  for (var w6 = "", _2 = n3.allowed, P5 = 0; P5 < _2.length; P5++)
                    _2[P5] === "an" ? w6 += "0-9a-zA-Z" : _2[P5] === "a" ? w6 += "a-zA-Z" : _2[P5] === "n" && (w6 += "0-9"), _2[P5] === "s" && (w6 += " ");
                  M5 = new RegExp("[^" + w6 + "]", "g");
                } else
                  T6(n3.allowed) === "object" && (M5 = n3.allowed);
                a2.value = a2.value.replace(M5, "");
              });
              var E3 = document.createElement("div");
              E3.classList.add(e3.classes.button), E3.classList.add(e3.classes.elementHalf), E3.classList.add(e3.classes.backgroundSuccess), E3.innerHTML = k5, E3.onclick = function() {
                O4(C6, f2), j5(), h3 ? h3(a2.value) : c3 && c3(a2.value);
              };
              var D6 = document.createElement("div");
              D6.classList.add(e3.classes.button), D6.classList.add(e3.classes.elementHalf), D6.classList.add(e3.classes.backgroundError), D6.innerHTML = S8, D6.onclick = function() {
                O4(C6, f2), j5(), p6 ? p6(a2.value) : s6 && s6(a2.value);
              }, r.appendChild(x5), r.appendChild(a2), r.appendChild(E3), r.appendChild(D6), r.listener = function(M5) {
                $4(M5) ? E3.click() : ee3(M5) && D6.click();
              }, K4(r, f2), a2.focus(), te(r, f2);
            };
            u4.input = ve2;
            var Ee2 = u4.select = function(t4, c3) {
              var s6 = t4.text, d4 = t4.cancelText, i4 = d4 === void 0 ? "Cancel" : d4, k5 = t4.cancelCallback, H5 = t4.choices, S8 = t4.position, h3 = S8 === void 0 ? e3.positions.select || h3.top : S8;
              R6(), F7();
              var p6 = document.createElement("div"), l4 = W6();
              p6.id = l4;
              var f2 = document.createElement("div");
              f2.classList.add(e3.classes.textbox), f2.classList.add(e3.classes.backgroundInfo), f2.innerHTML = '<div class="' + e3.classes.textboxInner + '">' + s6 + "</div>", p6.appendChild(f2), H5.forEach(function(r, C6) {
                var x5 = r.type, a2 = x5 === void 0 ? 1 : x5, E3 = r.text, D6 = r.handler, M5 = document.createElement("div");
                M5.classList.add(le2[a2]), M5.classList.add(e3.classes.button), M5.classList.add(e3.classes.selectChoice);
                var w6 = H5[C6 + 1];
                w6 && !w6.type && (w6.type = 1), w6 && w6.type === a2 && M5.classList.add(e3.classes.selectChoiceRepeated), M5.innerHTML = E3, M5.onclick = function() {
                  O4(l4, h3), j5(), D6();
                }, p6.appendChild(M5);
              });
              var n3 = document.createElement("div");
              n3.classList.add(e3.classes.backgroundNeutral), n3.classList.add(e3.classes.button), n3.innerHTML = i4, n3.onclick = function() {
                O4(l4, h3), j5(), k5 ? k5() : c3 && c3();
              }, p6.appendChild(n3), p6.listener = function(r) {
                ee3(r) && n3.click();
              }, K4(p6, h3), te(p6, h3);
            }, Te = u4.date = function(t4, c3, s6) {
              var d4 = t4.value, i4 = d4 === void 0 ? new Date() : d4, k5 = t4.submitText, H5 = k5 === void 0 ? "OK" : k5, S8 = t4.cancelText, h3 = S8 === void 0 ? "Cancel" : S8, p6 = t4.submitCallback, l4 = t4.cancelCallback, f2 = t4.position, n3 = f2 === void 0 ? e3.positions.date || n3.top : f2;
              R6(), F7();
              var r = "&#9662", C6 = document.createElement("div"), x5 = document.createElement("div"), a2 = document.createElement("div"), E3 = function(L5) {
                C6.innerHTML = e3.dateMonths[L5.getMonth()], x5.innerHTML = L5.getDate(), a2.innerHTML = L5.getFullYear();
              }, D6 = function(L5) {
                var N6 = new Date(i4.getFullYear(), i4.getMonth() + 1, 0).getDate(), Q5 = L5.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 2);
                Number(Q5) > N6 && (Q5 = N6.toString()), L5.target.textContent = Q5, Number(Q5) < 1 && (Q5 = "1"), i4.setDate(Number(Q5));
              }, M5 = function(L5) {
                var N6 = L5.target.textContent.replace(/^0+/, "").replace(/[^\d]/g, "").slice(0, 4);
                L5.target.textContent = N6, i4.setFullYear(Number(N6));
              }, w6 = function(L5) {
                E3(i4);
              }, _2 = function(L5) {
                var N6 = new Date(i4.getFullYear(), i4.getMonth() + L5 + 1, 0).getDate();
                i4.getDate() > N6 && i4.setDate(N6), i4.setMonth(i4.getMonth() + L5), E3(i4);
              }, P5 = function(L5) {
                i4.setDate(i4.getDate() + L5), E3(i4);
              }, be = function(L5) {
                var N6 = i4.getFullYear() + L5;
                N6 < 0 ? i4.setFullYear(0) : i4.setFullYear(i4.getFullYear() + L5), E3(i4);
              }, Y5 = document.createElement("div"), de2 = W6();
              Y5.id = de2;
              var ue3 = document.createElement("div");
              ue3.classList.add(e3.classes.backgroundInfo);
              var I5 = document.createElement("div");
              I5.classList.add(e3.classes.dateSelectorInner);
              var Z4 = document.createElement("div");
              Z4.classList.add(e3.classes.button), Z4.classList.add(e3.classes.elementThird), Z4.classList.add(e3.classes.dateSelectorUp), Z4.innerHTML = r;
              var q5 = document.createElement("div");
              q5.classList.add(e3.classes.button), q5.classList.add(e3.classes.elementThird), q5.classList.add(e3.classes.dateSelectorUp), q5.innerHTML = r;
              var G5 = document.createElement("div");
              G5.classList.add(e3.classes.button), G5.classList.add(e3.classes.elementThird), G5.classList.add(e3.classes.dateSelectorUp), G5.innerHTML = r, C6.classList.add(e3.classes.element), C6.classList.add(e3.classes.elementThird), C6.innerHTML = e3.dateMonths[i4.getMonth()], x5.classList.add(e3.classes.element), x5.classList.add(e3.classes.elementThird), x5.setAttribute("contentEditable", true), x5.addEventListener("input", D6), x5.addEventListener("blur", w6), x5.innerHTML = i4.getDate(), a2.classList.add(e3.classes.element), a2.classList.add(e3.classes.elementThird), a2.setAttribute("contentEditable", true), a2.addEventListener("input", M5), a2.addEventListener("blur", w6), a2.innerHTML = i4.getFullYear();
              var ne3 = document.createElement("div");
              ne3.classList.add(e3.classes.button), ne3.classList.add(e3.classes.elementThird), ne3.innerHTML = r;
              var se2 = document.createElement("div");
              se2.classList.add(e3.classes.button), se2.classList.add(e3.classes.elementThird), se2.innerHTML = r;
              var ae3 = document.createElement("div");
              ae3.classList.add(e3.classes.button), ae3.classList.add(e3.classes.elementThird), ae3.innerHTML = r, Z4.onclick = function() {
                return _2(1);
              }, q5.onclick = function() {
                return P5(1);
              }, G5.onclick = function() {
                return be(1);
              }, ne3.onclick = function() {
                return _2(-1);
              }, se2.onclick = function() {
                return P5(-1);
              }, ae3.onclick = function() {
                return be(-1);
              };
              var z5 = document.createElement("div");
              z5.classList.add(e3.classes.button), z5.classList.add(e3.classes.elementHalf), z5.classList.add(e3.classes.backgroundSuccess), z5.innerHTML = H5, z5.onclick = function() {
                O4(de2, n3), j5(), p6 ? p6(i4) : c3 && c3(i4);
              };
              var U5 = document.createElement("div");
              U5.classList.add(e3.classes.button), U5.classList.add(e3.classes.elementHalf), U5.classList.add(e3.classes.backgroundError), U5.innerHTML = h3, U5.onclick = function() {
                O4(de2, n3), j5(), l4 ? l4(i4) : s6 && s6(i4);
              }, I5.appendChild(Z4), I5.appendChild(q5), I5.appendChild(G5), I5.appendChild(C6), I5.appendChild(x5), I5.appendChild(a2), I5.appendChild(ne3), I5.appendChild(se2), I5.appendChild(ae3), ue3.appendChild(I5), Y5.appendChild(ue3), Y5.appendChild(z5), Y5.appendChild(U5), Y5.listener = function(L5) {
                $4(L5) ? z5.click() : ee3(L5) && U5.click();
              }, K4(Y5, n3), te(Y5, n3);
            };
            u4.default = { alert: he2, force: ke2, confirm: Ce2, input: ve2, select: Ee2, date: Te, setOptions: ge2, hideAlerts: F7 };
          }]);
        });
      }).call(o4, v4(0)(y4));
    }]);
  });
});
var je = Ie(ye2());
var { default: Le, ...Ne2 } = je;
var Fe = Le !== void 0 ? Le : Ne2;

// https://esm.sh/v103/nanostores@0.7.1/deno/nanostores.js
var S6 = Symbol("clean");
var c2 = Symbol();

// https://esm.sh/v103/@nanostores/i18n@0.7.1/deno/i18n.js
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
function p5(r) {
  return (n3) => {
    if (n3.transform) {
      let e3 = n3.transform;
      return n3 = n3.input, { input: n3, transform(t4, o4, s6) {
        let f2 = r(t4, o4, ...s6);
        return (...l4) => e3(t4, f2, l4);
      } };
    } else
      return { input: n3, transform(e3, t4, o4) {
        return r(e3, t4, ...o4);
      } };
  };
}
var N4 = p5((r, n3, e3) => g3(n3, (t4) => {
  for (let o4 in e3)
    t4 = t4.replace(new RegExp(`{${o4}}`, "g"), e3[o4]);
  return t4;
}));
var R4 = p5((r, n3, e3) => {
  let t4 = new Intl.PluralRules(r).select(e3);
  return t4 in n3 || (t4 = "many"), g3(n3[t4], (o4) => o4.replace(/{count}/g, e3));
});

// https://esm.sh/v103/hotkeys-js@3.10.1/deno/hotkeys-js.js
var M3 = typeof navigator < "u" ? navigator.userAgent.toLowerCase().indexOf("firefox") > 0 : false;
function P3(e3, t4, i4, r) {
  e3.addEventListener ? e3.addEventListener(t4, i4, r) : e3.attachEvent && e3.attachEvent("on".concat(t4), function() {
    i4(window.event);
  });
}
function T5(e3, t4) {
  for (var i4 = t4.slice(0, t4.length - 1), r = 0; r < i4.length; r++)
    i4[r] = e3[i4[r].toLowerCase()];
  return i4;
}
function U4(e3) {
  typeof e3 != "string" && (e3 = ""), e3 = e3.replace(/\s/g, "");
  for (var t4 = e3.split(","), i4 = t4.lastIndexOf(""); i4 >= 0; )
    t4[i4 - 1] += ",", t4.splice(i4, 1), i4 = t4.lastIndexOf("");
  return t4;
}
function G4(e3, t4) {
  for (var i4 = e3.length >= t4.length ? e3 : t4, r = e3.length >= t4.length ? t4 : e3, n3 = true, a2 = 0; a2 < i4.length; a2++)
    r.indexOf(i4[a2]) === -1 && (n3 = false);
  return n3;
}
var b4 = { backspace: 8, "\u232B": 8, tab: 9, clear: 12, enter: 13, "\u21A9": 13, return: 13, esc: 27, escape: 27, space: 32, left: 37, up: 38, right: 39, down: 40, del: 46, delete: 46, ins: 45, insert: 45, home: 36, end: 35, pageup: 33, pagedown: 34, capslock: 20, num_0: 96, num_1: 97, num_2: 98, num_3: 99, num_4: 100, num_5: 101, num_6: 102, num_7: 103, num_8: 104, num_9: 105, num_multiply: 106, num_add: 107, num_enter: 108, num_subtract: 109, num_decimal: 110, num_divide: 111, "\u21EA": 20, ",": 188, ".": 190, "/": 191, "`": 192, "-": M3 ? 173 : 189, "=": M3 ? 61 : 187, ";": M3 ? 59 : 186, "'": 222, "[": 219, "]": 221, "\\": 220 };
var g4 = { "\u21E7": 16, shift: 16, "\u2325": 18, alt: 18, option: 18, "\u2303": 17, ctrl: 17, control: 17, "\u2318": 91, cmd: 91, command: 91 };
var L3 = { 16: "shiftKey", 18: "altKey", 17: "ctrlKey", 91: "metaKey", shiftKey: 16, ctrlKey: 17, altKey: 18, metaKey: 91 };
var u3 = { 16: false, 18: false, 17: false, 91: false };
var s5 = {};
for (O3 = 1; O3 < 20; O3++)
  b4["f".concat(O3)] = 111 + O3;
var O3;
var f = [];
var A3 = false;
var D5 = "all";
var H4 = [];
var C5 = function(t4) {
  return b4[t4.toLowerCase()] || g4[t4.toLowerCase()] || t4.toUpperCase().charCodeAt(0);
};
var R5 = function(t4) {
  return Object.keys(b4).find(function(i4) {
    return b4[i4] === t4;
  });
};
var V4 = function(t4) {
  return Object.keys(g4).find(function(i4) {
    return g4[i4] === t4;
  });
};
function F6(e3) {
  D5 = e3 || "all";
}
function E2() {
  return D5 || "all";
}
function X4() {
  return f.slice(0);
}
function $3() {
  return f.map(function(e3) {
    return R5(e3) || V4(e3) || String.fromCharCode(e3);
  });
}
function q4(e3) {
  var t4 = e3.target || e3.srcElement, i4 = t4.tagName, r = true;
  return (t4.isContentEditable || (i4 === "INPUT" || i4 === "TEXTAREA" || i4 === "SELECT") && !t4.readOnly) && (r = false), r;
}
function z4(e3) {
  return typeof e3 == "string" && (e3 = C5(e3)), f.indexOf(e3) !== -1;
}
function J2(e3, t4) {
  var i4, r;
  e3 || (e3 = E2());
  for (var n3 in s5)
    if (Object.prototype.hasOwnProperty.call(s5, n3))
      for (i4 = s5[n3], r = 0; r < i4.length; )
        i4[r].scope === e3 ? i4.splice(r, 1) : r++;
  E2() === e3 && F6(t4 || "all");
}
function N5(e3) {
  var t4 = e3.keyCode || e3.which || e3.charCode, i4 = f.indexOf(t4);
  if (i4 >= 0 && f.splice(i4, 1), e3.key && e3.key.toLowerCase() === "meta" && f.splice(0, f.length), (t4 === 93 || t4 === 224) && (t4 = 91), t4 in u3) {
    u3[t4] = false;
    for (var r in g4)
      g4[r] === t4 && (v3[r] = false);
  }
}
function Q4(e3) {
  if (typeof e3 > "u")
    Object.keys(s5).forEach(function(o4) {
      return delete s5[o4];
    });
  else if (Array.isArray(e3))
    e3.forEach(function(o4) {
      o4.key && S7(o4);
    });
  else if (typeof e3 == "object")
    e3.key && S7(e3);
  else if (typeof e3 == "string") {
    for (var t4 = arguments.length, i4 = new Array(t4 > 1 ? t4 - 1 : 0), r = 1; r < t4; r++)
      i4[r - 1] = arguments[r];
    var n3 = i4[0], a2 = i4[1];
    typeof n3 == "function" && (a2 = n3, n3 = ""), S7({ key: e3, scope: n3, method: a2, splitKey: "+" });
  }
}
var S7 = function(t4) {
  var i4 = t4.key, r = t4.scope, n3 = t4.method, a2 = t4.splitKey, o4 = a2 === void 0 ? "+" : a2, l4 = U4(i4);
  l4.forEach(function(c3) {
    var p6 = c3.split(o4), m4 = p6.length, y4 = p6[m4 - 1], d4 = y4 === "*" ? "*" : C5(y4);
    if (s5[d4]) {
      r || (r = E2());
      var K4 = m4 > 1 ? T5(g4, p6) : [];
      s5[d4] = s5[d4].filter(function(h3) {
        var w6 = n3 ? h3.method === n3 : true;
        return !(w6 && h3.scope === r && G4(h3.mods, K4));
      });
    }
  });
};
function _(e3, t4, i4, r) {
  if (t4.element === r) {
    var n3;
    if (t4.scope === i4 || t4.scope === "all") {
      n3 = t4.mods.length > 0;
      for (var a2 in u3)
        Object.prototype.hasOwnProperty.call(u3, a2) && (!u3[a2] && t4.mods.indexOf(+a2) > -1 || u3[a2] && t4.mods.indexOf(+a2) === -1) && (n3 = false);
      (t4.mods.length === 0 && !u3[16] && !u3[18] && !u3[17] && !u3[91] || n3 || t4.shortcut === "*") && t4.method(e3, t4) === false && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = false, e3.stopPropagation && e3.stopPropagation(), e3.cancelBubble && (e3.cancelBubble = true));
    }
  }
}
function k4(e3, t4) {
  var i4 = s5["*"], r = e3.keyCode || e3.which || e3.charCode;
  if (v3.filter.call(this, e3)) {
    if ((r === 93 || r === 224) && (r = 91), f.indexOf(r) === -1 && r !== 229 && f.push(r), ["ctrlKey", "altKey", "shiftKey", "metaKey"].forEach(function(h3) {
      var w6 = L3[h3];
      e3[h3] && f.indexOf(w6) === -1 ? f.push(w6) : !e3[h3] && f.indexOf(w6) > -1 ? f.splice(f.indexOf(w6), 1) : h3 === "metaKey" && e3[h3] && f.length === 3 && (e3.ctrlKey || e3.shiftKey || e3.altKey || (f = f.slice(f.indexOf(w6))));
    }), r in u3) {
      u3[r] = true;
      for (var n3 in g4)
        g4[n3] === r && (v3[n3] = true);
      if (!i4)
        return;
    }
    for (var a2 in u3)
      Object.prototype.hasOwnProperty.call(u3, a2) && (u3[a2] = e3[L3[a2]]);
    e3.getModifierState && !(e3.altKey && !e3.ctrlKey) && e3.getModifierState("AltGraph") && (f.indexOf(17) === -1 && f.push(17), f.indexOf(18) === -1 && f.push(18), u3[17] = true, u3[18] = true);
    var o4 = E2();
    if (i4)
      for (var l4 = 0; l4 < i4.length; l4++)
        i4[l4].scope === o4 && (e3.type === "keydown" && i4[l4].keydown || e3.type === "keyup" && i4[l4].keyup) && _(e3, i4[l4], o4, t4);
    if (r in s5) {
      for (var c3 = 0; c3 < s5[r].length; c3++)
        if ((e3.type === "keydown" && s5[r][c3].keydown || e3.type === "keyup" && s5[r][c3].keyup) && s5[r][c3].key) {
          for (var p6 = s5[r][c3], m4 = p6.splitKey, y4 = p6.key.split(m4), d4 = [], K4 = 0; K4 < y4.length; K4++)
            d4.push(C5(y4[K4]));
          d4.sort().join("") === f.sort().join("") && _(e3, p6, o4, t4);
        }
    }
  }
}
function W5(e3) {
  return H4.indexOf(e3) > -1;
}
function v3(e3, t4, i4) {
  f = [];
  var r = U4(e3), n3 = [], a2 = "all", o4 = document, l4 = 0, c3 = false, p6 = true, m4 = "+", y4 = false;
  for (i4 === void 0 && typeof t4 == "function" && (i4 = t4), Object.prototype.toString.call(t4) === "[object Object]" && (t4.scope && (a2 = t4.scope), t4.element && (o4 = t4.element), t4.keyup && (c3 = t4.keyup), t4.keydown !== void 0 && (p6 = t4.keydown), t4.capture !== void 0 && (y4 = t4.capture), typeof t4.splitKey == "string" && (m4 = t4.splitKey)), typeof t4 == "string" && (a2 = t4); l4 < r.length; l4++)
    e3 = r[l4].split(m4), n3 = [], e3.length > 1 && (n3 = T5(g4, e3)), e3 = e3[e3.length - 1], e3 = e3 === "*" ? "*" : C5(e3), e3 in s5 || (s5[e3] = []), s5[e3].push({ keyup: c3, keydown: p6, scope: a2, mods: n3, shortcut: r[l4], method: i4, key: r[l4], splitKey: m4, element: o4 });
  typeof o4 < "u" && !W5(o4) && window && (H4.push(o4), P3(o4, "keydown", function(d4) {
    k4(d4, o4);
  }, y4), A3 || (A3 = true, P3(window, "focus", function() {
    f = [];
  }, y4)), P3(o4, "keyup", function(d4) {
    k4(d4, o4), N5(d4);
  }, y4));
}
function Y4(e3) {
  var t4 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "all";
  Object.keys(s5).forEach(function(i4) {
    var r = s5[i4].filter(function(n3) {
      return n3.scope === t4 && n3.shortcut === e3;
    });
    r.forEach(function(n3) {
      n3 && n3.method && n3.method();
    });
  });
}
var j3 = { getPressedKeyString: $3, setScope: F6, getScope: E2, deleteScope: J2, getPressedKeyCodes: X4, isPressed: z4, filter: q4, trigger: Y4, unbind: Q4, keyMap: b4, modifier: g4, modifierMap: L3 };
for (x4 in j3)
  Object.prototype.hasOwnProperty.call(j3, x4) && (v3[x4] = j3[x4]);
var x4;
typeof document < "u" && (B4 = window.hotkeys, v3.noConflict = function(e3) {
  return e3 && window.hotkeys === v3 && (window.hotkeys = B4), v3;
}, window.hotkeys = v3);
var B4;

// deps.ts
var toast = Fe.alert;

// log.ts
var Timing = class {
  #t = performance.now();
  reset() {
    this.#t = performance.now();
  }
  stop(message) {
    const now = performance.now();
    const d4 = Math.round(now - this.#t);
    let cf = colors_exports.green;
    if (d4 > 1e4) {
      cf = colors_exports.red;
    } else if (d4 > 1e3) {
      cf = colors_exports.yellow;
    }
    console.debug(
      colors_exports.dim(brandName + " TIMING:"),
      message,
      "in",
      cf(d4 + "ms")
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

// utils/get_pdf_viewer_url.ts
function formatToPdfViewerUrl(url) {
  const pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl);
  const pdfViewUrlObj = new URL(pdfViewerRuntimeUrl);
  if (!isFirefox()) {
    pdfViewUrlObj.searchParams.set(
      "file",
      url
    );
  }
  return pdfViewUrlObj.href;
}

// utils/is_pdf_url.ts
function isPdfUrl(url) {
  const currentUrlObj = new URL(url);
  return currentUrlObj?.pathname.toLowerCase().endsWith(".pdf");
}

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
      log_default.error("parse response failed", _e3);
    }
    throw new CommonError(
      "fetchError",
      response.status + ": " + response.statusText || "",
      details
    );
  }
}

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
  if (matches.some((m4) => matchAll.includes(m4))) {
    return rawUrl;
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
      } else if (!match.includes("*") && match.includes("://")) {
        try {
          const matchUrl = new URL(match);
          if (matchUrl.pathname === "/" && !match.endsWith("/")) {
            return matchUrl.hostname === hostname2;
          } else {
            return isTwoUrlMatched(url, match);
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
      regex += path.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
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
function isTwoUrlMatched(url1, url2) {
  const urlObj1 = new URL(url1);
  const urlObj2 = new URL(url2);
  return urlObj1.hostname === urlObj2.hostname && urlObj1.pathname === urlObj2.pathname && urlObj1.protocol === urlObj2.protocol && urlObj1.port === urlObj2.port;
}

// utils/format_headers_by_rule.ts
function formatHeadersByRule(requestHeaders, rules) {
  const ruleMap = /* @__PURE__ */ new Map();
  for (const rule of rules) {
    ruleMap.set(rule.header.toLowerCase(), rule);
  }
  const addedHeaders = [];
  const newRequestHeaders = requestHeaders.filter(
    (header) => {
      const rule = ruleMap.get(header.name.toLowerCase());
      if (rule) {
        if (rule.operation === "remove") {
          return false;
        } else if (rule.operation === "set") {
          return false;
        }
      }
      return true;
    }
  );
  for (const rule of rules) {
    if (rule.operation === "set") {
      addedHeaders.push({
        name: rule.header,
        value: rule.value || ""
      });
    }
  }
  return newRequestHeaders.concat(addedHeaders);
}

// static/rules/request_modifier_rule.json
var request_modifier_rule_default = [
  {
    "id": 1,
    "priority": 1,
    "action": {
      "type": "modifyHeaders",
      "requestHeaders": [
        {
          "header": "Referer",
          "operation": "set",
          "value": "https://httpstat.us/429"
        },
        {
          "header": "origin",
          "operation": "set",
          "value": "https://httpstat.us/429"
        },
        {
          "header": "DNT",
          "operation": "set",
          "value": "1"
        },
        {
          "header": "cookie",
          "operation": "remove"
        },
        {
          "header": "sec-fetch-site",
          "operation": "set",
          "value": "same-site"
        }
      ]
    },
    "condition": {
      "urlFilter": "https://httpstat.us/429",
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "domainType": "thirdParty",
      "initiatorDomains": [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  },
  {
    "id": 2,
    "priority": 1,
    "action": {
      "type": "modifyHeaders",
      "requestHeaders": [
        {
          "header": "Referer",
          "operation": "set",
          "value": "https://www.deepl.com/"
        },
        {
          "header": "origin",
          "operation": "set",
          "value": "https://www.deepl.com"
        },
        {
          "header": "DNT",
          "operation": "set",
          "value": "1"
        },
        {
          "header": "cookie",
          "operation": "remove"
        },
        {
          "header": "sec-fetch-site",
          "operation": "set",
          "value": "same-site"
        }
      ]
    },
    "condition": {
      "urlFilter": "https://www2.deepl.com/jsonrpc*",
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "domainType": "thirdParty",
      "initiatorDomains": [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  },
  {
    "id": 3,
    "priority": 1,
    "action": {
      "type": "modifyHeaders",
      "requestHeaders": [
        {
          "header": "origin",
          "operation": "set",
          "value": "chrome-extension://lkjkfecdnfjopaeaibboihfkmhdjmanm"
        }
      ]
    },
    "condition": {
      "urlFilter": "https://transmart.qq.com/api/imt",
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "domainType": "thirdParty",
      "initiatorDomains": [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  },
  {
    "id": 4,
    "priority": 1,
    "action": {
      "type": "modifyHeaders",
      "requestHeaders": [
        {
          "header": "origin",
          "operation": "set",
          "value": "chrome-extension://klgfhbiooeogdfodpopgppeadghjjemk"
        }
      ]
    },
    "condition": {
      "urlFilter": "https://translate.volcengine.com/crx/translate/v1/",
      "resourceTypes": [
        "xmlhttprequest"
      ],
      "domainType": "thirdParty",
      "initiatorDomains": [
        "cfhamdkdjgoelclgllcoikbckcfpaklj",
        "bpoadfkcbjbfhfodiogcnhhhpibjhbnh"
      ]
    }
  }
];

// messager.ts
var listeners2 = /* @__PURE__ */ new Map();
var Messager = class {
  constructor(fromType, debug = false) {
    this.logger = new Logger();
    if (debug) {
      this.logger.setLevel("debug");
    }
    this.fromType = fromType;
    if (!listeners2.has(fromType)) {
      listeners2.set(fromType, /* @__PURE__ */ new Map());
      browserAPI.runtime.onMessage.addListener(
        (message, sender, sendResponse) => {
          let from = message.from;
          const to = message.to;
          let tabId;
          let tabUrl;
          let tabActive;
          if (sender.tab && sender.tab.id) {
            tabId = sender.tab.id;
            from = `${from}:${tabId}`;
            tabUrl = sender.tab.url;
            tabActive = sender.tab.active;
          }
          this.logger.debug(
            `${message.to} received message [${message.payload.method}] from ${message.from}`,
            message.payload.data ? message.payload.data : " "
          );
          const parsedTo = parseType(to);
          const { type: toType, name: toName } = parsedTo;
          if (toType !== fromType) {
            return false;
          }
          const parsedMessageFrom = parseType(from);
          const currentListener = listeners2.get(toType);
          const connectionInfo = currentListener.get(toName);
          if (!connectionInfo) {
            this.logger.debug(`no message handler for ${toType}:${to}`);
            sendResponse({
              ok: false,
              errorName: "notActive",
              errorMessage: `${to} is not active, from ${from} ${message.payload.method}`
            });
            return false;
          }
          const { messageHandler: messageHandler2, sync } = connectionInfo;
          const messageAuthor = {
            type: fromType,
            name: parsedMessageFrom.name,
            id: tabId,
            url: tabUrl,
            active: tabActive
          };
          if (sync) {
            try {
              const handlerResult = messageHandler2(
                message.payload,
                messageAuthor
              );
              sendResponse({
                ok: true,
                data: handlerResult
              });
            } catch (e3) {
              sendResponse({
                ok: false,
                errorName: e3.name,
                errorMessage: e3.message,
                errorDetails: e3.details
              });
            }
            return false;
          } else {
            messageHandler2(
              message.payload,
              messageAuthor
            ).then((data) => {
              sendResponse({
                ok: true,
                data
              });
            }).catch(
              (e3) => {
                sendResponse({
                  ok: false,
                  errorName: e3.name,
                  errorMessage: e3.message,
                  errorDetails: e3.details
                });
              }
            );
            return true;
          }
        }
      );
    }
  }
  getConnection(name, messageHandler2, options) {
    let sync = false;
    if (options && options.sync) {
      sync = true;
    }
    const fromType = this.fromType;
    const currentListeners = listeners2.get(fromType);
    if (!currentListeners.has(name)) {
      const connection2 = new Connection(`${fromType}:${name}`, this.logger);
      listeners2.get(fromType).set(name, {
        messageHandler: messageHandler2,
        sync,
        connectionInstance: connection2
      });
      return connection2;
    } else {
      return currentListeners.get(name).connectionInstance;
    }
  }
};
var Connection = class {
  constructor(from, logger) {
    this.from = from;
    this.logger = logger;
  }
  async sendMessage(to, messagePayload) {
    const parsedTo = parseType(to);
    const { type, id } = parsedTo;
    if (type !== "content_script") {
      const message = {
        to,
        from: this.from,
        payload: messagePayload
      };
      this.logger.debug(
        `${message.from} send message [${message.payload.method}] to ${message.to}`,
        message.payload.data ? message.payload.data : " "
      );
      const response = await browserAPI.runtime.sendMessage(message);
      return handleResponse(message, response, this.logger);
    } else {
      const message = {
        from: this.from,
        to,
        payload: messagePayload
      };
      this.logger.debug(
        `${message.from} send message [${message.payload.method}] to ${message.to}`,
        message.payload.data ? message.payload.data : " "
      );
      const response = await browserAPI.tabs.sendMessage(id, message);
      return handleResponse(message, response, this.logger);
    }
  }
};
function handleResponse(message, response, logger) {
  if (response.ok) {
    logger.debug(
      `${message.from} received response from ${message.to}:`,
      response.data ? response.data : " "
    );
    return response.data;
  } else {
    throw new CommonError(
      response.errorName || "UnknownError",
      response.errorMessage || "Unknown error",
      response.errorDetails
    );
  }
}
function parseType(str) {
  const parts = str.split(":");
  if (parts.length < 2) {
    throw new Error("not a valid to string");
  }
  const messageTo = {
    type: parts[0],
    name: parts[1]
  };
  if (parts[0] === "content_script") {
    const tabId = parseInt(parts[2]);
    if (!isNaN(tabId)) {
      messageTo.id = tabId;
    } else {
      throw new Error("tab id not a valid number");
    }
  }
  return messageTo;
}

// utils/md5.js
function safeAdd(x5, y4) {
  var lsw = (x5 & 65535) + (y4 & 65535);
  var msw = (x5 >> 16) + (y4 >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 65535;
}
function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
function md5cmn(q5, a2, b5, x5, s6, t4) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a2, q5), safeAdd(x5, t4)), s6), b5);
}
function md5ff(a2, b5, c3, d4, x5, s6, t4) {
  return md5cmn(b5 & c3 | ~b5 & d4, a2, b5, x5, s6, t4);
}
function md5gg(a2, b5, c3, d4, x5, s6, t4) {
  return md5cmn(b5 & d4 | c3 & ~d4, a2, b5, x5, s6, t4);
}
function md5hh(a2, b5, c3, d4, x5, s6, t4) {
  return md5cmn(b5 ^ c3 ^ d4, a2, b5, x5, s6, t4);
}
function md5ii(a2, b5, c3, d4, x5, s6, t4) {
  return md5cmn(c3 ^ (b5 | ~d4), a2, b5, x5, s6, t4);
}
function binlMD5(x5, len) {
  x5[len >> 5] |= 128 << len % 32;
  x5[(len + 64 >>> 9 << 4) + 14] = len;
  var i4;
  var olda;
  var oldb;
  var oldc;
  var oldd;
  var a2 = 1732584193;
  var b5 = -271733879;
  var c3 = -1732584194;
  var d4 = 271733878;
  for (i4 = 0; i4 < x5.length; i4 += 16) {
    olda = a2;
    oldb = b5;
    oldc = c3;
    oldd = d4;
    a2 = md5ff(a2, b5, c3, d4, x5[i4], 7, -680876936);
    d4 = md5ff(d4, a2, b5, c3, x5[i4 + 1], 12, -389564586);
    c3 = md5ff(c3, d4, a2, b5, x5[i4 + 2], 17, 606105819);
    b5 = md5ff(b5, c3, d4, a2, x5[i4 + 3], 22, -1044525330);
    a2 = md5ff(a2, b5, c3, d4, x5[i4 + 4], 7, -176418897);
    d4 = md5ff(d4, a2, b5, c3, x5[i4 + 5], 12, 1200080426);
    c3 = md5ff(c3, d4, a2, b5, x5[i4 + 6], 17, -1473231341);
    b5 = md5ff(b5, c3, d4, a2, x5[i4 + 7], 22, -45705983);
    a2 = md5ff(a2, b5, c3, d4, x5[i4 + 8], 7, 1770035416);
    d4 = md5ff(d4, a2, b5, c3, x5[i4 + 9], 12, -1958414417);
    c3 = md5ff(c3, d4, a2, b5, x5[i4 + 10], 17, -42063);
    b5 = md5ff(b5, c3, d4, a2, x5[i4 + 11], 22, -1990404162);
    a2 = md5ff(a2, b5, c3, d4, x5[i4 + 12], 7, 1804603682);
    d4 = md5ff(d4, a2, b5, c3, x5[i4 + 13], 12, -40341101);
    c3 = md5ff(c3, d4, a2, b5, x5[i4 + 14], 17, -1502002290);
    b5 = md5ff(b5, c3, d4, a2, x5[i4 + 15], 22, 1236535329);
    a2 = md5gg(a2, b5, c3, d4, x5[i4 + 1], 5, -165796510);
    d4 = md5gg(d4, a2, b5, c3, x5[i4 + 6], 9, -1069501632);
    c3 = md5gg(c3, d4, a2, b5, x5[i4 + 11], 14, 643717713);
    b5 = md5gg(b5, c3, d4, a2, x5[i4], 20, -373897302);
    a2 = md5gg(a2, b5, c3, d4, x5[i4 + 5], 5, -701558691);
    d4 = md5gg(d4, a2, b5, c3, x5[i4 + 10], 9, 38016083);
    c3 = md5gg(c3, d4, a2, b5, x5[i4 + 15], 14, -660478335);
    b5 = md5gg(b5, c3, d4, a2, x5[i4 + 4], 20, -405537848);
    a2 = md5gg(a2, b5, c3, d4, x5[i4 + 9], 5, 568446438);
    d4 = md5gg(d4, a2, b5, c3, x5[i4 + 14], 9, -1019803690);
    c3 = md5gg(c3, d4, a2, b5, x5[i4 + 3], 14, -187363961);
    b5 = md5gg(b5, c3, d4, a2, x5[i4 + 8], 20, 1163531501);
    a2 = md5gg(a2, b5, c3, d4, x5[i4 + 13], 5, -1444681467);
    d4 = md5gg(d4, a2, b5, c3, x5[i4 + 2], 9, -51403784);
    c3 = md5gg(c3, d4, a2, b5, x5[i4 + 7], 14, 1735328473);
    b5 = md5gg(b5, c3, d4, a2, x5[i4 + 12], 20, -1926607734);
    a2 = md5hh(a2, b5, c3, d4, x5[i4 + 5], 4, -378558);
    d4 = md5hh(d4, a2, b5, c3, x5[i4 + 8], 11, -2022574463);
    c3 = md5hh(c3, d4, a2, b5, x5[i4 + 11], 16, 1839030562);
    b5 = md5hh(b5, c3, d4, a2, x5[i4 + 14], 23, -35309556);
    a2 = md5hh(a2, b5, c3, d4, x5[i4 + 1], 4, -1530992060);
    d4 = md5hh(d4, a2, b5, c3, x5[i4 + 4], 11, 1272893353);
    c3 = md5hh(c3, d4, a2, b5, x5[i4 + 7], 16, -155497632);
    b5 = md5hh(b5, c3, d4, a2, x5[i4 + 10], 23, -1094730640);
    a2 = md5hh(a2, b5, c3, d4, x5[i4 + 13], 4, 681279174);
    d4 = md5hh(d4, a2, b5, c3, x5[i4], 11, -358537222);
    c3 = md5hh(c3, d4, a2, b5, x5[i4 + 3], 16, -722521979);
    b5 = md5hh(b5, c3, d4, a2, x5[i4 + 6], 23, 76029189);
    a2 = md5hh(a2, b5, c3, d4, x5[i4 + 9], 4, -640364487);
    d4 = md5hh(d4, a2, b5, c3, x5[i4 + 12], 11, -421815835);
    c3 = md5hh(c3, d4, a2, b5, x5[i4 + 15], 16, 530742520);
    b5 = md5hh(b5, c3, d4, a2, x5[i4 + 2], 23, -995338651);
    a2 = md5ii(a2, b5, c3, d4, x5[i4], 6, -198630844);
    d4 = md5ii(d4, a2, b5, c3, x5[i4 + 7], 10, 1126891415);
    c3 = md5ii(c3, d4, a2, b5, x5[i4 + 14], 15, -1416354905);
    b5 = md5ii(b5, c3, d4, a2, x5[i4 + 5], 21, -57434055);
    a2 = md5ii(a2, b5, c3, d4, x5[i4 + 12], 6, 1700485571);
    d4 = md5ii(d4, a2, b5, c3, x5[i4 + 3], 10, -1894986606);
    c3 = md5ii(c3, d4, a2, b5, x5[i4 + 10], 15, -1051523);
    b5 = md5ii(b5, c3, d4, a2, x5[i4 + 1], 21, -2054922799);
    a2 = md5ii(a2, b5, c3, d4, x5[i4 + 8], 6, 1873313359);
    d4 = md5ii(d4, a2, b5, c3, x5[i4 + 15], 10, -30611744);
    c3 = md5ii(c3, d4, a2, b5, x5[i4 + 6], 15, -1560198380);
    b5 = md5ii(b5, c3, d4, a2, x5[i4 + 13], 21, 1309151649);
    a2 = md5ii(a2, b5, c3, d4, x5[i4 + 4], 6, -145523070);
    d4 = md5ii(d4, a2, b5, c3, x5[i4 + 11], 10, -1120210379);
    c3 = md5ii(c3, d4, a2, b5, x5[i4 + 2], 15, 718787259);
    b5 = md5ii(b5, c3, d4, a2, x5[i4 + 9], 21, -343485551);
    a2 = safeAdd(a2, olda);
    b5 = safeAdd(b5, oldb);
    c3 = safeAdd(c3, oldc);
    d4 = safeAdd(d4, oldd);
  }
  return [a2, b5, c3, d4];
}
function binl2rstr(input) {
  var i4;
  var output = "";
  var length32 = input.length * 32;
  for (i4 = 0; i4 < length32; i4 += 8) {
    output += String.fromCharCode(input[i4 >> 5] >>> i4 % 32 & 255);
  }
  return output;
}
function rstr2binl(input) {
  var i4;
  var output = [];
  output[(input.length >> 2) - 1] = void 0;
  for (i4 = 0; i4 < output.length; i4 += 1) {
    output[i4] = 0;
  }
  var length8 = input.length * 8;
  for (i4 = 0; i4 < length8; i4 += 8) {
    output[i4 >> 5] |= (input.charCodeAt(i4 / 8) & 255) << i4 % 32;
  }
  return output;
}
function rstrMD5(s6) {
  return binl2rstr(binlMD5(rstr2binl(s6), s6.length * 8));
}
function rstrHMACMD5(key, data) {
  var i4;
  var bkey = rstr2binl(key);
  var ipad = [];
  var opad = [];
  var hash;
  ipad[15] = opad[15] = void 0;
  if (bkey.length > 16) {
    bkey = binlMD5(bkey, key.length * 8);
  }
  for (i4 = 0; i4 < 16; i4 += 1) {
    ipad[i4] = bkey[i4] ^ 909522486;
    opad[i4] = bkey[i4] ^ 1549556828;
  }
  hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
  return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
}
function rstr2hex(input) {
  var hexTab = "0123456789abcdef";
  var output = "";
  var x5;
  var i4;
  for (i4 = 0; i4 < input.length; i4 += 1) {
    x5 = input.charCodeAt(i4);
    output += hexTab.charAt(x5 >>> 4 & 15) + hexTab.charAt(x5 & 15);
  }
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
function rawHMACMD5(k5, d4) {
  return rstrHMACMD5(str2rstrUTF8(k5), str2rstrUTF8(d4));
}
function hexHMACMD5(k5, d4) {
  return rstr2hex(rawHMACMD5(k5, d4));
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

// services/util.ts
async function humanReadableSize(bytes) {
  const thresh = 1024;
  if (Math.abs(bytes) < thresh) {
    return bytes + " B";
  }
  const units = ["KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
  let u4 = -1;
  do {
    bytes /= thresh;
    ++u4;
  } while (Math.abs(bytes) >= thresh && u4 < units.length - 1);
  return bytes.toFixed(1) + " " + units[u4];
}

// services/cache.ts
var dbNames = [];
async function openIndexedDB(dbName, _storageName) {
  return await new Promise((resolve, reject) => {
    const name = dbName;
    const version = 1;
    const request2 = indexedDB.open(name, version);
    request2.onsuccess = (_event) => {
      resolve(request2.result);
    };
    request2.onerror = (event) => {
      console.error(
        "onerror: Error opening the database, switching to non-database mode",
        event
      );
      reject();
    };
    request2.onupgradeneeded = (_event) => {
      const db = request2.result;
      const storageName = _storageName ? _storageName : "cache";
      db.createObjectStore(storageName, {
        keyPath: "key"
      });
    };
  });
}
async function setParagraphCache(payload) {
  const storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
  const result = await addInDB(storageName, payload);
  return result;
}
async function queryParagraphCache(payload) {
  const payload_hash = md5(payload.originalText);
  const storageName = `${brandId}-${payload.service}@${payload.from}->${payload.to}`;
  const result = await queryInDB(storageName, payload_hash);
  return result;
}
async function queryInDB(dbName, origTextHash) {
  const db = await openIndexedDB(dbName);
  return await new Promise((resolve, reject) => {
    if (!db)
      return reject();
    const storageName = "cache";
    const objectStore = db.transaction([storageName], "readonly").objectStore(storageName);
    const request2 = objectStore.get(origTextHash);
    request2.onsuccess = (_event) => {
      db.close();
      const result = request2.result;
      resolve(result);
    };
    request2.onerror = (event) => {
      db.close();
      console.error("queryInDB->onerror:", event);
      reject();
    };
  });
}
async function addInDB(dbName, cacheEntry) {
  const db = await openIndexedDB(dbName);
  const names = await getAllDBNames();
  if (!names.includes(dbName)) {
    await addCacheList(dbName);
  }
  return await new Promise((resolve) => {
    if (!db)
      return resolve(false);
    const storageName = "cache";
    const objectStore = db.transaction([storageName], "readwrite").objectStore(storageName);
    const request2 = objectStore.put(cacheEntry);
    request2.onsuccess = (_event) => {
      db.close();
      resolve(true);
    };
    request2.onerror = (event) => {
      console.error("addInDB->onerror:", event);
      db.close();
      resolve(false);
    };
  });
}
async function addCacheList(dbName) {
  const storageName = "cache_list";
  const db = await openIndexedDB(brandId + "-cacheList", storageName);
  const objectStore = db.transaction([storageName], "readwrite").objectStore(storageName);
  const request2 = objectStore.put({ key: dbName });
  request2.onsuccess = (_event) => {
    db.close();
    dbNames.push(dbName);
  };
  request2.onerror = (event) => {
    db.close();
    console.error(event);
  };
}
async function getAllDBNames() {
  if (dbNames && dbNames.length > 0) {
    return dbNames;
  }
  const db = await openIndexedDB(brandId + "-cacheList", "cache_list");
  dbNames = await new Promise((resolve) => {
    const storageName = "cache_list";
    const objectStore = db.transaction([storageName], "readonly").objectStore(storageName);
    const request2 = objectStore.getAllKeys();
    request2.onsuccess = (_event) => {
      db.close();
      resolve(request2.result);
    };
    request2.onerror = (event) => {
      db.close();
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
  } catch (e3) {
    console.error(e3);
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
  db.close();
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

// background_message_listeners.ts
var connection;
var messageHandler = async function(payload, author) {
  const { method, data } = payload;
  if (method === "mock") {
    await delay(150);
  } else if (method === "queryParagraphCache") {
    return queryParagraphCache(data);
  } else if (method === "setParagraphCache") {
    return setParagraphCache(data);
  } else if (method === "calculateSize") {
    return calculateSize();
  } else if (method === "fetch") {
    return request(data);
  } else if (method === "getConfig") {
    return getConfig();
  } else if (method === "detectLanguage") {
    const { text } = data;
    try {
      const result = await browserAPI.i18n.detectLanguage(
        text
      );
      if (result.languages.length > 0) {
        return formatLanguage(result.languages[0].language);
      } else {
        return "auto";
      }
    } catch (e3) {
      log_default.debug(`detect language error`, e3);
      return "auto";
    }
  } else if (method === "detectTabLanguage") {
    try {
      const lang = await browserAPI.tabs.detectLanguage(
        author.id
      );
      return formatLanguage(lang);
    } catch (e3) {
      log_default.debug(`detect tab language error, use auto `, e3);
      return `auto`;
    }
  }
};
function steupMessageListeners() {
  getConnection();
  const manifest = browserAPI.runtime.getManifest();
  if (manifest.manifest_version > 2) {
  }
  if (manifest.manifest_version === 2) {
    const urlsFilter = request_modifier_rule_default.map(
      (item) => item.condition.urlFilter
    );
    const types = request_modifier_rule_default.reduce((acc, item) => {
      item.condition.resourceTypes.forEach((type) => {
        if (!acc.includes(type)) {
          acc.push(type);
        }
      });
      return acc;
    }, []);
    browserAPI.webRequest.onBeforeSendHeaders.addListener(
      function(details) {
        if (details.originUrl && details.originUrl.startsWith("http")) {
          return;
        }
        if (!details.originUrl) {
          return;
        }
        if (details.requestHeaders) {
          for (let i4 = 0; i4 < urlsFilter.length; i4++) {
            const rule = request_modifier_rule_default[i4];
            if (rule.condition.urlFilter && isMatchUrl(details.url, rule.condition.urlFilter)) {
              const newRequestHeaders = formatHeadersByRule(
                details.requestHeaders,
                rule.action.requestHeaders
              );
              return { requestHeaders: newRequestHeaders };
            }
          }
        }
      },
      { urls: urlsFilter, types },
      ["blocking", "requestHeaders"]
    );
  }
}
function getConnection() {
  if (connection) {
    return connection;
  }
  const messenger = new Messager("background", false);
  connection = messenger.getConnection("main", messageHandler);
  return connection;
}

// background_command_listeners.ts
function setupCommandListeners() {
  if (typeof browserAPI.commands !== "undefined") {
    browserAPI.commands.onCommand.addListener(async (command) => {
      log_default.debug(`received command: ${command}`);
      if (command === "toggleTranslatePage") {
        const tab = await browserAPI.tabs.query({
          active: true,
          currentWindow: true
        });
        if (tab.length === 0) {
          return;
        }
        const tabId = tab[0].id;
        if (typeof tabId === "undefined") {
          return;
        }
        const tabUrl = tab[0].url;
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
}
async function sendMessageToContent(request2) {
  const tabs = await browserAPI.tabs.query({
    currentWindow: true,
    active: true
  });
  const tabId = tabs[0].id;
  const c3 = getConnection();
  c3.sendMessage(`content_script:main:${tabId}`, request2).catch((e3) => {
    log_default.error("send content message request failed", request2, e3);
  });
}

// locales/zh-CN.json
var zh_CN_default = {
  "lineBreakMaxTextCount": "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "translate-pdf": "\u70B9\u51FB\u7FFB\u8BD1 PDF",
  "translate-firefox-local-pdf": "\u70B9\u51FB\u53BB\u4E0A\u4F20PDF",
  "enableLineBreak": "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  "sponsorLabel": "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005",
  "help": "\u5E2E\u52A9",
  "browserShortcutsNoteForFirefox": "Firefox \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762 `about:addons`\uFF0C\u7136\u540E\u70B9\u51FB\u300C\u8BBE\u7F6E\u300D\uFF0C\u518D\u70B9\u51FB\u300C\u7BA1\u7406\u5FEB\u6377\u952E\u300D\u5373\u53EF\u8BBE\u7F6E",
  "browserShortcutsNoteForChrome": "\u7C7BChrome \u6D4F\u89C8\u5668\u4FEE\u6539\u5FEB\u6377\u952E\u9700\u8981\u6253\u5F00\u6269\u5C55\u7BA1\u7406\u9875\u9762\uFF0C\u5728`\u7BA1\u7406\u5FEB\u6377\u952E`\u9762\u677F(`chrome://extensions/shortcuts`)\u8BBE\u7F6E\uFF0C\u70B9\u51FB\u4E0B\u65B9\u6309\u94AE\u8DF3\u8F6C\u5230\u5FEB\u6377\u952E\u7BA1\u7406\u9875\u9762\u3002",
  "browserShortcutsSucks": "\u4FEE\u6539\u5FEB\u6377\u952E\u8BF7\u624B\u52A8\u8F93\u5165\uFF0C\u683C\u5F0F\u4E3A\uFF1A",
  "enableLineBreakDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8BD1",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7F51\u9875\u53CC\u8BED\u7FFB\u8BD1\u6269\u5C55\uFF0C\u5B8C\u5168\u514D\u8D39\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u817E\u8BAF/\u706B\u5C71\u7FFB\u8BD1\u7B49\u591A\u4E2A\u7FFB\u8BD1\u670D\u52A1\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u811A\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8/\u663E\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u6253\u5F00\u8BBE\u7F6E\u9875",
  "browser.translateLocalPdfFile": "\u7FFB\u8BD1\u672C\u5730 PDF \u6587\u4EF6",
  "changelog": "\u66F4\u65B0\u65E5\u5FD7",
  "general": "\u57FA\u672C\u8BBE\u7F6E",
  "toggleDebug": "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
  "document": "\u6587\u6863",
  "resetSuccess": "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
  "goAdvancedSettings": "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
  "advanced": "\u8FDB\u9636\u8BBE\u7F6E",
  "advancedDescription": "\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",
  "developer": "\u5F00\u53D1\u8005\u8BBE\u7F6E",
  "donateCafe": "\u8BF7\u5F00\u53D1\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u6253\u5F00\u7F51\u9875\u540E\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF1F",
  "feedback": "\u95EE\u9898\u53CD\u9988",
  "toggleTranslatePage": "\u7FFB\u8BD1\u7F51\u9875/\u663E\u793A\u539F\u6587",
  "translateToThePageEndImmediatelyDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",
  "translationAreaDescription": "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "the number of characters to be translated first": "\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F",
  "interface language": "\u754C\u9762\u8BED\u8A00",
  "display both the original text and the translation": "\u540C\u65F6\u663E\u793A\u539F\u6587\u548C\u8BD1\u6587",
  "keyboard shortcuts": "\u952E\u76D8\u5FEB\u6377\u952E",
  "modify": "\u4FEE\u6539\u5FEB\u6377\u952E",
  "reset": "\u91CD\u7F6E",
  "close": "\u5173\u95ED",
  "homepage": "\u4E3B\u9875",
  "more": "\u66F4\u591A",
  "translateTheWholePage": "\u7FFB\u8BD1\u9875\u9762\u5168\u90E8\u533A\u57DF\uFF08\u533A\u522B\u4E8E\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\uFF09",
  "translateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8BD1\u5230\u9875\u9762\u5E95\u90E8\uFF08\u533A\u522B\u4E8E\u6EDA\u52A8\u7FFB\u8BD1\uFF09",
  "translateTheMainPage": "\u667A\u80FD\u7FFB\u8BD1\u4E3B\u8981\u533A\u57DF",
  "The local rules are up to date": "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:",
  "Checking for updates": "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",
  "localVersionIsTooOld": "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u5230\u7248\u672C\u540E\u518D\u5C1D\u8BD5\u540C\u6B65",
  "foundNewVersion": "\u53D1\u73B0\u65B0\u7248\u672C",
  "theLocalExtensionIsUpToUpdate": "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",
  "failToSyncRules": "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",
  "retry": "\u70B9\u6B64\u91CD\u8BD5",
  "failedReason": "\u5931\u8D25\u539F\u56E0",
  "currentRuleVersion": "\u5F53\u524D\u89C4\u5219\u7248\u672C",
  "calculating": "\u8BA1\u7B97\u4E2D",
  "unknownError": "\u672A\u77E5\u9519\u8BEF",
  "canNotFetchRemoteRule": "\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",
  "enableAlphaSuccess": "\u5DF2\u5F00\u542FAlpha\u529F\u80FD",
  "disableAlphaSuccess": "\u5DF2\u5173\u95EDAlpha\u529F\u80FD",
  "cacheSize": "\u7F13\u5B58\u5927\u5C0F\uFF1A",
  "cleaning": "\u6E05\u7406\u4E2D",
  "cleanCache": "\u6E05\u9664\u7F13\u5B58",
  "options": "\u8BBE\u7F6E",
  "about": "\u5173\u4E8E",
  "service": "\u7FFB\u8BD1\u670D\u52A1",
  "needAction": "(\u53BB\u8BBE\u7F6E)",
  "goSettings": "\u53BB\u8BBE\u7F6E",
  "translationEngine": "\u5F15\u64CE\u9009\u9879",
  "sourceLanguage": "\u539F\u6587\u8BED\u8A00",
  "target": "\u76EE\u6807\u8BED\u8A00",
  "forThisSite": "\u9488\u5BF9\u8BE5\u7F51\u7AD9\uFF1A",
  "alwaysTranslateSomeLanguage": "\u603B\u662F\u7FFB\u8BD1{language}",
  "neverTranslateSomeLanguage": "\u6C38\u4E0D\u7FFB\u8BD1{language}",
  "alwaysTranslateSomeSite": "\u603B\u662F\u7FFB\u8BD1 {hostname}",
  "neverTranslateSomeSite": "\u6C38\u4E0D\u7FFB\u8BD1 {hostname}",
  "add": "\u6DFB\u52A0",
  "default": "\u9ED8\u8BA4",
  "forThisLanguage": "\u9488\u5BF9\u8BE5\u8BED\u8A00\uFF1A",
  "add url": "\u8F93\u5165URL",
  "edit": "\u7F16\u8F91",
  "translate other languages into specific language": "\u5C06\u5176\u4ED6\u8BED\u8A00\u7FFB\u8BD1\u4E3A\u4F60\u8BBE\u7F6E\u7684\u8BED\u8A00",
  "select translation service": "\u9009\u62E9\u4E00\u9879\u7FFB\u8BD1\u670D\u52A1",
  "language": "\u8BED\u8A00",
  "show-original": "\u663E\u793A\u539F\u6587",
  "translate": "\u7FFB\u8BD1",
  "Translated": "\u5DF2\u7FFB\u8BD1",
  "Translating": "\u7FFB\u8BD1\u4E2D",
  "Error": "\u9519\u8BEF",
  "allowCacheTranslations": "\u5F00\u542F\u672C\u5730\u7FFB\u8BD1\u7F13\u5B58\uFF08\u51CF\u5C11\u91CD\u590D\u6BB5\u843D\u7684\u7FFB\u8BD1\u8BF7\u6C42\uFF09",
  "translation display": "\u8BD1\u6587\u663E\u793A\u6837\u5F0F",
  "select diplay style": "\u533A\u5206\u8BD1\u6587\u7684\u6837\u5F0F\uFF0C\u5177\u4F53\u53EF\u53C2\u8003\u4E0B\u5217\u793A\u4F8B",
  "interface": "\u754C\u9762\u8BBE\u7F6E",
  "import_export": "\u5BFC\u5165/\u5BFC\u51FA",
  "translationTheme.none": "\u65E0",
  "translationTheme.dashed": "\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.dotted": "\u70B9\u72B6\u4E0B\u5212\u7EBF",
  "translationTheme.dashedBorder": "\u865A\u7EBF\u8FB9\u6846",
  "translationTheme.underline": "\u76F4\u7EBF\u4E0B\u5212\u7EBF",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7EB8\u9634\u5F71\u6548\u679C",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.blockquote": "\u5F15\u7528\u6837\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u4F53",
  "translationTheme.bold": "\u52A0\u7C97",
  "translationTheme.thinDashed": "\u7EC6\u865A\u7EBF\u4E0B\u5212\u7EBF",
  "translationServices.tencent": "\u817E\u8BAF\u7FFB\u8BD1\u541B",
  "translationServices.google": "\u8C37\u6B4C\u7FFB\u8BD1",
  "translationServices.bai": "\u767E\u5EA6(Alpha)",
  "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8BD1",
  "translationServices.aliyun": "\u963F\u91CC\u4E91\u7FFB\u8BD1",
  "translationServices.volc": "\u706B\u5C71\u7FFB\u8BD1",
  "translationServices.deeplx": "DeeplX(Alpha)",
  "translationServices.bing": "\u5FC5\u5E94\u7FFB\u8BD1",
  "translationServices.deepl": "Deepl",
  "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8BD1",
  "translationServices.azure": "\u5FAE\u8F6F\u7FFB\u8BD1",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "\u4E9A\u9A6C\u900A\u7FFB\u8BD1",
  "translationServices.mock": "\u6A21\u62DF\u7FFB\u8BD1",
  "translationServices.mock2": "\u6A21\u62DF\u7FFB\u8BD12",
  "translationServices.caiyun": "\u5F69\u4E91\u5C0F\u8BD1",
  "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8BD1(Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8BD1",
  "translationServices.transmart": "\u817E\u8BAF\u4EA4\u4E92\u7FFB\u8BD1",
  "translationServices.d": "Deepl(Alpha)",
  "translate title": "\u7FFB\u8BD1\u9875\u9762\u6807\u9898",
  "always languages": "\u603B\u662F\u7FFB\u8BD1\u7684\u8BED\u8A00",
  "always translate the following languages": "\u5F53\u9875\u9762\u8BED\u8A00\u4E3A\u4E0B\u5217\u8BED\u8A00\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
  "always sites": "\u603B\u662F\u7FFB\u8BD1\u7684\u7F51\u5740",
  "always translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u4F1A\u81EA\u52A8\u7FFB\u8BD1\u4E3A\u76EE\u6807\u8BED\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8BD1\u7684\u7F51\u5740",
  "never translate the following sites": "\u5F53\u7F51\u7AD9\u4E3A\u4E0B\u5217\u57DF\u540D\u65F6\uFF0C\u5C06\u4E0D\u4F1A\u8FDB\u884C\u7FFB\u8BD1",
  "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
  "Key Application and Configuration Tutorial": "\u300A\u5BC6\u94A5\u7533\u8BF7\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
  "for details": "",
  "use the above style for the following sites": "\u5F53\u524D\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\u4E3A\u300C{theme}\u300D\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3A\u8BA9\u67D0\u4E9B\u7F51\u7AD9\u4F7F\u7528\u8BE5\u6837\u5F0F\uFF0C\u70B9\u51FB\u53F3\u8FB9\u7684\u6309\u94AE\u6DFB\u52A0\u540E\uFF0C\u518D\u5207\u6362\u5230\u53E6\u4E00\u79CD\u9ED8\u8BA4\u8BD1\u6587\u6837\u5F0F\uFF0C\u8FD9\u6837\u5373\u53EF\u5B9E\u73B0\u4E0D\u540C\u7F51\u7AD9\u4F7F\u7528\u4E0D\u540C\u7684\u8BD1\u6587\u6837\u5F0F\u3002",
  "confirm": "\u4FDD\u5B58",
  "cancel": "\u53D6\u6D88",
  "delete": "\u5220\u9664",
  "languages.af": "\u5357\u975E\u8377\u5170\u8BED",
  "languages.am": "\u963F\u59C6\u54C8\u62C9\u8BED",
  "languages.ar": "\u963F\u62C9\u4F2F\u8BED",
  "languages.auto": "\u81EA\u52A8\u68C0\u6D4B\u8BED\u8A00",
  "languages.az": "\u963F\u585E\u62DC\u7586\u8BED",
  "languages.be": "\u767D\u4FC4\u7F57\u65AF\u8BED",
  "languages.bg": "\u4FDD\u52A0\u5229\u4E9A\u8BED",
  "languages.tn": "\u672D\u90A3\u8BED",
  "languages.bn": "\u5B5F\u52A0\u62C9\u8BED",
  "languages.bs": "\u6CE2\u65AF\u5C3C\u4E9A\u8BED",
  "languages.ca": "\u52A0\u6CF0\u7F57\u5C3C\u4E9A\u8BED",
  "languages.ceb": "\u5BBF\u52A1\u8BED",
  "languages.co": "\u79D1\u897F\u5609\u8BED",
  "languages.cs": "\u6377\u514B\u8BED",
  "languages.cy": "\u5A01\u5C14\u58EB\u8BED",
  "languages.da": "\u4E39\u9EA6\u8BED",
  "languages.de": "\u5FB7\u8BED",
  "languages.el": "\u5E0C\u814A\u8BED",
  "languages.en": "\u82F1\u8BED",
  "languages.eo": "\u4E16\u754C\u8BED",
  "languages.es": "\u897F\u73ED\u7259\u8BED",
  "languages.et": "\u7231\u6C99\u5C3C\u4E9A\u8BED",
  "languages.eu": "\u5DF4\u65AF\u514B\u8BED",
  "languages.fa": "\u6CE2\u65AF\u8BED",
  "languages.fi": "\u82AC\u5170\u8BED",
  "languages.fil": "\u83F2\u5F8B\u5BBE\u8BED",
  "languages.fj": "\u6590\u6D4E\u8BED",
  "languages.fr": "\u6CD5\u8BED",
  "languages.fy": "\u5F17\u91CC\u65AF\u5170\u8BED",
  "languages.ga": "\u7231\u5C14\u5170\u8BED",
  "languages.gd": "\u82CF\u683C\u5170\u76D6\u5C14\u8BED",
  "languages.gl": "\u52A0\u5229\u897F\u4E9A\u8BED",
  "languages.gu": "\u53E4\u5409\u62C9\u7279\u8BED",
  "languages.ha": "\u8C6A\u8428\u8BED",
  "languages.haw": "\u590F\u5A01\u5937\u8BED",
  "languages.he": "\u5E0C\u4F2F\u6765\u8BED",
  "languages.hi": "\u5370\u5730\u8BED",
  "languages.hmn": "\u82D7\u8BED",
  "languages.hr": "\u514B\u7F57\u5730\u4E9A\u8BED",
  "languages.ht": "\u6D77\u5730\u514B\u91CC\u5965\u5C14\u8BED",
  "languages.hu": "\u5308\u7259\u5229\u8BED",
  "languages.hy": "\u4E9A\u7F8E\u5C3C\u4E9A\u8BED",
  "languages.id": "\u5370\u5EA6\u5C3C\u897F\u4E9A\u8BED",
  "languages.ig": "\u4F0A\u535A\u8BED",
  "languages.is": "\u51B0\u5C9B\u8BED",
  "languages.it": "\u610F\u5927\u5229\u8BED",
  "languages.ja": "\u65E5\u8BED",
  "languages.jw": "\u722A\u54C7\u8BED",
  "languages.ka": "\u683C\u9C81\u5409\u4E9A\u8BED",
  "languages.kk": "\u54C8\u8428\u514B\u8BED",
  "languages.km": "\u9AD8\u68C9\u8BED",
  "languages.kn": "\u5361\u7EB3\u8FBE\u8BED",
  "languages.ko": "\u97E9\u8BED",
  "languages.ku": "\u5E93\u5C14\u5FB7\u8BED",
  "languages.ky": "\u5409\u5C14\u5409\u65AF\u8BED",
  "languages.la": "\u62C9\u4E01\u8BED",
  "languages.lb": "\u5362\u68EE\u5821\u8BED",
  "languages.lo": "\u8001\u631D\u8BED",
  "languages.lt": "\u7ACB\u9676\u5B9B\u8BED",
  "languages.lv": "\u62C9\u8131\u7EF4\u4E9A\u8BED",
  "languages.mg": "\u9A6C\u5C14\u52A0\u4EC0\u8BED",
  "languages.mi": "\u6BDB\u5229\u8BED",
  "languages.mk": "\u9A6C\u5176\u987F\u8BED",
  "languages.ml": "\u9A6C\u62C9\u96C5\u62C9\u59C6\u8BED",
  "languages.mn": "\u8499\u53E4\u8BED",
  "languages.mr": "\u9A6C\u62C9\u5730\u8BED",
  "languages.ms": "\u9A6C\u6765\u8BED",
  "languages.mt": "\u9A6C\u8033\u4ED6\u8BED",
  "languages.mww": "\u767D\u82D7\u6587",
  "languages.my": "\u7F05\u7538\u8BED",
  "languages.ne": "\u5C3C\u6CCA\u5C14\u8BED",
  "languages.nl": "\u8377\u5170\u8BED",
  "languages.no": "\u632A\u5A01\u8BED",
  "languages.ny": "\u5C3C\u6768\u624E\u8BED\uFF08\u9F50\u5207\u74E6\u8BED\uFF09",
  "languages.otq": "\u514B\u96F7\u5854\u7F57\u5965\u6258\u7C73\u8BED",
  "languages.pa": "\u65C1\u906E\u666E\u8BED",
  "languages.pl": "\u6CE2\u5170\u8BED",
  "languages.ps": "\u666E\u4EC0\u56FE\u8BED",
  "languages.pt": "\u8461\u8404\u7259\u8BED\uFF08\u8461\u8404\u7259\u3001\u5DF4\u897F\uFF09",
  "languages.ro": "\u7F57\u9A6C\u5C3C\u4E9A\u8BED",
  "languages.ru": "\u4FC4\u8BED",
  "languages.sd": "\u4FE1\u5FB7\u8BED",
  "languages.si": "\u50E7\u4F3D\u7F57\u8BED",
  "languages.sk": "\u65AF\u6D1B\u4F10\u514B\u8BED",
  "languages.sl": "\u65AF\u6D1B\u6587\u5C3C\u4E9A\u8BED",
  "languages.sm": "\u8428\u6469\u4E9A\u8BED",
  "languages.sn": "\u4FEE\u7EB3\u8BED",
  "languages.so": "\u7D22\u9A6C\u91CC\u8BED",
  "languages.sq": "\u963F\u5C14\u5DF4\u5C3C\u4E9A\u8BED",
  "languages.sr": "\u585E\u5C14\u7EF4\u4E9A\u8BED",
  "languages.sr-Cyrl": "\u585E\u5C14\u7EF4\u4E9A\u8BED(\u897F\u91CC\u5C14\u6587)",
  "languages.sr-Latn": "\u585E\u5C14\u7EF4\u4E9A\u8BED(\u62C9\u4E01\u6587)",
  "languages.st": "\u585E\u7D22\u6258\u8BED",
  "languages.su": "\u5DFD\u4ED6\u8BED",
  "languages.sv": "\u745E\u5178\u8BED",
  "languages.sw": "\u65AF\u74E6\u5E0C\u91CC\u8BED",
  "languages.ta": "\u6CF0\u7C73\u5C14\u8BED",
  "languages.te": "\u6CF0\u5362\u56FA\u8BED",
  "languages.tg": "\u5854\u5409\u514B\u8BED",
  "languages.th": "\u6CF0\u8BED",
  "languages.tlh": "\u514B\u6797\u8D21\u8BED",
  "languages.tlh-Qaak": "\u514B\u6797\u8D21\u8BED(piqaD)",
  "languages.to": "\u6C64\u52A0\u8BED",
  "languages.tr": "\u571F\u8033\u5176\u8BED",
  "languages.ty": "\u5854\u5E0C\u63D0\u8BED",
  "languages.ug": "\u7EF4\u543E\u5C14\u8BED",
  "languages.uk": "\u4E4C\u514B\u5170\u8BED",
  "languages.ur": "\u4E4C\u5C14\u90FD\u8BED",
  "languages.uz": "\u4E4C\u5179\u522B\u514B\u8BED",
  "languages.vi": "\u8D8A\u5357\u8BED",
  "languages.wyw": "\u6587\u8A00\u6587",
  "languages.xh": "\u73ED\u56FE\u8BED",
  "languages.yi": "\u610F\u7B2C\u7EEA\u8BED",
  "languages.yo": "\u7EA6\u9C81\u5DF4\u8BED",
  "languages.yua": "\u5C24\u5361\u5766\u739B\u96C5\u8BED",
  "languages.yue": "\u7CA4\u8BED\uFF08\u7E41\u4F53\uFF09",
  "languages.zh-CN": "\u4E2D\u6587\uFF08\u7B80\u4F53\uFF09",
  "languages.zh-TW": "\u4E2D\u6587\uFF08\u7E41\u4F53\uFF09",
  "languages.zu": "\u7956\u9C81\u8BED"
};

// locales/zh-TW.json
var zh_TW_default = {
  "lineBreakMaxTextCount": "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "enableLineBreak": "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  "sponsorLabel": "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",
  "enableLineBreakDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "\u6C89\u6D78\u5F0F\u7FFB\u8B6F",
  "browser.brandDescription": "\u6C89\u6D78\u5F0F\u7DB2\u9801\u96D9\u8A9E\u7FFB\u8B6F\u64F4\u5C55\uFF0C\u5B8C\u5168\u514D\u8CBB\u4F7F\u7528\uFF0C\u652F\u6301 Deepl/Google/\u9A30\u8A0A/\u706B\u5C71\u7FFB\u8B6F\u7B49\u591A\u500B\u7FFB\u8B6F\u670D\u52D9\uFF0C\u652F\u6301 Firefox/Chrome/\u6CB9\u7334\u8173\u672C\uFF0C\u4EA6\u53EF\u5728 iOS Safari \u4E0A\u4F7F\u7528\u3002",
  "browser.toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8/\u986F\u793A\u539F\u6587",
  "browser.toggleTranslateTheMainPage": "\u7FFB\u8BD1\u9875\u9762\u4E3B\u8981\u533A\u57DF/\u663E\u793A\u539F\u6587",
  "browser.openOptionsPage": "\u6253\u958B\u8A2D\u7F6E\u9801",
  "browser.translateLocalPdfFile": "\u7FFB\u8B6F\u672C\u5730 PDF \u6587\u4EF6",
  "changelog": "\u66F4\u65B0\u65E5\u5FD7",
  "general": "\u57FA\u672C\u8A2D\u7F6E",
  "toggleDebug": "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
  "document": "\u6587\u6863",
  "resetSuccess": "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
  "goAdvancedSettings": "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
  "advanced": "\u9032\u968E\u8A2D\u7F6E",
  "advancedDescription": "\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",
  "developer": "\u958B\u767C\u8005\u8A2D\u7F6E",
  "donateCafe": "\u8ACB\u958B\u767C\u8005\u559D\u676F\u5496\u5561",
  "translate to the bottom of the page": "\u6253\u958B\u7DB2\u9801\u5F8C\uFF0C\u662F\u5426\u7ACB\u5373\u7FFB\u8B6F\u5230\u9801\u9762\u5E95\u90E8\uFF1F",
  "feedback": "\u95EE\u9898\u53CD\u9988",
  "toggleTranslatePage": "\u7FFB\u8B6F\u7DB2\u9801/\u986F\u793A\u539F\u6587",
  "openOptionsPage": "\u6253\u958B\u8A2D\u7F6E\u9801",
  "translateToThePageEndImmediatelyDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u7ACB\u5373\u7FFB\u8BD1\u7F51\u9875\u4ECE\u9876\u90E8\u5230\u5E95\u90E8\u7684\u5185\u5BB9\uFF0C\u800C\u4E0D\u662F\u8FB9\u770B\u8FB9\u8BD1\u3002\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "translate all areas of the page": "\u662F\u5426\u7FFB\u8BD1\u7F51\u9875\u6240\u6709\u533A\u57DF",
  "translationAreaDescription": "\u5F00\u542F\u540E\uFF0C\u6574\u4E2A\u7F51\u9875\u7684\u533A\u57DF\u90FD\u4F1A\u88AB\u7FFB\u8BD1\uFF0C\u800C\u4E0D\u662F\u9ED8\u8BA4\u7684\u667A\u80FD\u8BC6\u522B\u4E3B\u8981\u533A\u57DF\u53BB\u7FFB\u8BD1\uFF08\u4E0D\u63A8\u8350\u5F00\u542F\uFF09",
  "the number of characters to be translated first": "\u524D\u591A\u5C11\u4E2A\u5B57\u7B26\u65E0\u9700\u7B49\u5F85\u6EDA\u52A8\u5230\u53EF\u89C6\u533A\u57DF\uFF0C\u76F4\u63A5\u7FFB\u8BD1\uFF1F",
  "interface language": "\u754C\u9762\u8A9E\u8A00",
  "display both the original text and the translation": "\u540C\u6642\u986F\u793A\u539F\u6587\u548C\u8B6F\u6587",
  "keyboard shortcuts": "\u9375\u76E4\u5FEB\u6377\u9375",
  "modify": "\u4FEE\u6539\u5FEB\u6377\u9375",
  "reset": "\u91CD\u8A2D",
  "close": "\u95DC\u9589",
  "homepage": "\u4E3B\u9801",
  "more": "\u66F4\u591A",
  "translateTheWholePage": "\u7FFB\u8B6F\u9801\u9762\u5168\u90E8\u5340\u57DF\uFF08\u5340\u5206\u65BC\u53EA\u7FFB\u8B6F\u4E3B\u8981\u5340\u57DF\uFF09",
  "translateToThePageEndImmediately": "\u7ACB\u5373\u7FFB\u8B6F\u5230\u5E95\u90E8\uFF08\u5340\u5206\u65BC\u770B\u54EA\u8B6F\u54EA\uFF09",
  "The local rules are up to date": "\u672C\u5730\u9002\u914D\u89C4\u5219\u5DF2\u662F\u6700\u65B0:",
  "Successfully synchronized with the latest official rules:": "\u6210\u529F\u540C\u6B65\u6700\u65B0\u5B98\u65B9\u9002\u914D\u89C4\u5219:",
  "Checking for updates": "\u6B63\u5728\u68C0\u67E5\u66F4\u65B0",
  "Rules are being synchronized": "\u6B63\u5728\u540C\u6B65\u9002\u914D\u89C4\u5219",
  "localVersionIsTooOld": "\u672C\u5730\u6269\u5C55\u7248\u672C\u8FC7\u65E7\uFF0C\u8BF7\u5347\u7EA7\u6269\u5C55\u5230 {minVersion} \u6216\u4E4B\u540E\u5230\u7248\u672C\u540E\u518D\u5C1D\u8BD5\u540C\u6B65",
  "foundNewVersion": "\u53D1\u73B0\u65B0\u7248\u672C",
  "theLocalExtensionIsUpToUpdate": "\u5F53\u524D\u6269\u5C55\u5DF2\u662F\u6700\u65B0\u7248\u672C\u3002",
  "failToSyncRules": "\u540C\u6B65\u6700\u65B0\u9002\u914D\u89C4\u5219\u5931\u8D25",
  "retry": "\u70B9\u6B64\u91CD\u8BD5",
  "failedReason": "\u5931\u8D25\u539F\u56E0",
  "currentRuleVersion": "\u5F53\u524D\u89C4\u5219\u7248\u672C",
  "calculating": "\u8BA1\u7B97\u4E2D",
  "unknownError": "\u672A\u77E5\u9519\u8BEF",
  "canNotFetchRemoteRule": "\u65E0\u6CD5\u83B7\u53D6\u8FDC\u7A0B\u89C4\u5219",
  "enableAlphaSuccess": "\u5DF2\u5F00\u542FAlpha\u529F\u80FD",
  "disableAlphaSuccess": "\u5DF2\u5173\u95EDAlpha\u529F\u80FD",
  "cacheSize": "\u7F13\u5B58\u5927\u5C0F\uFF1A",
  "cleaning": "\u6E05\u7406\u4E2D",
  "cleanCache": "\u6E05\u9664\u7F13\u5B58",
  "options": "\u9078\u9805",
  "about": "\u95DC\u65BC",
  "service": "\u7FFB\u8B6F\u670D\u52D9",
  "needAction": "(\u53BB\u8BBE\u7F6E)",
  "translationEngine": "\u5F15\u64CE\u9078\u9805",
  "sourceLanguage": "\u539F\u6587\u8BED\u8A00",
  "target": "\u76EE\u6A19\u8A9E\u8A00",
  "forThisSite": "\u5C0D\u65BC\u8A72\u7DB2\u7AD9\uFF1A",
  "alwaysTranslateSomeLanguage": "\u7E3D\u662F\u7FFB\u8B6F{language}",
  "neverTranslateSomeLanguage": "\u6C38\u4E0D\u7FFB\u8B6F{language}",
  "alwaysTranslateSomeSite": "\u7E3D\u662F\u7FFB\u8B6F {hostname}",
  "neverTranslateSomeSite": "\u6C38\u4E0D\u7FFB\u8B6F {hostname}",
  "add": "\u589E\u52A0",
  "default": "\u9ED8\u8A8D",
  "forThisLanguage": "\u5C0D\u65BC\u8A72\u8A9E\u8A00\uFF1A",
  "add url": "\u8F38\u5165URL",
  "edit": "\u7DE8\u8F2F",
  "translate other languages into specific language": "\u5C07\u5176\u4ED6\u8A9E\u8A00\u7FFB\u8B6F\u70BA\u4F60\u8A2D\u7F6E\u7684\u8A9E\u8A00",
  "select translation service": "\u9078\u64C7\u4E00\u9805\u7FFB\u8B6F\u670D\u52D9",
  "language": "\u8A9E\u8A00",
  "show-original": "\u986F\u793A\u539F\u6587",
  "translate": "\u7FFB\u8B6F",
  "Translated": "\u5DF2\u7FFB\u8B6F",
  "Translating": "\u7FFB\u8B6F\u4E2D",
  "Error": "\u932F\u8AA4",
  "allowCacheTranslations": "\u958B\u555F\u672C\u5730\u7FFB\u8B6F\u7DE9\u5B58\uFF08\u6E1B\u5C11\u91CD\u8907\u6BB5\u843D\u7684\u7FFB\u8B6F\u8ACB\u6C42\uFF09",
  "translation display": "\u8B6F\u6587\u986F\u793A\u6A23\u5F0F",
  "select diplay style": "\u5340\u5206\u8B6F\u6587\u7684\u6A23\u5F0F\uFF0C\u5177\u9AD4\u53EF\u53C3\u8003\u4E0B\u5217\u793A\u4F8B",
  "interface": "\u754C\u9762\u8A2D\u7F6E",
  "import_export": "\u5C0E\u5165/\u5C0E\u51FA",
  "translationTheme.none": "\u7121",
  "translationTheme.dashed": "\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.dotted": "\u9EDE\u72C0\u4E0B\u5283\u7DDA",
  "translationTheme.dashedBorder": "\u865B\u7DDA\u908A\u6846",
  "translationTheme.underline": "\u76F4\u7DDA\u4E0B\u5283\u7DDA",
  "translationTheme.mask": "\u6A21\u7CCA\u6548\u679C",
  "translationTheme.paper": "\u767D\u7D19\u9670\u5F71\u6548\u679C",
  "translationTheme.highlight": "\u9AD8\u4EAE",
  "translationTheme.blockquote": "\u5F15\u7528\u6A23\u5F0F",
  "translationTheme.weakening": "\u5F31\u5316",
  "translationTheme.italic": "\u659C\u9AD4",
  "translationTheme.bold": "\u7C97\u9AD4",
  "translationTheme.thinDashed": "\u7D30\u865B\u7DDA\u4E0B\u5283\u7DDA",
  "translationServices.tencent": "\u9A30\u8A0A\u7FFB\u8B6F\u541B",
  "translationServices.google": "\u8C37\u6B4C\u7FFB\u8B6F",
  "translationServices.bai": "\u767E\u5EA6(Alpha)",
  "translationServices.baidu": "\u767E\u5EA6\u7FFB\u8B6F",
  "translationServices.aliyun": "\u963F\u91CC\u96F2\u7FFB\u8B6F",
  "translationServices.volc": "\u706B\u5C71\u7FFB\u8B6F",
  "translationServices.deeplx": "DeeplX(Alpha)",
  "translationServices.bing": "\u5FC5\u61C9\u7FFB\u8B6F",
  "translationServices.deepl": "Deepl",
  "translationServices.wechat": "\u5FAE\u4FE1\u7FFB\u8B6F",
  "translationServices.azure": "\u5FAE\u8EDF\u7FFB\u8B6F",
  "translationServices.ibm": "IBM Watson",
  "translationServices.aws": "\u4E9E\u99AC\u905C\u7FFB\u8B6F",
  "translationServices.mock": "\u6A21\u64EC\u7FFB\u8B6F",
  "translationServices.mock2": "\u6A21\u62DF\u7FFB\u8BD12",
  "translationServices.caiyun": "\u5F69\u96F2\u5C0F\u8B6F",
  "translationServices.volcAlpha": "\u706B\u5C71\u7FFB\u8B6F(Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "\u6709\u9053\u7FFB\u8B6F",
  "translationServices.transmart": "\u9A30\u8A0A\u4EA4\u4E92\u7FFB\u8B6F",
  "translationServices.d": "Deepl(Alpha)",
  "translate title": "\u7FFB\u8B6F\u9801\u9762\u6A19\u984C",
  "always languages": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u8A9E\u8A00",
  "always translate the following languages": "\u7576\u9801\u9762\u8A9E\u8A00\u70BA\u4E0B\u5217\u8A9E\u8A00\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "always sites": "\u7E3D\u662F\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "always translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u6703\u81EA\u52D5\u7FFB\u8B6F\u70BA\u76EE\u6A19\u8A9E\u8A00",
  "never sites": "\u6C38\u4E0D\u7FFB\u8B6F\u7684\u7DB2\u5740",
  "never translate the following sites": "\u7576\u7DB2\u7AD9\u70BA\u4E0B\u5217\u57DF\u540D\u6642\uFF0C\u5C07\u4E0D\u6703\u9032\u884C\u7FFB\u8B6F",
  "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
  "Key Application and Configuration Tutorial": "\u300A\u5BC6\u9470\u7533\u8ACB\u548C\u914D\u7F6E\u6559\u7A0B\u300B",
  "for details": "",
  "use the above style for the following sites": "\u5C07\u4E0A\u9762\u7684\u6A23\u5F0F\u7528\u65BC\u4EE5\u4E0B\u7DB2\u7AD9",
  "confirm": "\u5132\u5B58",
  "cancel": "\u53D6\u6D88",
  "delete": "\u522A\u9664",
  "languages.af": "\u5357\u975E\u8377\u862D\u8A9E",
  "languages.am": "\u963F\u59C6\u54C8\u62C9\u8A9E",
  "languages.ar": "\u963F\u62C9\u4F2F\u8A9E",
  "languages.auto": "\u6AA2\u6E2C\u8A9E\u8A00",
  "languages.az": "\u963F\u585E\u62DC\u7586\u8A9E",
  "languages.be": "\u767D\u4FC4\u7F85\u65AF\u8A9E",
  "languages.bg": "\u4FDD\u52A0\u5229\u4E9E\u8A9E",
  "languages.tn": "\u672D\u90A3\u8A9E",
  "languages.bn": "\u5B5F\u52A0\u62C9\u8A9E",
  "languages.bs": "\u6CE2\u65AF\u5C3C\u4E9E\u8A9E",
  "languages.ca": "\u52A0\u6CF0\u7F85\u5C3C\u4E9E\u8A9E",
  "languages.ceb": "\u5BBF\u52D9\u8A9E",
  "languages.co": "\u79D1\u897F\u5609\u8A9E",
  "languages.cs": "\u6377\u514B\u8A9E",
  "languages.cy": "\u5A01\u723E\u58EB\u8A9E",
  "languages.da": "\u4E39\u9EA5\u8A9E",
  "languages.de": "\u5FB7\u8A9E",
  "languages.el": "\u5E0C\u81D8\u8A9E",
  "languages.en": "\u82F1\u8A9E",
  "languages.eo": "\u4E16\u754C\u8A9E",
  "languages.es": "\u897F\u73ED\u7259\u8A9E",
  "languages.et": "\u611B\u6C99\u5C3C\u4E9E\u8A9E",
  "languages.eu": "\u5DF4\u65AF\u514B\u8A9E",
  "languages.fa": "\u6CE2\u65AF\u8A9E",
  "languages.fi": "\u82AC\u862D\u8A9E",
  "languages.fil": "\u83F2\u5F8B\u8CD3\u8A9E",
  "languages.fj": "\u6590\u6FDF\u8A9E",
  "languages.fr": "\u6CD5\u8A9E",
  "languages.fy": "\u5F17\u91CC\u65AF\u862D\u8A9E",
  "languages.ga": "\u611B\u723E\u862D\u8A9E",
  "languages.gd": "\u8607\u683C\u862D\u84CB\u723E\u8A9E",
  "languages.gl": "\u52A0\u5229\u897F\u4E9E\u8A9E",
  "languages.gu": "\u53E4\u5409\u62C9\u7279\u8A9E",
  "languages.ha": "\u8C6A\u85A9\u8A9E",
  "languages.haw": "\u590F\u5A01\u5937\u8A9E",
  "languages.he": "\u5E0C\u4F2F\u4F86\u8A9E",
  "languages.hi": "\u5370\u5730\u8A9E",
  "languages.hmn": "\u82D7\u8A9E",
  "languages.hr": "\u514B\u7F85\u5730\u4E9E\u8A9E",
  "languages.ht": "\u6D77\u5730\u514B\u91CC\u5967\u723E\u8A9E",
  "languages.hu": "\u5308\u7259\u5229\u8A9E",
  "languages.hy": "\u4E9E\u7F8E\u5C3C\u4E9E\u8A9E",
  "languages.id": "\u5370\u5EA6\u5C3C\u897F\u4E9E\u8A9E",
  "languages.ig": "\u4F0A\u535A\u8A9E",
  "languages.is": "\u51B0\u5CF6\u8A9E",
  "languages.it": "\u610F\u5927\u5229\u8A9E",
  "languages.ja": "\u65E5\u8A9E",
  "languages.jw": "\u722A\u54C7\u8A9E",
  "languages.ka": "\u683C\u9B6F\u5409\u4E9E\u8A9E",
  "languages.kk": "\u54C8\u85A9\u514B\u8A9E",
  "languages.km": "\u9AD8\u68C9\u8A9E",
  "languages.kn": "\u5361\u7D0D\u9054\u8A9E",
  "languages.ko": "\u97D3\u8A9E",
  "languages.ku": "\u5EAB\u723E\u5FB7\u8A9E",
  "languages.ky": "\u5409\u723E\u5409\u65AF\u8A9E",
  "languages.la": "\u62C9\u4E01\u8A9E",
  "languages.lb": "\u76E7\u68EE\u5821\u8A9E",
  "languages.lo": "\u8001\u64BE\u8A9E",
  "languages.lt": "\u7ACB\u9676\u5B9B\u8A9E",
  "languages.lv": "\u62C9\u812B\u7DAD\u4E9E\u8A9E",
  "languages.mg": "\u99AC\u723E\u52A0\u4EC0\u8A9E",
  "languages.mi": "\u6BDB\u5229\u8A9E",
  "languages.mk": "\u99AC\u5176\u9813\u8A9E",
  "languages.ml": "\u99AC\u62C9\u96C5\u62C9\u59C6\u8A9E",
  "languages.mn": "\u8499\u53E4\u8A9E",
  "languages.mr": "\u99AC\u62C9\u5730\u8A9E",
  "languages.ms": "\u99AC\u4F86\u8A9E",
  "languages.mt": "\u99AC\u8033\u4ED6\u8A9E",
  "languages.mww": "\u767D\u82D7\u6587",
  "languages.my": "\u7DEC\u7538\u8A9E",
  "languages.ne": "\u5C3C\u6CCA\u723E\u8A9E",
  "languages.nl": "\u8377\u862D\u8A9E",
  "languages.no": "\u632A\u5A01\u8A9E",
  "languages.ny": "\u5C3C\u694A\u624E\u8A9E\uFF08\u9F4A\u5207\u74E6\u8A9E\uFF09",
  "languages.otq": "\u514B\u96F7\u5854\u7F85\u5967\u6258\u7C73\u8A9E",
  "languages.pa": "\u65C1\u906E\u666E\u8A9E",
  "languages.pl": "\u6CE2\u862D\u8A9E",
  "languages.ps": "\u666E\u4EC0\u5716\u8A9E",
  "languages.pt": "\u8461\u8404\u7259\u8A9E\uFF08\u8461\u8404\u7259\u3001\u5DF4\u897F\uFF09",
  "languages.ro": "\u7F85\u99AC\u5C3C\u4E9E\u8A9E",
  "languages.ru": "\u4FC4\u8A9E",
  "languages.sd": "\u4FE1\u5FB7\u8A9E",
  "languages.si": "\u50E7\u4F3D\u7F85\u8A9E",
  "languages.sk": "\u65AF\u6D1B\u4F10\u514B\u8A9E",
  "languages.sl": "\u65AF\u6D1B\u6587\u5C3C\u4E9E\u8A9E",
  "languages.sm": "\u85A9\u6469\u4E9E\u8A9E",
  "languages.sn": "\u4FEE\u7D0D\u8A9E",
  "languages.so": "\u7D22\u99AC\u91CC\u8A9E",
  "languages.sq": "\u963F\u723E\u5DF4\u5C3C\u4E9E\u8A9E",
  "languages.sr": "\u585E\u723E\u7DAD\u4E9E\u8A9E",
  "languages.sr-Cyrl": "\u585E\u723E\u7DAD\u4E9E\u8A9E(\u897F\u91CC\u723E\u6587)",
  "languages.sr-Latn": "\u585E\u723E\u7DAD\u4E9E\u8A9E(\u62C9\u4E01\u6587)",
  "languages.st": "\u585E\u7D22\u6258\u8A9E",
  "languages.su": "\u5DFD\u4ED6\u8A9E",
  "languages.sv": "\u745E\u5178\u8A9E",
  "languages.sw": "\u65AF\u74E6\u5E0C\u91CC\u8A9E",
  "languages.ta": "\u6CF0\u7C73\u723E\u8A9E",
  "languages.te": "\u6CF0\u76E7\u56FA\u8A9E",
  "languages.tg": "\u5854\u5409\u514B\u8A9E",
  "languages.th": "\u6CF0\u8A9E",
  "languages.tlh": "\u514B\u6797\u8CA2\u8A9E",
  "languages.tlh-Qaak": "\u514B\u6797\u8CA2\u8A9E(piqaD)",
  "languages.to": "\u6E6F\u52A0\u8A9E",
  "languages.tr": "\u571F\u8033\u5176\u8A9E",
  "languages.ty": "\u5854\u5E0C\u63D0\u8A9E",
  "languages.ug": "\u7DAD\u543E\u723E\u8A9E",
  "languages.uk": "\u70CF\u514B\u862D\u8A9E",
  "languages.ur": "\u70CF\u723E\u90FD\u8A9E",
  "languages.uz": "\u70CF\u8332\u5225\u514B\u8A9E",
  "languages.vi": "\u8D8A\u5357\u8A9E",
  "languages.wyw": "\u6587\u8A00\u6587",
  "languages.xh": "\u73ED\u5716\u8A9E",
  "languages.yi": "\u610F\u7B2C\u7DD2\u8A9E",
  "languages.yo": "\u7D04\u9B6F\u5DF4\u8A9E",
  "languages.yua": "\u5C24\u5361\u5766\u746A\u96C5\u8A9E",
  "languages.yue": "\u7CB5\u8A9E\uFF08\u7E41\u9AD4\uFF09",
  "languages.zh-CN": "\u4E2D\u6587\uFF08\u7C21\u9AD4\uFF09",
  "languages.zh-TW": "\u4E2D\u6587\uFF08\u7E41\u9AD4\uFF09",
  "languages.zu": "\u7956\u9B6F\u8A9E"
};

// locales/en.json
var en_default = {
  "lineBreakMaxTextCount": "\u6362\u884C\u540E\uFF0C\u6BCF\u53E5\u8BDD\u5141\u8BB8\u7684\u6700\u5927\u5B57\u7B26\u6570\u91CF",
  "enableLineBreak": "\u662F\u5426\u5F00\u542F\u957F\u6BB5\u843D\u81EA\u52A8\u6362\u884C",
  "sponsorLabel": "$1 \u8D77\u8D5E\u52A9\u5F00\u53D1\u8005 (\u6309\u6708\u6216\u4E00\u6B21\u6027\u5747\u53EF)",
  "enableLineBreakDescription": "\u5F00\u542F\u540E\uFF0C\u5C06\u4F1A\u5728\u957F\u6BB5\u843D\u4E2D\u6BCF\u53E5\u8BDD\u7ED3\u675F\u63D2\u5165\u6362\u884C\u7B26\uFF0C\u4EE5\u4FBF\u4E8E\u9605\u8BFB",
  "browser.brandName": "Immersive Translate",
  "browser.brandDescription": "Web bilingual translation, completely free to use, supports Deepl/Google/Bing/Tencent/Youdao, etc. it also works on iOS Safari.",
  "browser.toggleTranslatePage": "Toggle translate webpage ",
  "browser.toggleTranslateTheWholePage": "Toggle translate the whole page",
  "browser.toggleTranslateToThePageEndImmediately": "Toggle translate to the bottom of the page immediately",
  "browser.toggleTranslateTheMainPage": "Toggle translate the main page",
  "browser.openOptionsPage": "Open Settings Page",
  "browser.translateLocalPdfFile": "Translate local PDF files",
  "changelog": "\u66F4\u65B0\u65E5\u5FD7",
  "general": "General",
  "toggleDebug": "\u5728\u63A7\u5236\u53F0\u6253\u5370\u8C03\u8BD5\u65E5\u5FD7",
  "document": "\u6587\u6863",
  "resetSuccess": "\u91CD\u7F6E\u6240\u6709\u8BBE\u7F6E\u6210\u529F",
  "goAdvancedSettings": "\u53BB\u8FDB\u9636\u8BBE\u7F6E\u9875",
  "advanced": "Advanced",
  "advancedDescription": "\u4E00\u4E9B\u96BE\u4EE5\u7406\u89E3\u7684\u8BBE\u7F6E\u9879\uFF08\u4E00\u822C\u65E0\u9700\u8BBE\u7F6E\uFF0C\u4FDD\u6301\u9ED8\u8BA4\u5373\u53EF\uFF09",
  "developer": "\u5F00\u53D1\u8005\u8BBE\u7F6E",
  "donateCafe": "Buy Me a Coffee",
  "translate to the bottom of the page": "Whether translate to the bottom of the page once you open the page?",
  "feedback": "Feedback",
  "toggleTranslatePage": "Toggle Translate",
  "openOptionsPage": "Open Options",
  "translateToThePageEndImmediatelyDescription": "When turned on, it will immediately translate the page from the top to the bottom, instead of translating as you read. (Not recommended to turn on)",
  "translate all areas of the page": "Whether to translate all areas of the web page",
  "translationAreaDescription": "When enabled, the entire area of the page will be translated, not the default intelligent recognition main area to translate ( not recommended)",
  "the number of characters to be translated first": "How many characters are translated directly without waiting to scroll to the visible area for the first few characters?",
  "interface language": "Interface language",
  "display both the original text and the translation": "Display both the original text and the translation",
  "keyboard shortcuts": "Keyboard shortcuts",
  "modify": "Modify shortcut key",
  "reset": "Reset",
  "close": "Close",
  "homepage": "Home Page",
  "more": "More",
  "translateTheWholePage": "Translate the whole page area (different from only the main area)",
  "translateToThePageEndImmediately": "Immediately translate to the bottom (different from behold translate which)",
  "The local rules are up to date": "Local  rules are up to date:",
  "Successfully synchronized with the latest official rules:": "Successfully synced latest official rules:",
  "Checking for updates": "Checking for update",
  "Rules are being synchronized": "Syncing official rules",
  "localVersionIsTooOld": "The local extension is too old. Please upgrade to {minVersion} or then try syncing again",
  "foundNewVersion": "New version available",
  "theLocalExtensionIsUpToUpdate": "The current extension version is up to date.",
  "failToSyncRules": "Failed to sync latest adaptive rules",
  "retry": "Retry",
  "failedReason": "Failure reason",
  "currentRuleVersion": "Current Rule Version",
  "calculating": "Calculating",
  "unknownError": "Unknown Error",
  "canNotFetchRemoteRule": "Unable to fetch remote rule",
  "enableAlphaSuccess": "Alpha enabled successfully",
  "disableAlphaSuccess": "Alpha has been disabled",
  "cacheSize": "Cache size:",
  "cleaning": "Cleaning",
  "cleanCache": "Clear cache",
  "options": "Options",
  "about": "About",
  "service": "Translation Service",
  "needAction": "(to set up)",
  "translationEngine": "Engine Options",
  "sourceLanguage": "Original language",
  "target": "Target Language",
  "forThisSite": "For This Site:",
  "alwaysTranslateSomeLanguage": "Always translate {language}",
  "neverTranslateSomeLanguage": "Never translate {language}",
  "alwaysTranslateSomeSite": "Always translate {hostname}",
  "neverTranslateSomeSite": "Never translate {hostname}",
  "add": "Add",
  "default": "Default",
  "forThisLanguage": "For This Language:",
  "add url": "Add URL",
  "edit": "Edit",
  "translate other languages into specific language": "Translate other languages into the language you set",
  "select translation service": "Select a translation service",
  "language": "Language",
  "show-original": "Show original text",
  "translate": "Translate",
  "Translated": "Translated",
  "Translating": "Translating",
  "Error": "Error",
  "allowCacheTranslations": "Enable local translation caching (reduce translation requests for duplicate paragraphs)",
  "translation display": "Translation display style",
  "select diplay style": "Please refer to the following examples",
  "interface": "Interface Settings",
  "import_export": "Import/Export",
  "translationTheme.none": "None",
  "translationTheme.dashed": "Dashed underline",
  "translationTheme.dotted": "Dotted Underline",
  "translationTheme.dashedBorder": "Dashed Border",
  "translationTheme.underline": "Straight underline",
  "translationTheme.mask": "Blur effect",
  "translationTheme.paper": "White paper shadow effect",
  "translationTheme.highlight": "Highlight",
  "translationTheme.blockquote": "quote style",
  "translationTheme.weakening": "Weakening",
  "translationTheme.italic": "Italic",
  "translationTheme.bold": "Bold",
  "translationTheme.thinDashed": "Thin dashed underline",
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
  "translationServices.volcAlpha": "Volcano Translation (Alpha)",
  "translationServices.openl": "OpenL",
  "translationServices.youdao": "Youdao Translation",
  "translationServices.transmart": "Tencent Smart Translation",
  "translationServices.d": "DeeplX (Alpha)",
  "translate title": "Translate page title",
  "always languages": "Always translate the following languages",
  "always translate the following languages": "The following languages will always be translated",
  "always sites": "Always translate the following sites",
  "always translate the following sites": "The following sites will always be translated",
  "never sites": "Never translate the following sites",
  "never translate the following sites": "The following sites will never be translated",
  "please refer to": "\u9700\u8981\u586B\u5199\u5BC6\u94A5\u540E\u624D\u53EF\u7528\uFF0C\u8BE6\u60C5\u53C2\u8003",
  "Key Application and Configuration Tutorial": " 'Key Application and Configuration Tutorial' ",
  "for details": "",
  "use the above style for the following sites": "use the above style for the following sites",
  "confirm": "Save",
  "cancel": "Cancel",
  "delete": "Delete",
  "languages.af": "Afrikaans",
  "languages.am": "Amharic",
  "languages.ar": "Arabic",
  "languages.auto": "Detect Language",
  "languages.az": "Azerbaijani",
  "languages.be": "Belarusian",
  "languages.bg": "Bulgarian",
  "languages.tn": "Zana",
  "languages.bn": "Bengali",
  "languages.bs": "Bosnian",
  "languages.ca": "Catalan",
  "languages.ceb": "Cebuano",
  "languages.co": "Corsican",
  "languages.cs": "Czech",
  "languages.cy": "Welsh",
  "languages.da": "Danish",
  "languages.de": "German",
  "languages.el": "Greek",
  "languages.en": "English",
  "languages.eo": "Esperanto",
  "languages.es": "Spanish",
  "languages.et": "Estonian",
  "languages.eu": "Basque",
  "languages.fa": "Farsi",
  "languages.fi": "Finnish",
  "languages.fil": "Filipino",
  "languages.fj": "Fijian",
  "languages.fr": "French",
  "languages.fy": "Frisian",
  "languages.ga": "Irish",
  "languages.gd": "Scottish Gaelic",
  "languages.gl": "Galician",
  "languages.gu": "Gujarati",
  "languages.ha": "Hausa",
  "languages.haw": "Hawaiian",
  "languages.he": "Hebrew",
  "languages.hi": "Hindi",
  "languages.hmn": "Hmong",
  "languages.hr": "Croatian",
  "languages.ht": "Haitian Creole",
  "languages.hu": "Hungarian",
  "languages.hy": "Armenian",
  "languages.id": "Indonesian",
  "languages.ig": "Igbo",
  "languages.is": "Icelandic",
  "languages.it": "Italian",
  "languages.ja": "Japanese",
  "languages.jw": "Javanese",
  "languages.ka": "Georgian",
  "languages.kk": "Kazakh",
  "languages.km": "Khmer",
  "languages.kn": "Kannada",
  "languages.ko": "Korean",
  "languages.ku": "Kurdish",
  "languages.ky": "Kyrgyz",
  "languages.la": "Latin",
  "languages.lb": "Luxembourgish",
  "languages.lo": "Lao",
  "languages.lt": "Lithuanian",
  "languages.lv": "Latvian",
  "languages.mg": "Malagash",
  "languages.mi": "Maori",
  "languages.mk": "Macedonian",
  "languages.ml": "Malayalam",
  "languages.mn": "Mongolian",
  "languages.mr": "Marathi",
  "languages.ms": "Malay",
  "languages.mt": "Maltese",
  "languages.mww": "Bai Miao",
  "languages.my": "Burmese",
  "languages.ne": "Nepali",
  "languages.nl": "Dutch",
  "languages.no": "Norwegian",
  "languages.ny": "Nyanza (Chichewa)",
  "languages.otq": "Quer\xE9taro Otomi",
  "languages.pa": "Punjabi",
  "languages.pl": "Polish",
  "languages.ps": "Pashto",
  "languages.pt": "Portuguese (Portugal, Brazil)",
  "languages.ro": "Romanian",
  "languages.ru": "Russian",
  "languages.sd": "Sindhi",
  "languages.si": "Sinhala",
  "languages.sk": "Slovak",
  "languages.sl": "Slovenian",
  "languages.sm": "Samoan",
  "languages.sn": "Shona",
  "languages.so": "Somali",
  "languages.sq": "Albanian",
  "languages.sr": "Serbian",
  "languages.sr-Cyrl": "Serbian (Cyrillic)",
  "languages.sr-Latn": "Serbian (Latin)",
  "languages.st": "Sesotho",
  "languages.su": "Sundanese",
  "languages.sv": "Swedish",
  "languages.sw": "Swahili",
  "languages.ta": "Tamil",
  "languages.te": "Telugu",
  "languages.tg": "Tajik",
  "languages.th": "Thai",
  "languages.tlh": "Klingon",
  "languages.tlh-Qaak": "Klingon (piqaD)",
  "languages.to": "Tongan",
  "languages.tr": "Turkish",
  "languages.ty": "Tahiti",
  "languages.ug": "Uyghur",
  "languages.uk": "Ukrainian",
  "languages.ur": "Urdu",
  "languages.uz": "Uzbek",
  "languages.vi": "Vietnamese",
  "languages.wyw": "Classical Chinese",
  "languages.xh": "Bantu",
  "languages.yi": "Yiddish",
  "languages.yo": "Yoruba",
  "languages.yua": "Yucatan Mayan",
  "languages.yue": "Cantonese (Traditional)",
  "languages.zh-CN": "Chinese (Simplified)",
  "languages.zh-TW": "Chinese (Traditional)",
  "languages.zu": "Zulu"
};

// libs/preact-translation/utils.ts
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
function t2(data, key, lang, fallbackLang, params) {
  if (!data.hasOwnProperty(lang)) {
    return key;
  }
  let value = getValue(data, lang, key);
  if (value === key && lang !== fallbackLang) {
    value = getValue(data, fallbackLang, key);
  }
  return format(value, params);
}

// locales.ts
var translations = {
  "zh-CN": zh_CN_default,
  "en": en_default,
  "zh-TW": zh_TW_default
};
function t3(key, config, params) {
  return t2(
    translations,
    key,
    config.interfaceLanguage,
    fallbackLanguage,
    params
  );
}

// menu.ts
var actions = isChrome() ? ["action"] : ["browser_action", "page_action"];
var menus = [
  {
    id: "toggleTranslatePage",
    contexts: ["page", "frame", ...actions]
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
  log_default.debug(`createContextMenu`, menus);
  await browserAPI.contextMenus.removeAll();
  for (const menu of menus) {
    browserAPI.contextMenus.create({
      id: menu.id,
      title: t3(`browser.${menu.id}`, config),
      contexts: menu.contexts
    }, () => browserAPI.runtime.lastError);
  }
}
async function setupContextMenuListeners(config) {
  browserAPI.contextMenus.onClicked.addListener(
    (info) => {
      if (info.menuItemId === contextOpenOptionsMenuId) {
        browserAPI.runtime.openOptionsPage();
      } else if (info.menuItemId === contextTranslateLocalPdfFileMenuId) {
        const pdfViewerRuntimeUrl = browserAPI.runtime.getURL(pdfViewerUrl);
        browserAPI.tabs.create({
          url: pdfViewerRuntimeUrl
        });
      } else {
        sendMessageToContent({
          method: info.menuItemId
        });
      }
    }
  );
  await createContextMenu(config);
}

// browser_updated_listeners.ts
function onUpdated() {
  getConfig().then((config) => {
    createContextMenu(config);
  }).catch((e3) => {
    log_default.error(`create menu error`, e3);
  });
}
function setupOnInstalledListener() {
  browserAPI.runtime.onInstalled.addListener((details) => {
    log_default.debug(`onInstalled reason: ${details.reason}`);
    if (details.reason == "install") {
      browserAPI.tabs.create({
        url: browserAPI.runtime.getURL("options.html")
      });
      onUpdated();
    } else if (details.reason == "update" && browserAPI.runtime.getManifest().version != details.previousVersion) {
      onUpdated();
    } else {
      onUpdated();
    }
  });
}

// background.ts
async function main() {
  setupOnInstalledListener();
  setupCommandListeners();
  const config = await getConfig();
  setupContextMenuListeners(config).catch((e3) => {
    log_default.error(`setup context menu error`, e3);
  });
  if (config.debug) {
    log_default.setLevel("debug");
  } else {
    log_default.setLevel("info");
  }
}
steupMessageListeners();
main();
