# 微软 Azure 翻译

## 简要说明

1. 官方网站：[微软 Azure 翻译](https://learn.microsoft.com/zh-cn/azure/cognitive-services/translator/text-translation-overview)
2. 官方说明：每月翻译 200 万字之内都是免费的，如果您每月超过 200 万字，我们会按照 10 美元 / 100 万字 的费率收费。详情参考 [定价说明](https://azure.microsoft.com/zh-cn/pricing/details/cognitive-services/translator/)

## 注册流程

注册流程相比其他翻译服务较为繁琐，需耐心操作。  

参考链接：[微软 Azure 翻译入门文档](https://learn.microsoft.com/zh-cn/azure/cognitive-services/translator/document-translation/quickstarts/get-started-with-rest-api?pivots=programming-language-csharp)

## 注册 Azure 帐户

注册 [Azure](https://azure.microsoft.com/zh-cn/free/cognitive-services/) 帐户，需绑定国际信用卡(Visa/Master)。

## 注册 Azure Blob 存储帐户

注册 [Azure Blob](https://portal.azure.com/#create/Microsoft.StorageAccount) 存储帐户。

1. 新建资源组，填写存储帐户名称
2. 区域选择一个离你最近的地区，比如香港区域就是 `East Asia`。
3. 剩下的流程只需直接下一步即可。在最后一页，部署完成后，点击左下方的蓝色按钮"创建"。

## 创建翻译工具

创建 [翻译工具](https://portal.azure.com/#create/Microsoft.CognitiveServicesTextTranslation)  
1. 区域选择一个离你最近的地区，比如香港区域就是 `East Asia`。
2. 定价层根据需要选择，免费用户可选择 `Free F0`。免费层不支持文档翻译。如有需要可以使用标准 S1 试用。
3. 剩下的流程只需直接下一步即可。在最后一页，部署完成后，点击左下方的蓝色按钮"创建"。

## 访问密钥

进入[Azure仪表盘](https://portal.azure.com/#home)，打开 **翻译工具** 的页面，在左侧菜单-资源管理-`密钥和终结点`，找到密钥。微软会提供 2 个密钥，任选其一，将密钥填入沉浸式扩展-微软翻译的 `APIKEY` 里即可。  

还有一个`位置/区域`属性，例如 `eastasia`，调用此 API 时，也需要填入沉浸式扩展-微软翻译的 `region` 里。  

## 常见问题

如有疑惑的地方，请在 [这里](https://github.com/immersive-translate/immersive-translate/issues/137) 反馈。
