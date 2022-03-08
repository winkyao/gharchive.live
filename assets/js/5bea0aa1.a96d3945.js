(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[4258],{20407:function(e,t,n){"use strict";n.d(t,{h:function(){return v}});var r=n(63366),a=n(67294),o=n(67720),i=n(5344),l=n(78700),u=n(12859),c=n(91262),s=n(37087),d=["chart","noSearch"];function m(e){var t=e.chart,c=e.noSearch,m=(0,r.Z)(e,d),v=(0,a.useMemo)((function(){return"string"==typeof t?n(85898)("./"+t+"/index.js").default:t}),[t]),f=v.useForm({noSearch:c}),p=f.form,y=f.query,h=a.createElement(v.Chart,Object.assign({},y,m));return a.createElement(i.Z,{dateAdapter:l.Z},a.createElement(s.Z,null,a.createElement(u.Z,null,a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),p,a.createElement(o.Z,{sx:{my:2}}),h))}function v(e){return a.createElement(c.Z,null,(function(){return a.createElement(m,e)}))}},24162:function(e,t,n){"use strict";n.d(t,{q:function(){return p},H:function(){return x}});var r=n(67294),a=n(50657),o=n(18557),i=n(87357),l=n(86886),u=n(99490),c=n(15861),s=n(88078),d=n(19055),m=n(11703),v=n(40044),f="yyyy-MM-dd HH:mm:ss",p=function(e){var t=e.query,n=e.data,l=e.open,u=e.onClose;return(0,r.useEffect)((function(){n||u()}),[n]),r.createElement(r.Fragment,null,r.createElement(a.Z,{open:l,maxWidth:"md",fullWidth:!0,onClose:u,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement(o.Z,null,"[For Debug] SQL Execution info"),r.createElement(i.Z,{sx:{p:4}},Array.isArray(n)?r.createElement(y,{data:n,query:t}):h(t,n))))},y=function(e){var t=e.query,n=e.data,a=(0,r.useState)(0),o=a[0],i=a[1];return r.createElement(r.Fragment,null,r.createElement(m.Z,{value:o,onChange:function(e,t){return i(t)}},n.map((function(e,t){return r.createElement(v.Z,{label:"Request "+(t+1)})}))),n.map((function(e,n){return h(t,e,n,o!==n)})))},h=function(e,t,n,a){return void 0===n&&(n=void 0),void 0===a&&(a=!1),r.createElement("div",{hidden:a,key:n},x(null==t?void 0:t.sql),r.createElement(l.ZP,{container:!0,alignItems:"center"},r.createElement(g,{title:"Requested at",value:u.ou.fromISO(null==t?void 0:t.requestedAt).toFormat(f)}),r.createElement(g,{title:"Expires at",value:u.ou.fromISO(null==t?void 0:t.expiresAt).toFormat(f)}),r.createElement(g,{title:"Spent",value:(null==t?void 0:t.spent)+" seconds"}),r.createElement(g,{title:"Query",value:e}),r.createElement(g,{title:"Params",value:r.createElement("pre",null,JSON.stringify(null==t?void 0:t.params,void 0,2))})))},g=function(e){var t=e.title,n=e.value;return r.createElement(r.Fragment,null,r.createElement(l.ZP,{item:!0,xs:3},r.createElement("div",null,r.createElement(c.Z,{align:"right",variant:"body1"},t))),r.createElement(l.ZP,{item:!0,xs:1}),r.createElement(l.ZP,{item:!0,xs:8},r.createElement("div",null,r.createElement(c.Z,{align:"left",variant:"body2",component:"div"},n))))},x=function(e){return e?r.createElement(d.Z,{className:"language-sql"},e):r.createElement(i.Z,{sx:{pt:.5}},r.createElement(s.Z,{width:"80%"}),r.createElement(s.Z,{width:"50%"}),r.createElement(s.Z,{width:"70%"}))}},20646:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(63366),a=n(14947),o=n(67294),i=["category","categoryIndex","valueIndex"];var l={Chart:function(e){var t=e.category,n=e.categoryIndex,l=void 0===n?"repo_name":n,u=e.valueIndex,c=(0,r.Z)(e,i),s=(0,o.useMemo)((function(){return(0,a.z)(t,{categoryIndex:l,valueIndex:u})}),[t,l,u]);return o.createElement(s,c)},useForm:function(){return(0,o.useMemo)((function(){return{form:null,query:{}}}),[])}}},4647:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=(0,n(14947).z)("contributors-per-year",{categoryIndex:"repo_name",valueIndex:"contributors_count"}),a=n(67294),o=n(26447),i=n(94054),l=n(33841),u=n(45684),c=n(23599),s=n(61903),d=n(87109),m=[{title:"Contributors (PRs opened)",value:"all"},{title:"Contributors (PRs merged)",value:"merged"}],v=[10,20,50],f={useForm:function(e){var t=e.noSearch,n=(0,a.useMemo)((function(){return Math.random()}),[]),r=(0,a.useMemo)((function(){var e=m[0].value,n=10;if(!t&&"undefined"!=typeof window){var r=new URLSearchParams(location.search),a=r.get("type"),o=parseInt(r.get("n"));a&&m.find((function(e){return e.value===a}))&&(e=a),o&&v.indexOf(o)>=0&&(n=o)}return{initialType:e,initialLimits:n}}),[]),f=r.initialType,p=r.initialLimits,y=(0,a.useState)(f),h=y[0],g=y[1],x=(0,a.useState)(p),E=x[0],b=x[1],Z=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",h),e.set("n",String(E)),window.history.replaceState(null,null,"?"+e.toString())}return{action:"all"===h?"opened":"closed",merged:"all"===h?"*":"true",n:E}}),[h,E]),w=a.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(i.Z,{variant:"standard",sx:{minWidth:"230px",maxWidth:"230px"}},a.createElement(l.Z,{id:"cubechart-"+n+"-type"},"Type"),a.createElement(u.Z,{id:"cubechart-"+n+"-type",value:h,onChange:function(e){return g(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(c.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(s.Z,{variant:"standard",id:"cubechart-"+n+"-type",select:!0,value:E,onChange:function(e){return b(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},v.map((function(e){return a.createElement(c.Z,{key:e,value:e},e)})))));return{form:w,query:Z}},Chart:r}},73714:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=(0,n(14947).z)("events-per-year",{categoryIndex:"repo_name",valueIndex:"events_count"}),a=n(67294),o=n(26447),i=n(94054),l=n(33841),u=n(45684),c=n(23599),s=n(61903),d=n(87109),m=[{title:"Stars",value:"WatchEvent"},{title:"Forks",value:"ForkEvent"},{title:"PRs",value:"PullRequestEvent"}],v=[10,20,50],f={useForm:function(e){var t=e.noSearch,n=(0,a.useMemo)((function(){return Math.random()}),[]),r=(0,a.useMemo)((function(){var e=m[0].value,n=10;if(!t&&"undefined"!=typeof window){var r=new URLSearchParams(location.search),a=r.get("type"),o=parseInt(r.get("n"));a&&m.find((function(e){return e.value===a}))&&(e=a),o&&v.indexOf(o)>=0&&(n=o)}return{initialType:e,initialLimits:n}}),[]),f=r.initialType,p=r.initialLimits,y=(0,a.useState)(f),h=y[0],g=y[1],x=(0,a.useState)(p),E=x[0],b=x[1],Z=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",h),e.set("n",String(E)),window.history.replaceState(null,null,"?"+e.toString())}return{event:h,n:E}}),[h,E]),w=a.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(l.Z,{id:"cubechart-"+n+"-type"},"Type"),a.createElement(u.Z,{id:"cubechart-"+n+"-type",value:h,onChange:function(e){return g(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(c.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(s.Z,{variant:"standard",id:"cubechart-"+n+"-type",select:!0,value:E,onChange:function(e){return b(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},v.map((function(e){return a.createElement(c.Z,{key:e,value:e},e)})))));return{form:w,query:Z}},Chart:r}},27065:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(63366),a=n(14947),o=n(67294),i=["category","valueIndex"],l=((0,a.z)("events-history",{categoryIndex:"repo_name",valueIndex:"events_count"}),n(26447)),u=n(94054),c=n(33841),s=n(45684),d=n(23599),m=n(61903),v=n(87109),f=[{title:"Stars",key:"stars",value:{category:"events-history",params:{event:"WatchEvent"},valueIndex:"events_count"}},{title:"Forks",key:"forks",value:{category:"events-history",params:{event:"ForkEvent"},valueIndex:"events_count"}},{title:"PRs",key:"PRs",value:{category:"events-history",params:{event:"PullRequestEvent"},valueIndex:"events_count"}},{title:"Contributors (PRs opened)",key:"contributors-PR-opened",value:{category:"contributors-history",params:{action:"opened",merged:"*"},valueIndex:"contributors_count"}},{title:"Contributors (PRs merged)",key:"contributors-PR-merged",value:{category:"contributors-history",params:{action:"closed",merged:"true"},valueIndex:"contributors_count"}}],p=[1,2,5,10],y=[10,20,50],h={useForm:function(e){var t=e.noSearch,n=(0,o.useMemo)((function(){return Math.random()}),[]),r=(0,o.useMemo)((function(){var e=f[0],n=1,r=10;if(!t&&"undefined"!=typeof window){var a=new URLSearchParams(location.search),o=a.get("type"),i=parseInt(a.get("years")),l=parseInt(a.get("n"));if(o){var u=f.find((function(e){return e.key===o}));u&&(e=u)}i&&p.indexOf(i)>=0&&(n=i),l&&y.indexOf(l)>=0&&(r=l)}return{initialType:e,initialYears:n,initialLimits:r}}),[]),a=r.initialType,i=r.initialLimits,h=r.initialYears,g=(0,o.useState)(a),x=g[0],E=g[1],b=(0,o.useState)(i),Z=b[0],w=b[1],S=(0,o.useState)(h),I=S[0],k=S[1],C=(0,o.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",x.key),e.set("n",String(Z)),e.set("years",String(I)),window.history.replaceState(null,null,"?"+e.toString())}return Object.assign({category:x.value.category,valueIndex:x.value.valueIndex},x.value.params,{n:Z,years:I})}),[x,Z,I]),P=o.createElement(l.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},o.createElement(u.Z,{variant:"standard"},o.createElement(c.Z,{id:n+"-type"},"Type"),o.createElement(s.Z,{id:n+"-type",value:x,autoWidth:!0,onChange:function(e){var t;return E(null!=(t=f.find((function(t){return t.key===e.target.value})))?t:f[0])},label:"Type",size:"small",renderValue:function(e){return e.title}},f.map((function(e){return o.createElement(d.Z,{key:e.key,value:e.key},e.title)})))),o.createElement(u.Z,{variant:"standard"},o.createElement(m.Z,{variant:"standard",select:!0,value:Z,onChange:function(e){return w(Number(e.target.value))},InputProps:{startAdornment:o.createElement(v.Z,{position:"start"},"Top")}},y.map((function(e){return o.createElement(d.Z,{key:e,value:e},e)})))),o.createElement(u.Z,{variant:"standard"},o.createElement(m.Z,{variant:"standard",value:I,onChange:function(e){return k(Number(e.target.value))},select:!0,InputProps:{startAdornment:o.createElement(v.Z,{position:"start"},"Recent"),endAdornment:o.createElement(v.Z,{position:"start",sx:{mr:4}},"Year(s)")}},p.map((function(e){return o.createElement(d.Z,{key:e,value:e},e)})))));return{form:P,query:C}},Chart:function(e){var t=e.category,n=e.valueIndex,l=(0,r.Z)(e,i),u=(0,o.useMemo)((function(){return(0,a.z)(t,{categoryIndex:"repo_name",valueIndex:n})}),[t,n]);return o.createElement(u,l)}}},6971:function(e,t,n){"use strict";n.d(t,{W:function(){return l}});var r=n(44008),a=n(21703),o=n(8100),i=(0,a.d)(),l=function(e,t,n,a){void 0===a&&(a=!0);var l=(0,o.ZP)(a?[e,t]:null,{fetcher:function(e,t){return i.get("/q/"+e,{params:t}).then((function(e){var t=e.data;return t.sql&&n&&(t.sql=(0,r.WU)(t.sql)),t}))},revalidateOnFocus:!1,revalidateOnReconnect:!1});return{data:l.data,loading:l.isValidating,error:l.error}}},64556:function(e,t,n){"use strict";n.d(t,{F6:function(){return a},y:function(){return o}});var r=n(30454);function a(e){void 0===e&&(e=!0);var t=["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"];r.aW("vintage",{color:t,backgroundColor:e?"#fef8ef":void 0,graph:{color:t}})}function o(){var e="#eee",t=function(){return{axisLine:{lineStyle:{color:e}},axisTick:{lineStyle:{color:e}},axisLabel:{textStyle:{color:e}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:e}}}},n=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],a={color:n,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:e},crossStyle:{color:e}}},legend:{textStyle:{color:e}},textStyle:{color:e},title:{textStyle:{color:e}},toolbox:{iconStyle:{normal:{borderColor:e}}},dataZoom:{textStyle:{color:e}},timeline:{lineStyle:{color:e},itemStyle:{normal:{color:n[1]}},label:{normal:{textStyle:{color:e}}},controlStyle:{normal:{color:e,borderColor:e}}},timeAxis:t(),logAxis:t(),valueAxis:t(),categoryAxis:t(),line:{symbol:"circle"},graph:{color:n},gauge:{title:{textStyle:{color:e}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};a.categoryAxis.splitLine.show=!1,r.aW("dark",a)}},14947:function(e,t,n){"use strict";n.d(t,{z:function(){return Z}});var r=n(63366),a=n(67294),o=n(6971),i=n(58032),l=n(46901),u=n(27608),c=n(87155),s=n(38180),d=n(8690),m=n(82739),v=n(31281),f=n(91416),p=n(29359),y=n(68023),h=n(85350),g=n(64556);function x(e){var t=e.data,n=e.loading,r=e.clear,o=e.size,i=e.n,l=e.deps,u=e.categoryIndex,s=e.valueIndex,d=(0,a.useMemo)((function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:r?0:8,top:r?0:16,bottom:r?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:t.map((function(e){return e[u]})),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){return e.indexOf("/")<0?e:e.split("/")[1]}}},series:[{name:"Count",data:t.map((function(e){return e[s]})),type:"bar",barWidth:r?o/2:o}]}}),[t].concat(l,[u,s,o,r])),m=(0,a.useMemo)((function(){return n?400:Math.max(Math.min(i,t.length),5)*(o*(r?1:1.5))}),[o,n,r]),v=(0,a.useMemo)((function(){var e,t;return{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",height:m,width:"auto",locale:"en"}}),[m]),f=(0,a.useMemo)((function(){return{click:function(e){"name"in e&&window.open("https://github.com/"+e.name).then()}}}),[]),y=(0,h.Z)().isDarkTheme;return a.createElement(c.Z,{showLoading:n,echarts:p,option:d,notMerge:!0,lazyUpdate:!0,theme:y?"dark":"vintage",style:{height:m,marginBottom:16,borderRadius:"var(--ifm-global-radius)",overflow:"hidden"},opts:v,onEvents:f})}y.D([d.N,m.N,v.N,s.N,f.N]),(0,g.F6)(),(0,g.y)();var E=n(24162);var b=["clear","size","formatSql","children","categoryIndex","valueIndex"];function Z(e,t){return function(n){var c,s,d=n.clear,m=n.size,v=void 0===m?30:m,f=n.formatSql,p=void 0===f||f,y=(n.children,n.categoryIndex),h=void 0===y?t.categoryIndex:y,g=n.valueIndex,Z=void 0===g?t.valueIndex:g,w=(0,r.Z)(n,b),S=(0,o.W)(e,w,p),I=S.data,k=S.loading,C=S.error,P=(0,a.useState)(!1),M=P[0],R=P[1],q=a.createElement(x,{categoryIndex:h,valueIndex:Z,size:v,data:null!=(c=null==I?void 0:I.data)?c:[],loading:k,clear:d,n:w.n,deps:Object.values(w)});return C?a.createElement(l.Z,{severity:"error"},"Request failed $",null!=(s=null==C?void 0:C.message)?s:""):d?q:a.createElement(a.Fragment,null,a.createElement("div",{style:{position:"relative"}},q,a.createElement(i.Z,{size:"small",sx:{position:"absolute",zIndex:10,right:24,bottom:24},onClick:function(){R(!0)},disabled:!I},a.createElement(u.Z,null)),a.createElement(E.q,{query:e,data:I,open:M,onClose:function(){R(!1)}})),(0,E.H)(null==I?void 0:I.sql))}}},37087:function(e,t,n){"use strict";var r=n(67294),a=n(68239),o=n(85350),i=n(71927),l=function(e){var t=e.children,n=(0,o.Z)().isDarkTheme,l=(0,a.Z)({palette:{mode:n?"dark":void 0,primary:{main:"rgb(37, 193, 159)"}}});return r.createElement(i.Z,{theme:l},t)};l.displayName="MuiThemeAdaptor",t.Z=l},21703:function(e,t,n){"use strict";n.d(t,{_:function(){return o},d:function(){return i}});var r=n(9669),a=n.n(r),o="https://community-preview-contributor.tidb.io";function i(){return a().create({baseURL:o})}},80701:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return v}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(20407),l=["components"],u={title:"History"},c=void 0,s={unversionedId:"low-code/history",id:"low-code/history",title:"History",description:"",source:"@site/docs/low-code/03-history.mdx",sourceDirName:"low-code",slug:"/low-code/history",permalink:"/_/low-code/history",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/low-code/03-history.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"History"},sidebar:"tutorialSidebar",previous:{title:"Realtime - Hourly",permalink:"/_/low-code/realtime"},next:{title:"Analyze Github Events on TiDB Cloud in 10 minutes",permalink:"/_/more/analyze-github-events-on-tidb-cloud-in-10-minutes"}},d=[],m={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.h,{repo:"nocode_repos",chart:"histories",mdxType:"CommonChart"}))}v.isMDXComponent=!0},85898:function(e,t,n){var r={"./barchart/index.js":20646,"./contributors-per-year/index.js":4647,"./events-per-year/index.js":73714,"./histories/index.js":27065};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=85898}}]);