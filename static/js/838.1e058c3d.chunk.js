"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[838,13],{838:(t,a,e)=>{e.r(a),e.d(a,{MultiplicationQuiz:()=>n});var u=e(791),l=e(13),s=e(184);const n=()=>{const[t,a]=(0,u.useState)(""),[e,n]=(0,u.useState)(10),[o,d]=(0,u.useState)(0),[c,r]=(0,u.useState)(0),[i,b]=(0,u.useState)(0),f=(t,a)=>t+Math.floor(Math.random()*(a+1-t)),h=()=>{d(0),n(10);const t=f(1,10),e=f(1,10);b(t*e),a(t+" * "+e)},N=t=>{const a=Number(t.target.dataset.value),e=10*o+a;e<=100&&d(e)},j=()=>{r(i===o?c+1:c-1),h()};return(0,u.useEffect)((()=>{const t=setInterval((()=>{0===e?j():n(e-1)}),1e3);return()=>{clearInterval(t)}}),[e]),(0,u.useEffect)((()=>{h()}),[i]),(0,s.jsxs)("div",{className:l.default.Container,children:[(0,s.jsxs)("div",{className:l.default.Outputs,children:[(0,s.jsx)("div",{className:l.default.Output,children:t}),(0,s.jsx)("div",{className:l.default.Output,children:e}),(0,s.jsx)("div",{className:l.default.Output,children:o}),(0,s.jsx)("div",{className:l.default.Output,children:c})]}),(0,s.jsxs)("div",{className:l.default.KeyboardButtons,children:[(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":1,children:"1"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":2,children:"2"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":3,children:"3"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":4,children:"4"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":5,children:"5"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":6,children:"6"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":7,children:"7"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":8,children:"8"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":9,children:"9"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:()=>{d(Math.floor(o/10))},children:"C"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:N,"data-value":0,children:"0"}),(0,s.jsx)("button",{className:l.default.KeyboardButton,onClick:j,children:"E"})]})]})}},13:(t,a,e)=>{e.r(a),e.d(a,{default:()=>u});const u={Container:"MultQuiz_Container__f5LQk",Outputs:"MultQuiz_Outputs__SPsJz",Output:"MultQuiz_Output__s7x53",KeyboardButtons:"MultQuiz_KeyboardButtons__NyGyA",KeyboardButton:"MultQuiz_KeyboardButton__SWENB"}}}]);
//# sourceMappingURL=838.1e058c3d.chunk.js.map