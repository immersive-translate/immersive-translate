function GM_getValue(name, defaultVal) {
  let value = localStorage.getItem(name) || defaultVal;
  try {
    return JSON.parse(value);
  } catch (error) {
    return value;
  }
}

function GM_setValue(name, value) {
  if (typeof value === "object") value = JSON.stringify(value);
  localStorage.setItem(name, value);
}

function GM_deleteValue(name) {
  localStorage.deleteValue(name);
}

function GM_listValues() {
  var keys = [];
  for (var i = 0; i < localStorage.length; i++) {
    keys.push(localStorage.key(i));
  }
  return keys;
}

function GM_xmlhttpRequest(details) {
  var xhr = new XMLHttpRequest();
  xhr.open(details.method, details.url, true);

  // 设置请求头
  if (details.headers) {
    for (var header in details.headers) {
      if (details.headers.hasOwnProperty(header)) {
        xhr.setRequestHeader(header, details.headers[header]);
      }
    }
  }

  // 处理响应
  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 300) {
      // 请求成功，处理响应数据
      console.log(JSON.parse(xhr.responseText));
      if (details.onload) details.onload(xhr);
    } else {
      // 请求失败
      console.error("Request failed: ", xhr.statusText);
      if (details.onerror) details.onerror(xhr);
    }
  };

  // 处理网络错误
  xhr.onerror = function () {
    console.error("Network error");
    if (details.onerror) details.onerror(xhr);
  };

  // 发送请求
  xhr.send(details.data); // 如果你的方法是POST或PUT，并且有数据要发送
}

function GM_registerMenuCommand(name, func, accessKey) {
  console.log(`Menu command registered: ${name}`);
  // 实际上，你需要在页面上添加一个用户界面元素，如按钮，并将 func 绑定为其点击事件处理程序
}

function GM_addStyle(css) {
  var style = document.createElement("style");
  style.type = "text/css";
  style.innerHTML = css;
  document.head.appendChild(style);
}

function GM_openInTab(url, openInBackground) {
  window.open(url, "_blank");
}

window.GM = {
  getValue: GM_getValue,
  setValue: GM_setValue,
  deleteValue: GM_deleteValue,
  listValues: GM_listValues,
  xmlhttpRequest: GM_xmlhttpRequest,
  registerMenuCommand: GM_registerMenuCommand,
  addStyle: GM_addStyle,
  openInTab: GM_openInTab,
};