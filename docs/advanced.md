# 高级自定义选项

你可以在扩展配置页面 -> 开发者设置 -> User Config 里编辑更多 UI 里无法编辑的自定义配置。

基本配置示例：

通过 User Rules, 我们可以对特定网站进行自定义配置，例如设置哪些区域的内容是否需要翻译，或者调整网页样式等。详见最后的 Rules 说明。

```json
[{
  "matches": "www.google.com",
  "selectors": [".title"]
}, {
  "matches": "*.twitter.com",
  "selectors": [".text"],
  "excludeSelectors": ["footer"]
}]
```


完整基本配置示例：

```json
{
  "translationService": "tencent",
  "translationServices": {
    "tencent": {
      "secretId": "xxx",
      "secretKey": "xxx",
      "matches":["*.twitter.com"]
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
  "debug": false,
  "generalRule": {
    "_comment": "",
    "normalizeBody": "",
    "wrapperPrefix": "smart",
    "wrapperSuffix": "smart",
    "isPdf": false,
    "isTransformPreTagNewLine": false,
    "urlChangeDelay": 20,
    "isShowUserscriptPagePopup": true,
    "observeUrlChange": true,
    "paragraphMinTextCount": 8,
    "paragraphMinWordCount": 2,
    "blockMinTextCount": 32,
    "blockMinWordCount": 5,
    "containerMinTextCount": 18,
    "lineBreakMaxTextCount": 0,
    "globalAttributes": {},
    "globalStyles": {},
    "selectors": [],
    "preWhitespaceDetectedTags": ["DIV", "SPAN"],
    "stayOriginalSelectors": [],
    "additionalSelectors": [],
    "atomicBlockTags": [],
    "excludeSelectors": [],
    "additionalExcludeSelectors": [],
    "translationClasses": [],
    "atomicBlockSelectors": [],
    "excludeTags": [],
    "metaTags": ["META", "SCRIPT", "STYLE", "NOSCRIPT"],
    "additionalExcludeTags": [],
    "stayOriginalTags": ["CODE", "TT", "IMG", "SUP"],
    "additionalStayOriginalTags": [],
    "inlineTags": [],
    "additionalInlineTags": [],
    "extraInlineSelectors": [],
    "additionalInlineSelectors": [],
    "extraBlockSelectors": [],
    "allBlockTags": [],
    "pdfNewParagraphLineHeight": 2.4,
    "pdfNewParagraphIndent": 1.2,
    "pdfNewParagraphIndentRightIndentPx": 130,
    "fingerCountToToggleTranslagePageWhenTouching": 4
  },
  "rules": [
    {
      "matches": "www.google.com",
      "selectors": [".class"]
    }
  ]
}
```

其中，`rules` 里的规则字段，可以使用 `generalRule` 里的全部字段。`rules` 拥有最高优先级，当匹配到特定网站的某一条 `rule` 时，会合并 `generalRule` 和该 `rule`。


### 翻译服务配置

**translationService**

`translationService` 为默认翻译引擎，当前支持：

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

在 `translationServices` 里配置各家翻译服务的 `apikey` ，不同服务商需要的参数不一样。

比如腾讯翻译君，在 `translationServices.tencent` 里需要配置 `secretId`, `secretKey`。需要前往腾讯云申请，每月免费字符 500 万。具体申请过程参考[这里](https://immersive-translate.owenyoung.com/services/tencent)

```json
"translationServices": {
  "tencent": {
    "secretId": "xxx",
    "secretKey": "xxx",
    "matches":["*.twitter.com"]
  }
}
```

还可以在不同的服务下配置 `matches` 字段, 指定某些网站使用指定的翻译服务。


### 翻译特定网站

`translationUrlPattern` 配置总是翻译的网站，以及永不翻译的网站。

- `matches` 配置总是翻译的网站， 
- `excludeMatches` 配置永不翻译的网站。

配置值可以是域名或者带有 `*` 的网址，比如：`www.google.com/mail/*`

```json
"translationUrlPattern": {
    "matches": ["stackoverflow.com"]
    "excludeMatches": ["www.google.com/mail/*"]
}
```

### 翻译特定语言

`translationLanguagePattern`, 配置总是翻译的语言，以及永不翻译的语言。

- `matches` 配置总是翻译的语言，比如 `en`,
- `excludeMatches` 配置永不翻译的语言。


### 段落语言检测

`detectParagraphLanguagePattern` 为不同网站配置，按照段落检测语言，这样可以避免某些本来就是目标语言的段落被翻译。

```
"detectParagraphLanguagePattern": {
  "matches": ["twitter.com", "github.com"]
}
```


### 译文显示格式

`translationTheme` 为译文的显示格式，当前支持以下样式：

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

`translationThemePatterns` 可以为不同网站配置不同的译文样式。

```json
"translationThemePatterns": {
  "underline": {
    "matches": ["discord.com"]
  }
}
```

### Rules 

`rules` 为数组对象，可以配置针对特别网站的规则，比如让推特只翻译某一部分区域:

```json
{
  "rules": [
    {
      "matches": ["twitter.com", "mobile.twitter.com", "tweetdeck.twitter.com"],
      "selectors": [
        "[data-testid='tweetText']",
        ".tweet-text",
        ".js-quoted-tweet-text",
        "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
        "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
        "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"
      ],
      "extraInlineSelectors": ["[data-testid=\"tweetText\"] div"]
    }
  ]
}
```

当前内置的 `rules` 可以在[这里](https://github.com/immersive-translate/next-immersive-translate/blob/main/docs/buildin_config.json) 找到。

以下挑选部分重要字段进行说明：

```typescript
export interface Rule {
  matches?: string | string[]; // url匹配规则，设置后，该条rule将仅匹配该url，支持通配符，比如 `*.google.com`, `www.google.com/test/*`, `file:///*`
  excludeMatches?: string | string[]; // url 排除规则，设置后，该条rule将不匹配特定的url
  selectorMatches?: string | string[]; // 选择器匹配规则，比如数量众多的mastodon实例可以用选择器来判断，无需指定所有的url
  excludeSelectorMatches?: string | string[]; // 选择器排除规则
  selectors?: string | string[]; // css选择器，设置后，该网页将翻译设置的selectors匹配的元素进行翻译
  additionalSelectors?: string | string[]; // 额外的css选择器，设置后，除了智能判断的区域外，这里面包含的元素也会被翻译
  excludeSelectors?: string | string[]; // 排除的元素，设置后，匹配的元素将不被翻译
  additionalExcludeSelectors?: string | string[]; // 额外的排除元素
  atomicBlockSelectors?: string | string[]; // 原子元素选择器，设置后，该选择器匹配的元素将被视为一个整体，不会进行分段
  atomicBlockTags?: string | string[]; // 原子Tag名，同上
  containerMinTextCount?: number; // 智能识别时，元素内最少包含的字符数，才会被视为要翻译的区域，默认为18
  lineBreakMaxTextCount?: number; // 强制为原网页长段落进行分行的每个段落的最大字符数。
  extraInlineSelectors?: string | string[]; // 额外的inline元素，有些网页不标准，导致解析出错，这里可以修正。
  extraBlockSelectors?: string | string[]; // 额外的block元素，同上
  translationClasses?: string | string | string[]; // 你可以为译文添加额外的css名字
  inlineTags?: string | string[]; // inlineTags
  preWhitespaceDetectedTags?: string | string[]; // 检测是否是preWhiteSpace的tag
  excludeTags?: string | string[]; // 排除的tags
  additionalExcludeTags?: string | string[]; // 额外排除的tags
  stayOriginalTags?: string | string[]; // 这些tag，比如code 保持原样
  stayOriginalSelectors?: string | string[]; // 这样选择器匹配的tag，保持原样不翻译
  globalStyles?: Record<string, string>; // 修改全局样式，这个很有用，可以移除原网页的一些最大高度的样式，比如youtube的标题，格式为 `".title":"max-height: unset;"`
  globalAttributes?: Record<string, Record<string, string>>; // 修改全局元素的属性
  wrapperPrefix?: string; // 译文区域的前缀，默认为 smart， 根据字数确定是否添加空行
  wrapperSuffix?: string; // 译文区域的后缀
  urlChangeDelay?: number; // 延迟多少毫秒才开始翻译，为了等网页的初始化，目前默认为250ms
  observeUrlChange?: boolean; // 是否检测url change事件，默认为true，部分网站不检测体验更好，比如inoreader
  paragraphMinTextCount?: number; // 要翻译的段落的最小字符数
  paragraphMinWordCount?: number; // 要翻译的段落的最小word数
  blockMinTextCount?: number; // 让译文成为一个block的最小字符数，否则译文为一个inline元素
  blockMinWordCount?: number; // 同上
  isShowUserscriptPagePopup?: boolean; // 是否在移动设备上展示页面内的浮窗
  fingerCountToToggleTranslagePageWhenTouching?: number; // 四指触摸则翻译，可以设置为0，2，3，4，5
}
```


