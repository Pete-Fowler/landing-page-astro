import{r as m}from"./index.DhYZZe0J.js";/* empty css                            */var p={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=m,_=Symbol.for("react.element"),x=Symbol.for("react.fragment"),j=Object.prototype.hasOwnProperty,v=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,y={key:!0,ref:!0,__self:!0,__source:!0};function u(o,e,n){var r,s={},a=null,c=null;n!==void 0&&(a=""+n),e.key!==void 0&&(a=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)j.call(e,r)&&!y.hasOwnProperty(r)&&(s[r]=e[r]);if(o&&o.defaultProps)for(r in e=o.defaultProps,e)s[r]===void 0&&(s[r]=e[r]);return{$$typeof:_,type:o,key:a,ref:c,props:s,_owner:v.current}}i.Fragment=x;i.jsx=u;i.jsxs=u;p.exports=i;var t=p.exports;function R({images:o}){const[e,n]=m.useState(!1),[r,s]=m.useState(null),a=l=>{s(l),n(!0)},c=()=>{n(!1),s(null)};return console.log("Render"),t.jsxs(t.Fragment,{children:[t.jsx("div",{className:"thumbnails",children:o.map((l,d)=>t.jsx("img",{title:l.alt,src:l.src,alt:l.alt,className:"thumbnail",onClick:()=>a(l)},d))}),e&&t.jsxs("div",{className:"modal",onClick:c,children:[t.jsx("span",{className:"close",onClick:c,children:"×"}),t.jsx("img",{src:r.src,alt:r.alt,className:"modal-image"})]})]})}export{R as default};
