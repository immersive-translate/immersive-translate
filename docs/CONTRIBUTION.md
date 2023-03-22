# 帮助我们?

- 帮忙完善[使用文档](https://immersive-translate.owenyoung.com/),点击右上角编辑按钮即可。
- 帮忙[翻译](https://crowdin.com/project/immersive-translate)该扩展的界面语言,注册后即可在线翻译。
- 帮忙解答用户在[Telegram 群组](https://t.me/+rq848Z09nehlOTgx)和[Github Issue](https://github.com/immersive-translate/immersive-translate/issues)里的提问。
- 添加[你的建议](https://github.com/immersive-translate/immersive-translate/issues) 帮助我们改进功能。
- 加入[Telegram 频道](https://t.me/immersivetranslate) 接收最新消息。
- 关注[Github 项目](https://github.com/immersive-translate/immersive-translate), 点击 Watch 这样可以及时收到新的 Issue 请求。
- [点击查看](https://github.com/orgs/immersive-translate/projects/1) 当前正在处理的需求。
- [点击查看](https://immersive-translate.owenyoung.com/TODO.html) 尚未整理的待做功能项。

## 加入开发

当前该项目处于闭源开发状态，你需要先申请加入我们的 Github 团队。项目采用 Typescript 开发，使用 Deno 编译。

请有意贡献或者想调试的同学加入[Telegram 群组](https://t.me/+rq848Z09nehlOTgx)的开发频道，然后私聊管理员申请加入 Github 团队。

记得 Watch [Github 项目](https://github.com/immersive-translate/immersive-translate), 这样可以及时收到新的 Issue 请求。

## 贡献者们

<p align="center">
<object style="max-width: 100%;" type="image/svg+xml" data="https://immersive-translate.owenyoung.com/assets/contributors/contributors.svg?v=2023"><img alt="sponsors" src="https://immersive-translate.owenyoung.com/assets/contributors/contributors.svg?v=2023"></object>
</p>

## 搭建开发环境

### Windows

安装包管理器，如 [Scoop](https://scoop.sh/) 或 [winget](https://learn.microsoft.com/en-us/windows/package-manager/winget/) 这里介绍如何安装 Scoop。打开 PowerShell 输入以下命令

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex
```

安装 make 工具

```
scoop install gcc gow -u
scoop install git
scoop install unxutils
```

注：makefile 文件对 powershell 的兼容不同，参数跟命令需要放在同一行中，否则运行会报错。例如在 makefile 中对 make dev 的配置。

### Linux

安装 Deno 需要最低 glibc_2.18。低版本需要下载源码包编译安装。

**Requirements**

1. Install [Deno](https://deno.land/manual@v1.28.2/getting_started/installation)
2. Install [Firefox Devloper Edition](https://www.mozilla.org/en-US/firefox/developer/)
3. Install [web-ext](https://github.com/mozilla/web-ext) globally.

```bash
npm install --global web-ext
```

## 开始开发

终端进入项目文件夹，下载源码到本地

```
git clone git@github.com:immersive-translate/next-translator.git
```

## Start dev

      make dev
      make debug

> This will start build, and watch files updates and reload the extension on firefox

> Firefox is recommended, cause web-ext is more effective than chrome

## Start dev with chrome

    make devchrome
    make debugchrome

打开[Chrome 扩展程序页面](chrome://extensions/)，勾选右上角开发者模式，加载已解压的扩展程序，选择项目路径下的 `dist/chrome` 文件夹，并启用扩展程序。

## Start dev with userscript

    make devuserscript

First time, download [tampermonkey](https://www.tampermonkey.net/) extension,
open tampermonkey dashboard, to create a script:

replace the whole code with `dist/userscript/dev-entry.js`
UserScript header, like this:

```
// ==UserScript==
// @name         Immersive Translate
// @namespace    https://immersive-translate.owenyoung.com/
// @version      0.0.10
// @description  沉浸式网页翻译，支持多种翻译引擎，双语对照显示
// @author       Owen Young
// @homepageURL    https://immersive-translate.owenyoung.com/
// @supportURL    https://github.com/immersive-translate/immersive-translate/
// @match      *://*/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=userscript.net
// @downloadURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @updateURL https://immersive-translate.owenyoung.com/immersive-translate.user.js
// @inject-into    content
// @grant       GM.getValue
// @grant       GM.setValue
// @grant       GM.xmlHttpRequest
// @grant       GM.registerMenuCommand
// @connect    translate.googleapis.com
// @connect    transmart.qq.com
// @connect    tmt.tencentcloudapi.com
// @connect    www2.deepl.com
// @connect    immersive-translate.owenyoung.com
// @run-at       document-end
// @require    file:///Users/username/project/translate/dist/userscript/immersive-translate.user.js
// ==/UserScript==
```

Save it, then you can dev it automatically.

## dev with safari userscript

```bash
make devsafari
```

Download [userscript](https://github.com/quoid/userscripts) extension, choose
`dist/userscript` as userscript extension folder. then you'll see the code in
the extension dashboard.

## Serve

If you want to test some html locally, run:

    make serve

This will start a server on example folder

Now, open a test url, like:

<http://localhost:8000/br.html>

## Test

```bash
make test
```

More and more unit tests

## Build

    make build

## Build for firefox

    make build:firefox

## Styles

使用 [Pico](https://picocss.com/) 作为基础 style，所以大多数元素直接用语义化的 html 标签即可，不需要任何 class
name

如果有需要用到 css 的地方，我们使用[twind](https://twind.style/)工具引入了[tailwind](https://tailwindcss.com/)的工具类 css 的支持

直接在 jsx 元素上写：`<div class="p-4"></div>`

或者 html 元素上： `<div class="p-4"></div>`即可。

## PDF

Clone the pdf.js project to the same level with this project.

```bash
git clone https://github.com/mozilla/pdf.js
```

Edit `web/app.js`, add `return` to the validateFileURL, cause we don't need check that

```js
  var validateFileURL = function (file) {
    return;
    ...
  }
```

Then, run `npm install` at the `pdf.js` project.

### chrome ban pdf.js

Code Readability Requirements

Violation reference ID: Red Titanium
Violation: Having obfuscated code in the package.
Violating content:
Code snippet: build/pdf.js:null:null: const testFont = atob("T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQA" + "FQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAA")

// change this to string

Then, back to translate project, run:

```bash
make pdf
```

This will build the pdf project, and copy the build files to the translate project

## Firefox Android

```bash
web-ext run -s dist/firefox -t firefox-android --android-device=xxxxx --firefox-apk org.mozilla.fenix
```

## Develope with Options Page

Uncomment the `background.ts` open options page line. and when it's done, comment it.

## Log

为了方便临时打印一些东西，我添加了 2 个函数，方便最后提交的时候，直接搜索`log.v`, `log.l` 即可删除。

```typescript
import _log from "./log.ts";
_log.v("test"); // debug level
_log.l("test2"); // info level
```

## 移动端调试谷歌 drive 授权

移动端无法访问 localhost, google 不允许设置 ip 为跳转域名。

可以在电脑上使用 Whistle 代理软件(或者其他类似软件):

<https://wproxy.org/whistle/install.html>

```bash
w2 start --socksPort 8889
```

手机配置 socks5 代理到 `192.168.x.x:8889`

配置[https 证书](https://wproxy.org/whistle/webui/https.html)

加入规则：

```bash
immersive-translate.owenyoung.com 127.0.0.1:8000
```

启动 userscript 开发：

```bash
make https-userscript
```

## 注意！！

添加新域名必须要在油猴加 connect 才行

## 有用的链接

- [preact typescript](https://preactjs.com/guide/v10/typescript)
