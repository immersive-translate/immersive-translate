# 安装

## 桌面端

#### Edge 浏览器

已上架 [Edge 商店](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)，[点击这里](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg) 安装

#### 类 Chrome 浏览器

已上架 [Chrome 商店](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh), [点击这里](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh) 安装

#### Firefox

已上架 [Firefox Addon 商店](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/)，[点击这里](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/) 安装。

## IOS 端

使用 Safari 浏览器，桌面版和移动版都支持，需配合油猴插件安装，以 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) 为例:

1. 安装 [Userscripts safari 插件](https://itunes.apple.com/us/app/userscripts/id1463298887)，并授予其 “始终允许访问任何网站” 的权限。
2. 安装本扩展的 [油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)(在 Safari 浏览器中打开该链接即可看到安装页面)
3. 安装后，打开任意网页刷新一下，在网页右侧会出现本扩展的浮动窗口。(如果遇到没有出现浮窗的问题，建议多刷新一下网页，或者强制重启一下 Safari，以使其生效)

如果安装有困难，可以点击参考 [YouTube视频教程](https://youtu.be/vOaCFjYmQNM)，[抖音视频教程](https://v.douyin.com/B4aeGYt/) 。

## 安卓端 (Android)

#### 火狐浏览器

1. 下载 [Firefox Beta版本](https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta&hl=en_US&gl=US) 版本
2. 在 Firefox 的附加组件推荐里找到 [Tamper Monkey](https://www.tampermonkey.net/)，安装
3. 安装本扩展的 [油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js) (在 Firefox Beta 浏览器中打开该链接即可看到安装页面）
4. 安装后，打开任意网页，在右侧会出现本扩展的浮动窗口。

#### 其他浏览器

比如 Kiwi 浏览器，狐猴浏览器等，只要支持油猴脚本的浏览器，都可以通过油猴脚本安装本扩展。如果支持 Chrome 商店，也可以直接安装商店版本。

## 油猴脚本 GreasyFork 地址

你也可以通过 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/457196-immersive-translate) 商店安装油猴脚本，但是缺点是 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) 似乎不支持 Greasyfork 托管的脚本的自动更新，因为 GreasyFork 不允许填写 `updateURL` 属性。

## 手动安装 (追踪最新开发特性)

手动安装的优点在于无需等待商店审核，可以立即体验到最新开发版本的功能。

- 下载安装包。使用 git clone 将仓库下载到本地：`git clone https://github.com/immersive-translate/next-immersive-translate.git`。（如果你不习惯命令行操作，你可以直接在 [发布页面](https://github.com/immersive-translate/immersive-translate/releases/) 下载压缩包。此外，你也可以通过下载 [Github 桌面客户端](https://docs.github.com/zh/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop) 将该 [Github 仓库](https://github.com/immersive-translate/immersive-translate) 同步到本地。）
- 类 Chrome 浏览器安装：(1) 在地址栏输入：`chrome://extensions`，打开扩展管理窗口；(2) 打开“开发人员模式”，选择“加载解压缩的扩展”，选择 `dist/chrome` 载入。
- Firefox 浏览器安装：(1) 在地址栏输入： `about:debugging#/runtime/this-firefox`，打开扩展管理窗口；(2) 临时载入附加组件，选择 `dist/firefox/manifest.json` 即可。
- 更新方法：如果你使用 git 下载的安装包，那么使用 `git pull` 拉取最新文件，然后在扩展管理页面选择 `Reload` 即可。如果你在 [发布页面](https://github.com/immersive-translate/immersive-translate/releases/) 下载的安装包，那么还在这里下载最新的版本替换旧的即可。
