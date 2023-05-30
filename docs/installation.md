# 安装

## 桌面浏览器

- 微软 Edge 浏览器： [Edge 商店沉浸式翻译](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)
- 谷歌 Chrome 浏览器：[Chrome 商店沉浸式翻译](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)
- Firefox 火狐浏览器：[Firefox Addon 商店沉浸式翻译](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/)

## Safari

- [点此进入苹果 App Store 商店安装](https://apps.apple.com/app/immersive-translate/id6447957425) **限时免费中!!!**

<div align="center">
<img src="https://immersive-translate.owenyoung.com/assets/immersive-app-store.png" width="150" alt="app store qrcode">
</div>

> 说明：首次安装后需要在 safari 浏览器-> 管理扩展->**启用沉浸式翻译扩展**，并且授予其**始终允许访问所有网站**的权限，有疑问可以查看以下视频教程：

### iOS Safari

<video
controls
muted
height="800px"
poster="https://immersive-translate.owenyoung.com/assets/safari-intro.webp" src="https://immersive-translate.owenyoung.com/assets/ios-safari-enable.mp4"></video>

### macOS Safari

<video
controls
muted
poster="https://immersive-translate.owenyoung.com/assets/safari-mac-preview.png" src="https://immersive-translate.owenyoung.com/assets/safari_mac.mp4"></video>

## 安卓

安卓系统使用沉浸式翻译有 2 种方式：

1. 直接安装支持 Chrome 扩展的安卓浏览器，比如[狐猴浏览器](https://lemurbrowser.com/app/zh/)或[Kiwi 浏览器](https://kiwibrowser.com/)，安装后，直接在 chrome 商店搜索[沉浸式翻译](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)即可安装。
2. 在支持油猴脚本的安卓浏览器中安装[沉浸式翻译油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)，见下面的介绍。

## 通过油猴脚本安装

如果你无法通过以上的方式安装沉浸式翻译的官方扩展，你可以通过以下方式安装油猴脚本：

油猴脚本地址： <https://immersive-translate.owenyoung.com/immersive-translate.user.js>

在已安装油猴扩展的浏览器中打开[该地址](https://immersive-translate.owenyoung.com/immersive-translate.user.js) 即可安装。以下介绍几个支持油猴脚本的浏览器：

**安卓火狐浏览器**

1. 下载 [Firefox 最新版本](https://www.firefox.com.cn/download/#product-android-release) 版本
2. 在 Firefox 的附加组件推荐里找到 [Tamper Monkey](https://www.tampermonkey.net/)，安装
3. 安装本扩展的 [油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js) (在 Firefox 浏览器中打开该链接即可看到安装页面）
4. 安装后，打开任意网页，在右侧会出现沉浸式翻译扩展的浮窗图标。

**苹果 Safari 浏览器[Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887)**

1. 安装 [Userscripts safari 插件](https://itunes.apple.com/us/app/userscripts/id1463298887)，并授予其 “始终允许访问任何网站” 的权限。
2. 安装本扩展的 [油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)(在 Safari 浏览器中打开该链接,点击 Userscript 扩展图标即可看到安装页面)
3. 安装后，打开任意网页刷新一下，在网页右侧会出现本扩展的浮动窗口。(如果遇到没有出现浮窗的问题，建议多刷新一下网页，或者强制重启一下 Safari，以使其生效)

如果安装的时候遇到疑问，可以参考 [YouTube 视频教程](https://www.youtube.com/watch?v=IWOFFWDfZGY)

<iframe width="560" height="315" src="https://www.youtube.com/embed/IWOFFWDfZGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 手动安装 (追踪最新开发特性)

手动安装的优点在于无需等待商店审核，可以立即体验到最新开发版本的功能：

1. 在 [发布页面](https://github.com/immersive-translate/immersive-translate/releases/) 下载压缩包
2. 安装

- 类 Chrome 浏览器安装：(1) 在地址栏输入：`chrome://extensions`，打开扩展管理窗口；(2) 打开“开发人员模式”，选择“加载解压缩的扩展”，选择解压缩后的文件夹载入。
- Firefox 浏览器安装：(1) 在地址栏输入： `about:debugging#/runtime/this-firefox`，打开扩展管理窗口；(2) 临时载入附加组件，解压压缩包，选择 `firefox/manifest.json` 即可。

3. 在 [发布页面](https://github.com/immersive-translate/immersive-translate/releases/) 下载最新的安装包，覆盖原来的文件夹，然后在扩展页面点击`重新载入`

> 如果你习惯使用命令行操作，你可以使用 `git clone https://github.com/immersive-translate/immersive-translate.git`, 然后安装 `dist/chrome` 即可, 以后每次同步只需要 `git pull`
