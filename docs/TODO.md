# Todos

- [添加你的建议](https://github.com/immersive-translate/immersive-translate/issues)
- [点击查看](https://github.com/orgs/immersive-translate/projects/1) 当前正在处理的需求

## Todo List

### 文档

- [ ] 通过快捷键使用不同的翻译服务 <https://github.com/immersive-translate/immersive-translate/discussions/554#discussioncomment-6083130>
- [ ] 优化 openai prompt
- [ ] edge/chrome/userscript, 打标
- [ ] 统计
- [ ] zetero 软件整合
- [ ] buildin 检测线上的版本，只有大于等于本地才更新。
- [x] 使用教程的。换个框架。 react 文档。教程。我来搞。
- [ ] youtube 视频 -> 官方
- [x] ios 页面多步骤展示（拦截 100）,
- [ ] 重构 bugs 修复
- [ ] deepl 收费，产品里面。
- [ ] 导航
- [ ] 规则流程搭建
- [ ] 优化一下数据
- - 首次安装 -> 教育
  - 帮助入口
  - 评价入口
- [ ] 添加快捷键支持
- [ ] 压缩
- [ ] 油猴 ci

- [ ] 新官网产品/设计
- [ ] 更新说明
- [ ] 博客，更新说明。
- [ ] 域名的迁移

- landing 页面
- 官网的设计
- 用户评论
- 官网

- [ ] 公告机制，使用教程，通知形式
- [ ] 一键上报网页适配问题
- [ ] 易用性
- [ ] 官网迁移阿里云
- [ ] openai 接口
- [ ] 刚才一个用户问我。。能不能从粤语到国语， 国语到文言文

- [ ] deepl 收费
- [ ] PDF 优化
- [ ] pdf 导出

- [x] 调整 openai max token 为 \*4
- [ ] split sentence 优化，不翻译特定句子
- [x] contentscript , 定时任务只在 main frame 执行
- [x] ios 安装后跳转到 ios 的安装教程页面
- [x] epub 翻译多行 bug
- [ ] 版本更新检测的逻辑，各商店按照各自的来检测，避免用户焦虑。
- [ ] 在线版本检测应该依赖运行时，而不是打包时

站点/浏览器适配

- [ ] fix alook
- [x] yandex 搜索页面适配
- [ ] https://www.lookintobitcoin.com/charts/bitcoin-investor-tool/ 切换翻译服务后，左侧有一些菜单不再翻译
- [ ] reddit：observe url change 对于动态网页，前一个网页没有监测的情况下，无法判断后一个网页。
- [ ] reddit：click 展开后，无法检测到新内容: https://www.reddit.com/r/tifu/comments/12dzq1j/tifu_by_peeing_on_my_doctors_face/ 需要关闭 nfsw 自动展开

性能优化

- [ ] openai，翻译电子书，当用户刷新网页后，已有的请求还是会继续
- [x] 调查 ios15 的优化。
- [ ] 测试油猴本地文件，indexdb 缓存问题
- [ ] 测试立即翻译到网页底部的并行请求问题
- [ ] 合并重复的翻译请求，减少请求数量
- [ ] 换行识别更智能一点，比如 U.S. 1. 这个需要识别为非段落
- [ ] 动态修改频率限制参数，防止参数设置不当
- [ ] when change translate service, clean translate service cache
- [ ] 拦截 100

用户设置

- [x] 点击展开更多设置，对于翻译引擎
- [ ] 设置超过多少个单词才翻译，有些网站只只翻译较长段落就就行。??
- [ ] add toggle mask to clear shortcuts
- [x] 提供到网站的延时设置

popup

- [ ] 当不支持的页面调用 popup 时候，弹出提示，告诉用户当前页面不支持
- [ ] popup 图标设置颜色，透明度？
- [ ] popup 添加报告不兼容的网页按钮。
- [x] popup userscript 页面支持检测最新版本
- [ ] 在站点页面设置了永不翻译的站点时，立即隐藏 popup
- [ ] 判断当前页面是否为目标语言或永不翻译的语言/站点，如果是，则不显示 popup 图标
- [ ] change popup button error to translate
- [ ] 支持用户自定义 popup 页面的快捷操作，比如快速切换当前的翻译模式，全区域翻译，还是智能识别。 该功能入口可以添加在设置页面对应的设置项旁边。... more, 在 popup 页面显示该选项。

翻译服务

- [ ] 增加阿里云翻译。
- [ ] 增加讯飞翻译引擎 https://fanyi.xfyun.cn/console/trans/text
- [ ] 增加 google api 翻译。
- [ ] 如果能夠把 chatGPT 做成彩雲那種雙語對照效果的插件就太棒了。
- [ ] openai 关闭网页后依然请求问题

译文

- [ ] 不翻译纯符号： https://github.com/m-bain/whisperX/issues/56
- [ ] 新增选项，是否记住站内链接翻译的状态....
- [ ] 全局模式下，翻译 input， type = submit 的 value 属性
- [x] 点击重试图标后，全部重试，而不是单个重试

易用性

- [ ] 添加 usecase
- [ ] loading 页面
- [ ] firefox 增加地址栏翻译图标
- [ ] 安卓 firefox 原生扩展
- [ ] 移动端支持模糊转换的快捷键，
- [ ] 移动端/电脑端支持创建一个新的快捷图标。

PDF 和阅读器

- [x] 优化 pdf 翻译
- [ ] 支持 calibre
- [ ] add epub viewer
- [ ] 翻译电子书的目录
- [ ] 支持翻译本地 HTML 文件
- [ ] 保存后的本地网页，支持再次翻译为其他语言

网络同步

- [ ] 支持 onedrive，包括 webdev
- [ ] stay 同步 google drive

主题样式

- [ ] 修复黑暗模式的 loading
- [x] 优化 addStyle，解决 mastondon 无法注入样式的问题.

发布更新

- [ ] 修改商店描述，更易读
- [ ] 油猴提示有新的更新？

易用性

- [x] 安装后翻译的转化率

功能请求

- [ ] 加字数统计功能,年度报告
- [ ] 划词翻译功能
- [ ] 译文可以编辑
- [ ] 支持自助选中一些网页的区域，支持指定的区域不翻译，或者要翻译。
- [ ] 词典功能？（词典替换添加效果）
- [ ] custom dictionary
- [ ] 快捷翻译图片的能力。例如在有英语图片上附着个小图标，像 pin 一样，点击就可以翻译
- [x] 支持翻译字幕文件
- [ ] “我理解如果从页面中间点翻译，它会从“中间往下”继续翻（不是从页面的头开始翻）。不过实际上它只翻译中间而不会继续往下翻“ 优化项，如果页面中间点翻译，则从中间开始翻译。
- [ ] 开头网络卡了，导致翻译不出结果，第一次看到这个界面，这让我想到可否在此基础上优化一下显示的图标，作为另外一种翻译模式呢？即在需要的翻译的段落旁点按钮，插入显示翻译结果。它有点类似模糊翻译，但可以带来两个好处：1.没有大量的模糊内容干扰阅读视线，2.不需要自动请求大量网络翻译，减少网络压力，节省 API 请求次数,还有第三个好处是在阅读中段时，启动插件，也不会有位移的问题了

国际化支持

- [ ] 阿拉伯语，波斯语等 RTL 语言的支持[#371](https://github.com/immersive-translate/immersive-translate/discussions/371)

未分类

- [ ] translation service lang map should be from config?
- [ ] valid config, is invalid, then use the default config.
- [ ] add paragraph action icon, for show current paragraph from language, to langauge, and support to choose another language,or another translation engine to translate this paragraph.
- [ ] inject error tooltip ui
- [ ] all links move to buildin config

## Done

<details><summary>View History</summary>

- [x] subtitle error retry
- [x] openAI api key optional.
- [x] 重新录制 ios 插件安装教学视频
- [x] chatgpt4 的 system Prompt
- [x] dark 主题导出的电子书
- [x] 更新文档会导致不必要的 svg 生成
- [x] globalMeta bug for 电子书
- [x] 优化强制换行小数点问题
- [x] popup click 换成 油猴 api 打开
- [x] 当点击 popup 的时候，重新检测语言
- [x] 电子书的百分比还是有问题
- [x] openai prompt 优化,改为 3 个 prompt
- [x] Click on the extension icon to start translating the book. (点击扩展/脚本图标开始翻译), remove it
- [x] change the loading color
- [x] epub reload
- [x] 打开本地 html
- [x] 还有个建议，能否在填写密钥的地方增加个测试按钮，来确认 API 是否正常？
- [x] 支持是否翻译标题设置，支持选择智能翻译的区域
- [x] fix deepl wikipedia 罗素 english
- [x] 密码输入框添加一个眼睛的图标
- [x] deepl auth key ui
- [x] fix cron task, save the latest sync time, for save the sync times
- [x] should I solve the web crypto?
- [x] grease monkey add shortcut support, and shortcut config ui
- [x] theme color: https://www.reddit.com/r/meirl/comments/zzd30n/meirl/
- [x] add 虚线框
- [x] 全部翻译出现重复
- [x] 优化谷歌搜索结果
- [x] reddit mobile description translate
- [x] 设置页面添加 api 说明
- [x] 开发者设置页面，添加 debug 模式
- [x] 设置页面添加永不翻译的语言功能
- [x] popup add always translate \*.domain.com option.
- [x] 遍历 show TEXT ,根据 text 的长度确定 container
- [x] maybe we should switch back to onMessage, onConnect seems will disconnect on 5 minutes.
- [x] 油猴三指唤醒
- [x] 加一个 ---- 区分的原文和译文样式
- [x] 优化全网页翻译体验，单元素翻译体验，单元素，寻找最里面的，最后的那个文本，然后插入。
- [x] add 快捷键提示 to 翻译 button
- [x] 适配 https://www.reddit.com/.compact
- [x] 自动检测用户浏览器语言，以设定默认的界面语言。
- [x] tampermonkey 的云同步就是用 google drive api 实现的，可以参考下
- [x] QQ 邮箱适配，iframe
- [x] 油猴增加注册菜单项
- [x] add more register command
- [x] 油猴图标防抖动
- [x] 在页面中间开启翻译的时候，自动跳转到旧的位置？
- [x] 增加 pc 显示悬浮球选项？
- [x] add notes on about page, add contributors, and on.
- [x] aside issue <https://marginalrevolution.com/>
- [x] rp, rt ignore
- [x] toggle mask and clear
- [x] 扩展移动版， 支持修改快捷键
- [x] 添加 beta 功能按钮，在开发者设置里开启。
- [x] fix beta service
- [x] fix popup settings link
- [x] xhtml 文档翻译。
- [x] not split code element.
- [x] test pre element, with \n split
- [x] test dynamic nodes auto
- [x] auto sync default rule, general rule, 自动同步远程配置文件，并且提供点击手动同步的按钮。
- [x] detect language, 根据 rule 的配置，某些网站需要检测每一个段落的语言，并且按照检测到的语言去翻译不同的段落。 - @Owen 认领
- [x] cache translation result， 缓存翻译的结果，减少 api 的调用。 - @Randomb1 认领
- [x] regex match www.google.* ，支持后缀为*的 match 规则 - @Random 已 pr
- [x] context menu，添加页面的右键翻译该网站，以及显示原文（根据当前页面的状态，自动切换）。 - @TheOwenYoung 认领
- [x] 支持更多翻译 api，优先添加 deepl,yandex 的支持，同时研究微信翻译（似乎是免费的）。
- [x] 移动版的适配
- [x] config ui - 配置页面 UI @pop
- [x] popup 页面 UI，等草图。 @pop
- [x] 判断是否纯 URL，如果是的话，那保持原样，不翻译这个部分。
- [x] 多语句翻译接口，分段重新测试。目前的似乎有问题。
- [x] 用 ctrl 打开的页面，再次回到页面时，未翻译。偶现，待确认。 似乎是开发时重新安装插件导致。
- [x] 国际化界面语言
- [x] 确定 inject.js 的问题，避免发送没有监听的消息。
- [x] nitter, mastodon adapter
- [x] https://www.wking.dev/library/dont-design-your-database-like-a-frontend-developer content editable
- [x] filter only self request. not third party.
- [x] 多语言检测，好吧，我知道了. 上次变更了最小检测字数，比较少的文字，好像就不会被检测了和翻译了。本地识别的时候按照最小字符数识别。但是传给服务器的时候用 auto.
- [x] discord 搜索页面适配
- [x] discord 新消息蹦出来不会自动翻译
- [x] 优化重试逻辑，自动重试 1 次
- [x] 添加小牛翻译引擎 https://niutrans.com/trans?type=text

</details>
