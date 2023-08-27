(function(t,o){typeof exports=="object"&&typeof module<"u"?module.exports=o(require("react")):typeof define=="function"&&define.amd?define(["react"],o):(t=typeof globalThis<"u"?globalThis:t||self,t.remote=o(t.React))})(this,function(t){"use strict";var o={exports:{}},n={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f;function a(){if(f)return n;f=1;var i=t,m=Symbol.for("react.element"),y=Symbol.for("react.fragment"),x=Object.prototype.hasOwnProperty,b=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R={key:!0,ref:!0,__self:!0,__source:!0};function p(s,e,_){var r,u={},l=null,c=null;_!==void 0&&(l=""+_),e.key!==void 0&&(l=""+e.key),e.ref!==void 0&&(c=e.ref);for(r in e)x.call(e,r)&&!R.hasOwnProperty(r)&&(u[r]=e[r]);if(s&&s.defaultProps)for(r in e=s.defaultProps,e)u[r]===void 0&&(u[r]=e[r]);return{$$typeof:m,type:s,key:l,ref:c,props:u,_owner:b.current}}return n.Fragment=y,n.jsx=p,n.jsxs=p,n}o.exports=a();var d=o.exports;return Object.freeze(Object.defineProperty({__proto__:null,default:({message:i})=>(console.log("Message from host",i),d.jsxs("div",{style:{border:"2px dashed blue"},children:["Hey, I'm a remote lib, and I was given a message by the host app: ",d.jsx("br",{}),i]}))},Symbol.toStringTag,{value:"Module"}))});
