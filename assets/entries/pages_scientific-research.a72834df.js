import{j as e,i as r}from"../chunks/chunk-2c2faf3d.js";import{i as t,a as l,b as n,c,T as o}from"../chunks/chunk-2c04397e.js";let d=[{year:"2016",researches:[{author:"nezar",specialization:"nezar",researchName:"nezar",universityName:"nezar",publishDate:"2016"},{author:"nezar",specialization:"nezar",researchName:"nezar",universityName:"nezar",publishDate:"2016"}]},{year:"2017",researches:[{author:"mido",specialization:"mido",researchName:"nezar",universityName:"nezar",publishDate:"2017"},{author:"mido",specialization:"mido",researchName:"nezar",universityName:"nezar",publishDate:"2017"}]}],m=[{name:"إدارة الأعمال",count:"15 بحث",img:t,size:"col-lg-12 col-md-12 wow zoomIn"},{name:"المحاسبة",count:"12 بحث",img:l,size:"col-lg-6 col-md-12 wow zoomIn"},{name:"الادارة المحاسبية",count:"10 ابحاث",img:n,size:"col-lg-6 col-md-12 wow zoomIn"}];const h=m.map((s,i)=>e.jsx("div",{className:s.size,"data-wow-delay":(i+1)*2,children:e.jsxs("a",{className:"position-relative d-block overflow-hidden",href:"",children:[e.jsx("img",{className:"img-fluid",src:s.img,alt:""}),e.jsxs("div",{className:"bg-white text-center position-absolute bottom-0 end-0 py-2 px-3",style:{margin:"1px;"},children:[e.jsx("h5",{className:"m-0",children:s.name}),e.jsx("h6",{className:"text-primary",children:s.count})]})]})}));function x(){return e.jsx(e.Fragment,{children:e.jsx("div",{className:"container-fluid  py-5",children:e.jsx("div",{className:"container",children:e.jsx("div",{className:"container-xxl ",children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"text-center wow fadeInUp","data-wow-delay":"0.1s",children:e.jsx("h1",{className:"text-primary mb-2s",children:"قائمة بالأبحاث العلمية الخاصة بهيئة تدريس المعهد"})}),e.jsx("div",{className:"container-xxl py-5 category",children:e.jsx("div",{className:"container",children:e.jsxs("div",{className:"row g-3 mb-5",children:[e.jsx("div",{className:"col-lg-7 col-md-6",children:e.jsx("div",{className:"row g-3",children:h})}),e.jsx("div",{className:"col-lg-5 col-md-6 wow zoomIn","data-wow-delay":"0.7s",style:{minHeight:"350px;"},children:e.jsxs("a",{className:"position-relative d-block h-100 overflow-hidden",href:"",children:[e.jsx("img",{className:"img-fluid position-absolute w-100 h-100",src:c,alt:"",style:{objectFit:"cover"}}),e.jsxs("div",{className:"bg-white text-center position-absolute bottom-0 end-0 py-2 px-3",style:{margin:"1px;"},children:[e.jsx("h5",{className:"m-0",children:"الحاسب الالي"}),e.jsx("h6",{className:"text-primary",children:"7 ابحاث"})]})]})})]})})}),e.jsx("div",{className:"row g-4",children:d.map(s=>e.jsxs("div",{children:[e.jsxs("h2",{className:"text-primary text-center m-2 mb-5",children:["قائمة بالأبحاث المسجلة بعام ",s.year]}),e.jsxs(o,{striped:!0,bordered:!0,responsive:!0,className:"text-center",children:[e.jsx("thead",{className:"bg-dark",style:{color:"white"},children:e.jsxs("tr",{children:[e.jsx("th",{children:"م"}),e.jsx("th",{children:"اسم البحث"}),e.jsx("th",{children:"اسم الباحث"}),e.jsx("th",{children:"التخصص"}),e.jsx("th",{children:"جامعة النشر"})]})}),e.jsx("tbody",{children:s.researches.map((i,a)=>e.jsxs("tr",{children:[e.jsx("th",{scope:"row",children:a+1}),e.jsx("td",{children:i.researchName}),e.jsx("td",{children:i.author}),e.jsx("td",{children:i.specialization}),e.jsx("td",{children:i.universityName})]}))})]})]}))})]})})})})})}const j=Object.freeze(Object.defineProperty({__proto__:null,Page:x},Symbol.toStringTag,{value:"Module"})),g=[{configName:"onRenderClient",importPath:"/renderer/+onRenderClient.jsx",isValueFile:!0,exportValues:r},{configName:"Page",importPath:"/pages/scientific-research/+Page.jsx",isValueFile:!0,exportValues:j}],N={onBeforeRenderEnv:{definedAt:{isComputed:!0},valueSerialized:'{"server":true}'}};export{g as configValuesImported,N as configValuesSerialized};