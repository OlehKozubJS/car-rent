"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[484,817,546,60,695,26,743],{546:(a,e,l)=>{l.r(e),l.d(e,{CarGallery:()=>c});var s=l(791),t=l(695),n=l(60),r=l(843),o=l(184);const c=()=>{const[a,e]=(0,s.useState)(!1),[l,c]=(0,s.useState)(0),d=a=>{e(!0),c(a)};return(0,o.jsxs)("div",{children:[a&&(0,o.jsx)(t.CarModal,{carId:Number(l),onClose:()=>{e(!1)}}),(0,o.jsx)("ul",{children:r.N.map(((a,e)=>(0,o.jsx)(n.CarItem,{car:a,onLearnMore:d},e)))})]})}},60:(a,e,l)=>{l.r(e),l.d(e,{CarItem:()=>n});var s=l(791),t=(l(843),l(184));const n=a=>{let{car:e,onLearnMore:l}=a;const[{make:n,model:r,year:o,rentalPrice:c,address:d,rentalCompany:i,type:C,id:m}]=(0,s.useState)(e);return(0,t.jsxs)("li",{children:[(0,t.jsx)("div",{children:(0,t.jsx)("img",{src:"{img}",alt:""})}),(0,t.jsxs)("h3",{children:[(0,t.jsxs)("span",{children:[(0,t.jsx)("span",{children:n}),(0,t.jsx)("span",{children:r}),(0,t.jsx)("span",{children:o})]}),(0,t.jsx)("span",{children:c})]}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:d.split(", ")[1]}),(0,t.jsx)("li",{children:d.split(", ")[2]}),(0,t.jsx)("li",{children:i}),(0,t.jsx)("li",{children:C}),(0,t.jsx)("li",{children:r}),(0,t.jsx)("li",{children:m})]}),(0,t.jsx)("button",{onClick:()=>{l(m)},children:"Learn More"})]})}},817:(a,e,l)=>{l.r(e),l.d(e,{CarGallery:()=>s.CarGallery,CarItem:()=>t.CarItem});var s=l(546),t=l(60)},26:(a,e,l)=>{l.r(e),l.d(e,{CarModal:()=>h});var s=l(791);const t=l.p+"static/media/icons.a1b870d457e2cfd1e28f038db23ac788.svg",n="SVGimage_Icon__Gb8M3";var r=l(184);const o=a=>{let{name:e}=a;return(0,r.jsx)("svg",{className:n,children:(0,r.jsx)("use",{xlinkHref:"".concat(t,"#").concat(e)})})};var c=l(843),d=l(743);const i="Fonts_ManropeR__caPUr",C="Fonts_ManropeM__jMix4",m="Fonts_ManropeB__3RoFy",u="Fonts_MontserratR__swdvC",M="Fonts_MontserratB__Dfn8q",h=a=>{let{carId:e,onClose:l}=a;const[t]=(0,s.useState)(c.N.find((a=>a.id===e))),[n,h]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{const a=a=>{"keydown"===a.type&&"Escape"===a.key&&l()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}}),[l]),(0,r.jsx)("div",{className:d.default.CarModalBackdrop,children:(0,r.jsxs)("div",{className:d.default.CarModalContainer,children:[(0,r.jsx)("div",{className:d.default.CarModalCloseButtonContainer,children:(0,r.jsx)("button",{className:d.default.CarModalCloseButton,onClick:l,onMouseOver:()=>{h(!0)},onMouseLeave:()=>{h(!1)},children:(0,r.jsx)(o,{className:d.default.CarModalCloseButtonIcon,name:n?"close-hover":"close"})})}),(0,r.jsx)("img",{className:d.default.CarModalImage,src:"{car.img}",alt:""}),(0,r.jsxs)("h3",{className:"".concat(d.default.CarModalHeader," ").concat(C),children:[(0,r.jsx)("span",{children:t.make})," ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:t.model}),","," ",(0,r.jsx)("span",{children:t.year})]}),(0,r.jsxs)("ul",{className:d.default.CarModalItems,children:[(0,r.jsx)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:t.address.split(", ")[1]}),(0,r.jsx)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:t.address.split(", ")[2]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:["Id: ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:t.id})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:["Year: ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:t.year})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:["Type: ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:t.type})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:["Fuel Consumption:"," ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:t.fuelConsumption})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:["Engine Size:"," ",(0,r.jsx)("span",{className:d.default.CarModalItemValue,children:t.engineSize})]})]}),(0,r.jsx)("p",{className:"".concat(d.default.CarModalDescription," ").concat(i),children:t.description}),(0,r.jsx)("h4",{className:"".concat(d.default.CarModalSubHeader," ").concat(C),children:"Accessories and functionalities:"}),(0,r.jsxs)("ul",{className:d.default.CarModalItems,children:[t.accessories.map(((a,e)=>(0,r.jsx)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:a},e))),t.functionalities.map(((a,e)=>(0,r.jsx)("li",{className:"".concat(d.default.CarModalItem," ").concat(i),children:a},e)))]}),(0,r.jsxs)("h4",{className:"".concat(d.default.CarModalSubHeader," ").concat(C),children:["Rental Conditions:"," "]}),(0,r.jsxs)("ul",{className:d.default.CarModalRentalItems,children:[(0,r.jsxs)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(u),children:["Minimum age:"," ",(0,r.jsx)("span",{className:"".concat(d.default.CarModalItemValue," ").concat(M),children:t.rentalConditions.split("\n")[0].split(" ")[2]})]}),(0,r.jsx)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(u),children:t.rentalConditions.split("\n")[1]}),(0,r.jsx)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(u),children:t.rentalConditions.split("\n")[2]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(u),children:["Mileage:"," ",(0,r.jsx)("span",{className:"".concat(d.default.CarModalItemValue," ").concat(M),children:t.mileage})]}),(0,r.jsxs)("li",{className:"".concat(d.default.CarModalRentalItem," ").concat(u),children:["Price:"," ",(0,r.jsx)("span",{className:"".concat(d.default.CarModalItemValue," ").concat(M),children:t.rentalPrice})]})]}),(0,r.jsx)("button",{className:"".concat(d.default.CarModalSubmitButton," ").concat(m),children:"Rental car"})]})})}},695:(a,e,l)=>{l.r(e),l.d(e,{CarModal:()=>s.CarModal});var s=l(26)},484:(a,e,l)=>{l.r(e),l.d(e,{CarRent:()=>n});var s=l(817),t=l(184);function n(){return(0,t.jsx)("div",{children:(0,t.jsx)(s.CarGallery,{})})}},743:(a,e,l)=>{l.r(e),l.d(e,{default:()=>s});const s={CarModalBackdrop:"CarModal_CarModalBackdrop__P0Ps6",CarModalContainer:"CarModal_CarModalContainer__y+Z2C",CarModalCloseButtonContainer:"CarModal_CarModalCloseButtonContainer__3BnWE",CarModalCloseButton:"CarModal_CarModalCloseButton__UWbhN",CarModalCloseButtonIcon:"CarModal_CarModalCloseButtonIcon__siQWz",CarModalImage:"CarModal_CarModalImage__lrFYi",CarModalHeader:"CarModal_CarModalHeader__NK-5k",CarModalItems:"CarModal_CarModalItems__UAuAQ",CarModalItem:"CarModal_CarModalItem__LZWmG",CarModalItemValue:"CarModal_CarModalItemValue__0hmsF",CarModalDescription:"CarModal_CarModalDescription__tyoBH",CarModalSubHeader:"CarModal_CarModalSubHeader__00zhf",CarModalRentalItems:"CarModal_CarModalRentalItems__a18S7",CarModalRentalItem:"CarModal_CarModalRentalItem__lOBaK",CarModalSubmitButton:"CarModal_CarModalSubmitButton__q9we5"}}}]);
//# sourceMappingURL=484.4979df6d.chunk.js.map