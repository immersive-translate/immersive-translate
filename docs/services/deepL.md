# DeepL

## 通过 DeepL 官方注册 DeepL API 账户 获得 DeepL Auth Key

1. 官方介绍：[DeepL API Pro](https://www.deepl.com/zh/pro/select-country#developer)
2. 注册账号和开通 DeepL API，需要你有一张在 DeepL 支持的国家或地区发行的 VISA 或 MASTER 信用卡，目前并不支持国内发行的任何信用卡，包括双币卡和外币卡。如果没有那就注册不了。
3. DeepL API Free 的账号，每月提供 50 万免费字符的翻译额度。
4. DeepL API Pro 的官方费用是：每 100 万字符 $25 刀。

## 通过赞助沉浸式扩展获得无字符数限制的 DeepL Auth Key

如果你对 DeepL 翻译服务有强需求，但是官方 API 的字符数限制让你感到困扰，那么你可以考虑通过[赞助沉浸式翻译](https://immersive-translate.owenyoung.com/donate)以获得无字符数量限制的 Deepl Auth Key

打开[Github Sponsor](https://github.com/sponsors/theowenyoung) 或 [爱发电（支持微信/支付宝）](https://afdian.net/a/translate)，选择 $10 每月或 69 RMB 每月的赞助方案，即可获得 Deepl Auth Key 以及其他相关的赞助者福利。

<iframe width="560" height="315" src="https://www.youtube.com/embed/cciZptnoXCw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

> 说明：
>
> 1. 该 Auth Key 仅限沉浸式翻译扩展/油猴脚本中使用
> 2. 翻译服务依然使用的是 DeepL 官方的翻译接口，数据不会经过沉浸式翻译的服务器
> 3. Auth Key 可以在多台设备使用，但是同时只能在一台设备使用，所以请避免不要滥用资源
> 4. 赞助后，你将会在邮件收到 DeepL Auth Key，在沉浸式翻译扩展的设置页面选择翻译服务【DeepL】，然后填入该 Auth Key 即可。
> 5. 该 Auth Key 的有效性与赞助期限保持同步。
> 6. 你的赞助将对我持续免费的维护这个扩展提供巨大的帮助，感谢你考虑赞助该方案。

如有疑问可以通过[这些方式](https://www.owenyoung.com/contact/)联系我以了解更多。

## 在其他平台购买 DeepL Auth Key

如果你只是轻量使用，你可以在淘宝或其他平台购买已开通 DeepL API Free 的账号，每月有 50 万免费字符翻译额度。当你购买了账号后，除了账号密码外，卖家一般也会把 auth key 给你，直接把 authkey 填入本扩展的 DeepL 翻译中即可。

> 如果你提供 DeepL 的 Auth Key，可以在此处投放赞助广告。请通过[这些方式](https://www.owenyoung.com/contact/)联系我了解更多。

## DeepL 繁體中文

沉浸式翻譯的 DeepL 服務也支持繁體中文哦！ （由於 DeepL 官方不支持繁體中文，導致很多繁體的朋友們無法使用 DeepL 的優質翻譯服務，為了解決這部分繁體中文朋友的困擾，沉浸式翻譯擴展會將 DeepL 的簡體中文再轉為繁體中文。

## 自建DeepL API

1. 开发者设置中开启 Beta 测试特性
2. 基本设置中找到DeepLX(Beta)，输入自建DeepL API URL，如http://your-url/translate

> Q：如何自建？  
> A：[OwO-Network/DeepLX](https://github.com/OwO-Network/DeepLX#setup-on-immersive-translate)或是[zu1k/deepl](https://github.com/KyleChoy/zotero-pdf-translate/blob/CustomDeepL/README.md) (注：自建API并发量受限，可能会出现错误)

## 常见问题

### 1. 填入的密钥不可用。

DeepL API Pro 和 DeepL Pro 是两种账户，可以在沉浸式翻译里使用的 Auth Key 是 DeepL API 账户， 请点击这里查看[DeepL API Pro](https://www.deepl.com/zh/pro/select-country#developer)

### 2. Deepl Free API 提示 401 无权限

Deepl Free API 的 Key 都是以 `:fx` 结尾的，其他的都不是 Free API 的 key
