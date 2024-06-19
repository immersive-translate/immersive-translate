let pdfReady = false;

function main() {
  globalThis.addEventListener("message", listenMessage);
  const iframe = document.querySelector("iframe");
  // read the file param
  const urlObj = new URL(window.location.href);
  let filePath = urlObj.searchParams.get("file");
  if (!filePath) {
    restorePdf();
    hiddenLoading();
    return;
  }

  let fileIndex = filePath.indexOf("file:///");
  if (fileIndex < 0) fileIndex = filePath.indexOf("http://");
  if (fileIndex < 0) fileIndex = filePath.indexOf("https://");

  if (fileIndex > 0) {
    filePath = filePath.slice(fileIndex);
  }

  fetch(filePath).then((response) => {
    return response.blob();
  })
    .then((blob) => {
      waitIframeLoad().then(function () {
        iframe.contentWindow.postMessage({
          type: "pdf-local-file",
          blob: blob,
          fileName: getDecodedFileName(filePath),
        }, "*");
      });
    }).catch(function (err) {
      console.error(err);
      restorePdf(filePath);
      hiddenLoading();
    });

  function restorePdf(filepath) {
    const iframeUrlObj = new URL(iframe.getAttribute("src"));
    iframeUrlObj.search = "";
    if (filepath) iframeUrlObj.searchParams.set("file", filepath);
    iframe.setAttribute("src", iframeUrlObj.toString());
  }

  function getDecodedFileName(url) {
    const encodedFileName = url.split("/").pop();
    const decodedFileName = decodeURIComponent(encodedFileName);
    return decodedFileName;
  }
}

function waitIframeLoad() {
  return new Promise(function (resolve, reject) {
    if (pdfReady) return resolve();

    function listenMessage(event) {
      if (event.data && event.data.type == "pdf-ready") {
        return resolve();
      }
    }
    globalThis.addEventListener("message", listenMessage);
  });
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
  if (data.type == "update-title") {
    document.title = data.title;
  }
}
function hiddenLoading() {
  const ele = document.getElementById("loading");
  if (!ele) return;
  ele.style.display = "none";
}

main();
