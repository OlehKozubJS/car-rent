"use strict";(self.webpackChunkoleh_kozub_projects=self.webpackChunkoleh_kozub_projects||[]).push([[695,26,743],{26:(a,e,l)=>{l.r(e),l.d(e,{CarModal:()=>_});var t=l(791);const o=l.p+"static/media/icons.a1b870d457e2cfd1e28f038db23ac788.svg",s="SVGimage_Icon__Gb8M3";var c=l(184);const n=a=>{let{name:e}=a;return(0,c.jsx)("svg",{className:s,children:(0,c.jsx)("use",{xlinkHref:"".concat(o,"#").concat(e)})})};var d=l(843),r=l(743);const i="Fonts_ManropeR__caPUr",C="Fonts_ManropeM__jMix4",m="Fonts_ManropeB__3RoFy",M="Fonts_MontserratR__swdvC",u="Fonts_MontserratB__Dfn8q",_=a=>{let{carId:e,onClose:l}=a;const[o]=(0,t.useState)(d.N.find((a=>a.id===e))),[s,_]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{const a=a=>{"keydown"===a.type&&"Escape"===a.key&&l()};return window.addEventListener("keydown",a),()=>{window.removeEventListener("keydown",a)}}),[l]),(0,c.jsx)("div",{className:r.default.CarModalBackdrop,children:(0,c.jsxs)("div",{className:r.default.CarModalContainer,children:[(0,c.jsx)("div",{className:r.default.CarModalCloseButtonContainer,children:(0,c.jsx)("button",{className:r.default.CarModalCloseButton,onClick:l,onMouseOver:()=>{_(!0)},onMouseLeave:()=>{_(!1)},children:(0,c.jsx)(n,{className:r.default.CarModalCloseButtonIcon,name:s?"close-hover":"close"})})}),(0,c.jsx)("img",{className:r.default.CarModalImage,src:"{car.img}",alt:""}),(0,c.jsxs)("h3",{className:"".concat(r.default.CarModalHeader," ").concat(C),children:[(0,c.jsx)("span",{children:o.make})," ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.model}),","," ",(0,c.jsx)("span",{children:o.year})]}),(0,c.jsxs)("ul",{className:r.default.CarModalItems,children:[(0,c.jsx)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:o.address.split(", ")[1]}),(0,c.jsx)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:o.address.split(", ")[2]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:["Id: ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.id})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:["Year: ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.year})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:["Type: ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.type})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:["Fuel Consumption:"," ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.fuelConsumption})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:["Engine Size:"," ",(0,c.jsx)("span",{className:r.default.CarModalItemValue,children:o.engineSize})]})]}),(0,c.jsx)("p",{className:"".concat(r.default.CarModalDescription," ").concat(i),children:o.description}),(0,c.jsx)("h4",{className:"".concat(r.default.CarModalSubHeader," ").concat(C),children:"Accessories and functionalities:"}),(0,c.jsxs)("ul",{className:r.default.CarModalItems,children:[o.accessories.map(((a,e)=>(0,c.jsx)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:a},e))),o.functionalities.map(((a,e)=>(0,c.jsx)("li",{className:"".concat(r.default.CarModalItem," ").concat(i),children:a},e)))]}),(0,c.jsxs)("h4",{className:"".concat(r.default.CarModalSubHeader," ").concat(C),children:["Rental Conditions:"," "]}),(0,c.jsxs)("ul",{className:r.default.CarModalRentalItems,children:[(0,c.jsxs)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(M),children:["Minimum age:"," ",(0,c.jsx)("span",{className:"".concat(r.default.CarModalItemValue," ").concat(u),children:o.rentalConditions.split("\n")[0].split(" ")[2]})]}),(0,c.jsx)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(M),children:o.rentalConditions.split("\n")[1]}),(0,c.jsx)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(M),children:o.rentalConditions.split("\n")[2]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(M),children:["Mileage:"," ",(0,c.jsx)("span",{className:"".concat(r.default.CarModalItemValue," ").concat(u),children:o.mileage})]}),(0,c.jsxs)("li",{className:"".concat(r.default.CarModalRentalItem," ").concat(M),children:["Price:"," ",(0,c.jsx)("span",{className:"".concat(r.default.CarModalItemValue," ").concat(u),children:o.rentalPrice})]})]}),(0,c.jsx)("button",{className:"".concat(r.default.CarModalSubmitButton," ").concat(m),children:"Rental car"})]})})}},695:(a,e,l)=>{l.r(e),l.d(e,{CarModal:()=>t.CarModal});var t=l(26)},743:(a,e,l)=>{l.r(e),l.d(e,{default:()=>t});const t={CarModalBackdrop:"CarModal_CarModalBackdrop__P0Ps6",CarModalContainer:"CarModal_CarModalContainer__y+Z2C",CarModalCloseButtonContainer:"CarModal_CarModalCloseButtonContainer__3BnWE",CarModalCloseButton:"CarModal_CarModalCloseButton__UWbhN",CarModalCloseButtonIcon:"CarModal_CarModalCloseButtonIcon__siQWz",CarModalImage:"CarModal_CarModalImage__lrFYi",CarModalHeader:"CarModal_CarModalHeader__NK-5k",CarModalItems:"CarModal_CarModalItems__UAuAQ",CarModalItem:"CarModal_CarModalItem__LZWmG",CarModalItemValue:"CarModal_CarModalItemValue__0hmsF",CarModalDescription:"CarModal_CarModalDescription__tyoBH",CarModalSubHeader:"CarModal_CarModalSubHeader__00zhf",CarModalRentalItems:"CarModal_CarModalRentalItems__a18S7",CarModalRentalItem:"CarModal_CarModalRentalItem__lOBaK",CarModalSubmitButton:"CarModal_CarModalSubmitButton__q9we5"}}}]);
//# sourceMappingURL=695.019425fe.chunk.js.map