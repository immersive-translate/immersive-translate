(() => {
  try {
    const userAgent = globalThis.navigator?.userAgent || "";
    const platform = globalThis.navigator?.platform || "";
    const maxTouchPoints = globalThis.navigator?.maxTouchPoints || 0;
    const isChromeDesktop = /(Chrome|Chromium)\/\d+/i.test(userAgent) &&
      !/(Android|Mobile|iPhone|iPad|iPod|CriOS|FxiOS|Edg\/?|OPR\/)/i.test(
        userAgent,
      ) &&
      !(platform === "MacIntel" && maxTouchPoints > 1);

    if (isChromeDesktop) {
      document.documentElement.dataset.popupLayout = "chrome-desktop";
    }
  } catch (_) {
    // 平台检测不可用时保留现有响应式布局。
  }
})();
