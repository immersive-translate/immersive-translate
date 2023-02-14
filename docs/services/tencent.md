# 腾讯翻译君

## 简要说明

1. 官方网站：[机器翻译\_智能翻译\_自动翻译-腾讯云](https://cloud.tencent.com/product/tmt)
2. 官方资费说明：[机器翻译 计费概述-购买指南-文档中心-腾讯云](https://cloud.tencent.com/document/product/551/35017)
3. 付费版每月的前 500 万字符免费，超出的部分会按照 58 元 / 百万字符收取费用，请关注使用额度，以免意外扣费。

## 申请步骤

1. 打开 [腾讯云官网](https://cloud.tencent.com/) 并登录，登录成功后，鼠标移动到页面右上角的头像上，选择“账号信息”进行个人认证。使用腾讯云机器翻译必须进行个人认证，已认证过的话可以跳过。
2. 打开 [机器翻译\_智能翻译\_自动翻译-腾讯云](https://cloud.tencent.com/product/tmt)，点击“立即使用”按钮。登录之后，会进入腾讯机器翻译服务控制台。
3. 选择开通付费版。
4. 创建访问密钥。将鼠标悬停在网页右上角的头像上，然后选择 [访问管理](https://console.cloud.tencent.com/cam/overview)，然后在左侧菜单选择 [访问密钥 - API 密钥管理](https://console.cloud.tencent.com/cam/capi)，最好不要直接创建密钥，因为主账号创建的密钥可以访问调用你账号里的所有资源，因此保险起见选择创建一个子账号，在“用户权限”这一项进行搜索“机器翻译”，只勾选这一项。
5. 成功创建后，会看到这个子账户的”SecretId“和“SecretKey”。将其填入本扩展即可！
6. 完成🎉，如有疑惑的地方，请在 [这里](https://github.com/immersive-translate/immersive-translate/issues/137) 反馈。
