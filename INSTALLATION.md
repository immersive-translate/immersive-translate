# 安装说明 / Installation

[简体中文](#简体中文) · [English](#english)

## 简体中文

### 选择安装方式

日常使用推荐从浏览器商店安装，后续更新由商店提供。各商店审核时间不同，商店版本可能晚于
[GitHub Releases](https://github.com/immersive-translate/immersive-translate/releases)。需要提前使用某个版本时，可按下文手动安装。

| 平台                 | 推荐安装入口                                                                                                      |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Chrome               | [Chrome 应用商店](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh) |
| Microsoft Edge       | [Edge 扩展商店](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)               |
| Firefox              | [Firefox 附加组件商店](https://addons.mozilla.org/firefox/addon/immersive-translate/)                             |
| macOS Safari         | [App Store](https://apps.apple.com/app/immersive-translate/id6447957425)                                          |
| iPhone / iPad Safari | [App Store](https://apps.apple.com/app/immersive-translate/id6447957425)                                          |
| Android              | [官方安装指南中的 Android 入口](https://immersivetranslate.com/docs/installation/#android)                        |

安装完成后，启用扩展、允许它访问需要翻译的网站，再刷新已打开的网页。同一浏览器内同时启用多份沉浸式翻译可能造成重复翻译，切换安装方式时请先停用原有那一份。

### 从 GitHub 手动安装

打开所需版本的
[Release 页面](https://github.com/immersive-translate/immersive-translate/releases)，在
**Assets** 中选择对应附件：

| 使用方式              | 附件名                                   |
| --------------------- | ---------------------------------------- |
| Chrome / Edge 桌面版  | `chrome-immersive-translate-版本号.zip`  |
| Firefox 桌面版        | `firefox-immersive-translate-版本号.zip` |
| macOS Safari 临时扩展 | `safari-immersive-translate-版本号.zip`  |
| 油猴脚本              | `immersive-translate.user.js`            |

若某个版本没有对应附件，请使用该平台的商店版。页面底部的 **Source code**
压缩包不是浏览器扩展安装包。

#### Chrome / Edge

1. 下载 Chrome ZIP，解压到固定保留的文件夹，确认其中有 `manifest.json`。
2. Chrome 打开 `chrome://extensions`；Edge 打开 `edge://extensions`。
3. 开启“开发者模式”，点击“加载已解压的扩展程序”，选择包含 `manifest.json`
   的文件夹。
4. 启用扩展并刷新需要翻译的网页。请保留该文件夹，浏览器仍会从中读取扩展文件。

更新时，将新版 ZIP
解压后的文件替换到原文件夹，在扩展管理页点击“重新加载”，再刷新网页。手动安装的版本需要手动更新。

浏览器说明：[Chrome](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)、[Edge](https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/extension-sideloading)。

#### Firefox

1. 下载 Firefox ZIP，可直接使用 ZIP，或将它解压。
2. 打开 `about:debugging#/runtime/this-firefox`，点击“临时载入附加组件”。
3. 选择下载的 ZIP，或解压文件夹中的 `manifest.json`，然后刷新网页。

临时扩展在重启 Firefox
后会移除，需要重新加载。更新时重新选择新版文件；日常长期使用建议安装商店版。参见
[Firefox 临时安装说明](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)。

#### macOS Safari

此方式需要 Safari 设置中有“添加临时扩展 / Add Temporary
Extension…”入口；可直接加载 Safari ZIP，无需构建或签名 Mac App。

1. 下载 Safari ZIP。
2. Safari → 设置 → 高级，开启“显示网页开发者功能 / Show features for web
   developers”。
3. 打开设置 → 开发者，点击“添加临时扩展 / Add Temporary
   Extension…”，按提示完成授权，选择 ZIP 或解压后的文件夹。
4. 在设置 →
   扩展中，先停用已有的商店版沉浸式翻译，再启用临时扩展并允许网站访问，最后刷新网页。

Safari 会在退出浏览器或 24 小时后移除临时扩展，届时需再次添加。没有此入口的
Safari 请使用商店版；此 ZIP 安装方式不适用于 iPhone /
iPad。商店更新可用后，移除临时扩展并重新启用商店版即可。参见
[Apple 安装说明](https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension)。

### 移动端

- **iPhone / iPad**：从上方 App Store 入口安装后，在系统设置的 Safari
  扩展列表中启用沉浸式翻译，并允许网站访问。
- **Android**：通过[官方安装指南](https://immersivetranslate.com/docs/installation/#android)选择沉浸式翻译浏览器，或在支持扩展的
  Android
  浏览器中安装对应扩展。桌面版浏览器的加载步骤不适用于所有手机浏览器，请按指南选择安装方式。

### 油猴脚本

先安装适合当前浏览器的脚本管理器，例如
[Tampermonkey](https://www.tampermonkey.net/)，再打开[官方在线脚本](https://download.immersivetranslate.com/immersive-translate.user.js)，按管理器提示完成安装并启用脚本执行权限。需要指定版本时，可将
Release 中的 `immersive-translate.user.js` 导入脚本管理器。

更新由所用脚本管理器管理；也可以再次安装新版脚本。安装后刷新网页。其他安装问题可参考[官网安装指南](https://immersivetranslate.com/docs/installation/)。

## English

### Choose an installation method

For everyday use, install from your browser's store for store-managed updates.
Store reviews take different amounts of time, so
[GitHub Releases](https://github.com/immersive-translate/immersive-translate/releases)
may have a newer version. Use the manual methods below when needed.

| Platform             | Recommended installation                                                                                           |
| -------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Chrome               | [Chrome Web Store](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh) |
| Microsoft Edge       | [Edge Add-ons](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)                 |
| Firefox              | [Firefox Add-ons](https://addons.mozilla.org/firefox/addon/immersive-translate/)                                   |
| macOS Safari         | [App Store](https://apps.apple.com/app/immersive-translate/id6447957425)                                           |
| iPhone / iPad Safari | [App Store](https://apps.apple.com/app/immersive-translate/id6447957425)                                           |
| Android              | [Android installation guide](https://immersivetranslate.com/en/docs/installation/#android)                         |

Enable the extension, grant access to the websites you want to translate, and
refresh existing tabs. Disable any other installed copy of Immersive Translate
to avoid duplicate translation.

### Manual installation from GitHub

Open the desired
[release](https://github.com/immersive-translate/immersive-translate/releases)
and expand **Assets**. Choose `chrome-immersive-translate-<version>.zip` for
desktop Chrome or Edge, `firefox-immersive-translate-<version>.zip` for desktop
Firefox, `safari-immersive-translate-<version>.zip` for temporary installation
in macOS Safari, or `immersive-translate.user.js` for a userscript manager. Use
the store version if an attachment is unavailable. **Source code** archives are
not extension installers.

#### Chrome / Edge

1. Extract the Chrome ZIP into a folder you will keep.
2. Open `chrome://extensions` in Chrome or `edge://extensions` in Edge.
3. Enable **Developer mode**, click **Load unpacked**, and select the folder
   containing `manifest.json`.
4. Enable the extension and refresh your tabs. Keep the extracted folder in
   place.

To update, replace the files in that folder with the new ZIP's contents, click
**Reload** on the extension's card, and refresh your tabs. Manual installations
require manual updates. See the
[Chrome](https://developer.chrome.com/docs/extensions/get-started/tutorial/hello-world#load-unpacked)
and
[Edge](https://learn.microsoft.com/en-us/microsoft-edge/extensions/getting-started/extension-sideloading)
instructions.

#### Firefox

Open `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on**,
and select the Firefox ZIP or an extracted `manifest.json`. Refresh your tabs.
Firefox removes temporary extensions on restart; load the file again when
needed. To update, load the new version. Use the store version for regular
installation. See
[Mozilla's instructions](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/).

#### macOS Safari

Use this method if Safari has **Add Temporary Extension…** in its Developer
settings. The Safari ZIP requires no Mac app build or signing.

1. Download the Safari ZIP.
2. In Safari → Settings → Advanced, enable **Show features for web developers**.
3. Open Settings → Developer → **Add Temporary Extension…**, authenticate if
   prompted, and select the ZIP or extracted folder.
4. In Settings → Extensions, disable the App Store copy, enable the temporary
   extension, allow website access, and refresh your tabs.

Safari removes temporary extensions after 24 hours or when you quit Safari. Add
the ZIP again when needed. If the button is unavailable, use the store version.
This ZIP method does not apply to iOS. After a store update, remove the
temporary extension and re-enable the store copy. See
[Apple's instructions](https://developer.apple.com/documentation/safariservices/running-your-safari-web-extension).

### Mobile devices

- **iPhone / iPad**: Install from the App Store, then enable Immersive Translate
  in Safari's extension settings and allow website access.
- **Android**: Follow the
  [official guide](https://immersivetranslate.com/en/docs/installation/#android)
  to install the Immersive Translate browser or use a browser that supports the
  extension. Desktop loading steps do not apply to every mobile browser.

### Userscript

Install a compatible userscript manager, such as
[Tampermonkey](https://www.tampermonkey.net/), then open the
[official userscript](https://download.immersivetranslate.com/immersive-translate.user.js)
and follow the manager's installation and script-permission prompts. For a
specific release, import its `immersive-translate.user.js` attachment. Refresh
your tabs after installation. Use the manager to update, or install the newer
script again. See the
[website installation guide](https://immersivetranslate.com/en/docs/installation/)
for other options.
