# 安装

## Firefox/Chrome/Edge 浏览器

目前还没上架应用商店，请点击[这里](https://github.com/immersive-translate/next-immersive-translate/releases)下载最新版本，下载后手动安装。

> 为了方便追踪更新，你可以通过克隆 Github 项目来追踪目前开发阶段频繁的更新, 使用以下命令：

```
git clone https://github.com/immersive-translate/next-immersive-translate.git
```

扩展位于`dist/chrome`, `dist/firefox`, `dist/userscript` 中。

## Safari

桌面版和移动版都支持，需要配合油猴插件安装,以[Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887)为例:

1. 安装[Userscripts safari 插件](https://itunes.apple.com/us/app/userscripts/id1463298887)
2. 安装本扩展的[油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)

安装后，打开任意网页，刷新一下之后，会有沉浸式翻译扩展的浮动窗口在浮动在右侧。

如果你以前没有使用过油猴脚本，可以点击参考[视频教程](https://youtu.be/vOaCFjYmQNM)

## Android 安卓

1. 下载[Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix&hl=en_US&gl=US)版本
2. 在 Firefox 的附加组件推荐里找到[Tamper Monkey](https://www.tampermonkey.net/),安装
3. 安装本扩展的[油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)

安装后，打开任意网页，会有该扩展的浮动窗口在右侧。

## 其他移动浏览器

比如 Kiwi 浏览器等等，只要支持油猴脚本的浏览器，都可以通过油猴脚本安装本扩展。

## 油猴脚本 GreasyFork 地址

你也可以通过[Greasy Fork](https://greasyfork.org/zh-CN/scripts/457196-immersive-translate) 商店安装油猴脚本，但是缺点是 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) 似乎不支持 Greasyfork 托管的脚本的自动更新，因为 GreasyFork 不允许填写 `updateURL` 属性。
