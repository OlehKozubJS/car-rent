"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[929,349,772,838],{349:(t,a,e)=>{e.r(a),e.d(a,{Container:()=>u,KeyboardButton:()=>r,KeyboardButtons:()=>c,Output:()=>l,Outputs:()=>s});var n=e(209),o=e(351);const u="".concat(n.default.Container," ").concat(o.Fy),s=n.default.Outputs,l=n.default.Output,c=n.default.KeyboardButtons,r="".concat(n.default.KeyboardButton," ").concat(o.Fy)},838:(t,a,e)=>{e.r(a),e.d(a,{MultiplicationQuiz:()=>s});var n=e(791),o=e(349),u=e(184);const s=()=>{const[t,a]=(0,n.useState)(""),[e,s]=(0,n.useState)(10),[l,c]=(0,n.useState)(0),[r,d]=(0,n.useState)(0),[i,b]=(0,n.useState)(0),_=(t,a)=>t+Math.floor(Math.random()*(a+1-t)),h=()=>{c(0),s(10);const t=_(1,10),e=_(1,10);b(t*e),a(t+" * "+e)},y=t=>{const a=Number(t.target.dataset.value),e=10*l+a;e<=100&&c(e)},p=()=>{d(i===l?r+1:r-1),h()};return(0,n.useEffect)((()=>{const t=setInterval((()=>{0===e?p():s(e-1)}),1e3);return()=>{clearInterval(t)}}),[e]),(0,n.useEffect)((()=>{h()}),[]),(0,u.jsxs)("div",{className:o.Container,children:[(0,u.jsxs)("div",{className:o.Outputs,children:[(0,u.jsx)("div",{className:o.Output,children:t}),(0,u.jsx)("div",{className:o.Output,children:e}),(0,u.jsx)("div",{className:o.Output,children:l}),(0,u.jsx)("div",{className:o.Output,children:r})]}),(0,u.jsxs)("div",{className:o.KeyboardButtons,children:[(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":1,children:"1"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":2,children:"2"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":3,children:"3"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":4,children:"4"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":5,children:"5"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":6,children:"6"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":7,children:"7"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":8,children:"8"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":9,children:"9"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:()=>{c(Math.floor(l/10))},children:"C"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:y,"data-value":0,children:"0"}),(0,u.jsx)("button",{className:o.KeyboardButton,onClick:p,children:"E"})]})]})}},929:(t,a,e)=>{e.r(a),e.d(a,{default:()=>n});const n=e(838).MultiplicationQuiz},351:(t,a,e)=>{e.d(a,{Fy:()=>c,tY:()=>u,Bo:()=>o,Ft:()=>n,tV:()=>l,xZ:()=>s});const n="Fonts_ManropeR__caPUr",o="Fonts_ManropeM__jMix4",u="Fonts_ManropeB__3RoFy",s="Fonts_MontserratR__swdvC",l="Fonts_MontserratB__Dfn8q",c="Fonts_DancingScriptR__qVFET"},209:(t,a,e)=>{e.r(a),e.d(a,{default:()=>n});const n={Container:"MultQuiz_Container__hM7pZ",Outputs:"MultQuiz_Outputs__PkyXT",Output:"MultQuiz_Output__z2gZZ",KeyboardButtons:"MultQuiz_KeyboardButtons__PyPbn",KeyboardButton:"MultQuiz_KeyboardButton__Ba44S"}}}]);
//# sourceMappingURL=929.6121ef9c.chunk.js.map