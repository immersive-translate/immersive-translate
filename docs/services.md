# 翻译服务申请

## 目录

- [百度翻译](#百度翻译)
- [腾讯翻译君](#腾讯翻译君)
- [DeepL](#deepL)
- [火山翻译](#火山翻译)
- [彩云小译](#彩云小译)
- [OpenL](#openl)
- [有道翻译](#有道翻译)
- [小牛翻译](#小牛翻译)

## 百度翻译

### 简要说明

1. 官方网站：[百度翻译开放平台](https://fanyi-api.baidu.com/)
2. 官方资费说明：[百度翻译通用翻译 API 定价文档](https://fanyi-api.baidu.com/product/112)
3. 标准版，高级版，尊享版权益说明：[通用翻译 API 版本权益调整通知](https://fanyi-api.baidu.com/doc/8)
4. 建议完成个人认证，切换到高级版，每月有 100 万字符免费。

### 申请步骤

1. 打开 [百度翻译开放平台](https://fanyi-api.baidu.com/) ，登录你的百度账号，登录成功后点击”管理控制台“。
2. 选择”个人开发者“并填写表单后点击”下一步”。注册成功后会让你进行身份认证，如果想用高级版的免费 100 万字符就需要认证。
3. 注册成功后，打开 [百度翻译开放平台控制台](https://fanyi-api.baidu.com/api/trans/product/desktop)，点击”立即开通“按钮，选择”通用翻译（适用于文本翻译）“并点击”下一步“，选择”开通标准版“，填写应用名称 " 沉浸式翻译 " ，点击“提交申请”，会提示”开通成功“。
4. 切换为“高级版”，打开 [百度翻译开放平台控制台](https://fanyi-api.baidu.com/api/trans/product/desktop)，点击写有“标准版”的下拉框切换为高级版。
5. 此 [百度翻译开放平台控制台](https://fanyi-api.baidu.com/api/trans/product/desktop) 页面最底部有“申请信息”包含”APP ID“和”密钥“，将其填入到本扩展中。
6. 完成！撒花 🎉，如有问题，请到群里反馈。

---

## 彩云小译

### 简要说明

1. 官方网站：[彩云科技开放平台](https://dashboard.caiyunapp.com/)
2. 官方介绍：[五分钟学会彩云小译 API](https://docs.caiyunapp.com/blog/2018/09/03/lingocloud-api/)
3. 彩云小译的官方说明：每月翻译 100 万字之内都是免费的，如果您每月超过 100 万字，我们会按照 20 元 / 100 万字 的费率收费。(字数按照翻译原文字符计算，包含空格和标点)

### 申请步骤

1. 完成开发者认证：登录 [彩云科技开放平台](https://dashboard.caiyunapp.com/)，进入 [我的账户 - 开发者信息](https://dashboard.caiyunapp.com/user/user/info/) 填写开发者信息，账户类型选择“个人及非盈利组织”，个人姓名、组织名、联系名、联系电话都写自己的即可。
2. 应用类别选择彩云小译 API，应用名填写沉浸式翻译，应用链接填写 immersive-translate，应用开发情况填写浏览器扩展程序，已开发完成。
3. 填写完成之后点击提交按钮，彩云小译会审核你提交的信息，一般两个工作日内就会审核通过。
4. 审核通过后，进入 [我的令牌 - 令牌](https://dashboard.caiyunapp.com/v1/token/) 列表，查看你的“Token”，将此 Token 填入本扩展即可。

---

## DeepL

### 简要说明

1. 官方介绍：[DeepL Pro](https://www.deepl.com/zh/pro/select-country#developer)
2. 注册 [DeepL](https://www.deepl.com/docs-api/simulator/) 账号并开通 DeepL API，需要你有一张在 DeepL 支持的国家或地区发行的 VISA 或 MASTER 信用卡，目前并不支持国内发行的任何信用卡，包括双币卡和外币卡，如果没有那就注册不了。
3. 也可以直接在网络上购买开通了 DeepL API Free 的账号，每月提供 50 万免费字符翻译。
4. 当你购买了账号后，除了账号密码外，卖家一般也会把 authkey 给你，直接把 authkey 填入到本扩展的 deepl 翻译中即可。

---

## 免责声明

以上所有翻译服务均由自己申请，所需费用完全由该服务商收取，与本扩展无关。

请大家注意各个服务商的免费额度，避免意外扣费。

## 关于字符数的简单说明

字符数以翻译的源语言字符长度为标准计算。空格、html 标签等均计入字符。一个汉字，英文字母，标点符号等，均按照一个字符计费。例如马斯克的这段推特有 32 个词，196 个字符。

> To be clear, I’m not someone who thinks lots of government agencies should be abolished (maybe a few), but we should always question our institutions, as this strengthens the bedrock of democracy.

这样一篇看起来很难读完的长文：[Algorithms Unlocked: How They’re Shaping Our Everyday Lives | by Two Techie Vibes | Jan, 2023 | Medium](https://twotechievibes.medium.com/algorithms-unlocked-how-theyre-shaping-our-everyday-lives-6261fa1dbad)，大概有 1 万的字符数。

希望这两个例子能让你对字符数有个感性的认识。
