"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[5174],{93017:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return A},default:function(){return Q},frontMatter:function(){return z},metadata:function(){return J},toc:function(){return L}});var n=a(87462),r=a(63366),i=a(67294),s=a(3905),l=a(488),u=a(15419),o=a(26447),c=a(55113),m=a(61903),d=a(67720),p=a(33841),v=a(23599),f=a(10913),h=a(86032),b=a(88078),g=a(87357),y=a(41021),E=a(99490),x=a(5344),Z=a(78700),k=a(12859),w=a(19055),C=a(68413),D=a(55376),M=a(62728),q=a(44008);M.kL.register(M.uw,M.f$,M.ZL);var I=(0,u.ZP)("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NDQ4OTYyNDMsImV4cCI6MTY0NDk4MjY0M30.2XanIk0exgEmFwsHX0w_w9LWk-X4PaVfPIX235z9JsM",{apiUrl:"https://community-preview-tug.tidb.io/cubejs-api/v1"}),S=E.ou.fromObject({year:2011}),R=E.ou.now(),T=function(e){return i.createElement(m.Z,(0,n.Z)({},e,{helperText:null,variant:"standard"}))},W=[{title:"Stars",value:"WatchEvent"},{title:"Forks",value:"ForkEvent"},{title:"PRs",value:"PullRequestEvent"}],j=[{title:"All",value:"GithubEvents.repoName"},{title:"CN",value:"CnRepos.name"},{title:"Database",value:"DbRepos.name"}];function N(){var e=function(){var e=(0,i.useMemo)((function(){return Math.random()}),[]),t=(0,i.useState)(W[0].value),a=t[0],n=t[1],r=(0,i.useState)(j[0].value),s=r[0],l=r[1],u=(0,i.useState)(S),c=u[0],m=u[1],d=(0,i.useState)(R),b=d[0],g=d[1],E=(0,i.useState)(""),x=E[0],Z=E[1],k=(0,i.useState)(void 0),w=k[0],C=k[1],D=(0,i.useMemo)((function(){var e=["GithubEvents.from_"+c.toFormat("yyyy_MM_01"),"GithubEvents.to_"+b.toFormat("yyyy_MM_01")],t=[],n=[];return s?(t.push(""+s),n.push({member:""+s,operator:"set"})):t.push("GithubEvents.repoName"),n.push({member:"GithubEvents.type",operator:"equals",values:[a]}),{measures:["GithubEvents.count"],timeDimensions:[],order:[["GithubEvents.count","desc"]],limit:10,segments:e,dimensions:t,filters:n}}),[a,s,c,b]),M=(0,i.useMemo)((function(){return{x:[""+s],y:["measures"],fillMissingDates:!0,joinDateRange:!1}}),[s]);(0,i.useEffect)((function(){Z(""),C(void 0),I.sql(D).then((function(e){var t=e.rawQuery().sql,a=t[0],n=t[1];Z((0,q.WU)(a,{language:"mysql",params:n}))})).catch((function(e){Z(""),C(e)}))}),[D]);var N=i.createElement(o.Z,{direction:"row",sx:{flexWrap:"wrap",gap:4}},i.createElement(f.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},i.createElement(p.Z,{id:"cubechart-"+e+"-type"},"Type"),i.createElement(h.Z,{id:"cubechart-"+e+"-type",value:a,onChange:function(e){return n(e.target.value)},label:"Type",size:"small"},W.map((function(e){return i.createElement(v.Z,{key:e.value,value:e.value},e.title)})))),i.createElement(f.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},i.createElement(p.Z,{id:"cubechart-"+e+"-db"},"DB"),i.createElement(h.Z,{id:"cubechart-"+e+"-db",value:s,onChange:function(e){return l(e.target.value)},label:"DB",size:"small"},j.map((function(e){return i.createElement(v.Z,{key:e.value,value:e.value},e.title)})))),i.createElement(y.Z,{label:"From year",views:["year"],minDate:S,maxDate:R,value:c,onChange:m,renderInput:T,size:"small",sx:{minWidth:"260px",maxWidth:"260px"}}),i.createElement(y.Z,{label:"To year",views:["year"],minDate:S,maxDate:R,value:b,onChange:g,renderInput:T,size:"small",sx:{minWidth:"260px",maxWidth:"260px"}}));return{form:N,query:D,pivotConfig:M,sql:x,sqlErr:w}}(),t=e.form,a=e.query,n=e.pivotConfig,r=e.sql;return i.createElement(x.Z,{dateAdapter:Z.Z},i.createElement(k.Z,null,i.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),i.createElement(c.Z,{elevation:1,sx:{padding:2}},t,i.createElement(d.Z,{sx:{my:2}}),i.createElement(l.TQ,{loadSql:!1,query:a,cubejsApi:I,render:function(e){return i.createElement(i.Fragment,null,_(r),i.createElement(d.Z,{sx:{my:2}}),i.createElement("div",{style:{height:400}},X(Object.assign({},e,{pivotConfig:n}))))}})))}var _=function(e){return e?i.createElement(i.Fragment,null,i.createElement(w.Z,{className:"language-sql"},e)):i.createElement(g.Z,{sx:{pt:.5}},i.createElement(b.Z,{width:"80%"}),i.createElement(b.Z,{width:"50%"}),i.createElement(b.Z,{width:"70%"}))},F=["#5b8ff9","#5ad8a6","#5e7092","#f6bd18","#6f5efa","#6ec8ec","#945fb9","#ff9845","#299796","#fe99c3"],G={maintainAspectRatio:!1,interaction:{intersect:!1},plugins:{legend:{position:"bottom"}},scales:{x:{ticks:{autoSkip:!0,maxRotation:0,padding:12,minRotation:0}}}},O=function(e){var t=e.resultSet,a=e.pivotConfig,n=e.onDrilldownRequested,r=(0,C.NY)((function(){return t.series().map((function(e,t){return{label:e.title,data:e.series.map((function(e){return e.value})),yValues:[e.key],backgroundColor:F[t],fill:!1}}))}),[t]),s={labels:t.categories().map((function(e){return e.x})),datasets:r},l=!(a.x||[]).includes("measures"),u=Object.assign({},G,{scales:{x:Object.assign({},G.scales.x,{stacked:l}),y:Object.assign({},G.scales.y,{stacked:l})}}),o=function(e){var t=e.datasets,a=e.labels,n=e.onDrilldownRequested,r=e.pivotConfig;return i.useCallback((function(e){if(!(e.length<=0)){var i=e[0],s=i.datasetIndex,l=i.index,u=t[s].yValues,o=[a[l]];"function"==typeof n&&n({xValues:o,yValues:u},r)}}),[t,a,n])}({datasets:s.datasets,labels:s.labels,onDrilldownRequested:n,pivotConfig:a});return i.createElement(D.$Q,{height:"400",type:"bar",data:s,options:u,getElementAtEvent:o})},X=function(e){var t=e.resultSet,a=e.error,n=e.pivotConfig;return a?i.createElement("div",{dangerouslySetInnerHTML:{__html:a.toString()}}):t?i.createElement(O,{resultSet:t,pivotConfig:n}):i.createElement(b.Z,{variant:"rectangular",height:218})},V=["components"],z={},A=void 0,J={unversionedId:"cube-demo/starts",id:"cube-demo/starts",title:"starts",description:"",source:"@site/docs/cube-demo/starts.mdx",sourceDirName:"cube-demo",slug:"/cube-demo/starts",permalink:"/gharchive.live/docs/cube-demo/starts",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/cube-demo/starts.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"year-2021",permalink:"/gharchive.live/docs/css-framework/year-2021"},next:{title:"Top 10 repos in the database field with contributors growth in 2021",permalink:"/gharchive.live/docs/database/2021/contributors"}},L=[],P={toc:L};function Q(e){var t=e.components,a=(0,r.Z)(e,V);return(0,s.kt)("wrapper",(0,n.Z)({},P,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(N,{mdxType:"CubeChart"}))}Q.isMDXComponent=!0}}]);