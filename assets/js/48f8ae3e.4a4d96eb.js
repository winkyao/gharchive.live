"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[839],{407:function(e,t,n){n.d(t,{h:function(){return f}});var a=n(3366),r=n(7294),i=n(7720),o=n(1927),l=n(8239),u=n(5344),c=n(1013),s=n(2859),d=n(5350),m=n(1262),p=["chart","noSearch"];function v(e){var t=e.chart,n=e.noSearch,m=(0,a.Z)(e,p),v=t.useForm({noSearch:n}),f=v.form,h=v.query,y=(0,d.Z)().isDarkTheme,E=(0,l.Z)({palette:{mode:y?"dark":void 0,primary:{main:"rgb(37, 193, 159)"}}}),b=r.createElement(t.Chart,Object.assign({},h,m));return r.createElement(u.Z,{dateAdapter:c.Z},r.createElement(o.Z,{theme:E},r.createElement(s.Z,null,r.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),f,r.createElement(i.Z,{sx:{my:2}}),b))}function f(e){return r.createElement(m.Z,null,(function(){return r.createElement(v,e)}))}},1481:function(e,t,n){n.d(t,{Z:function(){return f}});var a=(0,n(7538).z)("contributors-history",{categoryIndex:"repo_name",valueIndex:"contributors_count"}),r=n(7294),i=n(6447),o=n(4054),l=n(3841),u=n(3246),c=n(3599),s=n(1903),d=n(7109),m=[{title:"Contributors (PRs opened)",value:"all"},{title:"Contributors (PRs merged)",value:"merged"}],p=[1,2,5,10],v=[10,20,50],f={useForm:function(e){var t=e.noSearch,n=(0,r.useMemo)((function(){return Math.random()}),[]),a=(0,r.useMemo)((function(){var e=m[0].value,n=1,a=10;if(!t&&"undefined"!=typeof window){var r=new URLSearchParams(location.search),i=r.get("type"),o=parseInt(r.get("years")),l=parseInt(r.get("n"));i&&m.find((function(e){return e.value===i}))&&(e=i),o&&p.indexOf(o)>=0&&(n=o),l&&v.indexOf(l)>=0&&(a=l)}return{initialType:e,initialYears:n,initialLimits:a}}),[]),f=a.initialType,h=a.initialLimits,y=a.initialYears,E=(0,r.useState)(f),b=E[0],g=E[1],x=(0,r.useState)(h),Z=x[0],w=x[1],S=(0,r.useState)(y),C=S[0],I=S[1],k=(0,r.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",b),e.set("n",String(Z)),e.set("years",String(C)),window.history.replaceState(null,null,"?"+e.toString())}return{action:"all"===b?"opened":"closed",merged:"all"===b?"*":"true",n:Z,years:C}}),[b,Z,C]),q=r.createElement(i.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},r.createElement(o.Z,{variant:"standard",sx:{minWidth:"230px",maxWidth:"230px"}},r.createElement(l.Z,{id:"cubechart-"+n+"-type"},"Type"),r.createElement(u.Z,{id:"cubechart-"+n+"-type",value:b,onChange:function(e){return g(e.target.value)},label:"Type",size:"small"},m.map((function(e){return r.createElement(c.Z,{key:e.value,value:e.value},e.title)})))),r.createElement(o.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},r.createElement(s.Z,{variant:"standard",id:"cubechart-"+n+"-type",select:!0,value:Z,onChange:function(e){return w(e.target.value)},InputProps:{startAdornment:r.createElement(d.Z,{position:"start"},"Top")}},v.map((function(e){return r.createElement(c.Z,{key:e,value:e},e)})))),r.createElement(o.Z,{variant:"standard",sx:{minWidth:"220px",maxWidth:"220px"}},r.createElement(s.Z,{variant:"standard",id:"cubechart-"+n+"-type",value:C,onChange:function(e){return I(e.target.value)},select:!0,InputProps:{startAdornment:r.createElement(d.Z,{position:"start"},"Recent"),endAdornment:r.createElement(d.Z,{position:"start",sx:{mr:4}},"Year(s)")}},p.map((function(e){return r.createElement(c.Z,{key:e,value:e},e)})))));return{form:q,query:k}},Chart:a}},7538:function(e,t,n){n.d(t,{z:function(){return q}});var a=n(3366),r=n(7294),i=n(9669),o=n.n(i),l=n(4008),u=n(7357),c=n(6886),s=n(8078),d=n(8032),m=n(5568),p=n(657),v=n(8557),f=n(7608),h=n(5861),y=n(9055),E=n(7155),b=n(4149),g=n(8690),x=n(2739),Z=n(6359),w=n(1416),S=n(9075);function C(e){var t,n,a=e.data,i=e.loading,o=e.clear,l=e.size,u=e.n,c=e.deps,s=e.categoryIndex,d=e.valueIndex,m=(0,r.useMemo)((function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:0,top:o?0:16,bottom:o?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:a.map((function(e){return e[s]})),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){return e.split("/")[1]}}},series:[{name:"Count",data:a.map((function(e){return e[d]})),type:"bar",barWidth:o?l/2:l,itemStyle:{color:"#ffe39f",borderColor:"#786837",opacity:.7}}]}}),[a].concat(c)),p=i?400:u*(l*(o?1:1.5));return r.createElement(E.Z,{showLoading:i,echarts:S,option:m,notMerge:!0,lazyUpdate:!0,theme:"theme_name",style:{height:p},opts:{devicePixelRatio:null!=(t=null==(n=window)?void 0:n.devicePixelRatio)?t:1,renderer:"canvas",height:p,width:"auto",locale:"en"},onEvents:{click:function(e){"name"in e&&window.open("https://github.com/"+e.name).then()}}})}n(8023).D([g.N,x.N,Z.N,b.N,w.N]);var I=n(9490),k=["clear","size","children"];function q(e,t){var n=t.categoryIndex,i=t.valueIndex;return function(t){var u,c,s=t.clear,d=t.size,p=void 0===d?30:d,v=(t.children,(0,a.Z)(t,k)),f=function(e,t){var n=(0,r.useState)(void 0),a=n[0],i=n[1],u=(0,r.useState)(void 0),c=u[0],s=u[1],d=(0,r.useState)(!1),m=d[0],p=d[1];return(0,r.useEffect)((function(){i(void 0),s(void 0),p(!0),o().get("/q/"+e,{baseURL:"https://community-preview-contributor.tidb.io",params:t}).then((function(e){var t=e.data;t.sql&&(t.sql=(0,l.WU)(t.sql)),i(t)})).catch((function(e){return s(e)})).finally((function(){return p(!1)}))}),[JSON.stringify(t)]),{data:a,loading:m,error:c}}(e,v),h=f.data,y=f.loading,E=f.error,b=r.createElement(C,{categoryIndex:n,valueIndex:i,size:p,data:null!=(u=null==h?void 0:h.data)?u:[],loading:y,clear:s,n:v.n,deps:Object.values(v)});return E?r.createElement(m.Z,{severity:"error"},"Request failed $",null!=(c=null==E?void 0:E.message)?c:""):s?b:r.createElement(r.Fragment,null,r.createElement("div",{style:{position:"relative"}},b,r.createElement(M,{data:h,query:e})),z(null==h?void 0:h.sql))}}var P="yyyy-MM-dd HH:mm:ss",M=function(e){var t=e.query,n=e.data,a=r.useState(!1),i=a[0],o=a[1],l=function(){return o(!1)};return(0,r.useEffect)((function(){n||l()}),[n]),r.createElement(r.Fragment,null,r.createElement(d.Z,{size:"small",sx:{position:"absolute",zIndex:10,right:24,bottom:24},onClick:function(){return o(!0)},disabled:!n},r.createElement(f.Z,null)),r.createElement(p.Z,{open:i,onClose:l,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},r.createElement(v.Z,null,"[For Debug] SQL Execution info"),r.createElement(u.Z,{sx:{p:4}},z(null==n?void 0:n.sql),r.createElement(c.ZP,{container:!0,alignItems:"center"},r.createElement(R,{title:"Requested at",value:I.ou.fromISO(null==n?void 0:n.requestedAt).toFormat(P)}),r.createElement(R,{title:"Expires at",value:I.ou.fromISO(null==n?void 0:n.expiresAt).toFormat(P)}),r.createElement(R,{title:"Spent",value:(null==n?void 0:n.spent)+" seconds"}),r.createElement(R,{title:"Query",value:t}),r.createElement(R,{title:"Params",value:r.createElement("pre",null,JSON.stringify(null==n?void 0:n.params,void 0,2))})))))},R=function(e){var t=e.title,n=e.value;return r.createElement(r.Fragment,null,r.createElement(c.ZP,{xs:3},r.createElement("div",null,r.createElement(h.Z,{align:"right",variant:"body1"},t))),r.createElement(c.ZP,{xs:1}),r.createElement(c.ZP,{xs:8},r.createElement("div",null,r.createElement(h.Z,{align:"left",variant:"body2"},n))))},z=function(e){return e?r.createElement(y.Z,{className:"language-sql"},e):r.createElement(u.Z,{sx:{pt:.5}},r.createElement(s.Z,{width:"80%"}),r.createElement(s.Z,{width:"50%"}),r.createElement(s.Z,{width:"70%"}))}},7861:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return v}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(407),l=n(1481),u=["components"],c={title:"Contributors"},s=void 0,d={unversionedId:"database/contributors",id:"database/contributors",title:"Contributors",description:"",source:"@site/docs/database/contributors.mdx",sourceDirName:"database",slug:"/database/contributors",permalink:"/docs/database/contributors",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/database/contributors.mdx",tags:[],version:"current",frontMatter:{title:"Contributors"},sidebar:"tutorialSidebar",previous:{title:"OSS Database Analysis: 2021",permalink:"/docs/database/"},next:{title:"History",permalink:"/docs/database/history"}},m=[],p={toc:m};function v(e){var t=e.components,n=(0,r.Z)(e,u);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.h,{repo:"db_repos",chart:l.Z,mdxType:"CommonChart"}))}v.isMDXComponent=!0}}]);