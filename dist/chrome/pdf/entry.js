//监听未捕获异常
window.addEventListener("unhandledrejection", noHandleError);

function noHandleError(event) {
  if (event.reason && event.reason.indexOf("Missing PDF") >= 0) {
    const ele = document.createElement("div");
    ele.innerHTML = `
    <div style="background:white;width:100vw;height: calc(100vh - 32px);display: flex;flex-direction: column;justify-content: center;align-items: center;font-size: 18px;">
      <div style="font-weight: bold;font-size: 20px;">暂无权限导入该文件，请手动上传</div>
      <div style="display: flex;flex-direction: row;margin-top: 12px;">
          <span style="">请点击右上角</span>
          <div style="position: relative;">
              <button id="openFile" class="toolbarButton hiddenLargeView" title="打开文件" tabindex="31" data-l10n-id="open_file">
                  <span data-l10n-id="open_file_label">打开</span>
              </button>
          </div>
          <span style="margin-top: 2px;">上传 PDF 文件</span>
      </div>
      <div>或者拖拽文件到此窗口上传</div>
    </div>
    `
    const viewer = document.querySelector("#viewer")
    if (!viewer) return;
    viewer.appendChild(ele);
  }
}

let startDownload, cancelDialog;
window.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const downloadManager = globalThis.PDFViewerApplication.downloadManager;
    const oldDownload = downloadManager.download.bind(downloadManager);

    downloadManager.download = function (blob, url, filename, options) {
      try {
        startDownload = async function () {
          updateProgress(0);

          const pdfBytes = await blob.arrayBuffer();
          const pdfDoc = await PDFLib.PDFDocument.load(pdfBytes, {
            updateMetadata: false
          })

          await handlePdf(pdfDoc);
          if (cancelDialog) return;
          const newPdfBytes = await pdfDoc.save()
          oldDownload(new Blob([newPdfBytes], { type: "application/pdf" }), url, filename.replace(".pdf", "-tranlsated.pdf"), options);
        }
        startDownload = startDownload.bind(downloadManager);
        showModal();
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
    }
  }, 1000);
})

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

      const [newPage] = await pdfDoc.copyPages(newPdfDoc, [sizeMap[`${width}-${height}`]]);
      await drawElemetnToPage(pdfDoc, element, newPage);
      pdfDoc.insertPage(pageNum * 2 + 1, newPage);
      updateProgress(i + 1);
      if (i == elements.length - 1) {
        closeModal();
      }
    }
  } catch (error) {
    alert(error.message);
    console.error(error);
  }
}

function showModal() {
  const pagesCount = globalThis.PDFViewerApplication.pagesCount;
  const elements = document.querySelectorAll(".immersive-translate-page");
  cancelDialog = false;
  let dialog = document.getElementById("immersive-modal");
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
    <div class="immersive-translate-btn-warpper"><div class="immersive-translate-btn immersive-gary" data-action="close">取消</div><div class="immersive-translate-btn" id="immersive-download">确定下载</div></div>
  </div>
  `;
    document.body.appendChild(dialog);
    const elements = document.querySelectorAll("[data-action='close']")
    const closeFun = () => {
      cancelDialog = true;
      closeModal();
    };
    elements.forEach(item => item.onclick = closeFun);
    const downloadBtn = document.getElementById("immersive-download");
    downloadBtn.onclick = () => {
      if (downloadBtn.classList.contains("immersive-disable")) return;
      startDownload?.();
      downloadBtn.classList.add("immersive-disable");
    }
  }
  const currentStateDOM = document.getElementById("immersive-state");
  currentStateDOM.innerHTML = `已翻译 <b>${elements.length}</b> 页 / 总共 ${pagesCount} 页`;
  dialog.style.display = "block";
  const downloadBtn = document.getElementById("immersive-download");
  downloadBtn.classList.remove("immersive-disable");
}

function closeModal() {
  const dialog = document.getElementById("immersive-modal");
  if (!dialog) return;
  dialog.style.display = "none";
  hiddenProgress();
}

function updateProgress(value) {
  const container = document.querySelector(".immersive-translate-progress-container");
  if (!container) return;
  container.style.display = "block";
  const elements = document.querySelectorAll(".immersive-translate-page");
  const progressBar = document.getElementById("immersive-progress");
  progressBar.style.width = Math.ceil(value * 100 / elements.length) + "%";
}

function hiddenProgress() {
  const container = document.querySelector(".immersive-translate-progress-container");
  if (!container) return;
  updateProgress(0);
  container.style.display = "none";
}

async function drawElemetnToPage(pdfDoc, element, page) {
  const canvas = await html2canvas(element);
  const imageData = canvas.toDataURL("image/png");
  const pngUrl = imageData.split(",")[1];
  const pngImageBytes = Uint8Array.from(atob(pngUrl), (c) =>
    c.charCodeAt(0)
  );
  const pngImage = await pdfDoc.embedPng(pngImageBytes);
  const { width, height } = page.getSize();
  page.drawImage(pngImage, {
    x: 0,
    y: 0,
    width: width,
    height: height,
  });
}