import{b as g,p as _,d as f,a as T,o as y}from"../chunks/chunk-e5588fe7.js";import{a as R,s as C,b as w,r as S,c as z,i as b,d as A,m as F,g as m,o as V}from"../chunks/chunk-13193ce6.js";const k="modulepreload",L=function(e){return"/"+e},h={},l=function(t,i,a){if(!i||i.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(i.map(r=>{if(r=L(r),r in h)return;h[r]=!0;const o=r.endsWith(".css"),v=o?'[rel="stylesheet"]':"";if(!!a)for(let u=s.length-1;u>=0;u--){const d=s[u];if(d.href===r&&(!o||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${r}"]${v}`))return;const n=document.createElement("link");if(n.rel=o?"stylesheet":k,o||(n.as="script",n.crossOrigin=""),n.href=r,document.head.appendChild(n),o)return new Promise((u,d)=>{n.addEventListener("load",u),n.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${r}`)))})})).then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function I(e,t){const i=(s,r="a non-empty string")=>`[resolveRoute(routeString, urlPathname)] ${_.cyan(s)} should be `+r;g(e,i("routeString"),{showStackTrace:!0}),g(t,i("urlPathname"),{showStackTrace:!0}),g(t.startsWith("/"),i("urlPathname","pageContext.urlPathname"),{showStackTrace:!0});const a=R(e,t);return{match:!!a,routeParams:(a==null?void 0:a.routeParams)??{}}}const x=e=>e.urlPathname==="/hello"||e.urlPathname==="/hello/"?{routeParams:{name:"anonymous"}}:I("/hello/@name",e.urlPathname),O=Object.freeze(Object.defineProperty({__proto__:null,route:x},Symbol.toStringTag,{value:"Module"})),p={},E={},N={},c={},U=[],P={},j=!0,B=[{pageId:"/pages/_error",isErrorPage:!0,routeFilesystem:void 0,loadConfigValuesAll:()=>l(()=>import("./pages_error.16f8e8df.js"),["assets/entries/pages_error.16f8e8df.js","assets/chunks/chunk-ffaea4d5.js","assets/static/onPageTransitionEnd.7be06a4d.css"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"},clientRouting:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:"true"}},configValuesImported:[]},{pageId:"/pages/hello",isErrorPage:void 0,routeFilesystem:{routeString:"/hello",definedBy:"/pages/hello/"},loadConfigValuesAll:()=>l(()=>import("./pages_hello.66ae5d3a.js"),["assets/entries/pages_hello.66ae5d3a.js","assets/chunks/chunk-ffaea4d5.js","assets/static/onPageTransitionEnd.7be06a4d.css","assets/chunks/chunk-e5588fe7.js"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"},clientRouting:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:"true"}},configValuesImported:[{configName:"route",importPath:"/pages/hello/+route.ts",isValueFile:!0,exportValues:O}]},{pageId:"/pages/index",isErrorPage:void 0,routeFilesystem:{routeString:"/",definedBy:"/pages/index/"},loadConfigValuesAll:()=>l(()=>import("./pages_index.4cb3a632.js"),["assets/entries/pages_index.4cb3a632.js","assets/chunks/chunk-ffaea4d5.js","assets/static/onPageTransitionEnd.7be06a4d.css","assets/chunks/chunk-13193ce6.js","assets/chunks/chunk-e5588fe7.js","assets/chunks/chunk-ed70e7ca.js"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"},clientRouting:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:"true"}},configValuesImported:[]},{pageId:"/pages/markdown",isErrorPage:void 0,routeFilesystem:{routeString:"/markdown",definedBy:"/pages/markdown/"},loadConfigValuesAll:()=>l(()=>import("./pages_markdown.9845d67b.js"),["assets/entries/pages_markdown.9845d67b.js","assets/chunks/chunk-ffaea4d5.js","assets/static/onPageTransitionEnd.7be06a4d.css","assets/chunks/chunk-ed70e7ca.js"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"},clientRouting:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:"true"}},configValuesImported:[]},{pageId:"/pages/star-wars/@id",isErrorPage:void 0,routeFilesystem:{routeString:"/star-wars/@id",definedBy:"/pages/star-wars/@id/"},loadConfigValuesAll:()=>l(()=>import("./pages_star-wars_-id.d3603782.js"),["assets/entries/pages_star-wars_-id.d3603782.js","assets/chunks/chunk-ffaea4d5.js","assets/static/onPageTransitionEnd.7be06a4d.css","assets/chunks/chunk-e5588fe7.js"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"},clientRouting:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:"true"}},configValuesImported:[]},{pageId:"/pages/star-wars/index",isErrorPage:void 0,routeFilesystem:{routeString:"/star-wars",definedBy:"/pages/star-wars/index/"},loadConfigValuesAll:()=>l(()=>import("./pages_star-wars_index.f958b35f.js"),["assets/entries/pages_star-wars_index.f958b35f.js","assets/chunks/chunk-ffaea4d5.js","assets/static/onPageTransitionEnd.7be06a4d.css"]),configValuesSerialized:{isClientSideRenderable:{definedAt:{isComputed:!0},valueSerialized:"true"},clientRouting:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","clientRouting"]},valueSerialized:"true"}},configValuesImported:[]}],D={configValuesImported:[]},K=Object.assign({}),$={...K};p[".page"]=$;const H=Object.assign({}),G={...H};c[".page"]=G;const M=Object.assign({}),W={...M};c[".page.server"]=W;const q=Object.assign({}),J={...q};E[".page.route"]=J;const Q=Object.assign({}),X={...Q};p[".page.client"]=X;const Y=Object.assign({}),Z={...Y};c[".page.client"]=Z;const ee=Object.assign({}),te={...ee};P[".page.server"]=te;const re=Object.freeze(Object.defineProperty({__proto__:null,isGeneratedFile:j,neverLoaded:P,pageConfigGlobalSerialized:D,pageConfigsSerialized:B,pageFilesEager:E,pageFilesExportNamesEager:c,pageFilesExportNamesLazy:N,pageFilesLazy:p,pageFilesList:U},Symbol.toStringTag,{value:"Module"}));C(re);function ie(){document.addEventListener("click",oe)}function oe(e){if(!ae(e))return;const t=ne(e.target);if(!t)return;const i=t.getAttribute("href");if(w(t))return;f(i),e.preventDefault();const s=![null,"false"].includes(t.getAttribute("keep-scroll-position"))?"preserve-scroll":"scroll-to-top-or-hash";S({scrollTarget:s,urlOriginal:i,isBackwardNavigation:!1})}function ae(e){return e.button===0&&!e.ctrlKey&&!e.shiftKey&&!e.altKey&&!e.metaKey}function ne(e){for(;e.tagName!=="A";){const{parentNode:t}=e;if(!t)return null;e=t}return e}function se(){z(),b(),A(),F(),f(m()===0),S({scrollTarget:"preserve-scroll",isBackwardNavigation:null,isClientSideNavigation:!1}),f(m()===1),ie(),V()}T();const le=!0;y(le);se();