import{j as e,i,a as s,b as l,c as u}from"../chunks/chunk-ffaea4d5.js";import{r as d}from"../chunks/chunk-13193ce6.js";import{a as c,b as t,i as g,c as h}from"../chunks/chunk-e5588fe7.js";import{C as m}from"../chunks/chunk-ed70e7ca.js";c();async function f(r,{keepScrollPosition:a=!1,overwriteLastHistoryEntry:o=!1}={}){t(g(),"The navigate() function can be called only on the client-side",{showStackTrace:!0});const n="navigate() works only with Client Routing, see https://vike.dev/navigate";t(h(),n,{showStackTrace:!0}),t(r,"[navigate(url)] Missing argument url",{showStackTrace:!0}),t(typeof r=="string","[navigate(url)] Argument url should be a string",{showStackTrace:!0}),t(typeof a=="boolean","[navigate(url, { keepScrollPosition })] Argument keepScrollPosition should be a boolean",{showStackTrace:!0}),t(typeof o=="boolean","[navigate(url, { overwriteLastHistoryEntry })] Argument overwriteLastHistoryEntry should be a boolean",{showStackTrace:!0}),t(r.startsWith("/"),"[navigate(url)] Argument url should start with a leading /",{showStackTrace:!0}),await d({scrollTarget:a?"preserve-scroll":"scroll-to-top-or-hash",urlOriginal:r,overwriteLastHistoryEntry:o,isBackwardNavigation:!1})}function p(){return e.jsxs(e.Fragment,{children:[e.jsx("h1",{children:"Welcome to Vike"}),"This page is:",e.jsxs("ul",{children:[e.jsx("li",{children:"Rendered to HTML."}),e.jsxs("li",{children:["Interactive. ",e.jsx(m,{})]})]}),e.jsx("p",{children:e.jsx("button",{onClick:()=>{const r=Math.floor(Math.random()*3);f(["/markdown","/star-wars","/hello/alice"][r])},children:"Random Page"})})]})}const T=Object.freeze(Object.defineProperty({__proto__:null,default:p},Symbol.toStringTag,{value:"Module"})),k=[{configName:"onRenderClient",importPath:"/renderer/+onRenderClient.tsx",isValueFile:!0,exportValues:i},{configName:"onHydrationEnd",importPath:"/renderer/+onHydrationEnd.ts",isValueFile:!0,exportValues:s},{configName:"onPageTransitionStart",importPath:"/renderer/+onPageTransitionStart.ts",isValueFile:!0,exportValues:l},{configName:"onPageTransitionEnd",importPath:"/renderer/+onPageTransitionEnd.ts",isValueFile:!0,exportValues:u},{configName:"Page",importPath:"/pages/index/+Page.tsx",isValueFile:!0,exportValues:T}],b={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:"null"},hydrationCanBeAborted:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","hydrationCanBeAborted"]},valueSerialized:"true"},hooksTimeout:{definedAt:{filePathToShowToUser:"/renderer/+config.h.ts",fileExportPathToShowToUser:["default","hooksTimeout"]},valueSerialized:'{"onBeforeRender":{"error":30000,"warning":10000}}'}};export{k as configValuesImported,b as configValuesSerialized};