// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://fosstodon.org/@moaparty
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fosstodon.org
// @grant        GM.addStyle
// @grant        GM.getValue
// @grant        GM.setValue
// ==/UserScript==

(function () {
  "use strict";

  function get(key, defaultValue) {
    return GM.getValue(key, defaultValue);
  }
  function set(key, value) {
    return GM.setValue(key, value);
  }

  const ticksPrefix = "rateLimitTicks_";
  async function getDelay(options) {
    // options
    if (options) {
      if (options.interval) {
        options.interval = Number(options.interval);
      }
      if (options.limit) {
        options.limit = Number(options.limit);
      }
    }
    const key = options.key;

    const limit = options.limit;
    const interval = options.interval;
    const strictTicks = await get(`${ticksPrefix}${key}`, []);
    console.log("strictTicks", strictTicks);

    const now = Date.now();

    if (strictTicks.length < limit) {
      strictTicks.push(now);
      await saveTicks(key, strictTicks, interval, now);
      return 0;
    }

    const earliestTime = strictTicks.shift() + interval;

    if (now >= earliestTime) {
      strictTicks.push(now);
      await saveTicks(key, strictTicks, interval, now);
      return 0;
    }

    strictTicks.push(earliestTime);
    await saveTicks(key, strictTicks, interval, now);
    return earliestTime - now;
  }

  async function saveTicks(key, ticks, interval, now) {
    const newTicks = ticks.filter((tick) => {
      const nextTime = tick + interval;
      return nextTime > now;
    });
    console.log("newTicks", newTicks);
    await set(`${ticksPrefix}${key}`, newTicks);
    return newTicks;
  }

  (async function () {
    const promises = [];
    for (let i = 0; i < 10; i++) {
      const promise = getDelay({
        key: "deepl",
        interval: 1000,
        limit: 5,
      });
      promises.push(promise);
    }
    const delays = await Promise.all(promises);
    console.log("delays", delays);
  })();
})();
