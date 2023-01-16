# Change Log

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

- use sendMessage insteadof connect, cause chrome will disconnect the port after 5 minites
- better for detect text containers

## 0.0.52

- Do not translate the paragraph that only has placeholders elements, for [example](https://github.com/nank1ro/solidart), the first line.
- Better for detect child elements.

## 0.0.51

- Fix cache issue [#12](https://github.com/immersive-translate/next-immersive-translate/issues/12), [#7](https://github.com/immersive-translate/next-immersive-translate/issues/7)
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

- Fix Wikipedia special character [#6](https://github.com/immersive-translate/next-immersive-translate/issues/6)
- Fix userscript icon size.
- enable all sites to detect paragraph language.

## 0.0.35

- Fix youtube go to next page
- Support Youtube search page.
- Fix options advanced switch.
- Fix img tag , hiddent tag [#5](https://github.com/immersive-translate/next-immersive-translate/issues/5)
- Fix Google Search Force refresh [#4](https://github.com/immersive-translate/next-immersive-translate/issues/4)
- Support Table result of Google [#3](https://github.com/immersive-translate/next-immersive-translate/issues/3)
- Fix Wikipedia blank [#2](https://github.com/immersive-translate/next-immersive-translate/issues/2)

## 0.0.34

### Break Changes

- The Default Hot Key to toggle translate has been changed to `alt+A`, cause it's the most convinient key to type.

### Others

- Support set immediate translation mode, so you can let the web page translate as quick as possible.
- Support set page area that need to translate. so you can translate more area.
- Support set the first x text count to translate immediately.
- Fix translate duplicately when change translate
- Better popup UI

## 0.0.33

- Support more languages, zh-TW, en

## 0.0.32

- Fix translate local file after saved. Fixed [#1](https://github.com/immersive-translate/next-immersive-translate/issues/1)
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
