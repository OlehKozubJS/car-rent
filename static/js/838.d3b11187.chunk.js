"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[838,349,772,630,120,840],{349:(t,a,n)=>{n.r(a),n.d(a,{Container:()=>s,KeyboardButton:()=>c,KeyboardButtons:()=>l,Output:()=>r,Outputs:()=>o});var e=n(209),u=n(351);const s="".concat(e.default.Container," ").concat(u.Fy),o=e.default.Outputs,r=e.default.Output,l=e.default.KeyboardButtons,c="".concat(e.default.KeyboardButton," ").concat(u.Fy)},120:(t,a,n)=>{n.r(a),n.d(a,{QuizButtons:()=>s});var e=n(349),u=n(184);const s=t=>{let{onAnswerInput:a,onEnter:n,answer:s}=t;const o=t=>{const n=Number(t.target.dataset.value);a(10*s+n)};return(0,u.jsxs)("div",{className:e.KeyboardButtons,children:[(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":1,children:"1"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":2,children:"2"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":3,children:"3"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":4,children:"4"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":5,children:"5"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":6,children:"6"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":7,children:"7"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":8,children:"8"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":9,children:"9"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:()=>{const t=Math.floor(s/10);a(t)},children:"C"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:o,"data-value":0,children:"0"}),(0,u.jsx)("button",{className:e.KeyboardButton,onClick:()=>{n()},children:"E"})]})}},840:(t,a,n)=>{n.r(a),n.d(a,{QuizOutputs:()=>s});var e=n(349),u=n(184);const s=t=>{let{task:a,time:n,answer:s,points:o}=t;return(0,u.jsxs)("div",{className:e.Outputs,children:[(0,u.jsx)("div",{className:e.Output,children:a}),(0,u.jsx)("div",{className:e.Output,children:n}),(0,u.jsx)("div",{className:e.Output,children:s}),(0,u.jsx)("div",{className:e.Output,children:o})]})}},630:(t,a,n)=>{n.r(a),n.d(a,{QuizButtons:()=>e.QuizButtons,QuizOutputs:()=>u.QuizOutputs});var e=n(120),u=n(840)},838:(t,a,n)=>{n.r(a),n.d(a,{MultiplicationQuiz:()=>r});var e=n(791),u=n(349),s=n(630),o=n(184);const r=()=>{const[t,a]=(0,e.useState)(""),[n,r]=(0,e.useState)(10),[l,c]=(0,e.useState)(0),[d,i]=(0,e.useState)(0),[b,_]=(0,e.useState)(0),p=(t,a)=>t+Math.floor(Math.random()*(a+1-t)),B=()=>{i(b===l?d+1:d-1),c(0)};return(0,e.useEffect)((()=>{const t=setInterval((()=>{1===n?B():r(n-1)}),1e3);return()=>{clearInterval(t)}}),[n]),(0,e.useEffect)((()=>{(()=>{c(0),r(10);const t=p(1,10),n=p(1,10);_(t*n),a(t+" * "+n)})()}),[d]),(0,o.jsxs)("div",{className:u.Container,children:[(0,o.jsx)(s.QuizOutputs,{task:t,time:n,answer:l,points:d}),(0,o.jsx)(s.QuizButtons,{onAnswerInput:t=>{c(t)},onEnter:B,answer:l})]})}},351:(t,a,n)=>{n.d(a,{Fy:()=>l,tY:()=>s,Bo:()=>u,Ft:()=>e,tV:()=>r,xZ:()=>o});const e="Fonts_ManropeR__caPUr",u="Fonts_ManropeM__jMix4",s="Fonts_ManropeB__3RoFy",o="Fonts_MontserratR__swdvC",r="Fonts_MontserratB__Dfn8q",l="Fonts_DancingScriptR__qVFET"},209:(t,a,n)=>{n.r(a),n.d(a,{default:()=>e});const e={Container:"MultQuiz_Container__hM7pZ",Outputs:"MultQuiz_Outputs__PkyXT",Output:"MultQuiz_Output__z2gZZ",KeyboardButtons:"MultQuiz_KeyboardButtons__PyPbn",KeyboardButton:"MultQuiz_KeyboardButton__Ba44S"}}}]);
//# sourceMappingURL=838.d3b11187.chunk.js.map