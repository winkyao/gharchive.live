"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[7924],{407:function(e,t,n){n.d(t,{h:function(){return f}});var r=n(3366),a=n(7294),i=n(7720),o=n(1927),l=n(8239),c=n(5344),u=n(1013),s=n(2859),d=n(5350),m=n(1262),p=["chart","noSearch"];function v(e){var t=e.chart,n=e.noSearch,m=(0,r.Z)(e,p),v=t.useForm({noSearch:n}),f=v.form,h=v.query,y=(0,d.Z)().isDarkTheme,E=(0,l.Z)({palette:{mode:y?"dark":void 0,primary:{main:"rgb(37, 193, 159)"}}}),g=a.createElement(t.Chart,Object.assign({},h,m));return a.createElement(c.Z,{dateAdapter:u.Z},a.createElement(o.Z,{theme:E},a.createElement(s.Z,null,a.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"})),f,a.createElement(i.Z,{sx:{my:2}}),g))}function f(e){return a.createElement(m.Z,null,(function(){return a.createElement(v,e)}))}},1481:function(e,t,n){n.d(t,{Z:function(){return f}});var r=(0,n(7538).z)("contributors-history",{categoryIndex:"repo_name",valueIndex:"contributors_count"}),a=n(7294),i=n(6447),o=n(4054),l=n(3841),c=n(3246),u=n(3599),s=n(1903),d=n(7109),m=[{title:"Contributors (PRs opened)",value:"all"},{title:"Contributors (PRs merged)",value:"merged"}],p=[1,2,5,10],v=[10,20,50],f={useForm:function(e){var t=e.noSearch,n=(0,a.useMemo)((function(){return Math.random()}),[]),r=(0,a.useMemo)((function(){var e=m[0].value,n=1,r=10;if(!t&&"undefined"!=typeof window){var a=new URLSearchParams(location.search),i=a.get("type"),o=parseInt(a.get("years")),l=parseInt(a.get("n"));i&&m.find((function(e){return e.value===i}))&&(e=i),o&&p.indexOf(o)>=0&&(n=o),l&&v.indexOf(l)>=0&&(r=l)}return{initialType:e,initialYears:n,initialLimits:r}}),[]),f=r.initialType,h=r.initialLimits,y=r.initialYears,E=(0,a.useState)(f),g=E[0],x=E[1],b=(0,a.useState)(h),Z=b[0],w=b[1],S=(0,a.useState)(y),C=S[0],I=S[1],k=(0,a.useMemo)((function(){if(!t&&"undefined"!=typeof window){var e=new window.URLSearchParams;e.set("type",g),e.set("n",String(Z)),e.set("years",String(C)),window.history.replaceState(null,null,"?"+e.toString())}return{action:"all"===g?"opened":"closed",merged:"all"===g?"*":"true",n:Z,years:C}}),[g,Z,C]),q=a.createElement(i.Z,{direction:"row",sx:{flexWrap:"wrap",alignItems:"flex-end",gap:4}},a.createElement(o.Z,{variant:"standard",sx:{minWidth:"230px",maxWidth:"230px"}},a.createElement(l.Z,{id:"cubechart-"+n+"-type"},"Type"),a.createElement(c.Z,{id:"cubechart-"+n+"-type",value:g,onChange:function(e){return x(e.target.value)},label:"Type",size:"small"},m.map((function(e){return a.createElement(u.Z,{key:e.value,value:e.value},e.title)})))),a.createElement(o.Z,{variant:"standard",sx:{minWidth:"120px",maxWidth:"120px"}},a.createElement(s.Z,{variant:"standard",id:"cubechart-"+n+"-type",select:!0,value:Z,onChange:function(e){return w(e.target.value)},InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Top")}},v.map((function(e){return a.createElement(u.Z,{key:e,value:e},e)})))),a.createElement(o.Z,{variant:"standard",sx:{minWidth:"220px",maxWidth:"220px"}},a.createElement(s.Z,{variant:"standard",id:"cubechart-"+n+"-type",value:C,onChange:function(e){return I(e.target.value)},select:!0,InputProps:{startAdornment:a.createElement(d.Z,{position:"start"},"Recent"),endAdornment:a.createElement(d.Z,{position:"start",sx:{mr:4}},"Year(s)")}},p.map((function(e){return a.createElement(u.Z,{key:e,value:e},e)})))));return{form:q,query:k}},Chart:r}},7538:function(e,t,n){n.d(t,{z:function(){return q}});var r=n(3366),a=n(7294),i=n(9669),o=n.n(i),l=n(4008),c=n(7357),u=n(6886),s=n(8078),d=n(8032),m=n(5568),p=n(657),v=n(8557),f=n(7608),h=n(5861),y=n(9055),E=n(7155),g=n(4149),x=n(8690),b=n(2739),Z=n(6359),w=n(1416),S=n(9075);function C(e){var t,n,r=e.data,i=e.loading,o=e.clear,l=e.size,c=e.n,u=e.deps,s=e.categoryIndex,d=e.valueIndex,m=(0,a.useMemo)((function(){return{tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{containLabel:!0,left:0,top:o?0:16,bottom:o?0:16},xAxis:{type:"value",position:"top"},yAxis:{type:"category",data:r.map((function(e){return e[s]})),inverse:!0,axisLabel:{rotate:0,formatter:function(e,t){return e.split("/")[1]}}},series:[{name:"Count",data:r.map((function(e){return e[d]})),type:"bar",barWidth:o?l/2:l,itemStyle:{color:"#ffe39f",borderColor:"#786837",opacity:.7}}]}}),[r].concat(u)),p=i?400:c*(l*(o?1:1.5));return a.createElement(E.Z,{showLoading:i,echarts:S,option:m,notMerge:!0,lazyUpdate:!0,theme:"theme_name",style:{height:p},opts:{devicePixelRatio:null!=(t=null==(n=window)?void 0:n.devicePixelRatio)?t:1,renderer:"canvas",height:p,width:"auto",locale:"en"},onEvents:{click:function(e){"name"in e&&window.open("https://github.com/"+e.name).then()}}})}n(8023).D([x.N,b.N,Z.N,g.N,w.N]);var I=n(9490),k=["clear","size","children"];function q(e,t){var n=t.categoryIndex,i=t.valueIndex;return function(t){var c,u,s=t.clear,d=t.size,p=void 0===d?30:d,v=(t.children,(0,r.Z)(t,k)),f=function(e,t){var n=(0,a.useState)(void 0),r=n[0],i=n[1],c=(0,a.useState)(void 0),u=c[0],s=c[1],d=(0,a.useState)(!1),m=d[0],p=d[1];return(0,a.useEffect)((function(){i(void 0),s(void 0),p(!0),o().get("/q/"+e,{baseURL:"https://community-preview-contributor.tidb.io",params:t}).then((function(e){var t=e.data;t.sql&&(t.sql=(0,l.WU)(t.sql)),i(t)})).catch((function(e){return s(e)})).finally((function(){return p(!1)}))}),[JSON.stringify(t)]),{data:r,loading:m,error:u}}(e,v),h=f.data,y=f.loading,E=f.error,g=a.createElement(C,{categoryIndex:n,valueIndex:i,size:p,data:null!=(c=null==h?void 0:h.data)?c:[],loading:y,clear:s,n:v.n,deps:Object.values(v)});return E?a.createElement(m.Z,{severity:"error"},"Request failed $",null!=(u=null==E?void 0:E.message)?u:""):s?g:a.createElement(a.Fragment,null,a.createElement("div",{style:{position:"relative"}},g,a.createElement(M,{data:h,query:e})),z(null==h?void 0:h.sql))}}var P="yyyy-MM-dd HH:mm:ss",M=function(e){var t=e.query,n=e.data,r=a.useState(!1),i=r[0],o=r[1],l=function(){return o(!1)};return(0,a.useEffect)((function(){n||l()}),[n]),a.createElement(a.Fragment,null,a.createElement(d.Z,{size:"small",sx:{position:"absolute",zIndex:10,right:24,bottom:24},onClick:function(){return o(!0)},disabled:!n},a.createElement(f.Z,null)),a.createElement(p.Z,{open:i,onClose:l,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},a.createElement(v.Z,null,"[For Debug] SQL Execution info"),a.createElement(c.Z,{sx:{p:4}},z(null==n?void 0:n.sql),a.createElement(u.ZP,{container:!0,alignItems:"center"},a.createElement(R,{title:"Requested at",value:I.ou.fromISO(null==n?void 0:n.requestedAt).toFormat(P)}),a.createElement(R,{title:"Expires at",value:I.ou.fromISO(null==n?void 0:n.expiresAt).toFormat(P)}),a.createElement(R,{title:"Spent",value:(null==n?void 0:n.spent)+" seconds"}),a.createElement(R,{title:"Query",value:t}),a.createElement(R,{title:"Params",value:a.createElement("pre",null,JSON.stringify(null==n?void 0:n.params,void 0,2))})))))},R=function(e){var t=e.title,n=e.value;return a.createElement(a.Fragment,null,a.createElement(u.ZP,{xs:3},a.createElement("div",null,a.createElement(h.Z,{align:"right",variant:"body1"},t))),a.createElement(u.ZP,{xs:1}),a.createElement(u.ZP,{xs:8},a.createElement("div",null,a.createElement(h.Z,{align:"left",variant:"body2"},n))))},z=function(e){return e?a.createElement(y.Z,{className:"language-sql"},e):a.createElement(c.Z,{sx:{pt:.5}},a.createElement(s.Z,{width:"80%"}),a.createElement(s.Z,{width:"50%"}),a.createElement(s.Z,{width:"70%"}))}},288:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return m},default:function(){return v}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(407),l=n(1481),c=["components"],u={title:"Contributors"},s=void 0,d={unversionedId:"low-code/contributors",id:"low-code/contributors",title:"Contributors",description:"",source:"@site/docs/low-code/contributors.mdx",sourceDirName:"low-code",slug:"/low-code/contributors",permalink:"/docs/low-code/contributors",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/low-code/contributors.mdx",tags:[],version:"current",frontMatter:{title:"Contributors"},sidebar:"tutorialSidebar",previous:{title:"index",permalink:"/docs/low-code/"},next:{title:"History",permalink:"/docs/low-code/history"}},m=[],p={toc:m};function v(e){var t=e.components,n=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(o.h,{repo:"nocode_repos",chart:l.Z,mdxType:"CommonChart"}))}v.isMDXComponent=!0}}]);