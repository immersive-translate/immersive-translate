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