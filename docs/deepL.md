# DeepL

> 💡 提示 
> 
> 文档内容可能会过时，请以 DeepL 官网说明为准。
> 
> 相关链接：[DeepL API 说明](https://www.deepl.com/zh/pro#developer)

## 价格

DeepL 的订阅类型分为两种：针对个人和团队和研发人员（DeepL API），**沉浸式翻译能且只能使用研发人员（DeepL API）**。

研发人员（DeepL API）又分为两种：

- Free（推荐）：每个月提供 50 万免费字符，超出后则不能再使用，直到下个月刷新免费额度。
- Pro：25 美元 / 一百万字符，且每月还需要额外缴纳 5.49 美元的订阅费。

## 申请步骤

### 第一步：获取开通过 DeepL API 的账号

如果你想自己注册 DeepL 账号并开通 DeepL API，那么首先你需要有一张在 DeepL 支持的国家或地区发行的 VISA / MASTER 信用卡。**DeepL 目前不支持使用国内发行的信用卡开通 DeepL API**，鉴于此，我建议直接在网上购买开通了 DeepL API Free 的账号。

再次提醒，请确认你购买的是开通了研发人员（DeepL API）的账号，一般会标有“程序员”、“API Free”这样的字眼。

如果你有符合条件的信用卡，那么你可以自行在 DeepL 官网注册账号并开通 DeepL API。

### 第二步：获取 Authentication Key

当你有了开通过 DeepL API 的账号后：

- 打开 https://www.deepl.com/docs-api/simulator/
- 如果你没有登录，那么点击右上角的【登录】并登录你的账号。注意：可能需要关闭代理软件才能登录成功。
- 登录账号后，Authentication Key for DeepL API 里出现的文本就是沉浸式翻译需要的 Authentication Key 了。

### 第三步：将 Authentication Key 填写进沉浸式翻译

打开沉浸式翻译的【基本设置】-【翻译服务】，找到【DeepL】然后点击【管理密钥】按钮即可填写。

## 术语表

DeepL 虽然支持术语表，但需要沉浸式翻译写代码做接入。如果你需要用到 DeepL 的术语表，可以联系我添加此功能。
