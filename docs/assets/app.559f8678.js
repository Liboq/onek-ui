import{d as _,l as p,o as c,c as d,b as u,z as s,r as g,n as C,R as O,a2 as M,S as j,a3 as B,H as E,_ as w,h as V,D as v,A as D,B as P,a4 as y,a5 as $,t as x,G as b,E as R,K as z,a6 as I,u as U,p as G,k as H,a7 as N,a8 as F,a9 as J,aa as K,ab as q,ac as Q,ad as W,ae as X,af as Y,ag as Z,ah as ee,ai as te,aj as ne,ak as oe}from"./chunks/framework.a34b570d.js";import{t as se}from"./chunks/theme.918759d7.js";import{f as ae}from"./chunks/icons.45e1fae8.js";const k=e=>(e.install=t=>{t.component(e.name,e)},e);const ie=["disabled"],le={key:0,class:"o-button-loading"},ce=s("svg",{class:"o-icon o-button-loading--icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[s("path",{d:"M510.499754 768.526913a31.934136 31.934136 0 0 1 31.934136 31.934136v191.604815a31.934136 31.934136 0 1 1-63.868272 0v-191.604815a31.934136 31.934136 0 0 1 31.934136-31.934136z m244.679349-56.204079l135.464604 135.528473a31.934136 31.934136 0 0 1-45.154868 45.154868l-135.464604-135.528473a31.934136 31.934136 0 1 1 45.154868-45.154868z m-444.139961 0a31.934136 31.934136 0 0 1 0 45.218737l-135.464604 135.464604a31.934136 31.934136 0 0 1-45.218737-45.154868l135.528473-135.464605a31.934136 31.934136 0 0 1 45.154868 0zM224.497634 480.928086a31.934136 31.934136 0 1 1 0 63.868272h-191.604815a31.934136 31.934136 0 0 1 0-63.868272h191.604815z m765.205763 0a31.934136 31.934136 0 0 1 0 63.868272h-191.604815a31.934136 31.934136 0 1 1 0-63.868272h191.604815zM175.510669 132.718269L310.975273 268.246741a31.934136 31.934136 0 1 1-45.154868 45.154868L130.355801 177.937005a31.934136 31.934136 0 0 1 45.154868-45.218736z m715.133038 0a31.934136 31.934136 0 0 1 0 45.154868l-135.464604 135.464604a31.934136 31.934136 0 0 1-45.218736-45.154868l135.528472-135.464604a31.934136 31.934136 0 0 1 45.154868 0zM510.499754 1.788312a31.934136 31.934136 0 0 1 31.934136 31.934135v191.604816a31.934136 31.934136 0 0 1-63.868272 0v-191.604816a31.934136 31.934136 0 0 1 31.934136-31.934135z"})],-1),re=[ce],de={key:1},pe={class:"o-button-icon"},ue={name:"o-button"},fe=_({...ue,props:{type:{default:"default"},size:{default:"normal"},plain:{type:Boolean,default:!1},link:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},shape:{default:"square"}},emits:["click"],setup(e,{emit:t}){const n=e,a="OnekUIButtonGroup",i="o-button",o=O(a,void 0),r=p(()=>n.loading),h=p(()=>({[`${i}-${(o==null?void 0:o.type)??n.type}`]:!0,[`${i}-${(o==null?void 0:o.size)??n.size}`]:!0,[`${i}-${(o==null?void 0:o.type)??n.type}--link`]:(o==null?void 0:o.link)||n.link,[`${i}-${(o==null?void 0:o.size)??n.size}-${n.shape}`]:!0,[`${i}-${n.type}--plain`]:n.plain,[`${i}-${n.type}--disabled`]:n.disabled||n.loading})),m=l=>{t("click",l)};return(l,T)=>(c(),d("button",{onClick:m,disabled:n.disabled||u(r),class:C(["o-button",u(h)])},[u(r)?(c(),d("span",le,re)):l.$slots.default&&l.$slots.icon?(c(),d("span",de,[s("span",pe,[g(l.$slots,"icon")])])):g(l.$slots,"icon",{key:2}),g(l.$slots,"default")],10,ie))}}),_e={name:"o-button-group"},L=_({..._e,props:{type:{default:"default"},size:{default:"normal"},link:{type:Boolean,default:!1},vertical:{type:Boolean,default:!1}},setup(e){const t=e,n="OnekUIButtonGroup",a="o-button-group",{type:i,size:o,link:r}=M(t);j(n,B({type:i,size:o,link:r}));const h=p(()=>({[`${a}-vertical`]:t.vertical,[`${a}-horizontal`]:!t.vertical}));return(m,l)=>(c(),d("div",{class:C(["o-button-group",u(h)])},[g(m.$slots,"default")],2))}}),he=k(fe),me=k(L);const ge=["xlink:href"],ve={name:"o-icon"},ye=_({...ve,props:{type:{default:"svg"},name:{default:"loading"},size:{default:0},rotate:{default:0}},setup(e){const t=e,n=o=>typeof o=="number",a=p(()=>{const o={};return t.size&&(o.fontSize=n(t.size)?`${t.size}px`:t.size),t.rotate&&(o.transform=`rotate(${t.rotate}deg)`),o}),i=p(()=>`${t.type==="svg"?"#":""}icon-${t.name}`);return(o,r)=>(c(),d("svg",{style:E(u(a)),class:"o-icon"},[s("use",{"xlink:href":u(i)},null,8,ge)],4))}}),$e=k(ye),S=Object.freeze(Object.defineProperty({__proto__:null,Button:he,ButtonGroup:me,Icons:$e,_ButtonGroup:L},Symbol.toStringTag,{value:"Module"})),we={install:e=>{for(const t in S)e.use(S[t])}};const be={code:{type:String,default:""},highlightedCode:{type:String,default:""},title:{type:String},desc:{type:String},lang:{type:String,default:"vue"},defaultExpand:{type:Boolean,default:!1},importMap:{type:Object,default:()=>({})}};function ze(e){const t=B({showTip:!1});function n(){navigator.clipboard.writeText(e),t.showTip=!0,setTimeout(()=>{t.showTip=!1},5*1e3)}return{...M(t),copyCode:n}}const Ce={},ke={t:"1596458734865",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"4898","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"14",height:"14"},xe=s("path",{d:"M68.608 962.56V206.848h740.864V962.56H68.608zM746.496 271.36H131.584v629.248h614.912V271.36zM131.584 262.144","p-id":"4899",fill:"#666"},null,-1),Se=s("path",{d:"M219.136 65.024v116.224h62.976V129.536h614.912v629.248h-60.416v61.952h123.392V65.024z","p-id":"4900",fill:"#666"},null,-1),Me=[xe,Se];function Be(e,t){return c(),d("svg",ke,Me)}const Le=w(Ce,[["render",Be]]),Ae={},Te={t:"1596458647160",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2840","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"18",height:"18"},Oe=s("path",{d:"M311.1 739c-6.1 0-12.2-2.3-16.8-7L69.7 507.4l224.6-224.6c9.3-9.3 24.3-9.3 33.6 0s9.3 24.3 0 33.6l-191 191 191 191c9.3 9.3 9.3 24.3 0 33.6-4.6 4.7-10.7 7-16.8 7zM711.5 739c-6.1 0-12.2-2.3-16.8-7-9.3-9.3-9.3-24.3 0-33.6l191-191-191-191c-9.3-9.3-9.3-24.3 0-33.6s24.3-9.3 33.6 0L953 507.4 728.3 732c-4.6 4.7-10.7 7-16.8 7zM418.5 814.7c-2.4 0-4.8-0.4-7.2-1.1-12.5-4-19.4-17.3-15.5-29.8l179.6-567.1c4-12.5 17.3-19.4 29.8-15.5 12.5 4 19.4 17.3 15.5 29.8L441.1 798.1a23.73 23.73 0 0 1-22.6 16.6z",fill:"#666","p-id":"2841"},null,-1),je=[Oe];function Ee(e,t){return c(),d("svg",Te,je)}const Ve=w(Ae,[["render",Ee]]),De={content:{type:String},importMap:{type:Object}},Pe=_({name:"SfcPlayground",props:De,setup(e){const t="https://sfc.vuejs.org/";return{sfcPlaygroundUrl:p(()=>{const a={"App.vue":e.content};if(e.importMap)try{a["import-map.json"]=JSON.stringify({imports:e.importMap})}catch{}return`${t}#${btoa(unescape(encodeURIComponent(JSON.stringify(a))))}`})}}}),Re=["href"],Ie=s("div",{style:{width:"16px","margin-left":"6px"}},[s("svg",{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 1024 1024","xml:space":"preserve"},[s("g",null,[s("path",{d:"M1004.57 319.408l-468-312c-15.974-9.83-33.022-9.92-49.142 0l-468 312C7.428 327.406 0 341.694 0 355.978v311.998c0 14.286 7.428 28.572 19.43 36.572l468 312.044c15.974 9.83 33.022 9.92 49.142 0l468-312.044c12-7.998 19.43-22.286 19.43-36.572V355.978c-0.002-14.284-7.43-28.572-19.432-36.57zM556 126.262l344.572 229.716-153.714 102.858L556 331.406V126.262z m-88 0v205.144l-190.858 127.43-153.714-102.858L468 126.262zM88 438.264l110.286 73.714L88 585.692v-147.428z m380 459.43L123.428 667.978l153.714-102.858L468 692.55v205.144z m44-281.716l-155.43-104 155.43-104 155.43 104-155.43 104z m44 281.716V692.55l190.858-127.43 153.714 102.858L556 897.694z m380-312.002l-110.286-73.714L936 438.264v147.428z","p-id":"2793",fill:"#555"})])])],-1),Ue=[Ie];function Ge(e,t,n,a,i,o){return c(),d("a",{href:e.sfcPlaygroundUrl,style:{display:"flex","align-items":"center"},target:"_blank"},Ue,8,Re)}const He=w(Pe,[["render",Ge]]),Ne=_({name:"Demo",props:be,components:{copySvg:Le,codeSvg:Ve,SfcPlayground:He},setup(e){const t=V(e.defaultExpand),n=p(()=>decodeURIComponent(e.code||"")),a=p(()=>decodeURIComponent(e.highlightedCode||"")),{showTip:i,copyCode:o}=ze(n.value);return{decodedCode:n,showTip:i,expand:t,decodedHighlightedCode:a,copyCode:o,toggleExpand:()=>t.value=!t.value}}});const Fe={class:"demo-slot vp-raw"},Je={class:"demo-title-desc"},Ke={class:"demo-title"},qe={class:"demo-desc"},Qe={class:"demo-actions"},We={class:"demo-platforms"},Xe={class:"demo-buttons"},Ye={class:"demo-actions-copy"},Ze={class:"demo-actions-tip"},et=["innerHTML"];function tt(e,t,n,a,i,o){const r=v("SfcPlayground"),h=v("copySvg"),m=v("codeSvg"),l=v("ClientOnly");return c(),D(l,null,{default:P(()=>[s("article",R(e.$attrs,{class:"vitepress-demo"}),[s("div",Fe,[g(e.$slots,"default")]),y(s("div",Je,[s("span",Ke,x(e.title),1),s("span",qe,x(e.desc),1)],512),[[$,e.title||e.desc]]),s("div",Qe,[s("div",We,[b(r,{content:e.decodedCode,importMap:e.importMap},null,8,["content","importMap"])]),s("div",Xe,[s("div",Ye,[y(s("span",Ze,"复制成功!",512),[[$,e.showTip]]),y(b(h,{onClick:e.copyCode,title:"复制"},null,8,["onClick"]),[[$,!e.showTip]])]),b(m,{class:"demo-actions-expand",onClick:t[0]||(t[0]=T=>e.toggleExpand()),title:"展开"})])]),y(s("div",{innerHTML:e.decodedHighlightedCode,class:C(`language-${e.lang} extra-class`)},null,10,et),[[$,e.expand]])],16)]),_:3})}const nt=w(Ne,[["render",tt]]),ot={...se,enhanceApp:async({app:e})=>{e.use(we),e.use(ae),e.component("demo",nt)}};function A(e){if(e.extends){const t=A(e.extends);return{...t,...e,async enhanceApp(n){t.enhanceApp&&await t.enhanceApp(n),e.enhanceApp&&await e.enhanceApp(n)}}}return e}const f=A(ot),st=_({name:"VitePressApp",setup(){const{site:e}=U();return G(()=>{H(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),N(),F(),J(),f.setup&&f.setup(),()=>K(f.Layout)}});async function at(){const e=lt(),t=it();t.provide(q,e);const n=Q(e.route);return t.provide(W,n),t.component("Content",X),t.component("ClientOnly",Y),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),f.enhanceApp&&await f.enhanceApp({app:t,router:e,siteData:Z}),{app:t,router:e,data:n}}function it(){return ee(st)}function lt(){let e=z,t;return te(n=>{let a=ne(n);return e&&(t=a),(e||t===a)&&(a=a.replace(/\.js$/,".lean.js")),z&&(e=!1),oe(()=>import(a),[])},f.NotFound)}z&&at().then(({app:e,router:t,data:n})=>{t.go().then(()=>{I(t.route,n.site),e.mount("#app")})});export{at as createApp};