# Change Log

## 0.5.16

- 修复： openai 翻译繁体中文问题

## 0.5.15

- 优化： 最短触发翻译的段落字数修改为最小 4 个字符，以减少困惑，同时利用其他特征避免翻译网站的导航和尾部区域。
- 修复： Github details 展开之后无法翻译的问题。

## 0.5.14

- 修复： 部分网页的图片复制后变大的问题
- 修复： medium 评论区不翻译的问题
- 修复： 部分网页的图片被错误的复制问题

## 0.5.12

- 特性： 分割线译文样式增加单行译文的垂直分割线
- 修复： 极少数情况下段落分割的问题。
- 为 iOS 新用户提供了一个很好的初次设置引导页面。

## 0.5.11

- 字幕翻译支持导出仅译文
- 修复： 鼠标悬停部分元素不识别
- 修复：推特部分换行不识别问题
- 修复：电子书制作样式不生效问题

## 0.5.10

- 修复： 推特换行无法识别的问题
- 修复： Reddit 详情页返回部分段落无法翻译的问题
- 修复： 部分 Code 标签未正确识别的问题

## 0.5.9

- 修复： 部分情况下段落分段问题
- 修复： 油猴脚本切换仅显示译文
- 修复： 电子书在线阅读的样式不生效问题

## 0.5.8

- 修复： 临时设置网站翻译时长不生效问题。

## 0.5.7

- 超多更新！
- 仅显示译文功能来了！ 点击【更多】->【切换为仅显示译文】
  - 支持自定义快捷键，在界面设置-> 快捷键设置中设置
- 优化 OpenAI 请求频率限制问题
- ChatGPT 默认改为 mobile 模型，更快！
- 网页核心解析重构，这意味着：
  - 大型网页秒翻译
    - 比如： <https://pve.proxmox.com/pve-docs/pve-admin-guide.html>, 之前需要 30 秒，现在秒翻
  - 复杂网页占用内存超低
    - 比如： <https://www.wsj.com/articles/global-stocks-markets-dow-news-05-05-2023-cb142c76?mod=hp_lead_pos1>
  - 对更多网站的适配
- 支持了所有 ShadowRoot 的网站翻译
  - 比如： <https://bugs.chromium.org/p/chromium/issues/detail?id=418987>
  - 比如： <https://news.yahoo.com/gma/virginia-mom-facing-charges-6-190600893.html> 的评论区
- 修复之前 Next.js 等具有水合作用的网站翻译后白屏的问题
  - 比如： <https://webpack.js.org/>
- 修复了修改鼠标悬停的快捷键需要刷新页面才生效的问题
- 修复了 TXT 文件 换行识别的问题。

- Lots of updates!
- The 'Show Translation Only' feature has arrived! Click on 'More' -> 'Switch to Show Translations Only'.
  - Supports custom shortcuts, which can be set in 'Interface Settings' -> 'Shortcut Settings'
- Optimized for OpenAI request rate limit issue
- Web core parsing has been rebuilt, which means:
  - Instant translation for large websites
  - Minimal memory usage for complex web pages
  - Better compatibility with more websites
- Now supports translations for all websites with ShadowRoot
- Fixed the white screen issue after translating websites with hydration, such as Next.js
- Fixed the issue where changing the mouse hover shortcut required a page refresh to take effect
- Fixed the issue with recognizing line breaks in TXT files.

## 0.5.6

- Fix: macOS new tab popup issue.
- Feat: New guide page for new user.

## 0.5.5

- Fix: Mouse over area issue.

## 0.5.4

- Fix: Spa Page duplicate

## 0.5.3

- Fix: Mouse hover hotkey listener.
- Fix: PDF document translate
- Feat: Add new client guide page

## 0.5.2

- Fix: userscript mouse hover shortcuts settings

## 0.5.1

- Fix: OpenAI API not works.

## 0.5.0

- Feat: Translate the current paragraph when mouse hover.
- Feat: Refactor PDF translation, now you can translate most PDFs with Immersive Translation
- Fix: Disable Context Menu not working [#428](https://github.com/immersive-translate/immersive-translate/issues/428)
- Fix: Avoid Content Security Policy for [Mastondon](https://mastodon.social/)

## 0.4.11

- Fix: userscript permission (only for userscript).

## 0.4.8

- Feat: Bing Translate to Microsoft Translate for more stable quality.
- Fix: Pure TXT web page like [this](https://edoras.sdsu.edu/~vinge/misc/singularity.html)
- Performance: Exclude some child advertising pages in the website, and the performance has improved a little

## 0.4.7

- Fix: Firefox Userscript popup missing.

## 0.4.6

- Feat: Allow third party send document event to call `toggleTranslatePage`
- Feat: iOS app add enable extension button and communities link
- UI: OpenAI settings field model use select instead of text input box.

## 0.4.5

- Fix: iOS 15.0 safari extension issue.
- Fix: macOS safari extension shortcuts
- Fix: content security policy popup for extension, and partly for userscript.

## 0.4.4

- Chore: Remove console.log

## 0.4.3

- Fix: sup, sub tag whitespace detection.
- Feat: support ChatGPT Plus Website as Translation Service, This is a beta feature, so you can access it by enabling Beta Feature on developer settings. This is very slow, cause chatgpt can only send one request at once. Make sure you have ChatGPT Plus Account, cause there are more limit on Free Account, and I'm not sure if this bring risk for your account, be careful to use it.

## 0.4.1

- Fix: firefox context menu dispeared after restart.
- Support Azure openai

## 0.4.0

- Feat: Support Translate Local Subtitle File (.srt,.ass,etc.)

## 0.3.17

- Feat: Support translate local .txt file.
- Fix: Context Menu may not avaliable sometimes. [#273](https://github.com/immersive-translate/immersive-translate/issues/273)

## 0.3.16

- Fix: keep &nbsp; as whitespace.
- Remove: Take down Papago, as [the service is down](https://github.com/immersive-translate/immersive-translate/issues/310)

## 0.3.15

- UI: allow no API key for openai
- UI: allow Open AI reset to the default settings

## 0.3.14

- Dependence: Upgrade pdf.js to the latest version
- Fix: pdf selection background color
- Fix: whitespace detect

## 0.3.13

- Fix: ebook builder specific character issue, like some chapter path is `xxx' xxxx`
- UI: fold openai custom options by default.
- UI: Add exporting status for epub export.
- Fix: Gpt4 default prompt

## 0.3.12

- Feat: We can custom Marker translation theme background color now.
- Fix: postMessage when init page broke somesites, now we will do this only when we really translate pages
- Fix: ebook progress issue.
- Fix: better for split long paragraph, 1.5 billion, 25.5%, Mr. will not be considered as a boundary

## 0.3.11

- Fix: ebook reader dark mode text color
- Fix: openAI prompt

## 0.3.10

- Better: detect Japanese/Korean container.
- Fix: Ebook Builder Progress 99% stopped.

## 0.3.9

- Fix: Options UI switch translation services input state not changed.

## 0.3.8

- UI: loading color more transparent
- Fix: Detect Ebook Language.
- Feat: Add translate progress for ebook builder, and a beautiful confetti after success.
- Feat: Add retry all failed paragraphs for retry button.
- Fix: Deepl Error handle

## 0.3.7

- Fix: ebook reader can not load images on Chrome.

## 0.3.6

- UI: better for make ebook page UI

## 0.3.5

- Fix: userscript ebook export
- Feat: add custom API endpoint for OpenAI
- Feat: add temp translate website time options on `Advanced Settings`

## 0.3.4

- CI: Build failed

## 0.3.3

- Fix: ebook maker for Kindle
- Change: Loading icon color, from black to blue, for adapt the dark mode web page.
- Feat: Support local html translate for extension

## 0.3.2

- Fix: Options Form Input cursor moving.
- Feat: OpenAI support custom apiUrl for develope settings.

## 0.3.1

- Feat: update dark icon to transparency.
- Fix: Wrong order for long paragraph

## 0.3.0

- Version: From now on, we will change the minor version number once a month, for example, now in March, the version will start from 0.3.0, in April, the version number will start from 0.4.0, next April, the version number will be 1.4.0, and so on. This is because it does not make sense for extensions to follow semantics, but standardizing version numbers according to the laws of time is motivation for development to keep updating, and for users to find problems more easily.
- Feat: Support dark icon for firefox

## 0.2.86

- Add max text length option for per request with Open AI
- Fix: ebook identifier duplicated
- Feat: Support txt web page translation

## 0.2.85

- Fix: some epub file can not be found.

## 0.2.84

- Feat: Support Ebook Reader and Maker

## 0.2.83

- Feat: Allow password input Form show password.

## 0.2.82

- Fix: Some site use `span` for styles, so we use `font` instead of span for translation target wrapper
- Fix: OpenAI max tokens limit, change max chars from 1500 to 1300.

## 0.2.81

- Fix: m.youtube.com
- Fix: options form UI
- Fix: Open AI prompt
- Feat: Support OpenAI multiple keys, use `,` split them.

## 0.2.80

- Feat: Add Enable/Disable Menu for popup -> more
- Fix: DingTalk Message conflict

## 0.2.79

- Fix: Open AI for space paragraph

## 0.2.78

- Feat: support OpenAI CHATGPT 3.5 (支持 OpenAI ChatGPT 3.5 接口)
- Feat: Add new theme Solid Border (新增新主题，实线边框)

## 0.2.77

- Fix: multiple code tag error.[#178](https://github.com/immersive-translate/immersive-translate/issues/178)

## 0.2.76

- Fix: multiple code tag error [#178](https://github.com/immersive-translate/immersive-translate/issues/178)

## 0.2.75

- Feat: Support custom immediate translation text count for different translation service.

## 0.2.74

- Feat: Support Tencent (alpha)
- Fix: openai translation
- Fix: unknown tags inline check

## 0.2.73

- Feat: Support Grey Translation Theme
- Fix: Github Trending Page

## 0.2.72

- Fix: firefox mobile verify translation service net issue.

## 0.2.71

- Fix: Open AI userscript permission

## 0.2.70

- Fix: Open AI placeholder

## 0.2.69

- Feat: Support Open AI as translation service.
- Feat: Support verify translation service on options.html
- Feat: Support custom main frame cuase some site is not using body as the main frame

## 0.2.68

- Support Caiyun (Alpha)
- Fix unknow block tags

## 0.2.67

- Feat: Add `<all>` for always translate languages, so now you can use it to translate all language except the target language, and never translate languages
- Fix: Allow config custom google API
- Better: Deepl Free support
- Fix: hight memory use for userscripts and extension (by removing opencc zh-CN to zh-TW, instead with Google translate)
- Fix: Relingo [#159](https://github.com/immersive-translate/immersive-translate/issues/159)
- Fix: Azure translate setup but still show (need setup)

## 0.2.66

- Fix: PDF file translation failed, Bug from 0.2.60 for supporting deepl from zh-CN to zh-TW

## 0.2.65

- Support throttle request for multiple frame
- Do not translate page title when in iframe

## 0.2.64

- Fix: openl choose translation services
- Feat: Support is translate title option

## 0.2.63

- Feat: Support Azure Translate Service
- Feat: Support Papago Translate Service
- Fix: native firefox android google drive sync.
- Fix: change transparency from 0.4 to 0.618 [#147](https://github.com/immersive-translate/immersive-translate/pull/147)
- Fix: popup shortcuts tips
- Performance: serial to cocurrency requests
- Better for detect Japanese count

## 0.2.62

- Feat: Add waitForSelectors rule, for fixing some sites like reddit

## 0.2.61

- Fix: userscript is too big for greasy fork
- Better: reduce file size

## 0.2.60

- Feat: Support zh-CN to zh-TW for Deepl
- Feat: Immersive Translate Deepl Feature
- Feat: Support custom font size zoom
- Fix: Steam forum style
- Fix: global style not changed after dynamic elements generated
- Fix: promote exclude priority
- UI: about page change
- Fix: some math element stayoriginal

## 0.2.59

- Fix: Unkowntags Block Element
- Fix: translate=no element overide
- Fix: url match with multiple \*

## 0.2.58

- Feat: Support custom translation text color, border color.

## 0.2.57

- No changes, rebuild

## 0.2.56

- Fix duplicate translate for inline elements with code element.
- Fix unknown tags inline/block check
- Feat: support injected css on developer board
- Feat: trim authKey, appid appSecret
- Better: open settings page on new tab (but not for Stay)

## 0.2.55

- Try fix deepl api charset

## 0.2.54

- Remove tabs permission for chrome store rejection
- Fix translate the whole page, footer is ignored
- Add notes to about page
- Support custom url from buildin Config

## 0.2.53

- Fix userscript google drive sync error.

## 0.2.52

### Code

- Use the latest esbuild
- Use the latest deno version
- CI: submit source code to firefox

## 0.2.51

- Fix Google Auth Need Login on Chrome/Firefox
- Replace translation service links
- Better for permission.
- remove minify.

## 0.2.50

- Fix google drive upload issue (really) [#81](https://github.com/immersive-translate/immersive-translate/issues/81)

## 0.2.49

- Remove shortcuts alt+d, alt+s cause may conflict with native shortcuts.
- Fix google drive upload issue [#81](https://github.com/immersive-translate/immersive-translate/issues/81)

## 0.2.48

- Better for speed, by add minLength to 50 for language detecting.
- Fix Google Drive token validate.

## 0.2.47

- Fix deepl api

## 0.2.46

- fix block mark

## 0.2.45

- Fix element innerText is undefined
- Fix caiyun translation undefined source language

## 0.2.44

- Fix userscript toggle mask
- Fix toggle mask logic

## 0.2.43

- Fix userscript toggle mask with touch event.
- Fix speed (by remove sleep(300))

## 0.2.42

- Fix mask hover when toggle mask again.
- Add mask shortcuts for mobile
- Fix userscript cloud sync issue
- Move advanced option page to left menu.
- Add retry logic to translation service

## 0.2.41

- Fix userscript niu translation
- Fix xhtml translate

## 0.2.40

- Fix beta feature show
- Fix popup setting page on new tab page
- Fix translation placeholder replace

## 0.2.39

- Support shortcuts for show mask translation
- Support enable beta feature at develper panel
- Fix shortcuts in mobile extension

## 0.2.38

- Support loading theme
- Fix getpocket.com
- Fix aside footer for body area
- Fix import/export icon

## 0.2.37

- Fix frame exclude mark

## 0.2.36

- Support sync to Google Drive

## 0.2.35

- Fix japanese rb, rt tag ignore.
- Better for popup ui more
- Better for bad userscript tips
- Add contribution to about page
- Fix volc translate for auto detect language

## 0.2.34

- Fix multiple language speed

## 0.2.33

- Support vertical writing mode, like Japanese.
- Add 3 themes
- Add Niu translation service

## 0.2.32

- Fix PDF basic translation
- Fix popup select a not configed service, go to options page.
- Fix stay open settings.
- Fix multiple language detect speed

## 0.2.31

- Fix dynamic iframe css inject

## 0.2.30

- Support userscript inline iframe translation.
- Support shadowroot translation. For example:
  <https://www.foxnews.com/politics/minnesota-senate-passes-abortion-bill-opponents-call-most-extreme-nation>
  Conversation area.
- also check sync rule on popup

## 0.2.29

- Fix Facebook translation
- Support show context menu option.

## 0.2.28

- Remove not standard match for userscript

## 0.2.27

- Support inline iframe translation. (Only for extension, not avaliable for
  userscript)
- Fix multiple language translation

## 0.2.26

- Fix firefox android addon
- Add advanced settings for translation newline

## 0.2.25

- Support iframe translate, like QQ mail, emebed tweet.

## 0.2.24

- Add temp translate site for a while
- Fix stay.app userscript browser API
- Fix stay.app options page

## 0.2.23

- Fix multiple language page translation

## 0.2.22

- Fix userscript build

## 0.2.21

- Fix firefox online pdf translate

## 0.2.20

- Fix macaque request issue
- Fix mark highlihgt line heigh

## 0.2.19

- Fix tencent smart japanese
- Fix haikuo world browser

## 0.2.18

- Fix client url change, auto remain the translate state.
- Remove aside container as the translate container.
- Refactor popup position.

## 0.2.17

- Change highlight to mark
- Add hightlight translation theme

## 0.2.16

- Macaque compatibility

## 0.2.15

- Fix touch bounce issue

## 0.2.14

- Fix safari globalThis.GM not working

## 0.2.13

- Support Userscript Popup Draging
- Support There Fingers on Touch device to trigger toogle translate pages
- Support Hiding the userscript popup icon.

## 0.2.12

- Better for inoreader

## 0.2.11

- Fix
  [#28](https://github.com/immersive-translate/immersive-translate/issues/28)
  Annas archive 页面主要内容无法被翻译

## 0.2.10

- Fix pdf lineheight distance

## 0.2.9

- Fix exclude elements mark
- Fix deno type check
- remove importmap
- Fix context menus translation
- restore page when never translate this site enabled
- Add description for add url

## 0.2.8

- Detect the user agent language for interface language
- Fix line break bug.

## 0.2.7

- Fix grease monkey request

## 0.2.6

- Fix
  [#30](https://github.com/immersive-translate/immersive-translate/issues/30),
  file url match issue

## 0.2.5

- bump version for ci test

## 0.2.4

- catch message connection error for popup.

## 0.2.3

- Fix
  [#26](https://github.com/immersive-translate/immersive-translate/issues/26)
  create context multiple times

## 0.2.2

- Fix PDF sample file
- Fix Firefox pdf local file
- Fix pdf shortcuts

## 0.2.1

- Support Grease Monkey Shortcuts manager.
- Fix match regex
- Fix youtube comments.
- Fix reddit mobile compact version
- Fix fulltext translate issue

## 0.2.0

- Fix PDF two column.
- Fix Chrome/Edge Store version bug.
- Fix
  [#21](https://github.com/immersive-translate/immersive-translate/issues/21)

## 0.1.2

- Publish to Firefox addon
- Publish to Edge
- fix pdf margin.
- Change sample pdf file

## 0.0.62

- Fix pdf format, indent.
- Fix telegra.ph prevent element change

## 0.0.61

- Fix span element close.
- Fix permission for early browser

## 0.0.60

- Fix Chrome PDF

## 0.0.59

- Initial Support for PDF

## 0.0.58

- Edit translation theme description

## 0.0.57

- Change popup ui, for more easy use

## 0.0.56

- Fix chrome timeout
- Fix split sentence error.

## 0.0.55

- Fix display none element show.
- refactor element mark

## 0.0.54

- Support line break for X characters.

## 0.0.53

- use sendMessage insteadof connect, cause chrome will disconnect the port after
  5 minites
- better for detect text containers

## 0.0.52

- Do not translate the paragraph that only has placeholders elements, for
  [example](https://github.com/nank1ro/solidart), the first line.
- Better for detect child elements.

## 0.0.51

- Fix cache issue
  [#12](https://github.com/immersive-translate/next-immersive-translate/issues/12),
  [#7](https://github.com/immersive-translate/next-immersive-translate/issues/7)
- Fix options UI font size

## 0.0.50

- Fix block img be translated.

## 0.0.49

- Fix firefox extension

## 0.0.48

- Fix chrome extension

## 0.0.47

- rewriting message with background, use connect instead of sendMessage
- add reddit mobile support
- fix pre white space for some article

## 0.0.46

- Format userscript meta info

## 0.0.45

- userscript use one file.
- add timeout for cache request

## 0.0.44

- Fix split tencent error.
- Fix inline sup element error.
- Better for twitter

## 0.0.43

- Fix tweet br
- Fix global translate.

## 0.0.42

- Fix BR tag
- treat block tags to rules

## 0.0.41

- Fix inline element check
- Add developer debug log option

## 0.0.39

- Fix translation service contains mock2

## 0.0.38

- Support Cache result for userscript
- Add Options UI
- Support detect more content containers

## 0.0.37

- Fix change popup translation service not work
- Fix reddit mobile post content translate.

## 0.0.36

- Fix Wikipedia special character
  [#6](https://github.com/immersive-translate/next-immersive-translate/issues/6)
- Fix userscript icon size.
- enable all sites to detect paragraph language.

## 0.0.35

- Fix youtube go to next page
- Support Youtube search page.
- Fix options advanced switch.
- Fix img tag , hiddent tag
  [#5](https://github.com/immersive-translate/next-immersive-translate/issues/5)
- Fix Google Search Force refresh
  [#4](https://github.com/immersive-translate/next-immersive-translate/issues/4)
- Support Table result of Google
  [#3](https://github.com/immersive-translate/next-immersive-translate/issues/3)
- Fix Wikipedia blank
  [#2](https://github.com/immersive-translate/next-immersive-translate/issues/2)

## 0.0.34

### Break Changes

- The Default Hot Key to toggle translate has been changed to `alt+A`, cause
  it's the most convinient key to type.

### Others

- Support set immediate translation mode, so you can let the web page translate
  as quick as possible.
- Support set page area that need to translate. so you can translate more area.
- Support set the first x text count to translate immediately.
- Fix translate duplicately when change translate
- Better popup UI

## 0.0.33

- Support more languages, zh-TW, en

## 0.0.32

- Fix translate local file after saved. Fixed
  [#1](https://github.com/immersive-translate/next-immersive-translate/issues/1)
- Add dist js file to public repo

## 0.0.31

- Support Translate the Whole Page
- Support Translate page immediatlly
- More Config UI
- Reflect the theme
- Add new icon
- Add new translation theme dashedBorder

## 0.0.30

- Better for dashed theme

## 0.0.29

- Fix paragraph valid.
- Add dotted, thinDashed theme
- Better for dashed, highlight theme

## 0.0.28

- Fix underline
- Add dashed, paper theme
- Fix header detected

## 0.0.27

- Support translationTheme

## 0.0.26

- Fix volc alpha userscript connect permission.
- Fix version clickable.

## 0.0.25

- Support selectorMatches, so we can match all manstondon now.
- Fix Firefox userscript error.

## 0.0.23

- Better for Chinese detect
- Fix reddit innerText issue

## 0.0.22

- Support deeplx
- Fix multiple translation when switch service

## 0.0.21

- Fix some span tag is block element

## 0.0.20

- Support not translate hash tag like #hash , at tag like @xxx, $tag, like $APPL
- Support block element

## 0.0.18

- Support deepl, bing,baidu,youdao, volc, openl, caiyun.

## 0.0.13

- Support userscript

## 0.0.4.8

- Fix code order.
- Support basic popup ui

## 0.0.4.6

- Support check new version

## 0.0.3

- Support local files

## 0.0.2

- Support Dynamic Elements
- Support visible translate
