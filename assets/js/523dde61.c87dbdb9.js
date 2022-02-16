"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[105],{407:function(e,t,n){n.d(t,{h:function(){return p}});var r=n(3366),a=n(7294),i=n(7720),o=n(1927),s=n(8239),l=n(5344),u=n(1013),c=n(2859),m=n(5350),d=["useForm","children"];function p(e){var t=e.useForm,n=e.children,p=(0,r.Z)(e,d),f=t(),h=f.form,v=f.query,y=(0,m.Z)().isDarkTheme,w=(0,s.Z)({palette:{mode:y?"dark":void 0,primary:{main:"rgb(37, 193, 159)"}}}),E=a.cloneElement(n,Object.assign({},v,p));return a.createElement(l.Z,{dateAdapter:u.Z},a.createElement(o.Z,{theme:w},a.createElement(c.Z,null,a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),h,a.createElement(i.Z,{sx:{my:2}}),E))}},8453:function(e,t,n){n.d(t,{k:function(){return E},c:function(){return W}});var r=n(9669),a=n.n(r),i=n(7294),o=n(4008),s=n(7155),l=n(9075),u=n(8023),c=n(4149),m=n(8690),d=n(2739),p=n(6359),f=n(1416),h=n(5568),v=n(8078),y=n(7357),w=n(9055);function E(e){var t,n=e.repo,r=e.event,u=e.n,c=e.years,m=e.size,d=void 0===m?30:m,p=e.clear,f=void 0!==p&&p,w=function(e,t){var n=(0,i.useState)(void 0),r=n[0],s=n[1],l=(0,i.useState)(void 0),u=l[0],c=l[1];return(0,i.useEffect)((function(){s(void 0),c(void 0),a().get("/q/"+e,{baseURL:"https://community-preview-contributor.tidb.io",params:t}).then((function(e){var t=e.data;t.sql&&(t.sql=(0,o.WU)(t.sql)),s(t)})).catch((function(e){return c(e)}))}),[JSON.stringify(t)]),{data:r,error:u}}("events-history",{repo:n,event:r,n:u,years:c}),E=w.data,Z=w.error,x=(0,i.useMemo)((function(){if(E)return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:0,top:f?0:16,bottom:f?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:E.data.map((function(e){return e.repo_name})),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){return e.split("/")[1]}}},series:[{name:"Count",data:E.data.map((function(e){return e.events_count})),type:"bar",barWidth:f?d/2:d,itemStyle:{color:"#ffe39f",borderColor:"#786837",opacity:.7}}]}}),[E,n,r,u,c]);if(E){var b,k,S=u*(d*(f?1:1.5)),C=i.createElement(s.Z,{echarts:l,option:x,notMerge:!0,lazyUpdate:!0,theme:"theme_name",style:{height:S},opts:{devicePixelRatio:null!=(b=null==(k=window)?void 0:k.devicePixelRatio)?b:1,renderer:"canvas",height:S,width:"auto",locale:"en"},onEvents:{click:function(e){"name"in e&&window.open("https://github.com/"+e.name).then()}}});return f?C:i.createElement(i.Fragment,null,C,g(E.sql))}return Z?i.createElement(h.Z,{severity:"error"},"Request failed $",null!=(t=null==Z?void 0:Z.message)?t:""):i.createElement(y.Z,{sx:{p:f?0:8,height:200}},i.createElement(v.Z,{width:"80%"}),i.createElement(v.Z,{width:"70%"}),i.createElement(v.Z,{width:"50%"}),i.createElement(v.Z,{width:"45%"}),i.createElement(v.Z,{width:"25%"}),i.createElement(v.Z,{width:"10%"}))}u.D([m.N,d.N,p.N,c.N,f.N]);var g=function(e){return e?i.createElement(w.Z,{className:"language-sql"},e):i.createElement(y.Z,{sx:{pt:.5}},i.createElement(v.Z,{width:"80%"}),i.createElement(v.Z,{width:"50%"}),i.createElement(v.Z,{width:"70%"}))},Z=n(6447),x=n(913),b=n(3841),k=n(9448),S=n(3599),C=n(5449),R=n(4722),q=[{title:"Stars",value:"WatchEvent"},{title:"Forks",value:"ForkEvent"},{title:"PRs",value:"PullRequestEvent"}],M=[1,2,5,10],T=[10,20,50],W=function(){var e=(0,i.useMemo)((function(){return Math.random()}),[]),t=(0,i.useMemo)((function(){var e=q[0].value,t=1,n=10;if("undefined"!=typeof window){var r=new URLSearchParams(location.search),a=r.get("type"),i=parseInt(r.get("years")),o=parseInt(r.get("n"));a&&q.find((function(e){return e.value===a}))&&(e=a),i&&M.indexOf(i)>=0&&(t=i),o&&T.indexOf(o)>=0&&(n=o)}return{initialType:e,initialYears:t,initialLimits:n}}),[]),n=t.initialType,r=t.initialLimits,a=t.initialYears,o=(0,i.useState)(n),s=o[0],l=o[1],u=(0,i.useState)(r),c=u[0],m=u[1],d=(0,i.useState)(a),p=d[0],f=d[1],h=(0,i.useMemo)((function(){if("undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",s),e.set("n",String(c)),e.set("years",String(p)),window.history.replaceState(null,null,"?"+e.toString())}return{event:s,n:c,years:p}}),[s,c,p]),v=i.createElement(Z.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},i.createElement(x.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},i.createElement(b.Z,{id:"cubechart-"+e+"-type"},"Type"),i.createElement(k.Z,{id:"cubechart-"+e+"-type",value:s,onChange:function(e){return l(e.target.value)},label:"Type",size:"small"},q.map((function(e){return i.createElement(S.Z,{key:e.value,value:e.value},e.title)})))),i.createElement(x.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},i.createElement(C.Z,{variant:"standard",id:"cubechart-"+e+"-type",select:!0,value:c,onChange:function(e){return m(e.target.value)},InputProps:{startAdornment:i.createElement(R.Z,{position:"start"},"Top")}},T.map((function(e){return i.createElement(S.Z,{key:e,value:e},e)})))),i.createElement(x.Z,{variant:"standard",sx:{minWidth:"220px",maxWidth:"220px"}},i.createElement(C.Z,{variant:"standard",id:"cubechart-"+e+"-type",value:p,onChange:function(e){return f(e.target.value)},select:!0,InputProps:{startAdornment:i.createElement(R.Z,{position:"start"},"Recent"),endAdornment:i.createElement(R.Z,{position:"start",sx:{mr:4}},"Year(s)")}},M.map((function(e){return i.createElement(S.Z,{key:e,value:e},e)})))));return{form:v,query:h}}},8305:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return c},metadata:function(){return m},toc:function(){return d},default:function(){return f}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(407),s=n(8453),l=["components"],u={title:"History"},c=void 0,m={unversionedId:"web-framework/history",id:"web-framework/history",title:"History",description:"",source:"@site/docs/web-framework/history.mdx",sourceDirName:"web-framework",slug:"/web-framework/history",permalink:"/docs/web-framework/history",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/web-framework/history.mdx",tags:[],version:"current",frontMatter:{title:"History"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/web-framework/"},next:{title:"Realtime - Hourly",permalink:"/docs/web-framework/realtime"}},d=[],p={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.h,{repo:"web_framework_repos",useForm:s.c,mdxType:"CommonChart"},(0,i.kt)(s.k,{mdxType:"Chart"})))}f.isMDXComponent=!0}}]);