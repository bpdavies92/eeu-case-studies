import{_ as F,a as ae,V as D,b as z,c as H,p as te,N as ne}from"./VRow-b3a17f0c.js";import{o as se,m as _,p as le,a as L,q as oe,b,r as ie,R as ce,g as $,s as re,d as N,v as ue,e as j,w as de,h as G,i as U,n as M,c as ve,f as xe,x as me}from"./VList-b22c77ee.js";import{o as v,a as I,w as r,c as n,G as x,p as h,m as O,g as V,b as q,d as u,y as J,t as m,s as K,h as pe,H as W,I as Y,J as fe,K as R,L as he,M as ge,B as ye,N as E,E as S,D as f,e as _e,O as C,F as w,P as A}from"./index-013d9667.js";import{a as be,b as Ve}from"./layout-2191f953.js";const Pe={},ke=x("h2",{class:"text-h1"},"Educational Enhancement Unit",-1);function Ce(e,s){return v(),I(D,{height:"250",rounded:"rounded",class:"ml-12 mr-12 mb-12 overflow-hidden"},{default:r(()=>[n(se,{class:"text-h1 d-flex align-center justify-center pl-12",cover:"",src:ae},{default:r(()=>[ke]),_:1})]),_:1})}const Ee=F(Pe,[["render",Ce]]);const y=Symbol.for("vuetify:v-expansion-panel"),Se=["default","accordion","inset","popout"],Ie=h({color:String,static:Boolean,variant:{type:String,default:"default",validator:e=>Se.includes(e)},readonly:Boolean,..._(),...le(),...L(),...O()},"VExpansionPanels"),Te=V()({name:"VExpansionPanels",props:Ie(),emits:{"update:modelValue":e=>!0},setup(e,s){let{slots:t}=s;oe(e,y);const{themeClasses:a}=q(e),o=u(()=>e.variant&&`v-expansion-panels--variant-${e.variant}`);return J({VExpansionPanel:{color:m(e,"color"),readonly:m(e,"readonly"),static:m(e,"static")}}),b(()=>n(e.tag,{class:["v-expansion-panels",a.value,o.value,e.class],style:e.style},t)),{}}}),Q=h({eager:Boolean},"lazy");function Be(e,s){const t=K(!1),a=u(()=>t.value||e.eager||s.value);pe(s,()=>t.value=!0);function o(){e.eager||(t.value=!1)}return{isBooted:t,hasContent:a,onAfterLeave:o}}const we=h({..._(),...Q()},"VExpansionPanelText"),X=V()({name:"VExpansionPanelText",props:we(),setup(e,s){let{slots:t}=s;const a=W(y);if(!a)throw new Error("[Vuetify] v-expansion-panel-text needs to be placed inside v-expansion-panel");const{hasContent:o,onAfterLeave:i}=Be(e,a.isSelected);return b(()=>n(ie,{onAfterLeave:i},{default:()=>{var l;return[Y(n("div",{class:["v-expansion-panel-text",e.class],style:e.style},[t.default&&o.value&&n("div",{class:"v-expansion-panel-text__wrapper"},[(l=t.default)==null?void 0:l.call(t)])]),[[fe,a.isSelected.value]])]}})),{}}}),Z=h({color:String,expandIcon:{type:R,default:"$expand"},collapseIcon:{type:R,default:"$collapse"},hideActions:Boolean,static:Boolean,ripple:{type:[Boolean,Object],default:!1},readonly:Boolean,..._()},"VExpansionPanelTitle"),ee=V()({name:"VExpansionPanelTitle",directives:{Ripple:ce},props:Z(),setup(e,s){let{slots:t}=s;const a=W(y);if(!a)throw new Error("[Vuetify] v-expansion-panel-title needs to be placed inside v-expansion-panel");const{backgroundColorClasses:o,backgroundColorStyles:i}=$(e,"color"),l=u(()=>({collapseIcon:e.collapseIcon,disabled:a.disabled.value,expanded:a.isSelected.value,expandIcon:e.expandIcon,readonly:e.readonly}));return b(()=>{var p;return Y(n("button",{class:["v-expansion-panel-title",{"v-expansion-panel-title--active":a.isSelected.value,"v-expansion-panel-title--static":e.static},o.value,e.class],style:[i.value,e.style],type:"button",tabindex:a.disabled.value?-1:void 0,disabled:a.disabled.value,"aria-expanded":a.isSelected.value,onClick:e.readonly?void 0:a.toggle},[n("span",{class:"v-expansion-panel-title__overlay"},null),(p=t.default)==null?void 0:p.call(t,l.value),!e.hideActions&&n("span",{class:"v-expansion-panel-title__icon"},[t.actions?t.actions(l.value):n(re,{icon:a.isSelected.value?e.collapseIcon:e.expandIcon},null)])]),[[he("ripple"),e.ripple]])}),{}}}),Le=h({title:String,text:String,bgColor:String,..._(),...N(),...ue(),...Q(),...j(),...L(),...Z()},"VExpansionPanel"),$e=V()({name:"VExpansionPanel",props:Le(),emits:{"group:selected":e=>!0},setup(e,s){let{slots:t}=s;const a=de(e,y),{backgroundColorClasses:o,backgroundColorStyles:i}=$(e,"bgColor"),{elevationClasses:l}=G(e),{roundedClasses:p}=U(e),T=u(()=>(a==null?void 0:a.disabled.value)||e.disabled),g=u(()=>a.group.items.value.reduce((d,c,k)=>(a.group.selected.value.includes(c.id)&&d.push(k),d),[])),B=u(()=>{const d=a.group.items.value.findIndex(c=>c.id===a.id);return!a.isSelected.value&&g.value.some(c=>c-d===1)}),P=u(()=>{const d=a.group.items.value.findIndex(c=>c.id===a.id);return!a.isSelected.value&&g.value.some(c=>c-d===-1)});return ge(y,a),J({VExpansionPanelText:{eager:m(e,"eager")},VExpansionPanelTitle:{readonly:m(e,"readonly")}}),b(()=>{const d=!!(t.text||e.text),c=!!(t.title||e.title);return n(e.tag,{class:["v-expansion-panel",{"v-expansion-panel--active":a.isSelected.value,"v-expansion-panel--before-active":B.value,"v-expansion-panel--after-active":P.value,"v-expansion-panel--disabled":T.value},p.value,o.value,e.class],style:[i.value,e.style]},{default:()=>{var k;return[n("div",{class:["v-expansion-panel__shadow",...l.value]},null),c&&n(ee,{key:"title",collapseIcon:e.collapseIcon,color:e.color,expandIcon:e.expandIcon,hideActions:e.hideActions,ripple:e.ripple},{default:()=>[t.title?t.title():e.title]}),d&&n(X,{key:"text"},{default:()=>[t.text?t.text():e.text]}),(k=t.default)==null?void 0:k.call(t)]}})}),{}}}),Re=["innerHTML"],Ae={class:"text-h3 mt-1 mb-3"},Fe={class:"text-body-1"},De={__name:"ELearningType",props:["examples"],setup(e){const s=ye();return(t,a)=>(v(),I(D,{elevation:"5",color:"#fce300",rounded:"",class:"pa-3"},{default:r(()=>[x("div",{innerHTML:e.examples.featuredVideo},null,8,Re),x("h3",Ae,E(e.examples.type),1),n(Te,{class:"mb-3",theme:"dark","bg-color":"#303030",color:"#303030"},{default:r(()=>[n($e,{"bg-color":"#303030"},{default:r(()=>[n(ee,null,{default:r(()=>[S(" Description ")]),_:1}),n(X,null,{default:r(()=>[x("p",Fe,E(e.examples.description),1)]),_:1})]),_:1})]),_:1}),n(M,{block:"",onClick:a[0]||(a[0]=o=>f(s).push({name:"LearningType",params:{id:`${e.examples.type.toLowerCase()}`}}))},{default:r(()=>[S("Learn more")]),_:1})]),_:1}))}};const ze=h({app:Boolean,color:String,height:{type:[Number,String],default:"auto"},...ve(),..._(),...N(),...be(),...j(),...L({tag:"footer"}),...O()},"VFooter"),He=V()({name:"VFooter",props:ze(),setup(e,s){let{slots:t}=s;const{themeClasses:a}=q(e),{backgroundColorClasses:o,backgroundColorStyles:i}=$(m(e,"color")),{borderClasses:l}=xe(e),{elevationClasses:p}=G(e),{roundedClasses:T}=U(e),g=K(32),{resizeRef:B}=me(c=>{c.length&&(g.value=c[0].target.clientHeight)}),P=u(()=>e.height==="auto"?g.value:parseInt(e.height,10)),{layoutItemStyles:d}=Ve({id:e.name,order:u(()=>parseInt(e.order,10)),position:u(()=>"bottom"),layoutSize:P,elementSize:u(()=>e.height==="auto"?void 0:P.value),active:u(()=>e.app),absolute:m(e,"absolute")});return b(()=>n(e.tag,{ref:B,class:["v-footer",a.value,o.value,l.value,p.value,T.value,e.class],style:[i.value,e.app?d.value:{height:_e(e.height)},e.style]},t)),{}}}),Ne={},je=x("strong",null,"Add title and links",-1);function Ge(e,s){return v(),I(He,{class:"bg-grey-lighten-1 mt-12 pt-12 pb-12"},{default:r(()=>[n(z,{justify:"center","no-gutters":""},{default:r(()=>[n(M,{color:"#303030",variant:"text",class:"mx-2",rounded:"xl"},{default:r(()=>[S(" Link ")]),_:1}),n(H,{class:"text-center mt-4",cols:"12"},{default:r(()=>[S(E(new Date().getFullYear())+" — ",1),je]),_:1})]),_:1})]),_:1})}const Ue=F(Ne,[["render",Ge]]),Me={class:"ml-12 mr-12"},Oe=x("h2",{class:"text-h2 mb-6"},"What we do",-1),Ye={__name:"Home",setup(e){const{caseStudies:s}=te(),t=u(()=>s.value.sort((a,o)=>{const i=a.type.toUpperCase(),l=o.type.toUpperCase();return i<l?-1:i>l?1:0}));return(a,o)=>(v(),C(w,null,[(v(!0),C(w,null,A(t.value,(i,l)=>(v(),C("div",{key:l},E(i.name),1))),128)),n(f(ne)),n(f(Ee)),x("div",Me,[Oe,n(z,null,{default:r(()=>[(v(!0),C(w,null,A(f(s),(i,l)=>(v(),I(H,{cols:"12",sm:"12",md:"4",key:l},{default:r(()=>[n(f(De),{examples:i},null,8,["examples"])]),_:2},1024))),128))]),_:1})]),n(f(Ue))],64))}};export{Ye as default};
