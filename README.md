# Next Immersive Translate

> 仍然属于开发阶段，可能会有严重 Bug，请谨慎使用。

[iOS Safari 视频 Demo](https://www.youtube.com/watch?v=sQevumpUprc)

感谢这些[赞助者](https://immersive-translate.owenyoung.com/thanks), 由于他/她们的支持，更多的人可以免费使用这个工具。点击成为[赞助者](https://immersive-translate.owenyoung.com/donate)。

## 目录

- [安装](https://immersive-translate.owenyoung.com/installation.html)
- [如何使用](https://immersive-translate.owenyoung.com/usage.html)
- [高级自定义配置](https://immersive-translate.owenyoung.com/advanced.html)
- [更新日志](https://immersive-translate.owenyoung.com/CHANGELOG.html)
- [反馈问题](https://github.com/immersive-translate/next-immersive-translate/issues)
- [☕️ 请开发者喝杯咖啡](https://immersive-translate.owenyoung.com/donate.html)
- [加入 Telegram 群组](https://t.me/+rq848Z09nehlOTgx) 参与功能的讨论。

## 安装

### Firefox/Chrome

目前还没上架应用商店，请点击[这里](https://github.com/immersive-translate/next-immersive-translate/releases)下载最新版本，下载后手动安装。

> 为了方便追踪更新，你可以通过克隆 Github 项目来追踪目前开发阶段频繁的更新, 使用以下命令：

```
git clone https://github.com/immersive-translate/next-immersive-translate.git
```

扩展位于`dist/chrome`, `dist/firefox`, `dist/userscript` 中。

### Safari

桌面版和移动版都支持，需要配合油猴插件安装,以[Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887)为例:

1. 安装[Userscripts safari 插件](https://itunes.apple.com/us/app/userscripts/id1463298887)
2. 安装本扩展的[油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)

安装后，打开任意网页，刷新一下之后，会有沉浸式翻译扩展的浮动窗口在浮动在右侧。

如果你以前没有使用过油猴脚本，可以点击参考[视频教程](https://youtu.be/vOaCFjYmQNM)

### Android 安卓

1. 下载[Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix&hl=en_US&gl=US)版本
2. 在 Firefox 的附加组件推荐里找到[Tamper Monkey](https://www.tampermonkey.net/),安装
3. 安装本扩展的[油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)

安装后，打开任意网页，会有该扩展的浮动窗口在右侧。

### 其他移动浏览器

比如 Kiwi 浏览器等等，只要支持油猴脚本的浏览器，都可以通过油猴脚本安装本扩展。

### 油猴脚本 GreasyFork 地址

你也可以通过[Greasy Fork](https://greasyfork.org/zh-CN/scripts/457196-immersive-translate) 商店安装油猴脚本，但是缺点是 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) 似乎不支持 Greasyfork 托管的脚本的自动更新，因为 GreasyFork 不允许填写 `updateURL` 属性。

## 赞助我的工作

我喜欢为“穷人”创造工具，因为我在免费的互联网工具和内容中学到了很多，我从心底里相信平等地获取知识是每个人最应拥有的权利。

鉴于中文互联网显而易见的信息审查，污染和控制，我们更应该让自己尽可能多的获取不同的信息源，所以我创建了一些双语的工具来帮助人们更有效的获取互联网上巨大的英文信息源。

我创建了 <https://www.buzzing.cc/> ，这是一款聚合外网可信度高的权威媒体以及社交媒体里的热门讨论，我使用 Deelp 将标题翻译为中文，以便母语使用者可以快速浏览以获得自己感兴趣的内容。没有废话，没有登录，有良好的 RSS 支持，以及最大化页面的信息密度。同时也支持无图模式，以减少分心。

我还创建了 [沉浸式双语翻译扩展](https://immersive-translate.owenyoung.com/) , 这是一款浏览器网页双语翻译扩展，智能识别绝大多数网页的主内容，自动按照每一个段落双语翻译，支持 10 多个翻译引擎，以及几乎所有浏览器平台，甚至包括 Safari 移动版，Firefox nightly 安卓版等等。我希望中文用户能够通过此扩展获取更多，更高质量的信息源。

我还创建了一些其他的免费工具，你可以[点击这里](https://www.owenyoung.com/projects/)了解我所有的项目。

非常感谢你的支持，由于你的支持，可以让更多的“穷人”更平等的获取这些宝贵的知识。

> PS. 我比预想中花了巨大的时间和精力开发[沉浸式双语翻译扩展](https://immersive-translate.owenyoung.com/)，你的支持对我的工作非常重要，谢谢！

## 月度赞助链接

点击[Patreon](https://www.patreon.com/theowenyoung) 进行捐赠，$1 起即可小额支持，支持 Paypal，以及 Stripe 支付（貌似 Stripe 需要外币信用卡，比如 Visa/万事达）

## 一次性赞助

点击[Patreon](https://www.patreon.com/theowenyoung) 进行捐赠，由于是一次性订阅，所以订阅之后，在`设置`->`会籍`里取消订阅即可。$1 起即可小额支持，支持 Paypal，以及 Stripe 支付（貌似 Stripe 需要外币信用卡，比如 Visa/万事达）

## 加密货币一次性赞助

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

### 其他

你还可以通过帮忙翻译[界面语言](https://crowdin.com/project/immersive-translate)来帮助这个项目

或者加入[Telegram 群组](https://t.me/+rq848Z09nehlOTgx) 参与功能的讨论。

## Links

- [Github](https://github.com/immersive-translate/next-immersive-translate/)
