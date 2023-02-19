# 安装

### Edge 浏览器

已上架 [Edge 商店](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)，[点击这里](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg) 安装

### 类 Chrome 浏览器

已上架 [Chrome 商店](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh), [点击这里](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh) 安装

### Firefox

已上架 [Firefox Addon 商店](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/)，[点击这里](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/) 安装。

### Safari

桌面版和移动版都支持，需要配合油猴插件安装，以 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) 为例:

1. 安装 [Userscripts safari 插件](https://itunes.apple.com/us/app/userscripts/id1463298887)，并授予其始终允许访问任何网站的权限。
2. 安装本扩展的 [油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)
3. 安装后，打开任意网页刷新一下，在网页右侧会有本扩展的浮动窗口。(如果遇到没有出现浮窗的问题，建议多刷新一下网页，或者强制重启一下 Safari，以使其生效)

如果安装有困难，可以点击参考 [YouTube视频教程](https://youtu.be/vOaCFjYmQNM)，[抖音视频教程](https://v.douyin.com/B4aeGYt/) 。

### Android 安卓

1. 下载 [Firefox Beta版本](https://play.google.com/store/apps/details?id=org.mozilla.firefox_beta&hl=en_US&gl=US) 版本
2. 在 Firefox 的附加组件推荐里找到 [Tamper Monkey](https://www.tampermonkey.net/)，安装
3. 安装本扩展的 [油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js) (在Firefox Beta浏览器中打开该链接即可看到安装页面）
4. 安装后，打开任意网页，在右侧会有本扩展的浮动窗口。

### 其他移动浏览器

比如 Kiwi 浏览器，狐猴浏览器等等，只要支持油猴脚本的浏览器，都可以通过油猴脚本安装本扩展。如果支持 Chrome 商店，也可以直接安装商店版本。

### 油猴脚本 GreasyFork 地址

你也可以通过 [Greasy Fork](https://greasyfork.org/zh-CN/scripts/457196-immersive-translate) 商店安装油猴脚本，但是缺点是 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) 似乎不支持 Greasyfork 托管的脚本的自动更新，因为 GreasyFork 不允许填写 `updateURL` 属性。

### 手动安装 (追踪最新开发特性)

> 手动安装的话，无需等待商店审核，可以立即体验到最新开发版本的功能。

所有代码已经打包上传到 [Github 仓库](https://github.com/immersive-translate/immersive-translate) 了, 使用以下命令 Clone 到本地：

```
git clone https://github.com/immersive-translate/next-immersive-translate.git
```

扩展位于 `dist/chrome`, `dist/firefox`, `dist/userscript` 中 

> 如果你不习惯命令行操作，你也可以直接在[这里](https://github.com/immersive-translate/immersive-translate/releases/)下载压缩包，然后下次更新的时候重新下载最新版本的压缩包，替换旧的即可

> 你也可以下载[Github 桌面客户端](https://docs.github.com/zh/desktop/installing-and-configuring-github-desktop/installing-and-authenticating-to-github-desktop/installing-github-desktop)将该[Github 仓库](https://github.com/immersive-translate/immersive-translate) 同步到本地。

**Chrome 手动安装**

1. 打开扩展管理窗口，`chrome://extensions`
2. 激活开发者模式
3. 载入 `dist/chrome`

**Firefox 手动安装**

1. 打开 `about:debugging#/runtime/this-firefox`
2. 临时载入附加组件
3. 选择 `dist/firefox/manifest.json` 即可

**更新：** 使用 `git pull` 拉取最新文件，然后在扩展管理页面选择 `Reload`
