(() => {
  const xhrOpen = XMLHttpRequest.prototype.open;
  const xhrSend = XMLHttpRequest.prototype.send;

  const customOpen = function () {
    arguments[1].includes("api/timedtext") && (this._url = arguments[1]),
      xhrOpen.apply(this, arguments);
  };

  const customSend = function () {
    if (this._url) {
      const id = (new Date()).getTime();
      globalThis.postMessage({
        type: "youtube-subtitle-request",
        text: this._url,
        id,
      });

      const handleEvent = ({ data }) => {
        if ("youtube-subtitle-response" === data.type && data.id === id) {
          if (data.text) {
            Object.defineProperty(this, "responseText", {
              value: data.text,
              writable: false,
            });
          }
          xhrSend.apply(this, arguments);
          globalThis.removeEventListener("message", handleEvent);
        }
      };
      globalThis.addEventListener("message", handleEvent);
    } else {
      xhrSend.apply(this, arguments);
    }
  };
  Object.defineProperty(XMLHttpRequest.prototype, "open", {
    value: customOpen,
    writable: false,
  });
  Object.defineProperty(XMLHttpRequest.prototype, "send", {
    value: customSend,
    writable: false,
  });

  let timer = null;

  const getYTInitialPlayerResponse = () => {
    return fetch(globalThis.location.href)
      .then((res) => {
        if (!res.ok) throw new Error("request subtitle error");
        return res.text();
      })
      .then((t) =>
        (new window.DOMParser())
          .parseFromString(t, "text/html")
      )
      .then((t) => {
        const n = [...t.body.querySelectorAll(":scope > script")].find(
          (t) => t.textContent.includes("ytInitialPlayerResponse"),
        );
        return new Function(
          `const window = {}; ${n.textContent}; return ytInitialPlayerResponse;`,
        )();
      }).catch((e) => {
        return null;
      });
  };

  const reloadSubtitles = ({ selector, force }) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      const video = document.querySelector(selector || `.html5-video-player`);
      if (!video || !video.toggleSubtitles) {
        reloadSubtitles({ selector, force });
        return;
      }
      video.toggleSubtitles();
      video.toggleSubtitles();
    }, 300);
  };

  globalThis.addEventListener("message", ({ data }) => {
    if (data.type == "youtube-reload-subtitles") {
      reloadSubtitles(data);
    }
    if (data.type === "youtube-initial-player-request") {
      getYTInitialPlayerResponse(data.text).then((res) => {
        globalThis.postMessage({
          type: "youtube-initial-player-response",
          text: res,
          id: data.id,
        });
      });
    }
  });
})();
