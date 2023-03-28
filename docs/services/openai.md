# Open AI (ChatGPT)

## 简要说明

- [openAI API 官方地址](https://openai.com/api/)
- 注册成功后，打开[API Secret Key](https://platform.openai.com/account/api-keys)，创建 API Secret Key
- 然后将 key 填写在沉浸式翻译扩展里的 OpenAI 的配置项里即可
- gpt-3.5-turbo 的价格为：$0.002 / 1K tokens，实测 66 万英文字符翻译大约为 1 美元，17 万英文字符翻译大约为 0.25 美元。
- 如果没有绑定信用卡，请求会有限制，测试下来发现每分钟最多 10 个请求。

> 建议在严肃使用场景中开通 OpenAI 的付费服务，然后**修改设置中的每分钟最大请求数到 1500 或者其他你认为合适的数值**。
>
> 即使是付费版，翻译速度依然不太理想，因为官方的接口速度确实挺慢的。

## 注意事项

- 沉浸式翻译扩展支持的是 OpenAI 的 API，而不是网页版的 ChatGPT Plus，所以你需要开通 OpenAI 的 API 服务，开通后在设置页面填写 API Key 即可。
