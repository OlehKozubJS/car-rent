"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[2756,6817,3546,60,7695,1512,3743,5484],{3546:(a,e,l)=>{l.r(e),l.d(e,{CarGallery:()=>c});var t=l(2791),s=l(7695),n=l(60),r=l(3482),o=l(184);const c=()=>{const[a,e]=(0,t.useState)(!1),[l,c]=(0,t.useState)(0),d=a=>{e(!0),c(a)};return(0,o.jsxs)("div",{children:[a&&(0,o.jsx)(s.CarModal,{carId:Number(l),onClose:()=>{e(!1)}}),(0,o.jsx)("ul",{children:r.NU.map(((a,e)=>(0,o.jsx)(n.CarItem,{car:a,onLearnMore:d},e)))})]})}},60:(a,e,l)=>{l.r(e),l.d(e,{CarItem:()=>n});var t=l(2791),s=(l(3482),l(184));const n=a=>{let{car:e,onLearnMore:l}=a;const[{make:n,model:r,year:o,rentalPrice:c,address:d,rentalCompany:i,type:C,id:m}]=(0,t.useState)(e);return(0,s.jsxs)("li",{children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:"{img}",alt:""})}),(0,s.jsxs)("h3",{children:[(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{children:n}),(0,s.jsx)("span",{children:r}),(0,s.jsx)("span",{children:o})]}),(0,s.jsx)("span",{children:c})]}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:d.split(", ")[1]}),(0,s.jsx)("li",{children:d.split(", ")[2]}),(0,s.jsx)("li",{children:i}),(0,s.jsx)("li",{children:C}),(0,s.jsx)("li",{children:r}),(0,s.jsx)("li",{children:m})]}),(0,s.jsx)("button",{onClick:()=>{l(m)},children:"Learn More"})]})}},6817:(a,e,l)=>{l.r(e),l.d(e,{CarGallery:()=>t.CarGallery,CarItem:()=>s.CarItem});var t=l(3546),s=l(60)},1512:(a,e,l)=>{l.r(e),l.d(e,{CarModal:()=>C});var t=l(2791);const s=l.p+"static/media/icons.a1b870d457e2cfd1e28f038db23ac788.svg",n="SVGimage_Icon__Gb8M3";var r=l(184);const o=a=>{let{name:e}=a;return(0,r.jsx)("svg",{className:n,children:(0,r.jsx)("use",{xlinkHref:"".concat(s,"#").concat(e)})})};var c=l(3482),d=l(3743),i=l(1743);const C=a=>{let{carId:e,onClose:l}=a;const[s]=(0,t.useState)(c.NU.find((a=>a.id===e))),[n,C]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const a=a=>{"keydown"===a.type&&"Escape"===a.key&&l()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}}),[l]),(0,r.jsx)("div",{className:d.default.CarModalBackdrop,children:(0,r.jsxs)("div",{className:d.default.CarModalContainer,children:[(0,r.jsx)("div",{className:d.default.CarModalCloseButtonContainer,children:(0,r.jsx)("button",{className:d.default.CarModalCloseButton,onClick:l,onMouseOver:()=>{C(!0)},onMouseLeave:()=>{C(!1)},children:(0,r.jsx)(o,{className:d.default.CarModalCloseButtonIcon,name:n?"close-hover":"close"})})}),(0,r.jsx)("img",{className:d.default.CarModalImage,src:"{car.img}",alt:""}),(0,r.jsxs)("h3",{className:"".concat(d.default.CarModalHeader," ").concat(i.Bo),children:[(0,r.jsx)("span",{children:s.make})," ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:s.model}),","," ",(0,r.jsx)("span",{children:s.year})]}),(0,r.jsxs)("ul",{className:d.default.CarModalItems,children:[(0,r.jsx)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:s.address.split(", ")[1]}),(0,r.jsx)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:s.address.split(", ")[2]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:["Id: ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:s.id})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:["Year: ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:s.year})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:["Type: ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:s.type})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:["Fuel Consumption:"," ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:s.fuelConsumption})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:["Engine Size:"," ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:s.engineSize})]})]}),(0,r.jsx)("p",{className:"".concat(d.default.CarModalDescription," ").concat(i.Ft),children:s.description}),(0,r.jsx)("h4",{className:"".concat(d.default.CarModalSubHeader," ").concat(i.Bo),children:"Accessories and functionalities:"}),(0,r.jsxs)("ul",{className:d.default.CarModalItems,children:[s.accessories.map(((a,e)=>(0,r.jsx)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:a},e))),s.functionalities.map(((a,e)=>(0,r.jsx)("li",{className:"".concat(d.default.CarModalItem," ").concat(i.Ft),children:a},e)))]}),(0,r.jsxs)("h4",{className:"".concat(d.default.CarModalSubHeader," ").concat(i.Bo),children:["Rental Conditions:"," "]}),(0,r.jsxs)("ul",{className:d.default.CarModalRentalItems,children:[(0,r.jsxs)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(i.xZ),children:["Minimum age:"," ",(0,r.jsx)("span",{className:"".concat(d.default.CarModalItemValue," ").concat(i.tV),children:s.rentalConditions.split("\n")[0].split(" ")[2]})]}),(0,r.jsx)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(i.xZ),children:s.rentalConditions.split("\n")[1]}),(0,r.jsx)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(i.xZ),children:s.rentalConditions.split("\n")[2]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(i.xZ),children:["Mileage:"," ",(0,r.jsx)("span",{className:"".concat(d.default.CarModalItemValue," ").concat(i.tV),children:s.mileage})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(i.xZ),children:["Price:"," ",(0,r.jsx)("span",{className:"".concat(d.default.CarModalItemValue," ").concat(i.tV),children:s.rentalPrice})]})]}),(0,r.jsx)("button",{className:"".concat(d.default.CarModalSubmitButton," ").concat(i.tY),children:"Rental car"})]})})}},7695:(a,e,l)=>{l.r(e),l.d(e,{CarModal:()=>t.CarModal});var t=l(1512)},5484:(a,e,l)=>{l.r(e),l.d(e,{CarRent:()=>n});var t=l(6817),s=l(184);function n(){return(0,s.jsx)("div",{children:(0,s.jsx)(t.CarGallery,{})})}},2756:(a,e,l)=>{l.r(e),l.d(e,{default:()=>t});const t=l(5484).CarRent},1743:(a,e,l)=>{l.d(e,{Fy:()=>c,tY:()=>n,Bo:()=>s,Ft:()=>t,tV:()=>o,xZ:()=>r,Il:()=>d});const t="Fonts_ManropeR__caPUr",s="Fonts_ManropeM__jMix4",n="Fonts_ManropeB__3RoFy",r="Fonts_MontserratR__swdvC",o="Fonts_MontserratB__Dfn8q",c="Fonts_DancingScriptR__qVFET",d="Fonts_RajdhaniR__zONXt"},3743:(a,e,l)=>{l.r(e),l.d(e,{default:()=>t});const t={CarModalBackdrop:"CarModal_CarModalBackdrop__P0Ps6",CarModalContainer:"CarModal_CarModalContainer__y+Z2C",CarModalCloseButtonContainer:"CarModal_CarModalCloseButtonContainer__3BnWE",CarModalCloseButton:"CarModal_CarModalCloseButton__UWbhN",CarModalCloseButtonIcon:"CarModal_CarModalCloseButtonIcon__siQWz",CarModalImage:"CarModal_CarModalImage__lrFYi",CarModalHeader:"CarModal_CarModalHeader__NK-5k",CarModalItems:"CarModal_CarModalItems__UAuAQ",CarModalItem:"CarModal_CarModalItem__LZWmG",CarModalItemValue:"CarModal_CarModalItemValue__0hmsF",CarModalDescription:"CarModal_CarModalDescription__tyoBH",CarModalSubHeader:"CarModal_CarModalSubHeader__00zhf",CarModalRentalItems:"CarModal_CarModalRentalItems__a18S7",CarModalRentalItem:"CarModal_CarModalRentalItem__lOBaK",CarModalSubmitButton:"CarModal_CarModalSubmitButton__q9we5"}}}]);
//# sourceMappingURL=2756.40bb5cd3.chunk.js.map