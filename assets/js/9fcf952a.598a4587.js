(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[502],{407:function(e,t,r){"use strict";r.d(t,{h:function(){return p}});var n=r(3366),a=r(7294),o=r(7720),i=r(5344),l=r(1013),u=r(2859),s=r(1262),c=r(7087),d=["chart","noSearch"];function m(e){var t=e.chart,s=e.noSearch,m=(0,n.Z)(e,d),p=(0,a.useMemo)((function(){return"string"==typeof t?r(5898)("./"+t+"/index.js").default:t}),[t]),v=p.useForm({noSearch:s}),f=v.form,y=v.query,h=a.createElement(p.Chart,Object.assign({},y,m));return a.createElement(i.Z,{dateAdapter:l.Z},a.createElement(c.Z,null,a.createElement(u.Z,null,a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),f,a.createElement(o.Z,{sx:{my:2}}),h))}function p(e){return a.createElement(s.Z,null,(function(){return a.createElement(m,e)}))}},4647:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=(0,r(7694).z)("contributors-per-year",{categoryIndex:"repo_name",valueIndex:"contributors_count"}),a=r(7294),o=r(6447),i=r(4054),l=r(3841),u=r(5018),s=r(3599),c=r(1903),d=r(7109),m=[{title:"Contributors (PRs opened)",value:"all"},{title:"Contributors (PRs merged)",value:"merged"}],p=[10,20,50],v={useForm:function(e){var t=e.noSearch,r=(0,a.useMemo)((function(){return Math.random()}),[]),n=(0,a.useMemo)((function(){var e=m[0].value,r=10;if(!t&&"undefined"!=typeof window){var n=new URLSearchParams(location.search),a=n.get("type"),o=parseInt(n.get("n"));a&&m.find((function(e){return e.value===a}))&&(e=a),o&&p.indexOf(o)>=0&&(r=o)}return{initialType:e,initialLimits:r}}),[]),v=n.initialType,f=n.initialLimits,y=(0,a.useState)(v),h=y[0],g=y[1],b=(0,a.useState)(f),x=b[0],E=b[1],w=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",h),e.set("n",String(x)),window.history.replaceState(null,null,"?"+e.toString())}return{action:"all"===h?"opened":"closed",merged:"all"===h?"*":"true",n:x}}),[h,x]),S=a.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(i.Z,{variant:"standard",sx:{minWidth:"230px",maxWidth:"230px"}},a.createElement(l.Z,{id:"cubechart-"+r+"-type"},"Type"),a.createElement(u.Z,{id:"cubechart-"+r+"-type",value:h,onChange:function(e){return g(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(s.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(c.Z,{variant:"standard",id:"cubechart-"+r+"-type",select:!0,value:x,onChange:function(e){return E(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},p.map((function(e){return a.createElement(s.Z,{key:e,value:e},e)})))));return{form:S,query:w}},Chart:n}},3714:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return v}});var n=(0,r(7694).z)("events-per-year",{categoryIndex:"repo_name",valueIndex:"events_count"}),a=r(7294),o=r(6447),i=r(4054),l=r(3841),u=r(5018),s=r(3599),c=r(1903),d=r(7109),m=[{title:"Stars",value:"WatchEvent"},{title:"Forks",value:"ForkEvent"},{title:"PRs",value:"PullRequestEvent"}],p=[10,20,50],v={useForm:function(e){var t=e.noSearch,r=(0,a.useMemo)((function(){return Math.random()}),[]),n=(0,a.useMemo)((function(){var e=m[0].value,r=10;if(!t&&"undefined"!=typeof window){var n=new URLSearchParams(location.search),a=n.get("type"),o=parseInt(n.get("n"));a&&m.find((function(e){return e.value===a}))&&(e=a),o&&p.indexOf(o)>=0&&(r=o)}return{initialType:e,initialLimits:r}}),[]),v=n.initialType,f=n.initialLimits,y=(0,a.useState)(v),h=y[0],g=y[1],b=(0,a.useState)(f),x=b[0],E=b[1],w=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",h),e.set("n",String(x)),window.history.replaceState(null,null,"?"+e.toString())}return{event:h,n:x}}),[h,x]),S=a.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(l.Z,{id:"cubechart-"+r+"-type"},"Type"),a.createElement(u.Z,{id:"cubechart-"+r+"-type",value:h,onChange:function(e){return g(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(s.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(i.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(c.Z,{variant:"standard",id:"cubechart-"+r+"-type",select:!0,value:x,onChange:function(e){return E(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},p.map((function(e){return a.createElement(s.Z,{key:e,value:e},e)})))));return{form:S,query:w}},Chart:n}},7065:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(3366),a=r(7694),o=r(7294),i=["category","valueIndex"],l=((0,a.z)("events-history",{categoryIndex:"repo_name",valueIndex:"events_count"}),r(6447)),u=r(4054),s=r(3841),c=r(5018),d=r(3599),m=r(1903),p=r(7109),v=[{title:"Stars",key:"stars",value:{category:"events-history",params:{event:"WatchEvent"},valueIndex:"events_count"}},{title:"Forks",key:"forks",value:{category:"events-history",params:{event:"ForkEvent"},valueIndex:"events_count"}},{title:"PRs",key:"PRs",value:{category:"events-history",params:{event:"PullRequestEvent"},valueIndex:"events_count"}},{title:"Contributors (PRs opened)",key:"contributors-PR-opened",value:{category:"contributors-history",params:{action:"opened",merged:"*"},valueIndex:"contributors_count"}},{title:"Contributors (PRs merged)",key:"contributors-PR-merged",value:{category:"contributors-history",params:{action:"closed",merged:"true"},valueIndex:"contributors_count"}}],f=[1,2,5,10],y=[10,20,50],h={useForm:function(e){var t=e.noSearch,r=(0,o.useMemo)((function(){return Math.random()}),[]),n=(0,o.useMemo)((function(){var e=v[0],r=1,n=10;if(!t&&"undefined"!=typeof window){var a=new URLSearchParams(location.search),o=a.get("type"),i=parseInt(a.get("years")),l=parseInt(a.get("n"));if(o){var u=v.find((function(e){return e.key===o}));u&&(e=u)}i&&f.indexOf(i)>=0&&(r=i),l&&y.indexOf(l)>=0&&(n=l)}return{initialType:e,initialYears:r,initialLimits:n}}),[]),a=n.initialType,i=n.initialLimits,h=n.initialYears,g=(0,o.useState)(a),b=g[0],x=g[1],E=(0,o.useState)(i),w=E[0],S=E[1],k=(0,o.useState)(h),Z=k[0],I=k[1],C=(0,o.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",b.key),e.set("n",String(w)),e.set("years",String(Z)),window.history.replaceState(null,null,"?"+e.toString())}return Object.assign({category:b.value.category,valueIndex:b.value.valueIndex},b.value.params,{n:w,years:Z})}),[b,w,Z]),T=o.createElement(l.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},o.createElement(u.Z,{variant:"standard"},o.createElement(s.Z,{id:r+"-type"},"Type"),o.createElement(c.Z,{id:r+"-type",value:b,autoWidth:!0,onChange:function(e){var t;return x(null!=(t=v.find((function(t){return t.key===e.target.value})))?t:v[0])},label:"Type",size:"small",renderValue:function(e){return e.title}},v.map((function(e){return o.createElement(d.Z,{key:e.key,value:e.key},e.title)})))),o.createElement(u.Z,{variant:"standard"},o.createElement(m.Z,{variant:"standard",select:!0,value:w,onChange:function(e){return S(Number(e.target.value))},InputProps:{startAdornment:o.createElement(p.Z,{position:"start"},"Top")}},y.map((function(e){return o.createElement(d.Z,{key:e,value:e},e)})))),o.createElement(u.Z,{variant:"standard"},o.createElement(m.Z,{variant:"standard",value:Z,onChange:function(e){return I(Number(e.target.value))},select:!0,InputProps:{startAdornment:o.createElement(p.Z,{position:"start"},"Recent"),endAdornment:o.createElement(p.Z,{position:"start",sx:{mr:4}},"Year(s)")}},f.map((function(e){return o.createElement(d.Z,{key:e,value:e},e)})))));return{form:T,query:C}},Chart:function(e){var t=e.category,r=e.valueIndex,l=(0,n.Z)(e,i),u=(0,o.useMemo)((function(){return(0,a.z)(t,{categoryIndex:"repo_name",valueIndex:r})}),[t,r]);return o.createElement(u,l)}}},1562:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return l}});var n=r(3366),a=r(7694),o=r(7294),i=["category","categoryIndex","valueIndex"];var l={Chart:function(e){var t=e.category,r=e.categoryIndex,l=void 0===r?"repo_name":r,u=e.valueIndex,s=(0,n.Z)(e,i),c=(0,o.useMemo)((function(){return(0,a.d)(t,[{field:l,title:l},{field:u,title:u}])}),[t,l,u]);return o.createElement(c,s)},useForm:function(){return(0,o.useMemo)((function(){return{form:null,query:{}}}),[])}}},7694:function(e,t,r){"use strict";r.d(t,{z:function(){return F},d:function(){return W}});var n,a=r(3366),o=r(7294),i=r(9669),l=r.n(i),u=r(4008),s=function(e,t,r){var n=(0,o.useState)(void 0),a=n[0],i=n[1],s=(0,o.useState)(void 0),c=s[0],d=s[1],m=(0,o.useState)(!1),p=m[0],v=m[1];return(0,o.useEffect)((function(){i(void 0),d(void 0),v(!0),l().get("/q/"+e,{baseURL:"https://community-preview-contributor.tidb.io",params:t}).then((function(e){var t=e.data;t.sql&&r&&(t.sql=(0,u.WU)(t.sql)),i(t)})).catch((function(e){return d(e)})).finally((function(){return v(!1)}))}),[JSON.stringify(t)]),{data:a,loading:p,error:c}},c=r(7357),d=r(6886),m=r(8078),p=r(8032),v=r(1737),f=r(657),y=r(8557),h=r(7608),g=r(5861),b=r(9055),x=r(7155),E=r(4149),w=r(8690),S=r(2739),k=r(6359),Z=r(1416),I=r(9075),C=r(8023),T=r(9720),_=r(5350);function P(e){var t=e.data,r=e.loading,n=e.clear,a=e.size,i=e.n,l=e.deps,u=e.categoryIndex,s=e.valueIndex,c=(0,o.useMemo)((function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:n?0:8,top:n?0:16,bottom:n?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:t.map((function(e){return e[u]})),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){return e.indexOf("/")<0?e:e.split("/")[1]}}},series:[{name:"Count",data:t.map((function(e){return e[s]})),type:"bar",barWidth:n?a/2:a}]}}),[t].concat(l,[u,s,a,n])),d=(0,o.useMemo)((function(){return r?400:Math.max(Math.min(i,t.length),5)*(a*(n?1:1.5))}),[a,r,n]),m=(0,o.useMemo)((function(){var e,t;return{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",height:d,width:"auto",locale:"en"}}),[d]),p=(0,o.useMemo)((function(){return{click:function(e){"name"in e&&window.open("https://github.com/"+e.name).then()}}}),[]),v=(0,_.Z)().isDarkTheme;return o.createElement(x.Z,{showLoading:r,echarts:I,option:c,notMerge:!0,lazyUpdate:!0,theme:v?"dark":"vintage",style:{height:d,marginBottom:16,borderRadius:"var(--ifm-global-radius)",overflow:"hidden"},opts:m,onEvents:p})}C.D([w.N,S.N,k.N,E.N,Z.N]),n=["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"],T.aW("vintage",{color:n,backgroundColor:"#fef8ef",graph:{color:n}}),function(){var e="#eee",t=function(){return{axisLine:{lineStyle:{color:e}},axisTick:{lineStyle:{color:e}},axisLabel:{textStyle:{color:e}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:e}}}},r=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],n={color:r,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:e},crossStyle:{color:e}}},legend:{textStyle:{color:e}},textStyle:{color:e},title:{textStyle:{color:e}},toolbox:{iconStyle:{normal:{borderColor:e}}},dataZoom:{textStyle:{color:e}},timeline:{lineStyle:{color:e},itemStyle:{normal:{color:r[1]}},label:{normal:{textStyle:{color:e}}},controlStyle:{normal:{color:e,borderColor:e}}},timeAxis:t(),logAxis:t(),valueAxis:t(),categoryAxis:t(),line:{symbol:"circle"},graph:{color:r},gauge:{title:{textStyle:{color:e}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};n.categoryAxis.splitLine.show=!1,T.aW("dark",n)}();var q=r(9490),M="dataGridTable_5g2v";function R(e){var t=e.columns,r=e.data;return o.createElement("table",{className:M},o.createElement("thead",null,o.createElement("tr",null,t.map((function(e){var t=e.title,r=e.field;return o.createElement("th",{key:r},t)})))),o.createElement("tbody",null,null==r?void 0:r.map((function(e){return o.createElement("tr",null,t.map((function(t){var r=t.field;return o.createElement("td",{key:r},e[r])})))}))))}var L=["clear","size","formatSql","children","categoryIndex","valueIndex"],O=["size","clear","formatSql"];function F(e,t){return function(r){var n,i,l=r.clear,u=r.size,c=void 0===u?30:u,d=r.formatSql,m=void 0===d||d,p=(r.children,r.categoryIndex),f=void 0===p?t.categoryIndex:p,y=r.valueIndex,h=void 0===y?t.valueIndex:y,g=(0,a.Z)(r,L),b=s(e,g,m),x=b.data,E=b.loading,w=b.error,S=o.createElement(P,{categoryIndex:f,valueIndex:h,size:c,data:null!=(n=null==x?void 0:x.data)?n:[],loading:E,clear:l,n:g.n,deps:Object.values(g)});return w?o.createElement(v.Z,{severity:"error"},"Request failed $",null!=(i=null==w?void 0:w.message)?i:""):l?S:o.createElement(o.Fragment,null,o.createElement("div",{style:{position:"relative"}},S,o.createElement(D,{data:x,query:e})),N(null==x?void 0:x.sql))}}function W(e,t){return function(r){r.size,r.clear;var n,i=r.formatSql,l=void 0===i||i,u=(0,a.Z)(r,O),c=s(e,u,l),d=c.data,m=c.loading,p=c.error,f=o.createElement(R,{columns:t,loading:m,data:null==d?void 0:d.data});return p?o.createElement(v.Z,{severity:"error"},"Request failed $",null!=(n=null==p?void 0:p.message)?n:""):o.createElement(o.Fragment,null,o.createElement("div",{style:{position:"relative"}},f,o.createElement(D,{data:d,query:e})),N(null==d?void 0:d.sql))}}var A="yyyy-MM-dd HH:mm:ss",D=function(e){var t=e.query,r=e.data,n=o.useState(!1),a=n[0],i=n[1],l=function(){return i(!1)};return(0,o.useEffect)((function(){r||l()}),[r]),o.createElement(o.Fragment,null,o.createElement(p.Z,{size:"small",sx:{position:"absolute",zIndex:10,right:24,bottom:24},onClick:function(){return i(!0)},disabled:!r},o.createElement(h.Z,null)),o.createElement(f.Z,{open:a,onClose:l,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},o.createElement(y.Z,null,"[For Debug] SQL Execution info"),o.createElement(c.Z,{sx:{p:4}},N(null==r?void 0:r.sql),o.createElement(d.ZP,{container:!0,alignItems:"center"},o.createElement(z,{title:"Requested at",value:q.ou.fromISO(null==r?void 0:r.requestedAt).toFormat(A)}),o.createElement(z,{title:"Expires at",value:q.ou.fromISO(null==r?void 0:r.expiresAt).toFormat(A)}),o.createElement(z,{title:"Spent",value:(null==r?void 0:r.spent)+" seconds"}),o.createElement(z,{title:"Query",value:t}),o.createElement(z,{title:"Params",value:o.createElement("pre",null,JSON.stringify(null==r?void 0:r.params,void 0,2))})))))},z=function(e){var t=e.title,r=e.value;return o.createElement(o.Fragment,null,o.createElement(d.ZP,{xs:3},o.createElement("div",null,o.createElement(g.Z,{align:"right",variant:"body1"},t))),o.createElement(d.ZP,{xs:1}),o.createElement(d.ZP,{xs:8},o.createElement("div",null,o.createElement(g.Z,{align:"left",variant:"body2"},r))))},N=function(e){return e?o.createElement(b.Z,{className:"language-sql"},e):o.createElement(c.Z,{sx:{pt:.5}},o.createElement(m.Z,{width:"80%"}),o.createElement(m.Z,{width:"50%"}),o.createElement(m.Z,{width:"70%"}))}},7087:function(e,t,r){"use strict";var n=r(7294),a=r(8239),o=r(5350),i=r(1927),l=function(e){var t=e.children,r=(0,o.Z)().isDarkTheme,l=(0,a.Z)({palette:{mode:r?"dark":void 0,primary:{main:"rgb(37, 193, 159)"}}});return n.createElement(i.Z,{theme:l},t)};l.displayName="MuiThemeAdaptor",t.Z=l},1765:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return p}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=r(407),l=["components"],u={title:"Realtime - Hourly"},s=void 0,c={unversionedId:"web-framework/realtime",id:"web-framework/realtime",title:"Realtime - Hourly",description:"Top 10 repos by stars in an hour",source:"@site/docs/web-framework/02-realtime.mdx",sourceDirName:"web-framework",slug:"/web-framework/realtime",permalink:"/_/web-framework/realtime",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/web-framework/02-realtime.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Realtime - Hourly"},sidebar:"tutorialSidebar",previous:{title:"Deep Insight About Web Framework: 2021",permalink:"/_/web-framework/deep-insight-about-web-framework-2021"},next:{title:"History",permalink:"/_/web-framework/history"}},d=[{value:"Top 10 repos by stars in an hour",id:"top-10-repos-by-stars-in-an-hour",children:[],level:2},{value:"Top 10 repos by PR in an hour",id:"top-10-repos-by-pr-in-an-hour",children:[],level:2},{value:"Top Developers for OSS Databases",id:"top-developers-for-oss-databases",children:[],level:2},{value:"Top Language for OSS Databases an hour",id:"top-language-for-oss-databases-an-hour",children:[],level:2},{value:"Top companies contributing to OSS databases an hour",id:"top-companies-contributing-to-oss-databases-an-hour",children:[],level:2},{value:"Top countries or regions contributing to OSS databases an hour",id:"top-countries-or-regions-contributing-to-oss-databases-an-hour",children:[],level:2}],m={toc:d};function p(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"top-10-repos-by-stars-in-an-hour"},"Top 10 repos by stars in an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:10,category:"rt-top10-by-stars",categoryIndex:"repo_name",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-10-repos-by-pr-in-an-hour"},"Top 10 repos by PR in an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:10,category:"rt-top10-by-prs",categoryIndex:"repo_name",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-developers-for-oss-databases"},"Top Developers for OSS Databases"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:20,category:"rt-top20-by-developers",categoryIndex:"repo_name",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-language-for-oss-databases-an-hour"},"Top Language for OSS Databases an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:5,category:"rt-top5-languages",categoryIndex:"language",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-companies-contributing-to-oss-databases-an-hour"},"Top companies contributing to OSS databases an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:20,category:"rt-top20-companies",categoryIndex:"company",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}),(0,o.kt)("h2",{id:"top-countries-or-regions-contributing-to-oss-databases-an-hour"},"Top countries or regions contributing to OSS databases an hour"),(0,o.kt)(i.h,{repo:"web_framework_repos",chart:"rt",n:20,category:"rt-top20-countries",categoryIndex:"country",valueIndex:"num",formatSql:!1,mdxType:"CommonChart"}))}p.isMDXComponent=!0},5898:function(e,t,r){var n={"./contributors-per-year/index.js":4647,"./events-per-year/index.js":3714,"./histories/index.js":7065,"./rt/index.js":1562};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id=5898}}]);