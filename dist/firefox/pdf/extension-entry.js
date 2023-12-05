let pdfReady = false;

function main() {
  globalThis.addEventListener("message", listenMessage);
  const iframe = document.querySelector("iframe");
  // read the file param
  const urlObj = new URL(window.location.href);
  const file = urlObj.searchParams.get("file");
  if (!file) {
    restorePdf();
    hiddenLoading();
    return;
  }
  fetch(file).then((response) => {
    return response.blob();
  })
    .then((blob) => {
      waitIframeLoad().then(function () {
        iframe.contentWindow.postMessage({
          type: "pdf-local-file",
          blob: blob,
        }, "*");
      });
    }).catch(function (err) {
      console.error(err);
      restorePdf(file);
      hiddenLoading();
    });

  function restorePdf(filepath) {
    const iframeUrlObj = new URL(iframe.getAttribute("src"));
    iframeUrlObj.search = "";
    if (filepath) iframeUrlObj.searchParams.set("file", filepath);
    iframe.setAttribute("src", iframeUrlObj.toString());
  }
}

function waitIframeLoad() {
  return new Promise(function (resolve, reject) {
    if (pdfReady) return resolve();

    function listenMessage(event) {
      if (event.data && event.data.type == "pdf-ready") {
        globalThis.removeEventListener("message", listenMessage);
        return resolve();
      }
    }
    globalThis.addEventListener("message", listenMessage);
  })
}

function listenMessage(event) {
  const data = event.data;
  if (!data) return;
  if (data.type == "pdf-ready") {
    pdfReady = true;
  }
  if (data.type == "pdf-loaded") {
    hiddenLoading();
  }
}
function hiddenLoading() {
  const ele = document.getElementById("loading")
  if (!ele) return;
  ele.style.display = "none";
}

main();
