//监听未捕获异常
window.addEventListener("unhandledrejection", noHandleError);

function noHandleError(event) {
  const message = typeof event.reason == "object"
    ? event.reason.message
    : event.reason;
  if (message.indexOf("Missing PDF") >= 0) {
    const ele = document.createElement("div");
    ele.innerHTML = `
    <div style="background:white;width:100vw;height: calc(100vh - 32px);display: flex;flex-direction: column;justify-content: center;align-items: center;font-size: 18px;">
      <div style="font-weight: bold;font-size: 20px;">暂无权限导入该文件，请手动导入</div>
      <div style="display: flex;flex-direction: row;margin-top: 12px;">
          <span style="">请点击右上角</span>
          <div style="position: relative;">
              <button id="openFile" class="toolbarButton hiddenLargeView" title="打开文件" tabindex="31" data-l10n-id="open_file">
                  <span data-l10n-id="open_file_label">打开</span>
              </button>
          </div>
          <span style="margin-top: 2px;">导入 PDF 文件</span>
      </div>
      <div>或者拖拽文件到此窗口导入</div>
    </div>
    `;
    const viewer = document.querySelector("#viewer");
    if (!viewer) return;
    viewer.appendChild(ele);
  }
}

const DownloadTypeEnum = {
  dual: "dual",
  translated: "translated"
}
let downloadType = DownloadTypeEnum.dual;
let startDownload, cancelDialog;
window.addEventListener("DOMContentLoaded", function () {
  createControlButton();
  setTimeout(() => {
    const downloadManager = globalThis.PDFViewerApplication.downloadManager;
    const oldDownload = downloadManager.download.bind(downloadManager);

    downloadManager.download = function (blob, url, filename, options) {
      try {
        startDownload = async function () {
          updateProgress(0);

          const pdfBytes = await blob.arrayBuffer();
          const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes, {
            updateMetadata: false,
          });

          let newPdfDoc;
          let title = "";
          if (downloadType == DownloadTypeEnum.translated) {
            newPdfDoc = await handleOnlyTranslatedPdf(pdfDoc);
            title = filename.replace(".pdf", "-ony-tranlsated.pdf");
          } else {
            newPdfDoc = await handlePdf(pdfDoc);
            title = filename.replace(".pdf", "-dual-tranlsated.pdf");
          }
          if (cancelDialog) return;
          const newPdfBytes = await newPdfDoc.save();
          oldDownload(
            new Blob([newPdfBytes], { type: "application/pdf" }),
            url,
            title,
            options,
          );
        };
        startDownload = startDownload.bind(downloadManager);
        showDownloadModal();
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
    };
  }, 1000);
});

async function handlePdf(pdfDoc) {
  try {
    const newPdfDoc = await PDFLib.PDFDocument.create();
    const elements = document.querySelectorAll(".immersive-translate-page");
    const pages = [...pdfDoc.getPages()];
    const sizeMap = {};

    for (let i = 0; i < elements.length; i++) {
      if (cancelDialog) return;

      const element = elements[i];
      const pageNum = parseInt(element.getAttribute("data-page-number")) - 1;

      const { width, height } = pages[pageNum].getSize();
      if (sizeMap[`${width}-${height}`] == undefined) {
        newPdfDoc.addPage([width, height]);
        sizeMap[`${width}-${height}`] = newPdfDoc.getPages().length - 1;
      }

      const [newPage] = await pdfDoc.copyPages(newPdfDoc, [
        sizeMap[`${width}-${height}`],
      ]);
      await drawElemetnToPage(pdfDoc, element, newPage);
      pdfDoc.insertPage(pageNum * 2 + 1, newPage);
      updateProgress(i + 1);
      if (i == elements.length - 1) {
        closeModal();
      }
    }
    return pdfDoc;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}

async function handleOnlyTranslatedPdf(pdfDoc) {
  try {
    const newPdfDoc = await PDFLib.PDFDocument.create();
    const elements = document.querySelectorAll(".immersive-translate-page");
    const pages = [...pdfDoc.getPages()];

    for (let i = 0; i < elements.length; i++) {
      if (cancelDialog) return;

      const element = elements[i];
      const pageNum = parseInt(element.getAttribute("data-page-number")) - 1;

      const { width, height } = pages[pageNum].getSize();
      newPdfDoc.addPage([width, height]);
      const newPage = newPdfDoc.getPages()[i];
      await drawElemetnToPage(newPdfDoc, element, newPage);
      updateProgress(i + 1);
      if (i == elements.length - 1) {
        closeModal();
      }
    }
    return newPdfDoc;
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}

function showDownloadModal() {
  const pagesCount = globalThis.PDFViewerApplication.pagesCount;
  const elements = document.querySelectorAll(".immersive-translate-page");
  cancelDialog = false;
  let dialog = document.getElementById("immersive-modal");
  const disableDownload = isSafari();
  if (!dialog) {
    dialog = document.createElement("div");
    dialog.id = "immersive-modal";
    dialog.className = "immersive-translate-modal";
    dialog.innerHTML = `
  <div class="immersive-translate-modal-content">
    <span data-action="close" class="immersive-translate-close">&times;</span>
    <p>请检查翻译效果，可参考示例 PDF 对译文段落大小和位置进行调整，译文内容将会保存成图片</p>
    <p class="mobile-hint">建议 PC 端使用，可以调整翻译效果</p>
    <p id="immersive-state"></p>
    <div class="immersive-translate-progress-container">
      <div class="immersive-translate-progress-bar" id="immersive-progress"></div>
    </div>
    <div class="immersive-translate-btn-warpper">
    <div class="immersive-translate-btn immersive-gary" data-action="close">取消</div>
    <div class="immersive-translate-btn" id="immersive-translated-download">译文下载</div>
    <div class="immersive-translate-btn" id="immersive-dual-download">双语下载</div>
    </div>
  </div>
  `;
    if (disableDownload) {
      dialog.innerHTML = `
  <div class="immersive-translate-modal-content">
    <span data-action="close" class="immersive-translate-close">&times;</span>
    <p>抱歉，Safari 对插件导出文件有限制，暂时无法导出，请使用其他浏览器替代。</p>
    <div class="immersive-translate-btn-warpper"><div class="immersive-translate-btn immersive-gary" data-action="close">取消</div></div>
  </div>
      `;
    }
    document.body.appendChild(dialog);
    const elements = dialog.querySelectorAll("[data-action='close']");
    const closeFun = () => {
      cancelDialog = true;
      closeModal();
    };
    elements.forEach((item) => item.onclick = closeFun);
    if (!disableDownload) {
      const dualDownloadBtn = document.getElementById("immersive-dual-download");
      dualDownloadBtn.onclick = () => {
        if (dualDownloadBtn.classList.contains("immersive-disable")) return;
        downloadType = DownloadTypeEnum.dual;
        startDownload?.();
        dualDownloadBtn.classList.add("immersive-disable");
      };
      const translateDownloadBtn = document.getElementById("immersive-translated-download");
      translateDownloadBtn.onclick = () => {
        if (translateDownloadBtn.classList.contains("immersive-disable")) return;
        downloadType = DownloadTypeEnum.translated;
        startDownload?.();
        translateDownloadBtn.classList.add("immersive-disable");
      };
    }
  }
  dialog.style.display = "block";
  if (disableDownload) return;
  const currentStateDOM = document.getElementById("immersive-state");
  currentStateDOM.innerHTML =
    `已翻译 <b>${elements.length}</b> 页 / 总共 ${pagesCount} 页`;
  document.getElementById("immersive-dual-download")?.classList.remove("immersive-disable");
  document.getElementById("immersive-translated-download")?.classList.remove("immersive-disable");
}

function closeModal() {
  const dialog = document.getElementById("immersive-modal");
  if (!dialog) return;
  dialog.style.display = "none";
  hiddenProgress();
}

function updateProgress(value) {
  const container = document.querySelector(
    ".immersive-translate-progress-container",
  );
  if (!container) return;
  container.style.display = "block";
  const elements = document.querySelectorAll(".immersive-translate-page");
  const progressBar = document.getElementById("immersive-progress");
  progressBar.style.width = Math.ceil(value * 100 / elements.length) + "%";
}

function hiddenProgress() {
  const container = document.querySelector(
    ".immersive-translate-progress-container",
  );
  if (!container) return;
  updateProgress(0);
  container.style.display = "none";
}

async function drawElemetnToPage(pdfDoc, element, page) {
  const canvas = await html2canvas(element);
  const imageData = canvas.toDataURL("image/png");
  const pngUrl = imageData.split(",")[1];
  const pngImageBytes = Uint8Array.from(atob(pngUrl), (c) => c.charCodeAt(0));
  const pngImage = await pdfDoc.embedPng(pngImageBytes);
  const { width, height } = page.getSize();
  page.drawImage(pngImage, {
    x: 0,
    y: 0,
    width: width,
    height: height,
  });
}
function createControlButton() {
  const rightArea = document.querySelector("#toolbarViewerRight");
  rightArea.style = "display: flex;flex-direction: row;align-items: center;";
  if (!rightArea) return;
  const wrapper = document.createElement("div");
  wrapper.className = "immersive-translate-btn control-button";
  wrapper.innerHTML = `快捷控制样式`;
  rightArea.insertBefore(wrapper, rightArea.firstChild);
  wrapper.onclick = showControlModal;
}

function showControlModal() {
  let dialog = document.getElementById("immersive-control-modal");
  if (!dialog) {
    dialog = document.createElement("div");
    dialog.id = "immersive-control-modal";
    dialog.className = "immersive-translate-modal";
    dialog.innerHTML = `
  <div class="immersive-translate-modal-content">
    <div data-action="close" class="immersive-translate-close">&times;</div>
    <div class="modal-subttile">可通过以下配置快速调整译文效果</div>
    <div class="switch-group">
      <div class="switch-wrapper"><label class="switch"><input id="switch-image" type="checkbox" checked=true><span class="slider round"></span></label><span class="switch-label">带图模式: 将原文中的图还原到译文中</span></div>
      <div class="switch-wrapper"><label class="switch"><input id="switch-overflow" type="checkbox" checked=true><span class="slider round"></span></label><span class="switch-label">重叠限制: 为了防止译文的段落之间相互重叠，限制了译文跟原文段落同等高度</span></div>
      <div class="switch-wrapper"><label class="switch"><input id="switch-tiny" type="checkbox"><span class="slider round"></span></label><span class="switch-label">间距紧凑: 去掉默认间距，因为段落默认间距会导致在小屏中, 译文内容偏高被限高隐藏掉</span></div>
    </div>
    <div class="immersive-translate-btn-warpper"><div class="immersive-translate-btn immersive-gary" data-action="close">关闭</div></div>
  </div>
  `;
    document.body.appendChild(dialog);
    const elements = dialog.querySelectorAll("[data-action='close']");
    const closeFun = () => {
      dialog.style.display = "none";
    };
    elements.forEach((item) => item.onclick = closeFun);
    document.getElementById("switch-image").onchange = toggleImageMode;
    document.getElementById("switch-overflow").onchange = toggleOverflow;
    document.getElementById("switch-tiny").onchange = toggleTiny;
  }
  dialog.style.display = "block";
}

function toggleImageMode(e) {
  const isVisible = e.target.checked;
  const existingStyleTag = document.getElementById("image-mode-style");
  if (existingStyleTag) {
    existingStyleTag.remove();
  }

  // Create a new style tag
  const styleSheet = document.createElement("style");
  styleSheet.id = "image-mode-style";
  styleSheet.innerText = `
   .image-mode {
     display: ${isVisible ? "block" : "none"};
   }
   `;
  document.head.appendChild(styleSheet);
}

function toggleOverflow(e) {
  const isVisible = e.target.checked;
  const existingStyleTag = document.getElementById("overflow-style");
  if (existingStyleTag) {
    existingStyleTag.remove();
  }

  // Create a new style tag
  const styleSheet = document.createElement("style");
  styleSheet.id = "overflow-style";
  styleSheet.innerText = `
  .immersive-translate-text-layer div,p {
     height: fit-content${isVisible ? "" : "!important;"};
   }
   `;
  document.head.appendChild(styleSheet);
}

function toggleTiny(e) {
  const isVisible = e.target.checked;
  const existingStyleTag = document.getElementById("tiny-style");
  if (existingStyleTag) {
    existingStyleTag.remove();
  }
  const styleSheet = document.createElement("style");
  styleSheet.id = "tiny-style";
  styleSheet.innerText = `
   p {
     margin-bottom: 0${isVisible ? "!important;" : ""};
     line-height: 1.1${isVisible ? "!important;" : ""};
   }
   `;
  document.head.appendChild(styleSheet);
}

function isSafari() {
  const userAgentString = navigator.userAgent;
  // Detect Chrome
  const chromeAgent = userAgentString.indexOf("Chrome") > -1;
  // Detect Safari
  let safariAgent = userAgentString.indexOf("Safari") > -1;
  // Discard Safari since it also matches Chrome
  if (chromeAgent && safariAgent) safariAgent = false;
  return safariAgent;
}

