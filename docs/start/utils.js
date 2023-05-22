function isMobile() {
  return (
    navigator.userAgent.match(/Android/i) ||
    navigator.userAgent.match(/webOS/i) ||
    navigator.userAgent.match(/iPhone/i) ||
    navigator.userAgent.match(/iPad/i) ||
    navigator.userAgent.match(/iPod/i) ||
    navigator.userAgent.match(/BlackBerry/i) ||
    navigator.userAgent.match(/Windows Phone/i)
  );
}
function isSafari() {
  var userAgentString = navigator.userAgent;
  // Detect Chrome
  var chromeAgent = userAgentString.indexOf("Chrome") > -1;
  // Detect Safari
  var safariAgent = userAgentString.indexOf("Safari") > -1;
  // Discard Safari since it also matches Chrome
  if (chromeAgent && safariAgent) safariAgent = false;
  return safariAgent;
}
function isEdge() {
  return navigator.userAgent.indexOf("Edg") !== -1;
}
function isFirefox() {
  var userAgentString = navigator.userAgent;
  let firefoxAgent = userAgentString.indexOf("Firefox") > -1;
  return firefoxAgent;
}
function getBrowserLang() {
  let browserLang = navigator.language
    ? navigator.language
    : navigator.browserLanguage;
  let defaultBrowserLang = "en";
  if (browserLang.toLowerCase().indexOf("zh") >= 0) {
    defaultBrowserLang = "zh";
  }
  return defaultBrowserLang;
}

function loadResource(url) {
  return new Promise((resolve, reject) => {
    const link = document.createElement('link');
    link.href = url;
    link.rel = "prefetch";
    //预加载链接只会触发失败回调
    link.onerror = () => {
      reject(); // 资源加载失败
    };
    document.head.appendChild(link);
  });
}