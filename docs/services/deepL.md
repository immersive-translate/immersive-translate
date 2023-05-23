# DeepL

## 通过 DeepL 官方获取 DeepL API

1. 官方介绍：[DeepL API ](https://www.deepl.com/zh/pro#developer)
   - 注意： [DeepL API](https://www.deepl.com/zh/pro#developer) 和 [DeepL Pro](https://www.deepl.com/pro) 是两种不同的账户类型，在沉浸式翻译里使用的是 [DeepL API](https://www.deepl.com/zh/pro/select-country#developer) 账户。
2. [为什么](https://www.deepl.com/zh/whydeepl)选择 DeepL?

   - 英语 ⇄ 中文 5 倍更准确
   - 英语 ⇄ 日语 6 倍更准确
   - 翻译引擎基于人工智能技术（神经网络）

3. Deepl API 分为 [Free API 和 Pro API](https://www.deepl.com/zh/pro#developer)

   - 其中 Free API 每月提供 50 万免费字符额度。
   - Pro API 的[官方费用](https://www.deepl.com/zh/pro#developer)是：每 100 万字符 25 美元 。
   - 对于高频使用的用户，一个月消耗的字符量大约是 1000 万字符， 价格大约为：250 美元

4. 注册账号和开通 [DeepL API](https://www.deepl.com/zh/pro#developer)，需要提供一张 DeepL [支持的国家或地区](https://support.deepl.com/hc/zh-cn/articles/360020016339-DeepL-Pro%E5%9C%A8%E6%88%91%E6%89%80%E5%9C%A8%E5%9B%BD%E5%AE%B6%E6%97%A0%E6%B3%95%E8%AE%A2%E9%98%85)发行的 VISA 或 MASTER 信用卡，可惜的是，目前国内发行的任何信用卡（包括双币卡和外币卡）均不被支持。

## 在其他平台购买 DeepL Auth Key

如果你只是轻量使用，你可以在淘宝或其他平台购买已开通 DeepL API Free 的账号，每月有 50 万免费字符翻译额度。当你购买了账号后，除了账号密码外，卖家一般也会把 auth key 给你，直接把 Auth Key 填入本扩展的 DeepL 翻译中即可。

## DeepL 繁體中文

沉浸式翻譯的 DeepL 服務也支持繁體中文哦！ （由於 DeepL 官方不支持繁體中文，導致很多繁體的朋友們無法使用 DeepL 的優質翻譯服務，為了解決這部分繁體中文朋友的困擾，沉浸式翻譯擴展會將 DeepL 的簡體中文再轉為繁體中文。

## 自建 DeepL API

我们正在 Beta 特性里实验支持自建的 DeeplX 服务（但是经测试，该服务并不太适合作为网页翻译的服务。由于网页翻译要求的 API 请求量巨大，如果搭建此服务请务必做好负载均衡）,以下为如何开启该实验特性的说明：

1. 开发者设置中开启 Beta 测试特性
2. 基本设置中找到 DeepLX(Beta)，输入自建 DeepL API URL，如 http://your-domain/translate

> Q：如何自建？  
> A：[OwO-Network/DeepLX](https://github.com/OwO-Network/DeepLX#setup-on-immersive-translate)或是[zu1k/deepl](https://github.com/KyleChoy/zotero-pdf-translate/blob/CustomDeepL/README.md)

## 常见问题

### 1. 填入的密钥不可用。

DeepL API Pro 和 DeepL Pro 是两种账户，可以在沉浸式翻译里使用的 Auth Key 是 DeepL API 账户， 请点击这里查看[DeepL API Pro](https://www.deepl.com/zh/pro/select-country#developer)

### 2. Deepl Free API 提示 401 无权限

Deepl Free API 的 Key 都是以 `:fx` 结尾的，其他的都不是 Free API 的 key

### 3. 456, Quota for user has been reached.

使用量已超过 DeepL 官方为每个用户设置的硬限制上限，你可能已违反了 DeepL 的合理使用政策，最好避免此类行为。如果是付费用户的话，下个月会自动重置用量。
