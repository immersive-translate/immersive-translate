# 安装

## Edge 浏览器

[点击进入 Edge 商店安装](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)

## Chrome 或其他 Chrome 套壳浏览器

[点击进入 Chrome 商店安装](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)

## Firefox

[点击进入 Firefox Addon 商店安装](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/)

## Safari

> 沉浸式翻译 Safari 扩展正在苹果 Safari 商店限时免费中，支持 iOS, iPadOS, macOS 的 Safari 浏览器，不要错过哦

[点此进入 Apple Store 商店安装](https://apps.apple.com/app/immersive-translate/id6447957425)

> **首次安装后需要在 safari 浏览器开启沉浸式翻译扩展，并且授予其始终允许访问所有网站的权限**

有疑问可以查看以下的视频教程：

<video
muted
width="435px"
poster="https://immersive-translate.owenyoung.com/assets/safari-intro.webp"><source src="https://immersive-translate.owenyoung.com/assets/safari-installation.mp4" type="video/mp4"/>You need a browser that supports HTML5 video to view this video.
</video>

## 安卓

安卓系统使用沉浸式翻译有 2 种方式：

1. 直接安装支持 Chrome 扩展的安卓浏览器，比如[Kiwi 浏览器](https://kiwibrowser.com/)，或[狐猴浏览器](https://lemurbrowser.com/app/zh/)，安装后，直接在 chrome 商店搜索沉浸式翻译即可安装。
2. 在支持油猴脚本的浏览器中安装沉浸式翻译的油猴脚本，见下面的介绍。

## 通过油猴脚本安装

如果你无法通过以上的方式安装沉浸式翻译的官方扩展，你也可以通过以下方式安装油猴脚本：

油猴脚本地址： <https://immersive-translate.owenyoung.com/immersive-translate.user.js>

在已安装油猴扩展的浏览器中打开[该地址](https://immersive-translate.owenyoung.com/immersive-translate.user.js)，即可安装。以下介绍几个支持油猴脚本的浏览器：

### 安卓火狐浏览器

1. 下载 [Firefox 最新版本](https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en_US&gl=US) 版本
2. 在 Firefox 的附加组件推荐里找到 [Tamper Monkey](https://www.tampermonkey.net/)，安装
3. 安装本扩展的 [油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js) (在 Firefox 浏览器中打开该链接即可看到安装页面）
4. 安装后，打开任意网页，在右侧会出现沉浸式翻译扩展的浮窗图标。

### 苹果 Safari 浏览器[Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887)

1. 安装 [Userscripts safari 插件](https://itunes.apple.com/us/app/userscripts/id1463298887)，并授予其 “始终允许访问任何网站” 的权限。
2. 安装本扩展的 [油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)(在 Safari 浏览器中打开该链接即可看到安装页面)
3. 安装后，打开任意网页刷新一下，在网页右侧会出现本扩展的浮动窗口。(如果遇到没有出现浮窗的问题，建议多刷新一下网页，或者强制重启一下 Safari，以使其生效)

安装有困难，可以点击参考 [YouTube 视频教程](https://www.youtube.com/watch?v=IWOFFWDfZGY)

<iframe width="560" height="315" src="https://www.youtube.com/embed/IWOFFWDfZGY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## 油猴脚本 GreasyFork 地址

你也可以通过 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/457196-immersive-translate) 商店安装油猴脚本，但是缺点是 iOS 的 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887)油猴扩展似乎不支持 Greasyfork 托管的脚本的自动更新，因为 GreasyFork 不允许填写 `updateURL` 属性。

## 手动安装 (追踪最新开发特性)

手动安装的优点在于无需等待商店审核，可以立即体验到最新开发版本的功能。

- 下载安装包。使用 git clone 将仓库下载到本地：`git clone https://github.com/immersive-translate/next-immersive-translate.git`。（如果你不习惯命令行操作，你可以直接在 [发布页面](https://github.com/immersive-translate/immersive-translate/releases/) 下载压缩包。此外，你也可以通过下载 [Github 桌面客户端](https://docs.github.com/zh/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop) 将该 [Github 仓库](https://github.com/immersive-translate/immersive-translate) 同步到本地。）
- 类 Chrome 浏览器安装：(1) 在地址栏输入：`chrome://extensions`，打开扩展管理窗口；(2) 打开“开发人员模式”，选择“加载解压缩的扩展”，选择 `dist/chrome` 载入。
- Firefox 浏览器安装：(1) 在地址栏输入： `about:debugging#/runtime/this-firefox`，打开扩展管理窗口；(2) 临时载入附加组件，选择 `dist/firefox/manifest.json` 即可。
- 更新方法：如果你使用 git 下载的安装包，那么使用 `git pull` 拉取最新文件，然后在扩展管理页面选择 `Reload` 即可。如果你在 [发布页面](https://github.com/immersive-translate/immersive-translate/releases/) 下载的安装包，那么还在这里下载最新的版本替换旧的即可。
