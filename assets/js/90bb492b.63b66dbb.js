"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[42],{3905:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),c=p(a),m=r,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1319:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),i=["components"],s={title:"OSS Database Analysis: 2021",image:"/img/gharchive-title-img.png"},o=void 0,p={unversionedId:"database/index",id:"database/index",title:"OSS Database Analysis: 2021",description:"Datasets",source:"@site/docs/database/index.md",sourceDirName:"database",slug:"/database/",permalink:"/docs/database/",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/database/index.md",tags:[],version:"current",frontMatter:{title:"OSS Database Analysis: 2021",image:"/img/gharchive-title-img.png"},sidebar:"tutorialSidebar",next:{title:"Contributors",permalink:"/docs/database/contributors"}},u=[{value:"Datasets",id:"datasets",children:[],level:2},{value:"Top 10 repos by stars in 2021",id:"top-10-repos-by-stars-in-2021",children:[],level:2},{value:"Top 10 repos by PR in 2021",id:"top-10-repos-by-pr-in-2021",children:[],level:2},{value:"Top Developers for OSS Databases",id:"top-developers-for-oss-databases",children:[],level:2},{value:"OSS Database repos with the highest growth YoY",id:"oss-database-repos-with-the-highest-growth-yoy",children:[],level:2},{value:"OSS Database repos with lowest growth YoY",id:"oss-database-repos-with-lowest-growth-yoy",children:[],level:2},{value:"Top Language for OSS Databases",id:"top-language-for-oss-databases",children:[],level:2}],d={toc:u};function c(t){var e=t.components,s=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},d,s,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(3421).Z})),(0,l.kt)("h2",{id:"datasets"},"Datasets"),(0,l.kt)("p",null,"We have collected a list of well-known open source projects in the field of database and big data, mainly including: TiDB, Elasticsearch, Clickhouse, Redis, etc. If the repo you care about is not on the list, you can submit a ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/hooopo/gharchive/blob/main/meta/repos/db_repos.yml"},"pull request")," to improve it."),(0,l.kt)("p",null,"The full list of database repositories participating in statistics includes"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+-----------+----------------------------+\n| id        | name                       |\n+-----------+----------------------------+\n| 507775    | elastic/elasticsearch      |\n| 60246359  | clickhouse/clickhouse      |\n| 17165658  | apache/spark               |\n| 41986369  | pingcap/tidb               |\n| 16563587  | cockroachdb/cockroach      |\n| 6838921   | prometheus/prometheus      |\n| 108110    | mongodb/mongo              |\n| 166515022 | trinodb/trino              |\n| 48833910  | tikv/tikv                  |\n| 156018    | redis/redis                |\n| 688366    | apache/lucene-solr         |\n| 160985    | apache/hbase               |\n| 5349565   | prestodb/presto            |\n| 6934395   | facebook/rocksdb           |\n| 6358188   | apache/druid               |\n| 11008207  | vitessio/vitess            |\n| 19961085  | apache/pinot               |\n| 206444    | apache/hive                |\n| 30753733  | percona/percona-server     |\n| 105944401 | yugabyte/yugabyte-db       |\n| 31006158  | apache/ignite              |\n| 99919302  | apache/incubator-doris     |\n| 50874442  | citusdata/citus            |\n| 84240850  | timescale/timescaledb      |\n| 28738447  | apache/kylin               |\n| 44781140  | greenplum-db/gpdb          |\n| 26521330  | alibaba/oceanbase          |\n| 13124802  | influxdata/influxdb        |\n| 146459443 | vesoft-inc/nebula          |\n| 28449431  | scylladb/scylla            |\n| 160990    | apache/hadoop              |\n| 206417    | apache/couchdb             |\n| 9342529   | crate/crate                |\n| 19257422  | questdb/questdb            |\n| 196353673 | taosdata/TDengine          |\n| 172104891 | MaterializeInc/materialize |\n| 402945349 | StarRocks/starrocks        |\n| 11225014  | etcd-io/etcd               |\n| 2649214   | arangodb/arangodb          |\n| 41349039  | dgraph-io/dgraph           |\n| 114187903 | apple/foundationdb         |\n| 20587599  | apache/flink               |\n| 19816070  | MariaDB/server             |\n| 69400326  | confluentinc/ksql          |\n+-----------+----------------------------+\n")),(0,l.kt)("h2",{id:"top-10-repos-by-stars-in-2021"},"Top 10 repos by stars in 2021"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT db.name as repo_name, count(*) as stars\n    FROM github_events\n         JOIN db_repos db ON db.id = github_events.repo_id\n   WHERE event_year = 2021 \n         AND type = 'WatchEvent' \nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 10\n")),(0,l.kt)("iframe",{width:"100%",height:"350",scrolling:"no",src:"https://staticsiteg.github.io/echarts/bar.html?x=[%22clickhouse/clickhouse%22,%20%22redis/redis%22,%20%22prometheus/prometheus%22,%20%22elastic/elasticsearch%22,%20%22questdb/questdb%22,%20%22etcd-io/etcd%22,%20%22pingcap/tidb%22,%20%22apache/spark%22,%20%22cockroachdb/cockroach%22,%20%22facebook/rocksdb%22]&data=[7628,%206313,%205898,%205669,%205505,%204524,%203967,%203833,%203311,%203190]&theme=vintage"}),(0,l.kt)("h2",{id:"top-10-repos-by-pr-in-2021"},"Top 10 repos by PR in 2021"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT db_repos.name AS repo_name,\n         COUNT(*) AS num\n    FROM github_events \n         JOIN db_repos ON db_repos.id = github_events.repo_id\n   WHERE type = 'PullRequestEvent' AND event_year = 2021 AND action = 'opened'\nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 10\n")),(0,l.kt)("iframe",{width:"100%",height:"350",scrolling:"no",src:"https://staticsiteg.github.io/echarts/bar.html?x=[%22elastic/elasticsearch%22,%20%22clickhouse/clickhouse%22,%20%22cockroachdb/cockroach%22,%20%22pingcap/tidb%22,%20%22apache/spark%22,%20%22taosdata/TDengine%22,%20%22apache/flink%22,%20%22MaterializeInc/materialize%22,%20%22trinodb/trino%22,%20%22arangodb/arangodb%22]&data=[10433,%209689,%207204,%204777,%203703,%203542,%203338,%202883,%202334,%201663]&theme=vintage"}),(0,l.kt)("h2",{id:"top-developers-for-oss-databases"},"Top Developers for OSS Databases"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT actor_login, count(*) as pr_count\n    FROM github_events\n         JOIN db_repos db ON db.id = github_events.repo_id\n   WHERE event_year = 2021 \n         AND type = 'PullRequestEvent' \n         AND action = 'opened' \n         AND actor_login not like '%bot%'\nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 20\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Avatar"),(0,l.kt)("th",{parentName:"tr",align:null},"actor_login"),(0,l.kt)("th",{parentName:"tr",align:null},"bar"),(0,l.kt)("th",{parentName:"tr",align:null},"pr_count"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/40268737?s=40&v=4",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jrodewig"},"jrodewig")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"1586")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/825729?s=40&v=4",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/sangshuduo"},"sangshuduo")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"703")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/1423118?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/jsteemann"},"jsteemann")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"652")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/6490959?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/original-brownbear"},"original-brownbear")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"615")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/alexey-milovidov"},"alexey-milovidov")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"542")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/5135385?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/yuzefovich"},"yuzefovich")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"471")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/azat"},"azat")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"455")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/882976?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/benesch"},"benesch")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"422")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/144328?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/findepi"},"findepi")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"378")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/3646147?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/otan"},"otan")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"375")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/4357155?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/benwtrent"},"benwtrent")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"345")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/5058284?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/DaveCTurner"},"DaveCTurner")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"323")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/2755881?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/danxmoran"},"danxmoran")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"317")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/38700?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/mfussenegger"},"mfussenegger")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"309")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/215970?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/nik9000"},"nik9000")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"298")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/1320573?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/rafiss"},"rafiss")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"295")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/12521043?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/JimGalasyn"},"JimGalasyn")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"295")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/5076964?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/tbg"},"tbg")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"alesapin"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"288")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://avatars.githubusercontent.com/u/22777892?v=4&s=40",alt:null})),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/danhermann"},"danhermann")),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"283")))),(0,l.kt)("h2",{id:"oss-database-repos-with-the-highest-growth-yoy"},"OSS Database repos with the highest growth YoY"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT db.name,\n         sum(event_year = 2020) AS stars2020,\n         sum(event_year = 2021) AS stars2021,\n         round(sum(event_year = 2021) / sum(event_year = 2020), 3) AS yoy\n    FROM github_events\n         JOIN db_repos as db on db.id = github_events.repo_id\n   WHERE type = 'WatchEvent' AND event_year in (2021, 2020)\nGROUP BY db.name\n  HAVING stars2020 > 0 and yoy > 1\nORDER BY yoy DESC\n   LIMIT 20\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+------------------------+-----------+-----------+-------+\n| name                   | stars2021 | stars2020 | yoy   |\n+------------------------+-----------+-----------+-------+\n| questdb/questdb        | 5505      | 2006      | 2.744 |\n| apache/incubator-doris | 1713      | 760       | 2.254 |\n| trinodb/trino          | 2620      | 1227      | 2.135 |\n| apache/pinot           | 895       | 461       | 1.941 |\n| citusdata/citus        | 1114      | 627       | 1.777 |\n| clickhouse/clickhouse  | 7628      | 5139      | 1.484 |\n| crate/crate            | 422       | 300       | 1.407 |\n| cockroachdb/cockroach  | 3311      | 2425      | 1.365 |\n| apple/foundationdb     | 869       | 712       | 1.221 |\n| facebook/rocksdb       | 3190      | 3116      | 1.024 |\n| dgraph-io/dgraph       | 2814      | 2801      | 1.005 |\n+------------------------+-----------+-----------+-------+\n\n")),(0,l.kt)("h2",{id:"oss-database-repos-with-lowest-growth-yoy"},"OSS Database repos with lowest growth YoY"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT db.name,\n         sum(event_year = 2020) AS stars2020,\n         sum(event_year = 2021) AS stars2021,\n         round(sum(event_year = 2021) / sum(event_year = 2020), 3) AS yoy\n    FROM github_events\n         JOIN db_repos as db on db.id = github_events.repo_id\n   WHERE type = 'WatchEvent' AND event_year in (2021, 2020)\nGROUP BY db.name\n  HAVING stars2020 > 0 and yoy < 1\nORDER BY yoy ASC\n   LIMIT 10\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"+----------------------------+-----------+-----------+-------+\n| name                       | stars2020 | stars2021 | yoy   |\n+----------------------------+-----------+-----------+-------+\n| vesoft-inc/nebula          | 4634      | 1577      | 0.340 |\n| MaterializeInc/materialize | 2152      | 1227      | 0.570 |\n| apache/ignite              | 740       | 500       | 0.676 |\n| arangodb/arangodb          | 1860      | 1305      | 0.702 |\n| percona/percona-server     | 135       | 95        | 0.704 |\n| apache/druid               | 1585      | 1122      | 0.708 |\n| elastic/elasticsearch      | 7852      | 5669      | 0.722 |\n| apache/kylin               | 477       | 354       | 0.742 |\n| taosdata/TDengine          | 4058      | 3011      | 0.742 |\n| confluentinc/ksql          | 954       | 727       | 0.762 |\n+----------------------------+-----------+-----------+-------+\n")),(0,l.kt)("h2",{id:"top-language-for-oss-databases"},"Top Language for OSS Databases"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT language, count(*)\n    FROM github_events\n         JOIN db_repos db ON db.id = github_events.repo_id\n   WHERE event_year = 2021 AND type = 'PullRequestEvent' AND action = 'opened'\nGROUP BY 2\nORDER BY 3 DESC\n   LIMIT 5\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"language"),(0,l.kt)("th",{parentName:"tr",align:null},"bar"),(0,l.kt)("th",{parentName:"tr",align:null},"count(*)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(868).Z})),(0,l.kt)("td",{parentName:"tr",align:null},"Java"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"24137")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(2480).Z})),(0,l.kt)("td",{parentName:"tr",align:null},"Go"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"16630")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(8368).Z})),(0,l.kt)("td",{parentName:"tr",align:null},"C++"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"16607")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(4091).Z})),(0,l.kt)("td",{parentName:"tr",align:null},"C"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"7605")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{src:a(1245).Z})),(0,l.kt)("td",{parentName:"tr",align:null},"Rust"),(0,l.kt)("td",{parentName:"tr",align:null},"\u2587\u2587\u2587\u2587\u2587\u2587"),(0,l.kt)("td",{parentName:"tr",align:null},"4366")))))}c.isMDXComponent=!0},3421:function(t,e,a){e.Z=a.p+"assets/images/gharchive-title-img-a58732e602bd98aa0baaa5db41099a86.png"},4091:function(t,e,a){e.Z=a.p+"assets/images/c-7e4173baaed898274e76c525cd94050f.png"},8368:function(t,e,a){e.Z=a.p+"assets/images/cpp-5dc5106352fad57c93834b0b2133ec51.png"},2480:function(t,e){e.Z="data:image/png;base64,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"},868:function(t,e,a){e.Z=a.p+"assets/images/java-66c01e0c39bbdd9ae5522d716352572a.png"},1245:function(t,e,a){e.Z=a.p+"assets/images/rust-d84568fe93c8895ff61b041de8879e23.png"}}]);