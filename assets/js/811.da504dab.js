/*! For license information please see 811.da504dab.js.LICENSE.txt */
(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[811],{7757:function(e,t,r){e.exports=r(5666)},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return p}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(r),p=o,h=d["".concat(u,".").concat(p)]||d[p]||f[p]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9661:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),c=r(7192),u=r(1496),s=r(4502),l=r(8169),f=r(5893),d=(0,l.Z)((0,f.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),p=r(8979);function h(e){return(0,p.Z)("MuiAvatar",e)}(0,r(6087).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);const v=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,u.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((({theme:e,ownerState:t})=>(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===t.variant&&{borderRadius:e.shape.borderRadius},"square"===t.variant&&{borderRadius:0},t.colorDefault&&{color:e.palette.background.default,backgroundColor:"light"===e.palette.mode?e.palette.grey[400]:e.palette.grey[600]}))),y=(0,u.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,t)=>t.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),m=(0,u.ZP)(d,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,t)=>t.fallback})({width:"75%",height:"75%"});var b=a.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiAvatar"}),{alt:u,children:l,className:d,component:p="div",imgProps:b,sizes:w,src:Z,srcSet:x,variant:k="circular"}=r,O=(0,n.Z)(r,v);let R=null;const T=function({crossOrigin:e,referrerPolicy:t,src:r,srcSet:n}){const[o,i]=a.useState(!1);return a.useEffect((()=>{if(!r&&!n)return;i(!1);let o=!0;const a=new Image;return a.onload=()=>{o&&i("loaded")},a.onerror=()=>{o&&i("error")},a.crossOrigin=e,a.referrerPolicy=t,a.src=r,n&&(a.srcset=n),()=>{o=!1}}),[e,t,r,n]),o}((0,o.Z)({},b,{src:Z,srcSet:x})),E=Z||x,S=E&&"error"!==T,j=(0,o.Z)({},r,{colorDefault:!S,component:p,variant:k}),P=(e=>{const{classes:t,variant:r,colorDefault:n}=e,o={root:["root",r,n&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,c.Z)(o,h,t)})(j);return R=S?(0,f.jsx)(y,(0,o.Z)({alt:u,src:Z,srcSet:x,sizes:w,ownerState:j,className:P.img},b)):null!=l?l:E&&u?u[0]:(0,f.jsx)(m,{className:P.fallback}),(0,f.jsx)(g,(0,o.Z)({as:p,ownerState:j,className:(0,i.Z)(P.root,d),ref:t},O,{children:R}))}))},7906:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),c=r(7192),u=r(1618),s=r(4502),l=r(1496),f=r(8979);function d(e){return(0,f.Z)("MuiTable",e)}(0,r(6087).Z)("MuiTable",["root","stickyHeader"]);var p=r(5893);const h=["className","component","padding","size","stickyHeader"],v=(0,l.ZP)("table",{name:"MuiTable",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,o.Z)({display:"table",width:"100%",borderCollapse:"collapse",borderSpacing:0,"& caption":(0,o.Z)({},e.typography.body2,{padding:e.spacing(2),color:e.palette.text.secondary,textAlign:"left",captionSide:"bottom"})},t.stickyHeader&&{borderCollapse:"separate"}))),g="table";var y=a.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiTable"}),{className:l,component:f=g,padding:y="normal",size:m="medium",stickyHeader:b=!1}=r,w=(0,n.Z)(r,h),Z=(0,o.Z)({},r,{component:f,padding:y,size:m,stickyHeader:b}),x=(e=>{const{classes:t,stickyHeader:r}=e,n={root:["root",r&&"stickyHeader"]};return(0,c.Z)(n,d,t)})(Z),k=a.useMemo((()=>({padding:y,size:m,stickyHeader:b})),[y,m,b]);return(0,p.jsx)(u.Z.Provider,{value:k,children:(0,p.jsx)(v,(0,o.Z)({as:f,role:f===g?null:"table",ref:t,className:(0,i.Z)(x.root,l),ownerState:Z},w))})}))},1618:function(e,t,r){"use strict";const n=r(7294).createContext();t.Z=n},9018:function(e,t,r){"use strict";const n=r(7294).createContext();t.Z=n},295:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7462),o=r(3366),a=r(7294),i=r(6010),c=r(7192),u=r(9018),s=r(4502),l=r(1496),f=r(8979);function d(e){return(0,f.Z)("MuiTableBody",e)}(0,r(6087).Z)("MuiTableBody",["root"]);var p=r(5893);const h=["className","component"],v=(0,l.ZP)("tbody",{name:"MuiTableBody",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-row-group"}),g={variant:"body"},y="tbody";var m=a.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiTableBody"}),{className:a,component:l=y}=r,f=(0,o.Z)(r,h),m=(0,n.Z)({},r,{component:l}),b=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},d,t)})(m);return(0,p.jsx)(u.Z.Provider,{value:g,children:(0,p.jsx)(v,(0,n.Z)({className:(0,i.Z)(b.root,a),as:l,ref:t,role:l===y?null:"rowgroup",ownerState:m},f))})}))},3252:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var n=r(3366),o=r(7462),a=r(7294),i=r(6010),c=r(7192),u=r(1796),s=r(8216),l=r(1618),f=r(9018),d=r(4502),p=r(1496),h=r(8979);function v(e){return(0,h.Z)("MuiTableCell",e)}var g=(0,r(6087).Z)("MuiTableCell",["root","head","body","footer","sizeSmall","sizeMedium","paddingCheckbox","paddingNone","alignLeft","alignCenter","alignRight","alignJustify","stickyHeader"]),y=r(5893);const m=["align","className","component","padding","scope","size","sortDirection","variant"],b=(0,p.ZP)("td",{name:"MuiTableCell",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[r.variant],t[`size${(0,s.Z)(r.size)}`],"normal"!==r.padding&&t[`padding${(0,s.Z)(r.padding)}`],"inherit"!==r.align&&t[`align${(0,s.Z)(r.align)}`],r.stickyHeader&&t.stickyHeader]}})((({theme:e,ownerState:t})=>(0,o.Z)({},e.typography.body2,{display:"table-cell",verticalAlign:"inherit",borderBottom:`1px solid\n    ${"light"===e.palette.mode?(0,u.$n)((0,u.Fq)(e.palette.divider,1),.88):(0,u._j)((0,u.Fq)(e.palette.divider,1),.68)}`,textAlign:"left",padding:16},"head"===t.variant&&{color:e.palette.text.primary,lineHeight:e.typography.pxToRem(24),fontWeight:e.typography.fontWeightMedium},"body"===t.variant&&{color:e.palette.text.primary},"footer"===t.variant&&{color:e.palette.text.secondary,lineHeight:e.typography.pxToRem(21),fontSize:e.typography.pxToRem(12)},"small"===t.size&&{padding:"6px 16px",[`&.${g.paddingCheckbox}`]:{width:24,padding:"0 12px 0 16px","& > *":{padding:0}}},"checkbox"===t.padding&&{width:48,padding:"0 0 0 4px"},"none"===t.padding&&{padding:0},"left"===t.align&&{textAlign:"left"},"center"===t.align&&{textAlign:"center"},"right"===t.align&&{textAlign:"right",flexDirection:"row-reverse"},"justify"===t.align&&{textAlign:"justify"},t.stickyHeader&&{position:"sticky",top:0,zIndex:2,backgroundColor:e.palette.background.default})));var w=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiTableCell"}),{align:u="inherit",className:p,component:h,padding:g,scope:w,size:Z,sortDirection:x,variant:k}=r,O=(0,n.Z)(r,m),R=a.useContext(l.Z),T=a.useContext(f.Z),E=T&&"head"===T.variant;let S;S=h||(E?"th":"td");let j=w;!j&&E&&(j="col");const P=k||T&&T.variant,C=(0,o.Z)({},r,{align:u,component:S,padding:g||(R&&R.padding?R.padding:"normal"),size:Z||(R&&R.size?R.size:"medium"),sortDirection:x,stickyHeader:"head"===P&&R&&R.stickyHeader,variant:P}),M=(e=>{const{classes:t,variant:r,align:n,padding:o,size:a,stickyHeader:i}=e,u={root:["root",r,i&&"stickyHeader","inherit"!==n&&`align${(0,s.Z)(n)}`,"normal"!==o&&`padding${(0,s.Z)(o)}`,`size${(0,s.Z)(a)}`]};return(0,c.Z)(u,v,t)})(C);let L=null;return x&&(L="asc"===x?"ascending":"descending"),(0,y.jsx)(b,(0,o.Z)({as:S,ref:t,className:(0,i.Z)(M.root,p),"aria-sort":L,scope:j,ownerState:C},O))}))},2882:function(e,t,r){"use strict";r.d(t,{Z:function(){return v}});var n=r(7462),o=r(3366),a=r(7294),i=r(6010),c=r(7192),u=r(4502),s=r(1496),l=r(8979);function f(e){return(0,l.Z)("MuiTableContainer",e)}(0,r(6087).Z)("MuiTableContainer",["root"]);var d=r(5893);const p=["className","component"],h=(0,s.ZP)("div",{name:"MuiTableContainer",slot:"Root",overridesResolver:(e,t)=>t.root})({width:"100%",overflowX:"auto"});var v=a.forwardRef((function(e,t){const r=(0,u.Z)({props:e,name:"MuiTableContainer"}),{className:a,component:s="div"}=r,l=(0,o.Z)(r,p),v=(0,n.Z)({},r,{component:s}),g=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},f,t)})(v);return(0,d.jsx)(h,(0,n.Z)({ref:t,as:s,className:(0,i.Z)(g.root,a),ownerState:v},l))}))},3184:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var n=r(7462),o=r(3366),a=r(7294),i=r(6010),c=r(7192),u=r(9018),s=r(4502),l=r(1496),f=r(8979);function d(e){return(0,f.Z)("MuiTableHead",e)}(0,r(6087).Z)("MuiTableHead",["root"]);var p=r(5893);const h=["className","component"],v=(0,l.ZP)("thead",{name:"MuiTableHead",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"table-header-group"}),g={variant:"head"},y="thead";var m=a.forwardRef((function(e,t){const r=(0,s.Z)({props:e,name:"MuiTableHead"}),{className:a,component:l=y}=r,f=(0,o.Z)(r,h),m=(0,n.Z)({},r,{component:l}),b=(e=>{const{classes:t}=e;return(0,c.Z)({root:["root"]},d,t)})(m);return(0,p.jsx)(u.Z.Provider,{value:g,children:(0,p.jsx)(v,(0,n.Z)({as:l,className:(0,i.Z)(b.root,a),ref:t,role:l===y?null:"rowgroup",ownerState:m},f))})}))},3816:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var n=r(7462),o=r(3366),a=r(7294),i=r(6010),c=r(7192),u=r(1796),s=r(9018),l=r(4502),f=r(1496),d=r(8979);function p(e){return(0,d.Z)("MuiTableRow",e)}var h=(0,r(6087).Z)("MuiTableRow",["root","selected","hover","head","footer"]),v=r(5893);const g=["className","component","hover","selected"],y=(0,f.ZP)("tr",{name:"MuiTableRow",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.head&&t.head,r.footer&&t.footer]}})((({theme:e})=>({color:"inherit",display:"table-row",verticalAlign:"middle",outline:0,[`&.${h.hover}:hover`]:{backgroundColor:e.palette.action.hover},[`&.${h.selected}`]:{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity),"&:hover":{backgroundColor:(0,u.Fq)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity)}}}))),m="tr";var b=a.forwardRef((function(e,t){const r=(0,l.Z)({props:e,name:"MuiTableRow"}),{className:u,component:f=m,hover:d=!1,selected:h=!1}=r,b=(0,o.Z)(r,g),w=a.useContext(s.Z),Z=(0,n.Z)({},r,{component:f,hover:d,selected:h,head:w&&"head"===w.variant,footer:w&&"footer"===w.variant}),x=(e=>{const{classes:t,selected:r,hover:n,head:o,footer:a}=e,i={root:["root",r&&"selected",n&&"hover",o&&"head",a&&"footer"]};return(0,c.Z)(i,p,t)})(Z);return(0,v.jsx)(y,(0,n.Z)({as:f,ref:t,className:(0,i.Z)(x.root,u),role:f===m?null:"row",ownerState:Z},b))}))},5666:function(e){var t=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(C){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var o=t&&t.prototype instanceof g?t:g,a=Object.create(o.prototype),i=new S(n||[]);return a._invoke=function(e,t,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===h){if("throw"===o)throw a;return P()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=R(i,r);if(c){if(c===v)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=h,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=l(e,t,r);if("normal"===u.type){if(n=r.done?h:d,u.arg===v)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=h,r.method="throw",r.arg=u.arg)}}}(e,r,i),a}function l(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(C){return{type:"throw",arg:C}}}e.wrap=s;var f="suspendedStart",d="suspendedYield",p="executing",h="completed",v={};function g(){}function y(){}function m(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,Z=w&&w(w(j([])));Z&&Z!==r&&n.call(Z,a)&&(b=Z);var x=m.prototype=g.prototype=Object.create(b);function k(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function O(e,t){function r(o,a,i,c){var u=l(e[o],e,a);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,i,c)}),(function(e){r("throw",e,i,c)})):t.resolve(f).then((function(e){s.value=e,i(s)}),(function(e){return r("throw",e,i,c)}))}c(u.arg)}var o;this._invoke=function(e,n){function a(){return new t((function(t,o){r(e,n,t,o)}))}return o=o?o.then(a,a):a()}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return v;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=l(n,e.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,v;var a=o.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,v):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,v)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function E(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function j(e){if(e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:t,done:!0}}return y.prototype=m,u(x,"constructor",m),u(m,"constructor",y),y.displayName=u(m,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===y||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,m):(e.__proto__=m,u(e,c,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},k(O.prototype),u(O.prototype,i,(function(){return this})),e.AsyncIterator=O,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new O(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},k(x),u(x,c,"Generator"),u(x,a,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=j,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(E),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),v},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),E(r),v}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:j(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),v}},e}(e.exports);try{regeneratorRuntime=t}catch(r){"object"==typeof globalThis?globalThis.regeneratorRuntime=t:Function("r","regeneratorRuntime = r")(t)}},531:function(e,t,r){"use strict";function n(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(s){return void r(s)}c.done?t(u):Promise.resolve(u).then(n,o)}function o(e){return function(){var t=this,r=arguments;return new Promise((function(o,a){var i=e.apply(t,r);function c(e){n(i,o,a,c,u,"next",e)}function u(e){n(i,o,a,c,u,"throw",e)}c(void 0)}))}}r.d(t,{Z:function(){return o}})},8100:function(e,t,r){"use strict";r.d(t,{ZP:function(){return Y}});var n=r(7294);function o(e,t,r,n){return new(r||(r=Promise))((function(o,a){function i(e){try{u(n.next(e))}catch(t){a(t)}}function c(e){try{u(n.throw(e))}catch(t){a(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(i,c)}u((n=n.apply(e,t||[])).next())}))}function a(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function c(a){return function(c){return function(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(c){a=[6,c],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var i,c=function(){},u=c(),s=Object,l=function(e){return e===u},f=function(e){return"function"==typeof e},d=function(e,t){return s.assign({},e,t)},p="undefined",h=function(){return typeof window!=p},v=new WeakMap,g=0,y=function(e){var t,r,n=typeof e,o=e&&e.constructor,a=o==Date;if(s(e)!==e||a||o==RegExp)t=a?e.toJSON():"symbol"==n?e.toString():"string"==n?JSON.stringify(e):""+e;else{if(t=v.get(e))return t;if(t=++g+"~",v.set(e,t),o==Array){for(t="@",r=0;r<e.length;r++)t+=y(e[r])+",";v.set(e,t)}if(o==s){t="#";for(var i=s.keys(e).sort();!l(r=i.pop());)l(e[r])||(t+=r+":"+y(e[r])+",");v.set(e,t)}}return t},m=!0,b=h(),w=typeof document!=p,Z=b&&window.addEventListener?window.addEventListener.bind(window):c,x=w?document.addEventListener.bind(document):c,k=b&&window.removeEventListener?window.removeEventListener.bind(window):c,O=w?document.removeEventListener.bind(document):c,R={isOnline:function(){return m},isVisible:function(){var e=w&&document.visibilityState;return l(e)||"hidden"!==e}},T={initFocus:function(e){return x("visibilitychange",e),Z("focus",e),function(){O("visibilitychange",e),k("focus",e)}},initReconnect:function(e){var t=function(){m=!0,e()},r=function(){m=!1};return Z("online",t),Z("offline",r),function(){k("online",t),k("offline",r)}}},E=!h()||"Deno"in window,S=function(e){return h()&&typeof window.requestAnimationFrame!=p?window.requestAnimationFrame(e):setTimeout(e,1)},j=E?n.useEffect:n.useLayoutEffect,P="undefined"!=typeof navigator&&navigator.connection,C=!E&&P&&(["slow-2g","2g"].includes(P.effectiveType)||P.saveData),M=function(e){if(f(e))try{e=e()}catch(r){e=""}var t=[].concat(e);return[e="string"==typeof e?e:(Array.isArray(e)?e.length:e)?y(e):"",t,e?"$swr$"+e:""]},L=new WeakMap,N=function(e,t,r,n,o,a,i){void 0===i&&(i=!0);var c=L.get(e),u=c[0],s=c[1],l=c[3],f=u[t],d=s[t];if(i&&d)for(var p=0;p<d.length;++p)d[p](r,n,o);return a&&(delete l[t],f&&f[0])?f[0](2).then((function(){return e.get(t)})):e.get(t)},D=0,H=function(){return++D},z=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return o(void 0,void 0,void 0,(function(){var t,r,n,o,i,c,s,p,h,v,g,y,m,b,w,Z,x,k,O,R;return a(this,(function(a){switch(a.label){case 0:if(t=e[0],r=e[1],n=e[2],o=e[3],c=!!l((i="boolean"==typeof o?{revalidate:o}:o||{}).populateCache)||i.populateCache,s=!1!==i.revalidate,p=!1!==i.rollbackOnError,h=i.optimisticData,v=M(r),g=v[0],y=v[2],!g)return[2];if(m=L.get(t),b=m[2],e.length<3)return[2,N(t,g,t.get(g),u,u,s,!0)];if(w=n,x=H(),b[g]=[x,0],k=!l(h),O=t.get(g),k&&(t.set(g,h),N(t,g,h)),f(w))try{w=w(t.get(g))}catch(T){Z=T}return w&&f(w.then)?[4,w.catch((function(e){Z=e}))]:[3,2];case 1:if(w=a.sent(),x!==b[g][0]){if(Z)throw Z;return[2,w]}Z&&k&&p&&(c=!0,w=O,t.set(g,O)),a.label=2;case 2:return c&&(Z||(f(c)&&(w=c(w,O)),t.set(g,w)),t.set(y,d(t.get(y),{error:Z}))),b[g][1]=H(),[4,N(t,g,w,Z,u,s,!!c)];case 3:if(R=a.sent(),Z)throw Z;return[2,c?R:w]}}))}))},A=function(e,t){for(var r in e)e[r][0]&&e[r][0](t)},F=function(e,t){if(!L.has(e)){var r=d(T,t),n={},o=z.bind(u,e),a=c;if(L.set(e,[n,{},{},{},o]),!E){var i=r.initFocus(setTimeout.bind(u,A.bind(u,n,0))),s=r.initReconnect(setTimeout.bind(u,A.bind(u,n,1)));a=function(){i&&i(),s&&s(),L.delete(e)}}return[e,o,a]}return[e,L.get(e)[4]]},I=F(new Map),_=I[0],V=I[1],$=d({onLoadingSlow:c,onSuccess:c,onError:c,onErrorRetry:function(e,t,r,n,o){var a=r.errorRetryCount,i=o.retryCount,c=~~((Math.random()+.5)*(1<<(i<8?i:8)))*r.errorRetryInterval;!l(a)&&i>a||setTimeout(n,c,o)},onDiscarded:c,revalidateOnFocus:!0,revalidateOnReconnect:!0,revalidateIfStale:!0,shouldRetryOnError:!0,errorRetryInterval:C?1e4:5e3,focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:C?5e3:3e3,compare:function(e,t){return y(e)==y(t)},isPaused:function(){return!1},cache:_,mutate:V,fallback:{}},R),G=function(e,t){var r=d(e,t);if(t){var n=e.use,o=e.fallback,a=t.use,i=t.fallback;n&&a&&(r.use=n.concat(a)),o&&i&&(r.fallback=d(o,i))}return r},q=(0,n.createContext)({}),W=function(e){return f(e[1])?[e[0],e[1],e[2]||{}]:[e[0],null,(null===e[1]?e[2]:e[1])||{}]},B=function(){return d($,(0,n.useContext)(q))},J=function(e,t,r){var n=t[e]||(t[e]=[]);return n.push(r),function(){var e=n.indexOf(r);e>=0&&(n[e]=n[n.length-1],n.pop())}},X={dedupe:!0},Y=(s.defineProperty((function(e){var t=e.value,r=G((0,n.useContext)(q),t),o=t&&t.provider,a=(0,n.useState)((function(){return o?F(o(r.cache||_),t):u}))[0];return a&&(r.cache=a[0],r.mutate=a[1]),j((function(){return a?a[2]:u}),[]),(0,n.createElement)(q.Provider,d(e,{value:r}))}),"default",{value:$}),i=function(e,t,r){var i=r.cache,c=r.compare,s=r.fallbackData,p=r.suspense,h=r.revalidateOnMount,v=r.refreshInterval,g=r.refreshWhenHidden,y=r.refreshWhenOffline,m=L.get(i),b=m[0],w=m[1],Z=m[2],x=m[3],k=M(e),O=k[0],R=k[1],T=k[2],P=(0,n.useRef)(!1),C=(0,n.useRef)(!1),D=(0,n.useRef)(O),A=(0,n.useRef)(t),F=(0,n.useRef)(r),I=function(){return F.current},_=function(){return I().isVisible()&&I().isOnline()},V=function(e){return i.set(T,d(i.get(T),e))},$=i.get(O),G=l(s)?r.fallback[O]:s,q=l($)?G:$,W=i.get(T)||{},B=W.error,Y=!P.current,K=function(){return Y&&!l(h)?h:!I().isPaused()&&(p?!l(q):l(q)||r.revalidateIfStale)},Q=!(!O||!t)&&(!!W.isValidating||Y&&K()),U=function(e,t){var r=(0,n.useState)({})[1],o=(0,n.useRef)(e),a=(0,n.useRef)({data:!1,error:!1,isValidating:!1}),i=(0,n.useCallback)((function(e){var n=!1,i=o.current;for(var c in e){var u=c;i[u]!==e[u]&&(i[u]=e[u],a.current[u]&&(n=!0))}n&&!t.current&&r({})}),[]);return j((function(){o.current=e})),[o,a.current,i]}({data:q,error:B,isValidating:Q},C),ee=U[0],te=U[1],re=U[2],ne=(0,n.useCallback)((function(e){return o(void 0,void 0,void 0,(function(){var t,n,o,s,d,p,h,v,g,y,m,b,w;return a(this,(function(a){switch(a.label){case 0:if(t=A.current,!O||!t||C.current||I().isPaused())return[2,!1];s=!0,d=e||{},p=!x[O]||!d.dedupe,h=function(){return!C.current&&O===D.current&&P.current},v=function(){var e=x[O];e&&e[1]===o&&delete x[O]},g={isValidating:!1},y=function(){V({isValidating:!1}),h()&&re(g)},V({isValidating:!0}),re({isValidating:!0}),a.label=1;case 1:return a.trys.push([1,3,,4]),p&&(N(i,O,ee.current.data,ee.current.error,!0),r.loadingTimeout&&!i.get(O)&&setTimeout((function(){s&&h()&&I().onLoadingSlow(O,r)}),r.loadingTimeout),x[O]=[t.apply(void 0,R),H()]),w=x[O],n=w[0],o=w[1],[4,n];case 2:return n=a.sent(),p&&setTimeout(v,r.dedupingInterval),x[O]&&x[O][1]===o?(V({error:u}),g.error=u,m=Z[O],!l(m)&&(o<=m[0]||o<=m[1]||0===m[1])?(y(),p&&h()&&I().onDiscarded(O),[2,!1]):(c(ee.current.data,n)?g.data=ee.current.data:g.data=n,c(i.get(O),n)||i.set(O,n),p&&h()&&I().onSuccess(n,O,r),[3,4])):(p&&h()&&I().onDiscarded(O),[2,!1]);case 3:return b=a.sent(),v(),I().isPaused()||(V({error:b}),g.error=b,p&&h()&&(I().onError(b,O,r),("boolean"==typeof r.shouldRetryOnError&&r.shouldRetryOnError||f(r.shouldRetryOnError)&&r.shouldRetryOnError(b))&&_()&&I().onErrorRetry(b,O,r,ne,{retryCount:(d.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return s=!1,y(),h()&&p&&N(i,O,g.data,g.error,!1),[2,!0]}}))}))}),[O]),oe=(0,n.useCallback)(z.bind(u,i,(function(){return D.current})),[]);if(j((function(){A.current=t,F.current=r})),j((function(){if(O){var e=O!==D.current,t=ne.bind(u,X),r=0,n=J(O,w,(function(e,t,r){re(d({error:t,isValidating:r},c(ee.current.data,e)?u:{data:e}))})),o=J(O,b,(function(e){if(0==e){var n=Date.now();I().revalidateOnFocus&&n>r&&_()&&(r=n+I().focusThrottleInterval,t())}else if(1==e)I().revalidateOnReconnect&&_()&&t();else if(2==e)return ne()}));return C.current=!1,D.current=O,P.current=!0,e&&re({data:q,error:B,isValidating:Q}),K()&&(l(q)||E?t():S(t)),function(){C.current=!0,n(),o()}}}),[O,ne]),j((function(){var e;function t(){var t=f(v)?v(q):v;t&&-1!==e&&(e=setTimeout(r,t))}function r(){ee.current.error||!g&&!I().isVisible()||!y&&!I().isOnline()?t():ne(X).then(t)}return t(),function(){e&&(clearTimeout(e),e=-1)}}),[v,g,y,ne]),(0,n.useDebugValue)(q),p&&l(q)&&O)throw A.current=t,F.current=r,C.current=!1,l(B)?ne(X):B;return{mutate:oe,get data(){return te.data=!0,q},get error(){return te.error=!0,B},get isValidating(){return te.isValidating=!0,Q}}},function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var r=B(),n=W(e),o=n[0],a=n[1],c=n[2],u=G(r,c),s=i,l=u.use;if(l)for(var f=l.length;f-- >0;)s=l[f](s);return s(o,a||u.fetcher,u)})}}]);