(()=>{var p={BUILD_TIME:"2025-03-03T11:27:18.000Z",VERSION:"1.15.1",PROD:"1",REDIRECT_URL:"https://dash.immersivetranslate.com/auth-done/",PROD_API:"1",BETA:"0",MOCK:"0",DEBUG:"0",IMMERSIVE_TRANSLATE_FIREFOX:"1",INSTALL_FROM:"firefox_zip"};function h(){return typeof process>"u"&&typeof Deno<"u"?Deno.env.toObject():p}var C=h();function f(){return C.PROD==="1"}function E(){return C.PROD_API==="1"}var ce=h().PROD==="1",ue=h().PROD!=="1";var t="immersiveTranslate";var s="immersive-translate",L="imt";var c="immersivetranslate.com",Q=`https://config.${c}/`,_e=`https://app.${c}/`,l=f()||E()?`https://${c}/`:`https://test.${c}/`,y=`https://dash.${c}/`,xe=f()||E()?`https://api2.${c}/`:`https://test-api2.${c}/`,he=f()||E()?`https://ai.${c}/`:`https://test-ai.${c}/`,U=l+"accounts/login?from=plugin",D=l+"profile/",_=l+"auth/pricing/",x=l+"pricing/";var G=`https://github.com/${s}/${s}/`,fe=`https://s.${c}/`,Te=`https://onboarding.${c}/`;var Se=t+"DeeplGlobalState",Ee=t+"BingGlobalState",ye=t+"YandexGlobalState",Ie=t+"BaiduQianfanGlobalConfigStorageKey",be=t+"SiliconCloudGlobalConfigStorageKey",Ae=t+"ZhipuGlobalConfigStorageKey";var Re=t+"GoogleAccessToken",ve=t+"AuthFlow",Pe=s+"-config-latest.json",Me=t+"AuthState",Oe=t+"IframeMessage",Ce=t+"WaitForRateLimit",Le=t+"DocumentMessageAsk",g=t+"DocumentMessageTellThirdParty",Ue=t+"showError",De=t+"showModal",Ge=t+"showToast",N=t+"DocumentMessageThirdPartyTell",Ne=t+"DocumentMessageEventUpload",we=t+"DocumentMessageTypeStopJsSDK",Fe=t+"DocumentMessageHandler",$e=t+"DocumentSetFloatBallActive",Be=`${t}Share`,ke=`${t}ShowFloatBallGuide`,We=t+"DocumentMessageTempEnableSubtitleChanged",He=`${t}ToggleMouseHoverTranslateDirectly`,Ve=`${t}ReqDraft`,qe=`${t}ResDraft`,Ke=`${t}Container`,Je=`${t}SpecifiedContainer`;var je=`${t}PageTranslatedStatus`,Ye=`${t}MangaTranslatedStatus`,Qe=`${t}PageUrlChanged`,ze=`${t}ReceiveCommand`,Xe=t+"LastUseMouseHoverTime",Ze=t+"LastUseInputTime",et=t+"LastUseManualTranslatePageTime",tt=`${t}PopupReceiveMessage`,rt=t+"DocumentMessageEventTogglePopup",ot=`${Q}default_config.json`,nt=`${t}Mark`,at=`${t}Root`,st=`${t}Walked`,it=`data-${s}-walked`,lt=`${t}Paragraph`,ct=`data-${s}-paragraph`,ut=`data-${s}-translation-element-mark`,mt=`${t}TranslationElementMark`,pt=`${t}TranslatedMark`,gt=`${s}-input-injected-css`,dt=`${t}LoadingId`,_t=`data-${s}-loading-id`,xt=`${t}ErrorId`,ht=`data-${s}-error-id`,ft=`${t}AtomicBlockMark`,Tt=`${t}ExcludeMark`,St=`data-${s}-exclude-mark`,Et=`${t}StayOriginalMark`,yt=`${t}PreWhitespaceMark`,It=`${t}InlineMark`,bt=`${t}BlockMark`,At=`${t}Left`,Rt=`${t}Right`,vt=`${t}Width`,Pt=`${t}Height`,Mt=`${t}Top`,Ot=`${t}FontSize`;var Ct=`${t}GlobalStyleMark`;var Lt=`${s}-target-wrapper`,Ut=`${s}-pdf-target-container`,Dt=`${s}-target-inner`,Gt=`${s}-source-wrapper`,Nt=`${s}-target-translation-block-wrapper`,wt=`${s}-root-translation-theme`,Ft=`${t}RootTranslationTheme`,$t=`${s}-target-translation-vertical-block-wrapper`,Bt=`${s}-target-translation-pdf-block-wrapper`,kt=`${s}-target-translation-pre-whitespace`,Wt=`${s}-target-translation-inline-wrapper`;var Ht=["https://immersive-translate.owenyoung.com/options/","https://immersive-translate.owenyoung.com/auth-done/",y,y+"auth-done/","http://localhost:8000/dist/userscript/options/","http://localhost:8000/auth-done/","http://192.168.50.9:8000/dist/userscript/options/","http://192.168.31.51:8000/dist/userscript/options/","http://192.168.1.72:8000/dist/userscript/options/","https://www.deepl.com/translator","translate.google.com","http://localhost:8000/options/","http://192.168.50.9:8000/options/","http://192.168.31.51:8000/options/","http://192.168.1.72:8000/options/"];var Vt=l+"docs/communities/",qt=G+"issues/1809",Kt=G+"issues/1179",Jt={type:t+"ChildFrameToRootFrameIdentifier"};var jt=f()?y+"#general":"http://localhost:8000/dist/userscript/options/#general";var z=y+"#general",Yt=l+"accounts/login?from=plugin&return_url="+encodeURIComponent(z),Qt=U+"&utm_source=extension&utm_medium=extension&utm_campaign=error_modal",zt=U+"&utm_source=extension&utm_medium=extension&utm_campaign=manga_guide",X=l+"download/",Z=l+"topup?type=open_ai&",ee=l+"topup?type=deepl&",Xt=l+"topup?type=comics&",Zt=x+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_more",er=x+"?utm_source=extension&utm_medium=extension&utm_campaign=manga_guide",tr=X+"?utm_source=extension&utm_medium=extension&utm_campaign=options_nav",rr=x+"?utm_source=extension&utm_medium=extension&utm_campaign=popup_footer",or=x+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",nr=x+"?utm_source=extension&utm_medium=extension&utm_campaign=float_ball",ar=D+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",sr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=subtitle_download",ir=Z+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",lr=ee+"utm_source=extension&utm_medium=extension&utm_campaign=error_modal",cr=l+"topup?utm_source=extension&utm_medium=extension&utm_campaign=error_modal",ur=x+"?utm_source=extension&utm_medium=extension&utm_campaign=option_sync_config",mr=D+"?utm_source=extension&utm_medium=extension&utm_campaign=error_modal&upgradeFromTrial=true",pr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=manga_intro",gr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=image_intro",dr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=image_client",_r=_+"?utm_source=extension&utm_medium=extension&utm_campaign=yt_ai_asr",xr=_+"?utm_source=extension&utm_medium=extension&utm_campaign=",hr=l+"docs/usage/",fr=l+"docs/communities/",T=h().TRANSLATE_FILE_URL,Tr=T+"?utm_source=extension&utm_medium=extension&utm_campaign=options_nav",Sr=T+"?utm_source=extension&utm_medium=extension&utm_campaign=float_ball",Er=`${T}download-subtitle/`,yr=`${T}pdf-pro/`,Ir=`${T}text/`;var br=`https://analytics.${c}/collect`,Ar=`https://analytics.${c}/internal`,Rr=`${l}activities/components/image-pro`;var vr=50*1e4,Pr=`[${L}-ctx-divider]`,Mr=`${L}_context_preview`;var te="";function re(){return te||globalThis.navigator.userAgent}function w(){let r=re();return r.includes("ImtFxAndroid")||r.includes("ImtFxAOS")}var b=class{bridge;waitForBridge(e=1e4){return w()?globalThis.WebViewJavascriptBridge?(this.bridge=globalThis.WebViewJavascriptBridge,Promise.resolve(!0)):new Promise(o=>{let n=Date.now(),a=()=>{if(globalThis.WebViewJavascriptBridge)return this.bridge=globalThis.WebViewJavascriptBridge,o(!0);if(Date.now()-n>e)return o(!1);requestAnimationFrame(a)};a()}):Promise.resolve(!1)}registerHandler(e,o){if(!this.bridge){console.error("Bridge not initialized");return}this.bridge.registerHandler(e,o)}callHandler(e,o,n){if(!this.bridge){console.error("Bridge not initialized");return}this.bridge.doSend({type:e,...o},n)}},u=new b;var A=class{constructor(){}getRandomId(){return(new Date().getTime()+Math.random())*Math.random()}sendAsyncMessages({type:e,data:o}){return new Promise(n=>{let a=this.getRandomId(),i=this.handleMessage(e,d=>{d.id===a&&(i(),n(d.payload))});this.sendMessages({type:e,id:a,data:o})})}sendMessages(e){globalThis.document.dispatchEvent(new CustomEvent(N,{detail:JSON.stringify({id:e.id||this.getRandomId(),type:e.type,data:e.data})}))}handleMessages(e){let o=n=>{let a=n;if(a.detail)try{let i=JSON.parse(a.detail);e(i)}catch(i){console.error(i)}};return globalThis.document.addEventListener(g,o),()=>{globalThis.document.removeEventListener(g,o)}}handleMessage(e,o){return this.handleMessages(n=>{n.type===e&&o(n)})}},oe=new A,ne={get(r,e,o){return e in r?(...n)=>{let a=r[e];return typeof a=="function"?a.apply(r,n):Reflect.get(r,e,o)}:n=>{if(e.startsWith("getAsync")||e.endsWith("Async"))return r.sendAsyncMessages({type:e,data:n});r.sendMessages({type:e,data:n})}}},m=new Proxy(oe,ne);function F(r,e){let o="right: unset; bottom: unset; left: 50%; top: 0; transform: translateX(-50%);";globalThis.innerWidth>450&&(o="left: unset; top: 0; right: 20px; bottom: unset; transform: none;"),m.togglePopup({style:r.style||o,isSheet:r.isSheet||!1,overlayStyle:r.overlayStyle||"background-color: transparent;"}),e({result:!0})}function $(r,e){let o="right: unset; bottom: unset; left: 50%; top: 0; transform: translateX(-50%);";globalThis.innerWidth>450&&(o="left: unset; top: 0; right: 20px; bottom: unset; transform: none;"),m.openPopup({style:r.style||o,isSheet:r.isSheet||!1,overlayStyle:r.overlayStyle||"background-color: transparent;"}),e({result:!0})}function B(r,e){m.closePopup(),e({result:!0})}function k(r,e){m.translatePage(),e({result:!0})}function W(r,e){m.restorePage(),e({result:!0})}async function H(r,e){let o=await m.getPageStatusAsync();e({result:!0,status:o,pageTranslated:o=="Translated"})}var I=[];function V(r,e){try{console.log("translateImage",r);let{imageUrl:o}=r;if(!document.querySelector(`img[src="${o}"]`))return e({result:!1,errMsg:"\u56FE\u7247\u4E0D\u5B58\u5728"});v({originalUrl:o,triggerResultCallback:e}),m.triggerTranslateImageBySrc(o)}catch(o){console.error("translateImage error:",o),e({result:!1,errMsg:"\u7FFB\u8BD1\u8FC7\u7A0B\u53D1\u751F\u9519\u8BEF"})}}function q(r,e){let{imageId:o,imageUrl:n}=r;console.log("restoreImage",r);let a="";if(n){let i=document.querySelector(`img[src="${n}"]`);i||e({result:!1,errMsg:"\u627E\u4E0D\u5230\u539F\u56FE"}),a=i?.getAttribute("bak_src")||""}else{let i=S({urlHash:o});if(!i){e({result:!1,errMsg:"\u627E\u4E0D\u5230\u7FFB\u8BD1\u540E\u7684\u56FE"});return}if(!(document.querySelector(`img[bak_src="${i.originalUrl}"]`)||document.querySelector(`img[src="${i.originalUrl}"]`))){e({result:!1,errMsg:"\u627E\u4E0D\u5230\u539F\u56FE"});return}a=i.originalUrl}console.log("restore_image originalUrl",a),m.cleanTranslateImageBySrc(a)}function K(r){console.log("triggerClientTranslateImage",r);let{urlHash:e,imgData:o,originalUrl:n}=r,a=S({originalUrl:n});a||(a={originalUrl:n,urlHash:e}),a.urlHash=e,v(a),console.log("trigger urlHash",e,"base64",o),R(e,{state:"extension_uploading",errorMsg:""}),u.callHandler("imageTextRecognition",{imageId:e,imageUrl:n,imageData:o},function(i){let{imageId:d,boxes:P,result:M,errMsg:O}=i;M&&P&&R(d,{state:"saved",errorMsg:"",result:{ocrTime:0,boxesWithText:P}}),!M&&O&&R(d,{state:"error",errorMsg:O})})}function J(r){let{urlHash:e}=r;console.log("queryImageTranslateState",r);let o=S({urlHash:e});if(!o){console.log("queryImageTranslateState item not found",e);return}let n=o.imgState;document.dispatchEvent(new CustomEvent(g+"Result",{detail:JSON.stringify({method:"queryImageTranslateState",data:{urlHash:e,state:n}})}))}function j(r){console.log("notifyClientImageTranslatedResult",r);let{imgHash:e,originalUrl:o,ok:n,errMsg:a}=r,i=S({originalUrl:o});if(!i){console.log("notifyClientImageTranslatedResult item not found",e);return}v(i),i.triggerResultCallback?.({result:n,errMsg:a})}function v(r){let e=ae(r);if(e!==-1){I[e]=r;return}I.push(r)}function R(r,e){let o=S({urlHash:r});o&&(o.imgState=e)}function ae(r){return I.findIndex(e=>r.urlHash===e.urlHash||r.originalUrl===e.originalUrl)}function S(r){return I.find(e=>r.urlHash===e.urlHash||r.originalUrl===e.originalUrl)}async function se(){try{if(!await u.waitForBridge())return;u.registerHandler("translateImage",V),u.registerHandler("restoreImage",q),u.registerHandler("translatePage",k),u.registerHandler("restorePage",W),u.registerHandler("getPageStatus",H),u.registerHandler("togglePopup",F),u.registerHandler("openPopup",$),u.registerHandler("closePopup",B)}catch(r){console.error("\u521D\u59CB\u5316 WebViewJavascriptBridge \u5931\u8D25:",r)}}var ie=r=>{try{let{method:e,data:o}=JSON.parse(r.detail);e==="triggerClientTranslateImage"?K(o):e==="queryImageTranslateState"?J(o):e=="notifyClientImageTranslatedResult"&&j(o)}catch(e){console.error("handleEvent error:",e)}};se();document.addEventListener(g,ie);})();
