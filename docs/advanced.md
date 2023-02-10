# 高级自定义选项

你可以在扩展配置页面 -> 开发者设置 -> User Config 里编辑更多 UI 里无法编辑的自定义配置。

基本配置示例：

## User Rules

通过 Rules 可以对特定的网站进行自定义的配置，例如哪些内容是否需要被翻译，或调整网页样式等。当前内置的 `rules` 可以在[这里](https://github.com/immersive-translate/next-immersive-translate/blob/main/docs/buildin_config.json) 找到。参数讲解详见最后的 Rules 说明。

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

## User Config

通过 Config 可以自定义此插件的相关配置，如翻译服务、特定语言语言翻译选项等。

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

```json
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
  // url
  matches?: string | string[];                // url匹配规则。设置后，该条rule将仅匹配该url。支持通配符, 如 `*.google.com`, `www.google.com/test/*`, `file:///*`
  excludeMatches?: string | string[];         // url排除规则，不匹配特定的url
  selectorMatches?: string | string[];        // url选择器匹配规则，如数量众多的 mastodon实例就可以用选择器来判断，无需指定所有url
  excludeSelectorMatches?: string | string[]; // url选择器排除规则

  // css selectors
  selectors?: string | string[];              // 该选择器匹配的元素将被翻译
  excludeSelectors?: string | string[];       // 排除元素，不翻译选择器匹配的元素
  excludeTags?: string | string[];            // 排除Tags，不翻译匹配的Tag

  // 保持原样
  stayOriginalSelectors?: string | string[];  // 该选择器匹配的元素将保持原样
  stayOriginalTags?: string | string[];       // 匹配到的Tag 将保持原样，比如 `code`
  // 分段换行
  atomicBlockSelectors?: string | string[];   // 原子选择器, 该选择器匹配的元素将被视为一个整体, 不会进行分段.
  atomicBlockTags?: string | string[];        // 原子Tag选择器,  同上

  // 追加翻译范围，而不是替代
  additionalSelectors?: string | string[];        // 额外的css选择器。除智能判断的区域外，这里匹配的元素也会被翻译
  additionalExcludeSelectors?: string | string[]; // 额外排除元素
  additionalExcludeTags?: string | string[];      // 额外排除Tags

  // Block / Inline ?
  inlineTags?: string | string[];              // 匹配的 Tag 将作为 inline 元素
  extraBlockSelectors?: string | string[];     // 额外的选择器，该选择器匹配的元素将作为 block 元素
  extraInlineSelectors?: string | string[];    // 额外的选择器，该选择器匹配的元素将作为 inline 元素

  // 长段落换行
  containerMinTextCount?: number;     // 智能识别时，元素内最少包含的字符数，才会被视为要翻译的区域，默认为18
  lineBreakMaxTextCount?: number;     // 翻译长段落时，强制进行分行的段落最大字符数。

  blockMinTextCount?: number;         // 将译文作为 block 的最小字符数，否则译文为 inline 元素.
  blockMinWordCount?: number;         // 同上

  // 全局样式
  globalStyles?: Record<string, string>;                     // 修改页面样式，如果译文导致页面排版错乱，这个很有用。`
  globalAttributes?: Record<string, Record<string, string>>; // 修改页面元素的属性

  // 译文样式
  translationClasses?: string | string | string[];           // 为译文添加额外的 Class
  wrapperPrefix?: string;   // 译文区域的前缀，默认为 smart， 根据字数确定是否添加空行
  wrapperSuffix?: string;   // 译文区域的后缀

  // 翻译触发条件
  paragraphMinTextCount?: number; // 要翻译的段落的最小字符数, 大于数字的内容将被翻译
  paragraphMinWordCount?: number; // 要翻译的段落的最小单词数
  urlChangeDelay?: number;        // 进入页面后，延迟多少毫秒开始翻译。为了等网页的初始化，目前默认为250ms
  observeUrlChange?: boolean;     // 检测链接地址变动，地址发生变化时，再次触发翻译。默认为true。部分网站不检测体验更好，比如 inoreader

  // 移动端
  isShowUserscriptPagePopup?: boolean;                    // 在移动设备上展示页面内的浮窗, 默认为true.
  fingerCountToToggleTranslagePageWhenTouching?: number;  // 四指触摸则翻译，可以设置为 0，2，3，4，5

  // 其他
  preWhitespaceDetectedTags?: string | string[]; // 检测是否是 preWhiteSpace 的tag
}
```

**实例讲解**

Block 和 inline 的区别，如果想了解更多可以看[这里](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements#inline)

    block 元素会独占一行，多个相邻的 block 元素会各自新起一行.
    inline 元素不会独占一行，多个相邻的 inline 元素会排列在同一行里,直到一行排列不下才会新换一行。


修改全局样式，如果译文会导致页面错位，可以用它修复。比如 youtube 的标题，用来移除原网页的一些最大高度。

```json
"globalStyles": {
    ".title":"max-height: unset;"
}
```
