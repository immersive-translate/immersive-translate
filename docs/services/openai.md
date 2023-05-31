# Open AI (ChatGPT)

## 简要说明

- [openAI API 官方地址](https://openai.com/api/)
  - 注意：目前 OpenAI 本身不开放中国手机号码注册。
- 注册 OpenAI 账户后，打开[API Secret Key](https://platform.openai.com/account/api-keys)，创建 API Secret Key
- 然后将 key 填写在沉浸式翻译扩展里的 OpenAI 的配置项里即可。
  - 注意：如果没有绑定信用卡，则为试用版用户，每分钟请求数最多 3 个，基本无法使用。所以建议在严肃使用场景中开通 OpenAI 的付费服务以使用

## 当前请求数推荐

最近 OpenAI 对付费版用户限制也很大，从 0.5.0 版本起默认请求数单位改为秒，默认每秒最大请求数改为 5 个请求。 电子书翻译可能要设置的更小，比如每秒 3 个请求。

## Azure OpenAI

OpenAI 翻译服务同时也兼容 Azure OpenAI 接口，Api Key 请填写 Azure 控制台提供的 Key，然后点击展开更多设置，设置自定义地址为：

`https://xxxxx.openai.azure.com/openai/deployments/gpt-35-turbo/chat/completions?api-version=2023-03-15-preview`

将 `xxxxx` 改为你自己的子域名，同时模型名字选择自定义模型，改为： `gpt-35-turbo`

## 注意事项

- OpenAI 的 API 和 ChatGPT 是两个不同的服务，沉浸式翻译扩展支持的是 OpenAI 的 API，而不是网页版的 ChatGPT，因此你需要开通 OpenAI 的 API 服务而非开通 ChatGPT plus，开通后在设置页面填写 API Key 即可。
- 出现 429 错误，说明超出了 openai 的频率限制，建议调低每分钟的最大请求数，尤其是翻译电子书的时候，即使是付费版，也需要调低每分钟最大请求数，调整到每分钟 150 会稳定一点。
- OpenAI gpt-3.5-turbo 模型的价格为：$0.002 / 1K tokens，实测翻译 66 万英文字符花费大约 1 美元，翻译 17 万英文字符花费大约 0.25 美元。
- 沉浸式翻译扩展支持多个 API Key 负载均衡, 请在填写的时候用英文逗号 `,` 分隔不同的 key

## 自定义 OpenAI 的 API 地址

- 可以通过`更多设置`来进行配置，入口如下

---

<img width="951" alt="Snipaste_2023-04-08_19-29-18" src="https://user-images.githubusercontent.com/5794691/230718739-ff661ce3-04af-4391-8efc-9a5a1c8374b0.png">

---

<!--

## 自助开通 OpenAI 账户

> Signup is currently unavailable, please try again later.

1. 使用在线接码平台购买一个虚拟手机号码（比如印尼的），接码平台可以选择 sms-activate（支持支付宝，最低充值金额 2 美元，但是平台比较稳定，以后可以一直用下去） （[这是我的邀请链接](https://sms-activate.org/?ref=6345728)），或者选择其他类似的接码平台也可以。
2. 注册好接码平台后，先充值一个最低金额，然后可以选择服务【openAI】，然后选择一个印尼号码（最便宜）
3. 记得打开全局模式，建议美国或日本 IP，打开[OpenAI](https://platform.openai.com/account/api-keys://openai.com/),点击 Sign Up
4.

地址可以用这个美国地址生成器,俄勒冈州(免税)地址生成器 – 美国地址生成器 – [美国身份生成器](https://www.meiguodizhi.com/usa-address/oregon)

- 注册成功后，建议绑定信用卡，因为试用账户的每分钟最多只能发 10 个请求，而绑定了信用卡的用户，每分钟最多可以发 3500 个请求。
- 同样，OpenAI 信用卡目前也不支持国内发行的任何外币/双币信用卡。国内用户可以使用虚拟信用卡进行绑定。

-->
