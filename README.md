# 沉浸式双语网页翻译扩展

## 主要特性

- 智能识别网页主内容区，区别于同类插件翻译网页所有的区域，这可以极大增强译文的阅读体验，类似于浏览器的沉浸式阅读模式，所以该扩展被命名为“沉浸式翻译”
- 双语显示，中文/英文对照（按照段落分割，或自定义段落长度，按照每句话对照翻译）
- 为常见主流网站做了定制优化，比如 Twitter，Reddit，Discord, Gmail, Telegram, Youtube, Hacker News 等，我相信经过这些优化后，你会爱上阅读外语信息。
- 支持 10+ 种常见的翻译服务，包括 Deepl, 谷歌, 腾讯翻译君,火山翻译，彩云小译等.
- PDF 文件双语翻译支持
- 配合 epub 在线阅读网站<https://epub-reader.online/> 或 <https://readwise.io/read> 即可实现双语阅读国外电子书
- 多种译文样式可选择，个性化你的翻译体验。

该扩展完全免费使用，[点击查看视频介绍](https://www.youtube.com/watch?v=sQevumpUprc)，希望我们都能更加容易且愉悦地获取互联网上巨大的外语信息，不要让语言成为障碍 ❤️

感谢这些[赞助者](https://immersive-translate.owenyoung.com/thanks), 由于他/她们的支持，更多的人可以免费使用这个工具。如果有余力，你可以[点击这里](https://immersive-translate.owenyoung.com/donate) 赞助我的工作，你也可以关注我的[推特](https://twitter.com/OwenYoungZh)或[Telegram 频道](https://t.me/owenyoungzh)获取最新更新,还可以加入[Telegram 群组](https://t.me/+rq848Z09nehlOTgx) 参与功能的讨论或者加入该扩展的[Telegram 频道](https://t.me/immersivetranslate)接收最新更新。

## 目录

- [安装](https://immersive-translate.owenyoung.com/installation.html)
- [如何使用](https://immersive-translate.owenyoung.com/usage.html)
- [高级自定义配置](https://immersive-translate.owenyoung.com/advanced.html)
- [更新日志](https://immersive-translate.owenyoung.com/CHANGELOG.html)
- [反馈问题](https://github.com/immersive-translate/next-immersive-translate/issues)
- [加入 Telegram 频道](https://t.me/immersivetranslate) 接收最新消息
- [加入 Telegram 群组](https://t.me/+rq848Z09nehlOTgx) 参与功能的讨论。
- [在线文档](https://immersive-translate.owenyoung.com/)
- [☕️ 请开发者喝杯咖啡](https://immersive-translate.owenyoung.com/donate.html)

## 安装

### Edge 浏览器

已上架[Edge 商店](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)，[点击这里](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)安装

### 类 Chrome 浏览器

已上架[Chrome 商店](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh), [点击这里](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)安装

### Firefox

已上架 [Firefox Addon 商店](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/)，[点击这里](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/) 安装。

### Safari

桌面版和移动版都支持，需要配合油猴插件安装,以[Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887)为例:

1. 安装[Userscripts safari 插件](https://itunes.apple.com/us/app/userscripts/id1463298887)，并授予其始终允许访问任何网站的权限。
2. 安装本扩展的[油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)

安装后，打开任意网页，刷新一下之后，会有沉浸式翻译扩展的浮动窗口在浮动在右侧。(safari 扩展首次安装之后，如果遇到没有出现浮窗的问题，建议多刷新一下网页，或者强制重启一下 Safari，以使其生效)

如果你以前没有使用过油猴脚本，可以点击参考[视频教程](https://youtu.be/vOaCFjYmQNM)

> 如果你使用 Stay.app , 需要在 Stay.app 的设置里，把该脚本的 Inject Mode 改为 Content, 因为目前 Stay 似乎有点问题，无法自动判断 inject 的模式。下个版本应该会修复。

### Android 安卓

1. 下载[Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix&hl=en_US&gl=US)版本
2. 在 Firefox 的附加组件推荐里找到[Tamper Monkey](https://www.tampermonkey.net/),安装
3. 安装本扩展的[油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)

安装后，打开任意网页，会有该扩展的浮动窗口在右侧。

### 其他移动浏览器

比如 Kiwi 浏览器等等，只要支持油猴脚本的浏览器，都可以通过油猴脚本安装本扩展。

### 油猴脚本 GreasyFork 地址

你也可以通过[Greasy Fork](https://greasyfork.org/zh-CN/scripts/457196-immersive-translate) 商店安装油猴脚本，但是缺点是 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) 似乎不支持 Greasyfork 托管的脚本的自动更新，因为 GreasyFork 不允许填写 `updateURL` 属性。

### 手动安装(追踪最新开发特性)

> 手动安装的话，无需等待商店审核，立即体验最新开发版本的功能。

所有代码已经打包上传到[Github 仓库](https://github.com/immersive-translate/immersive-translate)了, 使用以下命令 Clone 到本地：

```
git clone https://github.com/immersive-translate/next-immersive-translate.git
```

扩展位于`dist/chrome`, `dist/firefox`, `dist/userscript` 中。

**Chrome 手动安装**

1. 打开扩展管理窗口，`chrome://extensions`
2. 激活开发者模式
3. 载入`dist/chrome`

**Firefox 手动安装**

1. 打开`about:debugging#/runtime/this-firefox`
2. 临时载入附加组件
3. 选择`dist/firefox/manifest.json`即可

更新的时候直接：

```
git pull
```

然在在扩展管理页面选择 `Reload`

## 截图

![screenshot](https://immersive-translate.owenyoung.com/assets/twitter.png)

[点这里](https://immersive-translate.owenyoung.com/usecase.html)查看更多截图

## 赞助我的工作

你好，我是 Owen，得益于无数志愿者开发的免费工具，让我在互联网冲浪的这些年里收获了太多受益终生的知识。这让我更加坚信**平等**地获取信息是每个人最应拥有的权利。

所以我创建了很多免费的双语工具来帮助人们更有效地获取互联网上[巨大的外语信息资源](https://www.owenyoung.com/sources/)（同时也期待大家有一天能脱离这些辅助工具）

我创建了 <https://www.buzzing.cc/> 这个网站，在这个网站里我精选了英文世界里最有声誉的媒体（比如纽约时报，卫报，金融时报，彭博社，经济学人等），英文世界里信息质量最高的论坛（比如[HackerNews](https://news.ycombinator.com/)，[Reddit 精神食粮小组](https://depth.buzzing.cc/)等）,以及其他热门的社交媒体讨论。我使用 [Deepl](https://www.deepl.com/translator) 把这些信息的标题翻译成中文（同时也保留英文标题方便对照），最后提供了一个排版良好，没有登录，没有广告，没有废话的[静态页面](https://www.buzzing.cc/)（支持无图模式，以减少分心），同时具有良好的 RSS 支持。

[沉浸式双语网页翻译扩展](https://immersive-translate.owenyoung.com/) , 是我近期投入巨大精力的工具。这是一款基于浏览器的双语网页翻译扩展，它提供了排版精美的双语网页翻译体验，能智能识别网页的主要内容区域，同时也针对一些主流网站比如推特，Reddit，Youtube 等提供了更愉悦的翻译体验。（有位用户说，由于这个扩展，他真正爱上了阅读外语信息）。这款扩展支持几乎全平台的浏览器，允许用户选择数 10 个不同的翻译引擎，也支持开箱即用的 PDF 文件翻译。我制作这款扩展的目的是让每个人都能更加容易，愉悦地阅读外语内容，勇敢地打破自己的信息茧房（如果有的话 😂）。

我还创建了一些其他的免费工具，你可以点击[这里](https://www.owenyoung.com/projects/)了解我所有的项目。

时代很艰难，我知道不是每个人都有能力为越来越多的工具和内容付费，所以我完全免费地提供这个工具给所有需要的人。但作为一位独立开发者，我之所以能持续的做这项工作，是因为那些能负担得起的人持续慷慨的赞助。这种至关重要的支持意味着成千上万的人可以继续完全免费，也没有广告地使用我提供的工具。所以，如果有余力，我想邀请你[**$1 起赞助我的工作**](https://immersive-translate.owenyoung.com/donate.html)，非常感谢有你的支持！

Ps. 我也完全理解暂时还没有余力的用户（因为我就是这样过来的！），不过你也可以帮助我完成一些力所能及的任务：

- 帮助我在[Chrome 商店](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh), [Edge 商店](https://microsoftedge.microsoft.com/addons/detail/%E6%B2%89%E6%B5%B8%E5%BC%8F%E7%BF%BB%E8%AF%91/amkbmndfnliijdhojkpoglbnaaahippg?form=MT001Y&hl=zh-CN&gl=CN), [Firefox 商店](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/)， [GreasyFork](https://greasyfork.org/zh-CN/scripts/457196-immersive-translate)里评价该扩展。
- [Star](https://github.com/immersive-translate/immersive-translate/)这个 Github 项目。
- 帮忙[贡献文档](https://immersive-translate.owenyoung.com/),点击右上角编辑按钮即可。
- 帮忙[翻译](https://crowdin.com/project/immersive-translate)该扩展的界面语言。
- 帮忙解答用户在[Telegram 群组](https://t.me/+rq848Z09nehlOTgx)和[Github Issue](https://github.com/immersive-translate/immersive-translate/issues)里的提问。
- 介绍这个扩展给有需要的朋友
- 甚至，如果你有代码开发能力，你可以[直接参与开发](https://immersive-translate.owenyoung.com/CONTRIBUTION.html)这个扩展，请加[Telegram 群组](https://t.me/+rq848Z09nehlOTgx)的开发频道了解。

> Ps. 我比预想中花了更巨大的时间和精力开发这个[沉浸式翻译扩展](https://immersive-translate.owenyoung.com/)，你的支持对我真的非常重要，感谢你的支持！

### 月度赞助链接

我已开通了 [Github Sponsor 主页](https://github.com/sponsors/theowenyoung?frequency=recurring), 点击[这里](https://github.com/sponsors/theowenyoung?frequency=recurring)可以进行月度赞助，$1 起即可小额支持，支持 Paypal 中国版，信用卡等。

> 你也可以选择[Patreon 平台](https://www.patreon.com/theowenyoung) 进行赞助，$1 起即可小额支持，同样支持 Paypal，以及信用卡。

> 由于个人原因，我暂时还没有开通微信/支付宝渠道的赞赏链接，以上两个平台的 Paypal 支付方式均支持绑定任何国内的银行卡。如果为你带来不便，我很抱歉，还望理解。

### 一次性赞助

点击[我的 Github Sponsor 主页](https://github.com/sponsors/theowenyoung?frequency=one-time) ，$2 起即可小额支持，支持 Paypal，以及信用卡支付。

### 加密货币一次性赞助

1. USDT 或 USDC 或 ETH (ERC20): `0xA9e3dE8C304D907F92E6C73E21D07Cd3f2f2D708`

<details>
<summary>点击展开二维码</summary>
<img src="https://immersive-translate.owenyoung.com/usdt-erc20-immersive-translate-400.jpg" alt="qrcode"></img>
</details>

2. USDT 或 USDC (TRC20): `TRWaYy8Z3Gnydm1mpKetX7ahwCbFqRszv6`

<details>
<summary>点击展开二维码</summary>
<img src="https://immersive-translate.owenyoung.com/usdt-trc20-immersive-translate-400.jpg" alt="qrcode"></img>
</details>

## Links

- [Github](https://github.com/immersive-translate/immersive-translate/)
- [在线文档](https://immersive-translate.owenyoung.com/)
- [问题反馈](https://github.com/immersive-translate/immersive-translate/issues/)
- [赞助链接](https://immersive-translate.owenyoung.com/donate.html)
- [Telegram 群组](https://t.me/+rq848Z09nehlOTgx)

```

```
