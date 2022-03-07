(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[6502],{20407:function(e,t,n){"use strict";n.d(t,{h:function(){return p}});var r=n(63366),a=n(67294),o=n(67720),i=n(5344),l=n(78700),u=n(12859),s=n(91262),c=n(37087),d=["chart","noSearch"];function m(e){var t=e.chart,s=e.noSearch,m=(0,r.Z)(e,d),p=(0,a.useMemo)((function(){return"string"==typeof t?n(85898)("./"+t+"/index.js").default:t}),[t]),v=p.useForm({noSearch:s}),f=v.form,y=v.query,h=a.createElement(p.Chart,Object.assign({},y,m));return a.createElement(i.Z,{dateAdapter:l.Z},a.createElement(c.Z,null,a.createElement(u.Z,null,a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),f,a.createElement(o.Z,{sx:{my:2}}),h))}function p(e){return a.createElement(s.Z,null,(function(){return a.createElement(m,e)}))}},24162:function(e,t,n){"use strict";n.d(t,{q:function(){return f},H:function(){return b}});var r=n(67294),a=n(50657),o=n(18557),i=n(87357),l=n(86886),u=n(99490),s=n(15861),c=n(88078),d=n(19055),m=n(11703),p=n(40044),v="yyyy-MM-dd HH:mm:ss",f=function(e){var t=e.query,n=e.data,l=e.open,u=e.onClose;return(0,r.useEffect)((function(){n||u()}),[n]),r.createElement(r.Fragment,null,r.createElement(a.Z,{open:l,maxWidth:"md",fullWidth:!0,onClose:u,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement(o.Z,null,"[For Debug] SQL Execution info"),r.createElement(i.Z,{sx:{p:4}},Array.isArray(n)?r.createElement(y,{data:n,query:t}):h(t,n))))},y=function(e){var t=e.query,n=e.data,a=(0,r.useState)(0),o=a[0],i=a[1];return r.createElement(r.Fragment,null,r.createElement(m.Z,{value:o,onChange:function(e,t){return i(t)}},n.map((function(e,t){return r.createElement(p.Z,{label:"Request "+(t+1)})}))),n.map((function(e,n){return h(t,e,n,o!==n)})))},h=function(e,t,n,a){return void 0===n&&(n=void 0),void 0===a&&(a=!1),r.createElement("div",{hidden:a,key:n},b(null==t?void 0:t.sql),r.createElement(l.ZP,{container:!0,alignItems:"center"},r.createElement(g,{title:"Requested at",value:u.ou.fromISO(null==t?void 0:t.requestedAt).toFormat(v)}),r.createElement(g,{title:"Expires at",value:u.ou.fromISO(null==t?void 0:t.expiresAt).toFormat(v)}),r.createElement(g,{title:"Spent",value:(null==t?void 0:t.spent)+" seconds"}),r.createElement(g,{title:"Query",value:e}),r.createElement(g,{title:"Params",value:r.createElement("pre",null,JSON.stringify(null==t?void 0:t.params,void 0,2))})))},g=function(e){var t=e.title,n=e.value;return r.createElement(r.Fragment,null,r.createElement(l.ZP,{item:!0,xs:3},r.createElement("div",null,r.createElement(s.Z,{align:"right",variant:"body1"},t))),r.createElement(l.ZP,{item:!0,xs:1}),r.createElement(l.ZP,{item:!0,xs:8},r.createElement("div",null,r.createElement(s.Z,{align:"left",variant:"body2",component:"div"},n))))},b=function(e){return e?r.createElement(d.Z,{className:"language-sql"},e):r.createElement(i.Z,{sx:{pt:.5}},r.createElement(c.Z,{width:"80%"}),r.createElement(c.Z,{width:"50%"}),r.createElement(c.Z,{width:"70%"}))}},4647:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=(0,n(14947).z)("contributors-per-year",{categoryIndex:"repo_name",valueIndex:"contributors_count"}),a=n(67294),o=n(26447),i=n(94054),l=n(33841),u=n(45684),s=n(23599),c=n(61903),d=n(87109),m=[{title:"Contributors (PRs opened)",value:"all"},{title:"Contributors (PRs merged)",value:"merged"}],p=[10,20,50],v={useForm:function(e){var t=e.noSearch,n=(0,a.useMemo)((function(){return Math.random()}),[]),r=(0,a.useMemo)((function(){var e=m[0].value,n=10;if(!t&&"undefined"!=typeof window){var r=new URLSearchParams(location.search),a=r.get("type"),o=parseInt(r.get("n"));a&&m.find((function(e){return e.value===a}))&&(e=a),o&&p.indexOf(o)>=0&&(n=o)}return{initialType:e,initialLimits:n}}),[]),v=r.initialType,f=r.initialLimits,y=(0,a.useState)(v),h=y[0],g=y[1],b=(0,a.useState)(f),x=b[0],E=b[1],w=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",h),e.set("n",String(x)),window.history.replaceState(null,null,"?"+e.toString())}return{action:"all"===h?"opened":"closed",merged:"all"===h?"*":"true",n:x}}),[h,x]),S=a.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(i.Z,{variant:"standard",sx:{minWidth:"230px",maxWidth:"230px"}},a.createElement(l.Z,{id:"cubechart-"+n+"-type"},"Type"),a.createElement(u.Z,{id:"cubechart-"+n+"-type",value:h,onChange:function(e){return g(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(s.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(c.Z,{variant:"standard",id:"cubechart-"+n+"-type",select:!0,value:x,onChange:function(e){return E(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},p.map((function(e){return a.createElement(s.Z,{key:e,value:e},e)})))));return{form:S,query:w}},Chart:r}},73714:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=(0,n(14947).z)("events-per-year",{categoryIndex:"repo_name",valueIndex:"events_count"}),a=n(67294),o=n(26447),i=n(94054),l=n(33841),u=n(45684),s=n(23599),c=n(61903),d=n(87109),m=[{title:"Stars",value:"WatchEvent"},{title:"Forks",value:"ForkEvent"},{title:"PRs",value:"PullRequestEvent"}],p=[10,20,50],v={useForm:function(e){var t=e.noSearch,n=(0,a.useMemo)((function(){return Math.random()}),[]),r=(0,a.useMemo)((function(){var e=m[0].value,n=10;if(!t&&"undefined"!=typeof window){var r=new URLSearchParams(location.search),a=r.get("type"),o=parseInt(r.get("n"));a&&m.find((function(e){return e.value===a}))&&(e=a),o&&p.indexOf(o)>=0&&(n=o)}return{initialType:e,initialLimits:n}}),[]),v=r.initialType,f=r.initialLimits,y=(0,a.useState)(v),h=y[0],g=y[1],b=(0,a.useState)(f),x=b[0],E=b[1],w=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",h),e.set("n",String(x)),window.history.replaceState(null,null,"?"+e.toString())}return{event:h,n:x}}),[h,x]),S=a.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(l.Z,{id:"cubechart-"+n+"-type"},"Type"),a.createElement(u.Z,{id:"cubechart-"+n+"-type",value:h,onChange:function(e){return g(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(s.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(c.Z,{variant:"standard",id:"cubechart-"+n+"-type",select:!0,value:x,onChange:function(e){return E(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},p.map((function(e){return a.createElement(s.Z,{key:e,value:e},e)})))));return{form:S,query:w}},Chart:r}},27065:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var r=n(63366),a=n(14947),o=n(67294),i=["category","valueIndex"],l=((0,a.z)("events-history",{categoryIndex:"repo_name",valueIndex:"events_count"}),n(26447)),u=n(94054),s=n(33841),c=n(45684),d=n(23599),m=n(61903),p=n(87109),v=[{title:"Stars",key:"stars",value:{category:"events-history",params:{event:"WatchEvent"},valueIndex:"events_count"}},{title:"Forks",key:"forks",value:{category:"events-history",params:{event:"ForkEvent"},valueIndex:"events_count"}},{title:"PRs",key:"PRs",value:{category:"events-history",params:{event:"PullRequestEvent"},valueIndex:"events_count"}},{title:"Contributors (PRs opened)",key:"contributors-PR-opened",value:{category:"contributors-history",params:{action:"opened",merged:"*"},valueIndex:"contributors_count"}},{title:"Contributors (PRs merged)",key:"contributors-PR-merged",value:{category:"contributors-history",params:{action:"closed",merged:"true"},valueIndex:"contributors_count"}}],f=[1,2,5,10],y=[10,20,50],h={useForm:function(e){var t=e.noSearch,n=(0,o.useMemo)((function(){return Math.random()}),[]),r=(0,o.useMemo)((function(){var e=v[0],n=1,r=10;if(!t&&"undefined"!=typeof window){var a=new URLSearchParams(location.search),o=a.get("type"),i=parseInt(a.get("years")),l=parseInt(a.get("n"));if(o){var u=v.find((function(e){return e.key===o}));u&&(e=u)}i&&f.indexOf(i)>=0&&(n=i),l&&y.indexOf(l)>=0&&(r=l)}return{initialType:e,initialYears:n,initialLimits:r}}),[]),a=r.initialType,i=r.initialLimits,h=r.initialYears,g=(0,o.useState)(a),b=g[0],x=g[1],E=(0,o.useState)(i),w=E[0],S=E[1],k=(0,o.useState)(h),Z=k[0],I=k[1],C=(0,o.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",b.key),e.set("n",String(w)),e.set("years",String(Z)),window.history.replaceState(null,null,"?"+e.toString())}return Object.assign({category:b.value.category,valueIndex:b.value.valueIndex},b.value.params,{n:w,years:Z})}),[b,w,Z]),T=o.createElement(l.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},o.createElement(u.Z,{variant:"standard"},o.createElement(s.Z,{id:n+"-type"},"Type"),o.createElement(c.Z,{id:n+"-type",value:b,autoWidth:!0,onChange:function(e){var t;return x(null!=(t=v.find((function(t){return t.key===e.target.value})))?t:v[0])},label:"Type",size:"small",renderValue:function(e){return e.title}},v.map((function(e){return o.createElement(d.Z,{key:e.key,value:e.key},e.title)})))),o.createElement(u.Z,{variant:"standard"},o.createElement(m.Z,{variant:"standard",select:!0,value:w,onChange:function(e){return S(Number(e.target.value))},InputProps:{startAdornment:o.createElement(p.Z,{position:"start"},"Top")}},y.map((function(e){return o.createElement(d.Z,{key:e,value:e},e)})))),o.createElement(u.Z,{variant:"standard"},o.createElement(m.Z,{variant:"standard",value:Z,onChange:function(e){return I(Number(e.target.value))},select:!0,InputProps:{startAdornment:o.createElement(p.Z,{position:"start"},"Recent"),endAdornment:o.createElement(p.Z,{position:"start",sx:{mr:4}},"Year(s)")}},f.map((function(e){return o.createElement(d.Z,{key:e,value:e},e)})))));return{form:T,query:C}},Chart:function(e){var t=e.category,n=e.valueIndex,l=(0,r.Z)(e,i),u=(0,o.useMemo)((function(){return(0,a.z)(t,{categoryIndex:"repo_name",valueIndex:n})}),[t,n]);return o.createElement(u,l)}}},6971:function(e,t,n){"use strict";n.d(t,{W:function(){return i}});var r=n(67294),a=n(44008),o=(0,n(21703).d)(),i=function(e,t,n,i){var l=(0,r.useState)(void 0),u=l[0],s=l[1],c=(0,r.useState)(void 0),d=c[0],m=c[1],p=(0,r.useState)(!1),v=p[0],f=p[1];return(0,r.useEffect)((function(){!1!==i&&null!=e&&(s(void 0),m(void 0),f(!0),o.get("/q/"+e,{params:t}).then((function(e){var t=e.data;t.sql&&n&&(t.sql=(0,a.WU)(t.sql)),s(t)})).catch((function(e){return m(e)})).finally((function(){return f(!1)})))}),[JSON.stringify(t)]),{data:u,loading:v,error:d}}},31562:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return l}});var r=n(63366),a=n(14947),o=n(67294),i=["category","categoryIndex","valueIndex"];var l={Chart:function(e){var t=e.category,n=e.categoryIndex,l=void 0===n?"repo_name":n,u=e.valueIndex,s=(0,r.Z)(e,i),c=(0,o.useMemo)((function(){return(0,a.d)(t,[{field:l,title:l},{field:u,title:u}])}),[t,l,u]);return o.createElement(c,s)},useForm:function(){return(0,o.useMemo)((function(){return{form:null,query:{}}}),[])}}},64556:function(e,t,n){"use strict";n.d(t,{F6:function(){return a},y:function(){return o}});var r=n(30454);function a(e){void 0===e&&(e=!0);var t=["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"];r.aW("vintage",{color:t,backgroundColor:e?"#fef8ef":void 0,graph:{color:t}})}function o(){var e="#eee",t=function(){return{axisLine:{lineStyle:{color:e}},axisTick:{lineStyle:{color:e}},axisLabel:{textStyle:{color:e}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:e}}}},n=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],a={color:n,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:e},crossStyle:{color:e}}},legend:{textStyle:{color:e}},textStyle:{color:e},title:{textStyle:{color:e}},toolbox:{iconStyle:{normal:{borderColor:e}}},dataZoom:{textStyle:{color:e}},timeline:{lineStyle:{color:e},itemStyle:{normal:{color:n[1]}},label:{normal:{textStyle:{color:e}}},controlStyle:{normal:{color:e,borderColor:e}}},timeAxis:t(),logAxis:t(),valueAxis:t(),categoryAxis:t(),line:{symbol:"circle"},graph:{color:n},gauge:{title:{textStyle:{color:e}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};a.categoryAxis.splitLine.show=!1,r.aW("dark",a)}},14947:function(e,t,n){"use strict";n.d(t,{z:function(){return Z},d:function(){return I}});var r=n(63366),a=n(67294),o=n(6971),i=n(58032),l=n(46901),u=n(27608),s=n(87155),c=n(38180),d=n(8690),m=n(82739),p=n(31281),v=n(91416),f=n(29359),y=n(68023),h=n(85350),g=n(64556);function b(e){var t=e.data,n=e.loading,r=e.clear,o=e.size,i=e.n,l=e.deps,u=e.categoryIndex,c=e.valueIndex,d=(0,a.useMemo)((function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:r?0:8,top:r?0:16,bottom:r?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:t.map((function(e){return e[u]})),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){return e.indexOf("/")<0?e:e.split("/")[1]}}},series:[{name:"Count",data:t.map((function(e){return e[c]})),type:"bar",barWidth:r?o/2:o}]}}),[t].concat(l,[u,c,o,r])),m=(0,a.useMemo)((function(){return n?400:Math.max(Math.min(i,t.length),5)*(o*(r?1:1.5))}),[o,n,r]),p=(0,a.useMemo)((function(){var e,t;return{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",height:m,width:"auto",locale:"en"}}),[m]),v=(0,a.useMemo)((function(){return{click:function(e){"name"in e&&window.open("https://github.com/"+e.name).then()}}}),[]),y=(0,h.Z)().isDarkTheme;return a.createElement(s.Z,{showLoading:n,echarts:f,option:d,notMerge:!0,lazyUpdate:!0,theme:y?"dark":"vintage",style:{height:m,marginBottom:16,borderRadius:"var(--ifm-global-radius)",overflow:"hidden"},opts:p,onEvents:v})}y.D([d.N,m.N,p.N,c.N,v.N]),(0,g.F6)(),(0,g.y)();var x=n(24162),E="dataGridTable_5g2v";function w(e){var t=e.columns,n=e.data;return a.createElement("table",{className:E},a.createElement("thead",null,a.createElement("tr",null,t.map((function(e){var t=e.title,n=e.field;return a.createElement("th",{key:n},t)})))),a.createElement("tbody",null,null==n?void 0:n.map((function(e){return a.createElement("tr",null,t.map((function(t){var n=t.field;return a.createElement("td",{key:n},e[n])})))}))))}var S=["clear","size","formatSql","children","categoryIndex","valueIndex"],k=["size","clear","formatSql"];function Z(e,t){return function(n){var s,c,d=n.clear,m=n.size,p=void 0===m?30:m,v=n.formatSql,f=void 0===v||v,y=(n.children,n.categoryIndex),h=void 0===y?t.categoryIndex:y,g=n.valueIndex,E=void 0===g?t.valueIndex:g,w=(0,r.Z)(n,S),k=(0,o.W)(e,w,f),Z=k.data,I=k.loading,C=k.error,T=(0,a.useState)(!1),q=T[0],_=T[1],P=a.createElement(b,{categoryIndex:h,valueIndex:E,size:p,data:null!=(s=null==Z?void 0:Z.data)?s:[],loading:I,clear:d,n:w.n,deps:Object.values(w)});return C?a.createElement(l.Z,{severity:"error"},"Request failed $",null!=(c=null==C?void 0:C.message)?c:""):d?P:a.createElement(a.Fragment,null,a.createElement("div",{style:{position:"relative"}},P,a.createElement(i.Z,{size:"small",sx:{position:"absolute",zIndex:10,right:24,bottom:24},onClick:function(){_(!0)},disabled:!Z},a.createElement(u.Z,null)),a.createElement(x.q,{query:e,data:Z,open:q,onClose:function(){_(!1)}})),(0,x.H)(null==Z?void 0:Z.sql))}}function I(e,t){return function(n){n.size,n.clear;var s,c=n.formatSql,d=void 0===c||c,m=(0,r.Z)(n,k),p=(0,o.W)(e,m,d),v=p.data,f=p.loading,y=p.error,h=(0,a.useState)(!1),g=h[0],b=h[1],E=a.createElement(w,{columns:t,loading:f,data:null==v?void 0:v.data});return y?a.createElement(l.Z,{severity:"error"},"Request failed $",null!=(s=null==y?void 0:y.message)?s:""):a.createElement(a.Fragment,null,a.createElement("div",{style:{position:"relative"}},E,a.createElement(i.Z,{size:"small",sx:{position:"absolute",zIndex:10,right:24,bottom:24},onClick:function(){b(!0)},disabled:!v},a.createElement(u.Z,null)),a.createElement(x.q,{query:e,data:v,open:g,onClose:function(){b(!1)}})),(0,x.H)(null==v?void 0:v.sql))}}},37087:function(e,t,n){"use strict";var r=n(67294),a=n(68239),o=n(85350),i=n(71927),l=function(e){var t=e.children,n=(0,o.Z)().isDarkTheme,l=(0,a.Z)({palette:{mode:n?"dark":void 0,primary:{main:"rgb(37, 193, 159)"}}});return r.createElement(i.Z,{theme:l},t)};l.displayName="MuiThemeAdaptor",t.Z=l},21703:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var r=n(9669),a=n.n(r);function o(){return a().create({baseURL:"https://community-preview-contributor.tidb.io"})}},51765:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=n(20407),l=["components"],u={title:"Realtime - Hourly"},s=void 0,c={unversionedId:"web-framework/realtime",id:"web-framework/realtime",title:"Realtime - Hourly",description:"Top 10 repos by stars in an hour",source:"@site/docs/web-framework/02-realtime.mdx",sourceDirName:"web-framework",slug:"/web-framework/realtime",permalink:"/_/web-framework/realtime",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/web-framework/02-realtime.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Realtime - Hourly"},sidebar:"tutorialSidebar",previous:{title:"Deep Insight About Web Framework: 2021",permalink:"/_/web-framework/deep-insight-about-web-framework-2021"},next:{title:"History",permalink:"/_/web-framework/history"}},d=[{value:"Top 10 repos by stars in an hour",id:"top-10-repos-by-stars-in-an-hour",children:[],level:2},{value:"Top 10 repos by PR in an hour",id:"top-10-repos-by-pr-in-an-hour",children:[],level:2},{value:"Top Developers for OSS Databases",id:"top-developers-for-oss-databases",children:[],level:2},{value:"Top Language for OSS Databases an hour",id:"top-language-for-oss-databases-an-hour",children:[],level:2},{value:"Top companies contributing to OSS databases an hour",id:"top-companies-contributing-to-oss-databases-an-hour",children:[],level:2},{value:"Top countries or regions contributing to OSS databases an hour",id:"top-countries-or-regions-contributing-to-oss-databases-an-hour",children:[],level:2}],m={toc:d};function p(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"top-10-repos-by-stars-in-an-hour"},"Top 10 repos by stars in an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:10,category:"rt-top10-by-stars",categoryIndex:"repo_name",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-10-repos-by-pr-in-an-hour"},"Top 10 repos by PR in an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:10,category:"rt-top10-by-prs",categoryIndex:"repo_name",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-developers-for-oss-databases"},"Top Developers for OSS Databases"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:20,category:"rt-top20-by-developers",categoryIndex:"repo_name",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-language-for-oss-databases-an-hour"},"Top Language for OSS Databases an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:5,category:"rt-top5-languages",categoryIndex:"language",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-companies-contributing-to-oss-databases-an-hour"},"Top companies contributing to OSS databases an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:20,category:"rt-top20-companies",categoryIndex:"company",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-countries-or-regions-contributing-to-oss-databases-an-hour"},"Top countries or regions contributing to OSS databases an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:20,category:"rt-top20-countries",categoryIndex:"country",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}))}p.isMDXComponent=!0},85898:function(e,t,n){var r={"./contributors-per-year/index.js":4647,"./events-per-year/index.js":73714,"./histories/index.js":27065,"./rt/index.js":31562};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=85898}}]);