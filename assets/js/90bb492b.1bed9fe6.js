"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[42],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,f=d["".concat(s,".").concat(b)]||d[b]||p[b]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},41319:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={title:"OSS Database Analysis: 2021"},s=void 0,l={unversionedId:"database/index",id:"database/index",title:"OSS Database Analysis: 2021",description:"Datasets",source:"@site/docs/database/index.md",sourceDirName:"database",slug:"/database/",permalink:"/docs/database/",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/database/index.md",tags:[],version:"current",frontMatter:{title:"OSS Database Analysis: 2021"},sidebar:"tutorialSidebar",next:{title:"a",permalink:"/docs/database/a"}},u=[{value:"Datasets",id:"datasets",children:[],level:2},{value:"Top 10 repos by stars",id:"top-10-repos-by-stars",children:[{value:"SQL query",id:"sql-query",children:[],level:3},{value:"Chart v1",id:"chart-v1",children:[],level:3},{value:"Chart v2",id:"chart-v2",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(72655).Z})),(0,o.kt)("h2",{id:"datasets"},"Datasets"),(0,o.kt)("p",null,"We have collected a list of well-known open source projects in the field of database and big data, mainly including: TiDB, Elasticsearch, Clickhouse, Redis, etc. If the repo you care about is not on the list, you can submit a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/hooopo/gharchive/blob/main/meta/repos/db_repos.yml"},"pull request")," to improve it."),(0,o.kt)("p",null,"The full list of database repositories participating in statistics includes"),(0,o.kt)("iframe",{src:"https://chart.trytidb.com/chart/729b8abe-11e3-4ca8-bf46-d65e76c95ac0/embedded",allowTransparency:"true",width:"100%",height:"660",scrolling:"no",frameborder:"0"}),(0,o.kt)("h2",{id:"top-10-repos-by-stars"},"Top 10 repos by stars"),(0,o.kt)("h3",{id:"sql-query"},"SQL query"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"SELECT \n  db_repos.name AS repo_name,\n  COUNT(*) AS num\nFROM github_events \nJOIN db_repos ON db_repos.id = github_events.repo_id\nWHERE type = 'WatchEvent' AND event_year = 2021\nGROUP BY db_repos.name\nORDER BY 2 desc\nLIMIT 10\n")),(0,o.kt)("h3",{id:"chart-v1"},"Chart v1"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(8654).Z})),(0,o.kt)("h3",{id:"chart-v2"},"Chart v2"),(0,o.kt)("iframe",{src:"https://chart.trytidb.com/chart/c93742ce-cc36-450d-b0a1-e8430669b050/embedded",allowTransparency:"true",width:"100%",height:"500",scrolling:"no",frameborder:"0"}))}d.isMDXComponent=!0},72655:function(e,t,r){t.Z=r.p+"assets/images/gharchive-title-img-en-5da625bc9dbe87455c5b1f7e78f0f9e8.png"},8654:function(e,t,r){t.Z=r.p+"assets/images/report-demo-26683fe2b650441b628aceb73a7eba5a.png"}}]);