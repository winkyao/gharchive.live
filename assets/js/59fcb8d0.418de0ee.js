(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[87],{407:function(e,t,n){"use strict";n.d(t,{h:function(){return v}});var r=n(3366),a=n(7294),o=n(7720),i=n(5344),l=n(1013),u=n(2859),c=n(1262),s=n(7087),d=["chart","noSearch"];function m(e){var t=e.chart,c=e.noSearch,m=(0,r.Z)(e,d),v=(0,a.useMemo)((function(){return"string"==typeof t?n(5898)("./"+t+"/index.js").default:t}),[t]),f=v.useForm({noSearch:c}),p=f.form,y=f.query,g=a.createElement(v.Chart,Object.assign({},y,m));return a.createElement(i.Z,{dateAdapter:l.Z},a.createElement(s.Z,null,a.createElement(u.Z,null,a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),p,a.createElement(o.Z,{sx:{my:2}}),g))}function v(e){return a.createElement(c.Z,null,(function(){return a.createElement(m,e)}))}},4647:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=(0,n(7694).z)("contributors-per-year",{categoryIndex:"repo_name",valueIndex:"contributors_count"}),a=n(7294),o=n(6447),i=n(4054),l=n(3841),u=n(5018),c=n(3599),s=n(1903),d=n(7109),m=[{title:"Contributors (PRs opened)",value:"all"},{title:"Contributors (PRs merged)",value:"merged"}],v=[10,20,50],f={useForm:function(e){var t=e.noSearch,n=(0,a.useMemo)((function(){return Math.random()}),[]),r=(0,a.useMemo)((function(){var e=m[0].value,n=10;if(!t&&"undefined"!=typeof window){var r=new URLSearchParams(location.search),a=r.get("type"),o=parseInt(r.get("n"));a&&m.find((function(e){return e.value===a}))&&(e=a),o&&v.indexOf(o)>=0&&(n=o)}return{initialType:e,initialLimits:n}}),[]),f=r.initialType,p=r.initialLimits,y=(0,a.useState)(f),g=y[0],h=y[1],x=(0,a.useState)(p),E=x[0],b=x[1],Z=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",g),e.set("n",String(E)),window.history.replaceState(null,null,"?"+e.toString())}return{action:"all"===g?"opened":"closed",merged:"all"===g?"*":"true",n:E}}),[g,E]),w=a.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(i.Z,{variant:"standard",sx:{minWidth:"230px",maxWidth:"230px"}},a.createElement(l.Z,{id:"cubechart-"+n+"-type"},"Type"),a.createElement(u.Z,{id:"cubechart-"+n+"-type",value:g,onChange:function(e){return h(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(c.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(s.Z,{variant:"standard",id:"cubechart-"+n+"-type",select:!0,value:E,onChange:function(e){return b(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},v.map((function(e){return a.createElement(c.Z,{key:e,value:e},e)})))));return{form:w,query:Z}},Chart:r}},3714:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=(0,n(7694).z)("events-per-year",{categoryIndex:"repo_name",valueIndex:"events_count"}),a=n(7294),o=n(6447),i=n(4054),l=n(3841),u=n(5018),c=n(3599),s=n(1903),d=n(7109),m=[{title:"Stars",value:"WatchEvent"},{title:"Forks",value:"ForkEvent"},{title:"PRs",value:"PullRequestEvent"}],v=[10,20,50],f={useForm:function(e){var t=e.noSearch,n=(0,a.useMemo)((function(){return Math.random()}),[]),r=(0,a.useMemo)((function(){var e=m[0].value,n=10;if(!t&&"undefined"!=typeof window){var r=new URLSearchParams(location.search),a=r.get("type"),o=parseInt(r.get("n"));a&&m.find((function(e){return e.value===a}))&&(e=a),o&&v.indexOf(o)>=0&&(n=o)}return{initialType:e,initialLimits:n}}),[]),f=r.initialType,p=r.initialLimits,y=(0,a.useState)(f),g=y[0],h=y[1],x=(0,a.useState)(p),E=x[0],b=x[1],Z=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",g),e.set("n",String(E)),window.history.replaceState(null,null,"?"+e.toString())}return{event:g,n:E}}),[g,E]),w=a.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(l.Z,{id:"cubechart-"+n+"-type"},"Type"),a.createElement(u.Z,{id:"cubechart-"+n+"-type",value:g,onChange:function(e){return h(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(c.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(s.Z,{variant:"standard",id:"cubechart-"+n+"-type",select:!0,value:E,onChange:function(e){return b(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},v.map((function(e){return a.createElement(c.Z,{key:e,value:e},e)})))));return{form:w,query:Z}},Chart:r}},7065:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var r=n(3366),a=n(7694),o=n(7294),i=["category","valueIndex"],l=((0,a.z)("events-history",{categoryIndex:"repo_name",valueIndex:"events_count"}),n(6447)),u=n(4054),c=n(3841),s=n(5018),d=n(3599),m=n(1903),v=n(7109),f=[{title:"Stars",key:"stars",value:{category:"events-history",params:{event:"WatchEvent"},valueIndex:"events_count"}},{title:"Forks",key:"forks",value:{category:"events-history",params:{event:"ForkEvent"},valueIndex:"events_count"}},{title:"PRs",key:"PRs",value:{category:"events-history",params:{event:"PullRequestEvent"},valueIndex:"events_count"}},{title:"Contributors (PRs opened)",key:"contributors-PR-opened",value:{category:"contributors-history",params:{action:"opened",merged:"*"},valueIndex:"contributors_count"}},{title:"Contributors (PRs merged)",key:"contributors-PR-merged",value:{category:"contributors-history",params:{action:"closed",merged:"true"},valueIndex:"contributors_count"}}],p=[1,2,5,10],y=[10,20,50],g={useForm:function(e){var t=e.noSearch,n=(0,o.useMemo)((function(){return Math.random()}),[]),r=(0,o.useMemo)((function(){var e=f[0],n=1,r=10;if(!t&&"undefined"!=typeof window){var a=new URLSearchParams(location.search),o=a.get("type"),i=parseInt(a.get("years")),l=parseInt(a.get("n"));if(o){var u=f.find((function(e){return e.key===o}));u&&(e=u)}i&&p.indexOf(i)>=0&&(n=i),l&&y.indexOf(l)>=0&&(r=l)}return{initialType:e,initialYears:n,initialLimits:r}}),[]),a=r.initialType,i=r.initialLimits,g=r.initialYears,h=(0,o.useState)(a),x=h[0],E=h[1],b=(0,o.useState)(i),Z=b[0],w=b[1],S=(0,o.useState)(g),k=S[0],I=S[1],C=(0,o.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",x.key),e.set("n",String(Z)),e.set("years",String(k)),window.history.replaceState(null,null,"?"+e.toString())}return Object.assign({category:x.value.category,valueIndex:x.value.valueIndex},x.value.params,{n:Z,years:k})}),[x,Z,k]),M=o.createElement(l.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},o.createElement(u.Z,{variant:"standard"},o.createElement(c.Z,{id:n+"-type"},"Type"),o.createElement(s.Z,{id:n+"-type",value:x,autoWidth:!0,onChange:function(e){var t;return E(null!=(t=f.find((function(t){return t.key===e.target.value})))?t:f[0])},label:"Type",size:"small",renderValue:function(e){return e.title}},f.map((function(e){return o.createElement(d.Z,{key:e.key,value:e.key},e.title)})))),o.createElement(u.Z,{variant:"standard"},o.createElement(m.Z,{variant:"standard",select:!0,value:Z,onChange:function(e){return w(Number(e.target.value))},InputProps:{startAdornment:o.createElement(v.Z,{position:"start"},"Top")}},y.map((function(e){return o.createElement(d.Z,{key:e,value:e},e)})))),o.createElement(u.Z,{variant:"standard"},o.createElement(m.Z,{variant:"standard",value:k,onChange:function(e){return I(Number(e.target.value))},select:!0,InputProps:{startAdornment:o.createElement(v.Z,{position:"start"},"Recent"),endAdornment:o.createElement(v.Z,{position:"start",sx:{mr:4}},"Year(s)")}},p.map((function(e){return o.createElement(d.Z,{key:e,value:e},e)})))));return{form:M,query:C}},Chart:function(e){var t=e.category,n=e.valueIndex,l=(0,r.Z)(e,i),u=(0,o.useMemo)((function(){return(0,a.z)(t,{categoryIndex:"repo_name",valueIndex:n})}),[t,n]);return o.createElement(u,l)}}},1562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(3366),a=n(7694),o=n(7294),i=["category","categoryIndex","valueIndex"];var l={Chart:function(e){var t=e.category,n=e.categoryIndex,l=void 0===n?"repo_name":n,u=e.valueIndex,c=(0,r.Z)(e,i),s=(0,o.useMemo)((function(){return(0,a.d)(t,[{field:l,title:l},{field:u,title:u}])}),[t,l,u]);return o.createElement(s,c)},useForm:function(){return(0,o.useMemo)((function(){return{form:null,query:{}}}),[])}}},7694:function(e,t,n){"use strict";n.d(t,{z:function(){return W},d:function(){return j}});var r,a=n(3366),o=n(7294),i=n(9669),l=n.n(i),u=n(4008),c=function(e,t,n){var r=(0,o.useState)(void 0),a=r[0],i=r[1],c=(0,o.useState)(void 0),s=c[0],d=c[1],m=(0,o.useState)(!1),v=m[0],f=m[1];return(0,o.useEffect)((function(){i(void 0),d(void 0),f(!0),l().get("/q/"+e,{baseURL:"https://community-preview-contributor.tidb.io",params:t}).then((function(e){var t=e.data;t.sql&&n&&(t.sql=(0,u.WU)(t.sql)),i(t)})).catch((function(e){return d(e)})).finally((function(){return f(!1)}))}),[JSON.stringify(t)]),{data:a,loading:v,error:s}},s=n(7357),d=n(6886),m=n(8078),v=n(8032),f=n(1737),p=n(657),y=n(8557),g=n(7608),h=n(5861),x=n(9055),E=n(7155),b=n(4149),Z=n(8690),w=n(2739),S=n(6359),k=n(1416),I=n(9075),C=n(8023),M=n(9720),P=n(5350);function R(e){var t=e.data,n=e.loading,r=e.clear,a=e.size,i=e.n,l=e.deps,u=e.categoryIndex,c=e.valueIndex,s=(0,o.useMemo)((function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:r?0:8,top:r?0:16,bottom:r?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:t.map((function(e){return e[u]})),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){return e.indexOf("/")<0?e:e.split("/")[1]}}},series:[{name:"Count",data:t.map((function(e){return e[c]})),type:"bar",barWidth:r?a/2:a}]}}),[t].concat(l,[u,c,a,r])),d=(0,o.useMemo)((function(){return n?400:Math.max(Math.min(i,t.length),5)*(a*(r?1:1.5))}),[a,n,r]),m=(0,o.useMemo)((function(){var e,t;return{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",height:d,width:"auto",locale:"en"}}),[d]),v=(0,o.useMemo)((function(){return{click:function(e){"name"in e&&window.open("https://github.com/"+e.name).then()}}}),[]),f=(0,P.Z)().isDarkTheme;return o.createElement(E.Z,{showLoading:n,echarts:I,option:s,notMerge:!0,lazyUpdate:!0,theme:f?"dark":"vintage",style:{height:d,marginBottom:16,borderRadius:"var(--ifm-global-radius)",overflow:"hidden"},opts:m,onEvents:v})}C.D([Z.N,w.N,S.N,b.N,k.N]),r=["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"],M.aW("vintage",{color:r,backgroundColor:"#fef8ef",graph:{color:r}}),function(){var e="#eee",t=function(){return{axisLine:{lineStyle:{color:e}},axisTick:{lineStyle:{color:e}},axisLabel:{textStyle:{color:e}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:e}}}},n=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],r={color:n,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:e},crossStyle:{color:e}}},legend:{textStyle:{color:e}},textStyle:{color:e},title:{textStyle:{color:e}},toolbox:{iconStyle:{normal:{borderColor:e}}},dataZoom:{textStyle:{color:e}},timeline:{lineStyle:{color:e},itemStyle:{normal:{color:n[1]}},label:{normal:{textStyle:{color:e}}},controlStyle:{normal:{color:e,borderColor:e}}},timeAxis:t(),logAxis:t(),valueAxis:t(),categoryAxis:t(),line:{symbol:"circle"},graph:{color:n},gauge:{title:{textStyle:{color:e}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};r.categoryAxis.splitLine.show=!1,M.aW("dark",r)}();var q=n(9490),T="dataGridTable_5g2v";function L(e){var t=e.columns,n=e.data;return o.createElement("table",{className:T},o.createElement("thead",null,o.createElement("tr",null,t.map((function(e){var t=e.title,n=e.field;return o.createElement("th",{key:n},t)})))),o.createElement("tbody",null,null==n?void 0:n.map((function(e){return o.createElement("tr",null,t.map((function(t){var n=t.field;return o.createElement("td",{key:n},e[n])})))}))))}var F=["clear","size","formatSql","children","categoryIndex","valueIndex"],_=["size","clear","formatSql"];function W(e,t){return function(n){var r,i,l=n.clear,u=n.size,s=void 0===u?30:u,d=n.formatSql,m=void 0===d||d,v=(n.children,n.categoryIndex),p=void 0===v?t.categoryIndex:v,y=n.valueIndex,g=void 0===y?t.valueIndex:y,h=(0,a.Z)(n,F),x=c(e,h,m),E=x.data,b=x.loading,Z=x.error,w=o.createElement(R,{categoryIndex:p,valueIndex:g,size:s,data:null!=(r=null==E?void 0:E.data)?r:[],loading:b,clear:l,n:h.n,deps:Object.values(h)});return Z?o.createElement(f.Z,{severity:"error"},"Request failed $",null!=(i=null==Z?void 0:Z.message)?i:""):l?w:o.createElement(o.Fragment,null,o.createElement("div",{style:{position:"relative"}},w,o.createElement(A,{data:E,query:e})),N(null==E?void 0:E.sql))}}function j(e,t){return function(n){n.size,n.clear;var r,i=n.formatSql,l=void 0===i||i,u=(0,a.Z)(n,_),s=c(e,u,l),d=s.data,m=s.loading,v=s.error,p=o.createElement(L,{columns:t,loading:m,data:null==d?void 0:d.data});return v?o.createElement(f.Z,{severity:"error"},"Request failed $",null!=(r=null==v?void 0:v.message)?r:""):o.createElement(o.Fragment,null,o.createElement("div",{style:{position:"relative"}},p,o.createElement(A,{data:d,query:e})),N(null==d?void 0:d.sql))}}var z="yyyy-MM-dd HH:mm:ss",A=function(e){var t=e.query,n=e.data,r=o.useState(!1),a=r[0],i=r[1],l=function(){return i(!1)};return(0,o.useEffect)((function(){n||l()}),[n]),o.createElement(o.Fragment,null,o.createElement(v.Z,{size:"small",sx:{position:"absolute",zIndex:10,right:24,bottom:24},onClick:function(){return i(!0)},disabled:!n},o.createElement(g.Z,null)),o.createElement(p.Z,{open:a,onClose:l,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},o.createElement(y.Z,null,"[For Debug] SQL Execution info"),o.createElement(s.Z,{sx:{p:4}},N(null==n?void 0:n.sql),o.createElement(d.ZP,{container:!0,alignItems:"center"},o.createElement(O,{title:"Requested at",value:q.ou.fromISO(null==n?void 0:n.requestedAt).toFormat(z)}),o.createElement(O,{title:"Expires at",value:q.ou.fromISO(null==n?void 0:n.expiresAt).toFormat(z)}),o.createElement(O,{title:"Spent",value:(null==n?void 0:n.spent)+" seconds"}),o.createElement(O,{title:"Query",value:t}),o.createElement(O,{title:"Params",value:o.createElement("pre",null,JSON.stringify(null==n?void 0:n.params,void 0,2))})))))},O=function(e){var t=e.title,n=e.value;return o.createElement(o.Fragment,null,o.createElement(d.ZP,{xs:3},o.createElement("div",null,o.createElement(h.Z,{align:"right",variant:"body1"},t))),o.createElement(d.ZP,{xs:1}),o.createElement(d.ZP,{xs:8},o.createElement("div",null,o.createElement(h.Z,{align:"left",variant:"body2"},n))))},N=function(e){return e?o.createElement(x.Z,{className:"language-sql"},e):o.createElement(s.Z,{sx:{pt:.5}},o.createElement(m.Z,{width:"80%"}),o.createElement(m.Z,{width:"50%"}),o.createElement(m.Z,{width:"70%"}))}},7087:function(e,t,n){"use strict";var r=n(7294),a=n(8239),o=n(5350),i=n(1927),l=function(e){var t=e.children,n=(0,o.Z)().isDarkTheme,l=(0,a.Z)({palette:{mode:n?"dark":void 0,primary:{main:"rgb(37, 193, 159)"}}});return r.createElement(i.Z,{theme:l},t)};l.displayName="MuiThemeAdaptor",t.Z=l},6701:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return v}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(407),l=["components"],u={title:"History"},c=void 0,s={unversionedId:"js-framework/history",id:"js-framework/history",title:"History",description:"",source:"@site/docs/js-framework/03-history.mdx",sourceDirName:"js-framework",slug:"/js-framework/history",permalink:"/_/js-framework/history",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/js-framework/03-history.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"History"},sidebar:"tutorialSidebar",previous:{title:"Realtime - Hourly",permalink:"/_/js-framework/realtime"},next:{title:"Web Framework",permalink:"/_/web-framework/"}},d=[],m={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.h,{repo:"js_framework_repos",chart:"histories",mdxType:"CommonChart"}))}v.isMDXComponent=!0},5898:function(e,t,n){var r={"./contributors-per-year/index.js":4647,"./events-per-year/index.js":3714,"./histories/index.js":7065,"./rt/index.js":1562};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=5898}}]);