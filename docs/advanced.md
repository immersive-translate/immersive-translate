# 高级自定义选项

你可以在扩展配置页面 -> 开发者设置 -> User Config 里编辑更多 UI 里无法编辑的自定义配置，适用于高级用户，参数讲解详见最后的说明。当前内置的 `config` 可以在[这里](https://github.com/immersive-translate/next-immersive-translate/blob/main/docs/buildin_config.json)找到。

## User Rules

通过 `Rules` 可以对特定的网站进行自定义配置，决定哪些内容是否需要被翻译，或调整网页样式等。

```json
[
  {
    "matches": "www.google.com",
    "selectors": [".title"]
  },
  {
    "matches": "*.twitter.com",
    "selectors": [".text"],
    "excludeSelectors": ["nav", "footer"]
  }
]
```

使用 `matches` 来匹配对应的网站。允许通配符，如 `*.google.com`,`www.google.com/test/*`,`file://*`

使用 `selectors` 会覆盖智能翻译范围，仅翻译该选择器匹配到的元素。

使用 `excludeSelectors` 可以排除元素，不翻译该位置。

使用 `additional` 系列的选择器，在智能翻译的基础上增加或减少翻译范围

```json
[
  {
    "matches": "www.google.com",
    "additionalSelectors": [],
    "additionalExcludeSelectors": []
  }
]
```

如果希望翻译某个区域时，将元素视为一个整体，不将其分行，可以用 `atomicBlockSelectors` 选择器。比如 Instagram 的个人简介。要注意的是，使用 `atomicBlockSelectors` 前需要先用 `selectors` 进行选择。

```json
{
  "matches": "https://www.instagram.com/*",
  "selectors": [
    "div._aa_c h1",
    "li._acaz div[role=\"menuitem\"]"
  ]
  "atomicBlockSelectors": [
    "div._aa_c h1",
    "li._acaz div[role=\"menuitem\"]"
  ]
}
```

如果译文导致页面错位，文字重叠等边缘情况，可以使用 `globalStyles` 调整网页样式来修复。比如 youtube 的标题，用来移除原网页的最大高度。

```json
{
  "matches": "www.google.com",
  "globalStyles": { ".title": "max-height:unset;" }
}
```

## Injected CSS

通过 Injected CSS 可以向全局注入自定义网页样式。可以搭配 `Rules` 的 `translationClasses` 一起使用。

```
".immersive-translate-target-wrapper img { width: 16px; height: 16px }"
```

也可以像常规的网页样式管理器那样，对网站进行更加个性化的样式设计。（甚至利用 `display:none` 去广告）

```css
.title {
  color: red;
}
```

## User Config

通过 Config 可以自定义此插件的相关配置，如翻译服务、特定语言语言翻译选项等。

```json
{
  "translationService": "tencent",
  "translationServices": {
    "tencent": {
      "secretId": "xxx",
      "secretKey": "xxx",
      "matches": ["*.twitter.com"]
    }
  },
  "translationUrlPattern": {
    "excludeMatches": ["www.google.com"]
  },
  "translationLanguagePattern": {
    "matches": ["en"]
  },
  "translationTheme": "none",
  "translationThemePatterns": {
    "underline": {
      "matches": ["discord.com"]
    }
  },
  "generalRule": {
    "_comment": "",
    "normalizeBody": "",
    "injectedCss": [],
    "additionalInjectedCss": [],
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

其中，`rules` 里的规则字段，可以使用 `generalRule` 里的全部字段。`rules` 拥有最高优先级，当匹配到特定网站的某一条 `rule` 时，会合并 `generalRule` 和该 `rule` 的规则。

介绍一些 Config 常见的字段。

### 翻译服务配置

使用 `translationService` 选择默认的翻译引擎，当前支持：

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

使用 `translationServices` 配置各家翻译服务的 `apikey`，不同服务商需要的参数不一样，它们的 API 密钥均可在各自官网的开发者中心申请。

如腾讯翻译君，需要配置 `secretId`, `secretKey`。你可以前往腾讯云申请 API 密钥，每月免费字符 500 万。具体申请过程参考[这里](https://immersive-translate.owenyoung.com/services/tencent)

```json
"translationServices": {
  "tencent": {
    "secretId": "xxx",
    "secretKey": "xxx",
    "matches":["*.twitter.com"],
    "limit": 3,
    "apiUrl":"",
    "maxTextGroupLengthPerRequest": 25,
    "maxTextLengthPerRequest": 1800
  }
}
```

`matches` 字段, 为特定网站使用该翻译服务。

`limit`字段，指定该翻译服务的每秒最多请求数（有些服务会限制每秒最大请求数）。

`maxTextGroupLengthPerRequest` 字段，每次请求最大的段落数

`maxTextLengthPerRequest` 字段，每次请求最大的字符数

`apiUrl` 可以自定义翻译接口的地址。

### 总是翻译特定网站

`translationUrlPattern` 配置总是翻译的网站，以及永不翻译的网站。

- `matches` 配置总是翻译的网站，
- `excludeMatches` 配置永不翻译的网站。

配置值可以是域名或带有 `*` 的网址，比如：`www.google.com/mail/*`

```json
"translationUrlPattern": {
    "matches": ["stackoverflow.com"]
    "excludeMatches": ["www.google.com/mail/*"]
}
```

### 总是翻译特定语言

translationLanguagePattern, 配置总是翻译的语言，以及永不翻译的语言。

- `matches` 配置总是翻译的语言，比如 `en`,
- `excludeMatches` 配置永不翻译的语言。

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
  // 匹配网站
  matches?: string | string[]; // 该条Rule将仅匹配此处的网站。
  excludeMatches?: string | string[]; // 排除特定的网站。
  selectorMatches?: string | string[]; // 用选择器来匹配，而无需指定所有url
  excludeSelectorMatches?: string | string[]; // 排除规则，同上。

  // 指定翻译范围
  selectors?: string | string[]; // 仅翻译匹配到的元素
  excludeSelectors?: string | string[]; // 排除元素，不翻译匹配的元素
  excludeTags?: string | string[]; // 排除Tags，不翻译匹配的Tag

  // 追加翻译范围，而不是覆盖
  additionalSelectors?: string | string[]; // 追加翻译范围。在智能翻译的区域，追加翻译位置。
  additionalExcludeSelectors?: string | string[]; // 追加排除元素，让智能翻译不翻译特定位置。
  additionalExcludeTags?: string | string[]; // 追加排除Tags

  // 保持原样
  stayOriginalSelectors?: string | string[]; // 匹配的元素将保持原样。常用于论坛网站的标签。
  stayOriginalTags?: string | string[]; // 匹配到的Tag将保持原样，比如 `code`

  // 区域翻译
  atomicBlockSelectors?: string | string[]; // 区域选择器, 匹配的元素将被视为一个整体, 不会分段翻译
  atomicBlockTags?: string | string[]; // 区域Tag选择器,  同上

  // Block or Inline
  extraBlockSelectors?: string | string[]; // 额外的选择器，匹配的元素将作为 block 元素，独占一行。
  extraInlineSelectors?: string | string[]; // 额外的选择器，匹配的元素将作为 inline 元素。

  inlineTags?: string | string[]; // 匹配的 Tag 将作为 inline 元素
  preWhitespaceDetectedTags?: string | string[]; // 匹配的 Tag 将自动换行

  // 译文样式
  translationClasses?: string | string | string[]; // 为译文添加额外的 Class

  // 全局样式
  globalStyles?: Record<string, string>; // 修改页面样式，若译文导致页面错乱，这个很有用。`
  globalAttributes?: Record<string, Record<string, string>>; // 修改页面元素的属性

  // 嵌入样式
  injectedCss?: string | string[]; // 嵌入CSS样式
  additionalInjectedCss?: string | string[]; // 追加CSS样式，而不是直接覆盖。

  // 上下文
  wrapperPrefix?: string; // 译文区域的前缀，默认为 smart，根据字数决定是否换行。
  wrapperSuffix?: string; // 译文区域的后缀

  // 译文换行字数
  blockMinTextCount?: number; // 将译文作为 block 的最小字符数，否则译文为 inline 元素。
  blockMinWordCount?: number; // 同上。如果希望它们始终换行, 可以都填0.

  // 内容可翻译的最小字数
  containerMinTextCount?: number; // 智能识别时，元素最少包含的字符数，才会被翻译，默认为18
  paragraphMinTextCount?: number; // 原文段落的最小字符数, 大于数字的内容将被翻译
  paragraphMinWordCount?: number; // 原文段落的最小单词数

  // 长段落强制换行字数
  lineBreakMaxTextCount?: number; // 开启翻译长段落时，强制进行分行的段落最大字符数。

  // 启动翻译的时机
  urlChangeDelay?: number; // 进入页面后，延迟多少毫秒开始翻译。为了等网页的初始化，目前默认为250ms
  observeUrlChange?: boolean; // 检测url地址发生变化时，再次启动翻译，默认为true。

  // 移动端
  isShowUserscriptPagePopup?: boolean; // 在移动设备上展示页面内的浮窗, 默认为true.
  fingerCountToToggleTranslagePageWhenTouching?: number; // 四指触摸则翻译，可以设置为 0，2，3，4，5
}
```

**更多讲解**

Block 和 inline 的区别，如果想了解更多可以看[这里](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#inline)

- block 元素会独占一行，多个相邻的 block 元素会各自新起一行.
- inline 元素不会独占一行，多个相邻的 inline 元素会排列在同一行里,直到一行排列不下才会新换一行。
