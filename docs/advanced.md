# 高级自定义选项

你可以在扩展的配置页面 -> Import/Export 里编辑更多 UI 里无法编辑的自定义配置。

基本配置示例：

```json
{
  "translationService": "tencent",
  "translationServices": {
    "tencent": {
      "secretId": "xxx",
      "secretKey": "xxx"
    }
  },
  "translationUrlPattern": {
    "excludeMatches": ["www.google.com"]
  },
  "translationLanguagePattern": {
    "matches": ["en"]
  },
  "detectParagraphLanguagePattern": {
    "matches": ["twitter.com", "github.com"]
  },
  "translationTheme": "none",
  "translationThemePatterns": {
    "underline": {
      "matches": ["discord.com"]
    }
  },
  "debug": false
}
```

其中，`rules` 里的规则字段，可以使用`generalRule`里的全部字段，`rules`的优先级最高，当匹配到特定网站的某一条`rule`时，会合并`generalRule`和该`rule`，通过 rule,我们可以对任意网站进行任意自定义配置。

`translationService`, 为默认翻译引擎，当前支持：

```typescript
| "tencent"
| "google"
| "deepl"
| "baidu"
| "volc"
| "youdao"
| "caiyun"
| "openl"
| "bing"
| "transmart"
```

其中部分服务需要配置`apikey`等，不同服务需要的 token 不一样。

比如`tencent`需要在`translationServices.tencent`里配置 `secretId`,`secretKey`， 需要在腾讯云申请，每月免费字符 500 万。具体申请过程参考[这里](https://hcfy.app/docs/services/qq-api/)

还可以在不同的服务下配置：`matches`, 这样可以指定某些网站使用指定的翻译服务。

`translationUrlPattern`, 配置 总是翻译的网站，以及永不翻译的网站。其中`matches`配置总是翻译的网站， `excludeMatches`配置永不翻译的网站。配置的值可以是域名或者带有`*`的网址，比如：`www.google.com/mail/*`

`tranlationLanguagePattern`,配置总是翻译的语言，以及永不翻译的语言。其中`matches`配置总是翻译的语言，比如`en`,`excludeMatches`配置永不翻译的语言。

`translationTheme`为译文的显示格式:，当前支持以下样式：

```typescript
| "none"
| "dashed"
| "dotted"
| "underline"
| "mask"
| "paper"
| "highlight"
| "blockquote"
| "weakening"
| "italic"
| "bold"
| "thinDashed";
```

对应的中文名：

```json
{
  "none": "无",
  "dashed": "虚线下划线",
  "dotted": "点状下划线",
  "underline": "直线下划线",
  "mask": "模糊效果",
  "paper": "白纸阴影效果",
  "highlight": "高亮",
  "blockquote": "引用样式",
  "weakening": "弱化",
  "italic": "斜体",
  "bold": "加粗",
  "thinDashed": "细虚线下划线"
}
```

`translationThemePatterns` 下可以为不同网站配置不同的译文样式。

`detectParagraphLanguagePattern`下可以为不同网站配置，按照段落检测语言，这样可以避免某些本来就是目标语言的段落被翻译。
