# next-immersive-translate

Next immersive translator, only for release new version

[Download the latest here](https://github.com/immersive-translate/next-immersive-translate/releases)

> Note: This is still a very early version of the next immersive translate extension, use for caution.


基本配置示例：


```json
{
  "translationService": "tencent"
  "translationUrlPattern": {
    "excludeMatches": ["www.google.com"]
  },
  "translationLanguagePattern": {
    "matches": [
      "en"
    ]
  },
  "translationServices": {
    "tencent": {
        "secretId": "xxx",
        "secretKey": "xxx"
      }
  },
  "debug": false
}
```


其中，`rules` 里的规则字段，可以使用`generalRule`里的全部字段，`rules`的优先级最高，当匹配到特定网站的某一条`rule`时，会合并`generalRule`和该`rule`，通过rule,我们可以对任意网站进行任意自定义配置。


`translationService`, 为默认翻译引擎，当前仅支持：`google`,`tencent`， 其中`tencent`需要在`translationServices.tencent`里配置 `secretId`,`secretKey`， 需要在腾讯云申请，每月免费字符500万。具体申请过程参考[这里](https://hcfy.app/docs/services/qq-api/)


`translationUrlPattern`, 配置 总是翻译的网站，以及永不翻译的网站。其中`matches`配置总是翻译的网站， `excludeMatches`配置永不翻译的网站。配置的值可以是域名或者带有`*`的网址，比如：`www.google.com/mail/*`

`tranlationLanguagePattern`,配置总是翻译的语言，以及永不翻译的语言。其中`matches`配置总是翻译的语言，比如`en`,`excludeMatches`配置永不翻译的语言。

当前的`generalRule`如下：


```json
{
  "selectors": [],
  "additionalSelectors": ["h1"],
  "excludeSelectors": [],
  "additionalExcludeSelectors": [
    ".social-share",
    ".breadcrumbs",
    ".post__footer",
    ".btn",
    ".reference-citations"
  ],
  "excludeIgnoreTags": [],
  "translationClasses": [],
  "ignoreTags": [
    "TITLE",
    "SCRIPT",
    "STYLE",
    "TEXTAREA",
    "SVG",
    "svg",
    "INPUT",
    "BUTTON",
    "LABEL",
    "IMG",
    "SUB",
    "SUP",
    "BR",
    "CODE",
    "KBD",
    "WBR",
    "TT"
  ],
  "stayOriginalTags": ["CODE", "TT"],
  "inlineTags": [
    "A",
    "ABBR",
    "ACRONYM",
    "B",
    "BDO",
    "BIG",
    "NOBR",
    "CITE",
    "DFN",
    "EM",
    "I",
    "LABEL",
    "Q",
    "S",
    "SMALL",
    "SPAN",
    "STRONG",
    "SUB",
    "SUP",
    "U",
    "TT",
    "VAR",
    "IMG",
    "CODE",
    "SCRIPT"
  ]
}
```

`translationTheme`为译文的显示格式:，当前仅支持： `underline`, `none`


当前的默认`rules`如下：

```json
[
  {
    "matches": "*.wikipedia.org",
    "excludeSelectors": [".mw-editsection", ".mw-cite-backlink"]
  },
  {
    "matches": ["twitter.com", "*.twitter.com"],
    "selectors": [
      "[data-testid=\"tweetText\"]",
      ".tweet-text",
      ".js-quoted-tweet-text",
      "[data-testid='card.layoutSmall.detail'] > div:nth-child(2)",
      "[data-testid='developerBuiltCardContainer'] > div:nth-child(2)",
      "[data-testid='card.layoutLarge.detail'] > div:nth-child(2)"
    ]
  },
  {
    "matches": [
      "stackoverflow.com",
      "*.stackexchange.com",
      "superuser.com",
      "askubuntu.com",
      "serverfault.com"
    ],
    "additionalSelectors": [".comment-copy"]
  },

  {
    "matches": "developer.apple.com/documentation/*",
    "selectors": [".container", "h3.title"]
  },

  {
    "matches": "news.ycombinator.com",
    "selectors": [
      ".titleline > a",
      ".comment > .commtext",
      ".toptext",
      "a.hn-item-title",
      ".hn-comment-text",
      ".hn-story-title"
    ],
    "excludeSelectors": [".reply"]
  },

  {
    "matches": "www.reddit.com",
    "selectors": [
      "h1",
      "[data-click-id=body] h3",
      "[data-click-id=background] h3",
      "[data-testid=comment]",
      "[data-adclicklocation=media]"
    ],
    "detectParagraphLanguage": true
  },
  {
    "matches": ["old.reddit.com/*/.compact", "old.reddit.com/.compact"],
    "selectors": [".title > a", ".usertext-body"],
    "detectParagraphLanguage": true
  },
  {
    "matches": "old.reddit.com",
    "selectors": ["p.title > a", "[role=main] .md-container"],
    "detectParagraphLanguage": true
  },
  {
    "matches": "www.reuters.com/",
    "excludeSelectors": ["header"]
  },
  {
    "matches": "github.com",
    "selectors": [".markdown-title", ".markdown-body"],
    "detectParagraphLanguage": true
  },
  {
    "matches": "www.facebook.com",
    "selectors": ["div[dir=auto][style]", "div[dir=auto][class]", "span[lang]"],
    "excludeSelectors": ["[role=button]"],
    "translationClasses": "immersive-translate-text",
    "detectParagraphLanguage": true
  },
  {
    "matches": "www.youtube.com",
    "selectors": ["yt-formatted-string[slot=content]"],
    "detectParagraphLanguage": true
  },
  {
    "matches": "1paragraph.app",
    "selectors": "#book"
  },

  {
    "matches": "*.substack.com",
    "selectors": [
      ".post-preview-title",
      ".post-preview-description",
      ".post",
      ".comment-body"
    ],
    "excludeSelectors": [".captioned-button-wrap", ".subscription-widget-wrap"]
  },
  {
    "matches": ["seekingalpha.com/article/*", "seekingalpha.com/news/*"],
    "selectors": ["[data-test-id=card-container]"],
    "excludeSelectors": [
      "[data-test-id=post-page-meta]",
      "header > div:first-child"
    ]
  },
  {
    "matches": "hn.algolia.com",
    "selectors": [".Story_title > a:first-child", ".Story_comment > span"]
  },
  {
    "matches": "read.readwise.io",
    "selectors": [
      "div[class^=\"_titleRow_\"]",
      "div[class^=\"_description_\"]",
      "#document-text-content"
    ],

    "detectParagraphLanguage": true
  },
  {
    "matches": "www.inoreader.com",
    "selectors": [".article_title_link", ".article_content"],

    "detectParagraphLanguage": true
  },
  {
    "matches": "mail.google.com",
    "selectors": [
      "h2[data-thread-perm-id]",
      "span[data-thread-id]",
      "div[data-message-id] div[class='']"
    ],
    "detectParagraphLanguage": true
  },
  {
    "matches": "www.producthunt.com",
    "selectors": [
      "h2",
      "div[class^='styles_htmlText__']",
      "[class^='styles_tagline']",
      "a[href^='/discussions/'].fontWeight-600",
      "button[class^='styles_textButton'] > div > span"
    ],
    "ignoreTags": [
      "TITLE",
      "SCRIPT",
      "STYLE",
      "TEXTAREA",
      "SVG",
      "svg",
      "INPUT",
      "LABEL",
      "IMG",
      "SUB",
      "SUP",
      "BR",
      "CODE",
      "KBD",
      "WBR",
      "TT"
    ]
  },
  {
    "matches": "*.gitbook.io",
    "additionalSelectors": ["[data-testid='page.contentEditor']"],
    "_comment": "https://midjourney.gitbook.io/docs/user-manual"
  },

  {
    "matches": "arxiv.org",
    "additionalSelectors": [
      "h1",
      "blockquote.abstract"
    ]
  },
  {
    "matches": "discord.com",
    "selectors": [
      "div[id^='message-content-']",
      "h3[data-text-variant='heading-lg/semibold']"
    ],
    "detectParagraphLanguage": true
  },
  {
    "matches": "web.telegram.org/z/*",
    "selectors": [
      ".text-content"
    ],
    "detectParagraphLanguage": true
  },
  {
    "matches": ["web.telegram.org/k/*", "web.telegram.org/k/"],
    "selectors": [
      ".message"
    ],
    "detectParagraphLanguage": true
  },
  {
    "matches": "gist.github.com",
    "selectors": [
      ".markdown-body",
      ".readme"
    ],
    "detectParagraphLanguage": true
  },
  {
    "matches": "lobste.rs",
    "selectors": [".u-repost-of", ".comment_text"]
  },
  {
    "matches": "*.slack.com",
    "selectors": [".p-rich_text_section"],
    "detectParagraphLanguage": true
  },
  {
    "matches": "1paragraph.app",
    "additionalSelectors": ["#book"]
  },
  {
    "matches": "www.google.com/search*",
    "selectors": [
      "h2",
      "a h3",
      "div[data-content-feature='1'] > div",
      "a [aria-level='3']",
      "a [aria-level='3'] + div",
      ".Uroaid"
    ],
    "detectParagraphLanguage": true
  },
  {
    "matches": "lowendtalk.com",
    "selectors": ["[role=heading]", "h1", ".userContent"]
  },
  {
    "matches": "www.linkedin.com/jobs/*",
    "selectors": [
      "#job-details > span"
    ]
  },
  {
    "matches": "www.linkedin.com",
    "addtionalSelectors": ["span.break-words > span > span[dir=ltr]"]
  },
  {
    "matches": "www.indiehackers.com",
    "selectors": [
      ".content",
      "h1",
      ".feed-item__title-link"
    ]
  },
  {
    "matches": "libreddit.de",
    "selectors": [
      "h2.post_title",
      ".comment_body > .md"
    ]
  },
  {
    "matches": ["notion.site", "www.notion.so"],
    "selectors": [
      "div[data-block-id]"
    ]
  },
  {
    "matches": "www.newyorker.com",
    "additionalSelectors": ["h1", "[data-testid=SummaryItemHed]"]
  },
  {
    "matches": "start.me",
    "selectors": [
      ".rss-article__title",
      ".rss-articles-list__article-link",
      ".rss-showcase__title",
      ".rss-showcase__text"
    ]
  }
]
```
