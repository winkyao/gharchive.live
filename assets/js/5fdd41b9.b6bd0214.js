"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[139],{3905:function(e,n,r){r.d(n,{Zo:function(){return c},kt:function(){return v}});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),u=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=u(e.components);return t.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(r),v=a,d=m["".concat(p,".").concat(v)]||m[v]||l[v]||o;return r?t.createElement(d,s(s({ref:n},c),{},{components:r})):t.createElement(d,s({ref:n},c))}));function v(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4202:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var t=r(7462),a=r(3366),o=(r(7294),r(3905)),s=["components"],i={title:"Deep Insight Into Javascript Framework: 2021",image:"/img/jsframework.png"},p=void 0,u={unversionedId:"js-framework/deep-insight-into-js-framework-2021",id:"js-framework/deep-insight-into-js-framework-2021",title:"Deep Insight Into Javascript Framework: 2021",description:"Stars histories of top OSS javascript framework since 2011",source:"@site/docs/js-framework/01-deep-insight-into-js-framework-2021.md",sourceDirName:"js-framework",slug:"/js-framework/deep-insight-into-js-framework-2021",permalink:"/_/js-framework/deep-insight-into-js-framework-2021",editUrl:"https://github.com/pingcap-inc/gharchive.live/edit/main/docs/js-framework/01-deep-insight-into-js-framework-2021.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Deep Insight Into Javascript Framework: 2021",image:"/img/jsframework.png"},sidebar:"tutorialSidebar",previous:{title:"Javascript Framework",permalink:"/_/js-framework/"},next:{title:"Realtime - Hourly",permalink:"/_/js-framework/realtime"}},c=[{value:"Stars histories of top OSS javascript framework since 2011",id:"stars-histories-of-top-oss-javascript-framework-since-2011",children:[],level:2},{value:"Top 10 repos by stars in 2021",id:"top-10-repos-by-stars-in-2021",children:[],level:2},{value:"Top 10 repos by PR in 2021",id:"top-10-repos-by-pr-in-2021",children:[],level:2},{value:"Top Developers for OSS javascript framework",id:"top-developers-for-oss-javascript-framework",children:[],level:2},{value:"OSS javascript framwork repos with the highest growth YoY",id:"oss-javascript-framwork-repos-with-the-highest-growth-yoy",children:[],level:2},{value:"OSS javascript framwork repos with lowest growth YoY",id:"oss-javascript-framwork-repos-with-lowest-growth-yoy",children:[],level:2},{value:"Top Language for OSS javascript framework",id:"top-language-for-oss-javascript-framework",children:[],level:2},{value:"Top companies contributing to OSS javascript frameworks",id:"top-companies-contributing-to-oss-javascript-frameworks",children:[],level:2},{value:"Top countries contributing to OSS javascript frameworks",id:"top-countries-contributing-to-oss-javascript-frameworks",children:[],level:2},{value:"OSS javascript framework ranking",id:"oss-javascript-framework-ranking",children:[],level:2}],l={toc:c};function m(e){var n=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,t.Z)({},l,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(3701).Z})),(0,o.kt)("h2",{id:"stars-histories-of-top-oss-javascript-framework-since-2011"},"Stars histories of top OSS javascript framework since 2011"),(0,o.kt)("iframe",{width:"100%",height:"400",scrolling:"no",src:"/charts/jsframework.html?theme=dark"}),(0,o.kt)("h2",{id:"top-10-repos-by-stars-in-2021"},"Top 10 repos by stars in 2021"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT jf.name as repo_name, count(*) as stars\n    FROM github_events\n         JOIN js_framework_repos jf ON jf.id = github_events.repo_id\n   WHERE event_year = 2021 \n         AND type = 'WatchEvent' \nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 10\n")),(0,o.kt)("iframe",{width:"100%",height:"350",scrolling:"no",src:"/charts/bar.html?x=[%22facebook/react%22,%22sveltejs/svelte%22,%22vuejs/vue%22,%22angular/angular%22,%22solidjs/solid%22,%22vuejs/core%22,%22alpinejs/alpine%22,%22preactjs/preact%22,%22jquery/jquery%22,%22hotwired/stimulus%22]&data=[22830,18573,18015,11037,8607,8322,6993,2965,2227,1355]&theme=vintage"}),(0,o.kt)("h2",{id:"top-10-repos-by-pr-in-2021"},"Top 10 repos by PR in 2021"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT wf.name AS repo_name,\n         COUNT(*) AS num\n    FROM github_events \n         JOIN web_framework_repos wf ON wf.id = github_events.repo_id\n   WHERE type = 'PullRequestEvent' AND event_year = 2021 AND action = 'opened'\nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 10\n")),(0,o.kt)("iframe",{width:"100%",height:"350",scrolling:"no",src:"/charts/bar.html?x=[%22angular/angular%22,%22facebook/react%22,%22vuejs/core%22,%22sveltejs/svelte%22,%22neomjs/neo%22,%22emberjs/ember.js%22,%22preactjs/preact%22,%22alpinejs/alpine%22,%22vuejs/vue%22,%22aurelia/aurelia%22]&data=[2238,1178,878,436,380,372,290,256,164,160]&theme=vintage"}),(0,o.kt)("h2",{id:"top-developers-for-oss-javascript-framework"},"Top Developers for OSS javascript framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT actor_login, count(*) as pr_count\n    FROM github_events\n         JOIN js_framework_repos wf ON wf.id = github_events.repo_id\n   WHERE event_year = 2021 \n         AND type = 'PullRequestEvent' \n         AND action = 'opened' \n         AND actor_login not like '%bot%'\nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 20\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-------------------+----------+\n| actor_login       | pr_count |\n+-------------------+----------+\n| tobiu             | 373      |\n| bvaughn           | 202      |\n| gkalpak           | 200      |\n| acdlite           | 195      |\n| josephperrott     | 158      |\n| atscott           | 138      |\n| HcySunYang        | 106      |\n| petebacondarwin   | 105      |\n| bigopon           | 98       |\n| sebmarkbage       | 88       |\n| edison1105        | 82       |\n| AndrewKushnir     | 82       |\n| crisbeto          | 78       |\n| JoviDeCroock      | 77       |\n| devversion        | 77       |\n| alxhub            | 75       |\n| alan-agius4       | 75       |\n| dario-piotrowicz  | 74       |\n| JoostK            | 66       |\n| marvinhagemeister | 63       |\n+-------------------+----------+\n")),(0,o.kt)("h2",{id:"oss-javascript-framwork-repos-with-the-highest-growth-yoy"},"OSS javascript framwork repos with the highest growth YoY"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT wf.name,\n         sum(event_year = 2020) AS stars2020,\n         sum(event_year = 2021) AS stars2021,\n         round(sum(event_year = 2021) / sum(event_year = 2020), 3) AS yoy\n    FROM github_events\n         JOIN js_framework_repos as wf on wf.id = github_events.repo_id\n   WHERE type = 'WatchEvent' AND event_year in (2021, 2020)\nGROUP BY wf.name\n  HAVING stars2020 > 0 and yoy > 1\nORDER BY yoy DESC\n   LIMIT 20\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------+-----------+-----------+-------+\n| name            | stars2020 | stars2021 | yoy   |\n+-----------------+-----------+-----------+-------+\n| solidjs/solid   | 3447      | 8607      | 2.497 |\n| sveltejs/svelte | 13527     | 18573     | 1.373 |\n| marko-js/marko  | 735       | 1006      | 1.369 |\n| spine/spine     | 64        | 69        | 1.078 |\n+-----------------+-----------+-----------+-------+\n\n")),(0,o.kt)("h2",{id:"oss-javascript-framwork-repos-with-lowest-growth-yoy"},"OSS javascript framwork repos with lowest growth YoY"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT wf.name,\n         sum(event_year = 2020) AS stars2020,\n         sum(event_year = 2021) AS stars2021,\n         round(sum(event_year = 2021) / sum(event_year = 2020), 3) AS yoy\n    FROM github_events\n         JOIN js_framework_repos as wf on wf.id = github_events.repo_id\n   WHERE type = 'WatchEvent' AND event_year in (2021, 2020)\nGROUP BY wf.name\n  HAVING stars2020 > 0 and yoy < 1\nORDER BY yoy ASC\n   LIMIT 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------------+-----------+-----------+-------+\n| name                  | stars2020 | stars2021 | yoy   |\n+-----------------------+-----------+-----------+-------+\n| jorgebucaran/hyperapp | 1498      | 691       | 0.461 |\n| aurelia/framework     | 518       | 259       | 0.500 |\n| optimizely/nuclear-js | 78        | 40        | 0.513 |\n| daemonite/material    | 186       | 97        | 0.522 |\n| aurelia/aurelia       | 369       | 208       | 0.564 |\n| polymer/lit-element   | 1120      | 635       | 0.567 |\n| alpinejs/alpine       | 12006     | 6993      | 0.582 |\n| tastejs/todomvc       | 1376      | 813       | 0.591 |\n| finom/seemple         | 42        | 25        | 0.595 |\n| angular/angular.js    | 1207      | 724       | 0.600 |\n+-----------------------+-----------+-----------+-------+\n")),(0,o.kt)("h2",{id:"top-language-for-oss-javascript-framework"},"Top Language for OSS javascript framework"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT language, count(*)\n    FROM github_events\n         JOIN js_framework_repos wf ON wf.id = github_events.repo_id\n   WHERE event_year = 2021 AND type = 'PullRequestEvent' AND action = 'opened'\nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+------------+----------+\n| language   | count(*) |\n+------------+----------+\n| TypeScript | 4006     |\n| JavaScript | 2678     |\n| HTML       | 210      |\n| CSS        | 8        |\n+------------+----------+\n")),(0,o.kt)("h2",{id:"top-companies-contributing-to-oss-javascript-frameworks"},"Top companies contributing to OSS javascript frameworks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT trim(lower(replace(u.company, '@', ''))) AS company, \n         count(distinct actor_id) AS users_count\n    FROM github_events\n         JOIN js_framework_repos wf ON wf.id = github_events.repo_id\n         JOIN users u ON u.login = github_events.actor_login \n   WHERE event_year = 2021 \n         AND github_events.type IN (\n           'IssuesEvent', \n           'PullRequestEvent', \n           'IssueCommentEvent', \n           'PullRequestReviewCommentEvent', \n           'CommitCommentEvent', \n           'PullRequestReviewEvent'\n         )\n         AND u.company IS NOT NULL \n         AND u.company != '' \n         AND u.company != 'none'\nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 20\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------------+-------------+\n| company      | users_count |\n+--------------+-------------+\n| google       | 47          |\n| facebook     | 30          |\n| freelancer   | 16          |\n| microsoft    | 16          |\n| linkedin     | 15          |\n| freelance    | 13          |\n| tencent      | 13          |\n| bytedance    | 9           |\n| alibaba      | 8           |\n| home         | 7           |\n| esri         | 7           |\n| student      | 6           |\n| shopify      | 5           |\n| adobe        | 5           |\n| baidu        | 5           |\n| accenture    | 5           |\n| epam systems | 5           |\n| ibm          | 5           |\n| mozilla      | 4           |\n| angular      | 4           |\n+--------------+-------------+\n")),(0,o.kt)("h2",{id:"top-countries-contributing-to-oss-javascript-frameworks"},"Top countries contributing to OSS javascript frameworks"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"  SELECT country_code, \n         count(distinct actor_id) AS users_count\n    FROM github_events\n         JOIN js_framework_repos wf ON wf.id = github_events.repo_id\n         JOIN users u ON u.login = github_events.actor_login \n   WHERE event_year = 2021 \n         AND github_events.type IN (\n           'IssuesEvent', \n           'PullRequestEvent', \n           'IssueCommentEvent', \n           'PullRequestReviewCommentEvent', \n           'CommitCommentEvent', \n           'PullRequestReviewEvent'\n         )\n         AND country_code is not null\nGROUP BY 1\nORDER BY 2 DESC\n   LIMIT 10\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+--------------+-------------+\n| country_code | users_count |\n+--------------+-------------+\n| US           | 1120        |\n| CN           | 430         |\n| DE           | 388         |\n| IN           | 290         |\n| GB           | 288         |\n| FR           | 229         |\n| CA           | 186         |\n| RU           | 159         |\n| AU           | 154         |\n| BR           | 122         |\n+--------------+-------------+\n")),(0,o.kt)("h2",{id:"oss-javascript-framework-ranking"},"OSS javascript framework ranking"),(0,o.kt)("p",null,"The previous analysis is for a single dimension. Let\u2019s analyze the comprehensive measurement. The open source javascript framework community is comprehensively scored through the three metrics: stars, PRs and contributors. We can use the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Standard_score"},"Z-score")," method to score the repo."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql"},"WITH stars AS (\n    SELECT /*+ read_from_storage(tiflash[github_events]) */ \n        wf.name AS repo_name, \n        COUNT(*) AS count\n    FROM github_events\n    JOIN js_framework_repos wf ON wf.id = github_events.repo_id\n    WHERE type = 'WatchEvent' and event_year = 2021\n    GROUP BY 1 \n),\n\nprs as (\n    SELECT /*+ read_from_storage(tiflash[github_events]) */ \n      wf.name AS repo_name, \n      COUNT(*) AS count\n    FROM github_events\n    JOIN js_framework_repos wf ON wf.id = github_events.repo_id\n    WHERE type = 'PullRequestEvent' and event_year = 2021 and action = 'opened'\n    GROUP BY 1 \n),\n\ncontributors AS (\n    SELECT /*+ read_from_storage(tiflash[github_events]) */ \n      wf.name AS repo_name, \n      count(distinct actor_id) AS count\n    FROM github_events\n    JOIN js_framework_repos wf ON wf.id = github_events.repo_id\n    WHERE type in (\n        'IssuesEvent', \n        'PullRequestEvent', \n        'IssueCommentEvent', \n        'PullRequestReviewCommentEvent', \n        'CommitCommentEvent', \n        'PullRequestReviewEvent') and event_year = 2021 \n    GROUP BY 1 \n),\n\nraw as (\n    SELECT \n        name, \n        stars.count AS star_count, \n        COALESCE(prs.count, 0) AS pr_count,\n        contributors.count as user_count\n    FROM js_framework_repos \n    LEFT JOIN stars ON stars.repo_name = name\n    LEFT JOIN prs ON prs.repo_name = name\n    LEFT JOIN contributors ON contributors.repo_name = name\n),\n\nzz_pr as (\n    SELECT AVG(pr_count) AS mean, STDDEV(pr_count) AS sd FROM raw\n),\n\nzz_star as (\n    SELECT AVG(star_count) AS mean, STDDEV(star_count) AS sd FROM raw\n),\n\nzz_user as (\n    SELECT AVG(user_count) AS mean, STDDEV(user_count) AS sd FROM raw\n)\n\nSELECT name, \n      round(((star_count - zz_star.mean) / zz_star.sd) +\n      ((user_count - zz_user.mean) / zz_user.sd) +\n      ((pr_count - zz_pr.mean) / zz_pr.sd), 2) AS z_score,\n      round((star_count - zz_star.mean) / zz_star.sd, 2) AS z_score_star,\n      round((user_count - zz_user.mean) / zz_user.sd, 2) AS z_score_user,\n      round((pr_count - zz_pr.mean) / zz_pr.sd, 2) AS z_score_pr\nFROM raw, \n    zz_star,\n    zz_user,\n    zz_pr\nORDER BY 2 DESC\n")),(0,o.kt)("p",null,"This is the comprehensive ranking calculated by z-score:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"+-----------------------+---------+--------------+--------------+------------+\n| name                  | z_score | z_score_star | z_score_user | z_score_pr |\n+-----------------------+---------+--------------+--------------+------------+\n| angular/angular       |  8.94   |  1.2         |  3.36        |  4.38      |\n| facebook/react        |  8.26   |  3.13        |  3.06        |  2.07      |\n| sveltejs/svelte       |  4.26   |  2.44        |  1.37        |  0.45      |\n| vuejs/core            |  3.67   |  0.76        |  1.49        |  1.41      |\n| vuejs/vue             |  2.93   |  2.35        |  0.73        | -0.14      |\n| alpinejs/alpine       |  0.57   |  0.54        | -0.02        |  0.06      |\n| solidjs/solid         |  0.25   |  0.81        | -0.25        | -0.31      |\n| preactjs/preact       | -0.11   | -0.12        | -0.12        |  0.13      |\n| emberjs/ember.js      | -0.38   | -0.49        | -0.2         |  0.31      |\n| ionic-team/stencil    | -0.49   | -0.39        |  0.12        | -0.21      |\n| neomjs/neo            | -0.66   | -0.47        | -0.52        |  0.33      |\n| jquery/jquery         | -0.96   | -0.24        | -0.33        | -0.39      |\n| hotwired/stimulus     | -1.09   | -0.38        | -0.34        | -0.36      |\n| aurelia/aurelia       | -1.16   | -0.57        | -0.44        | -0.15      |\n| marko-js/marko        | -1.27   | -0.44        | -0.47        | -0.37      |\n| polymer/lit-element   | -1.35   | -0.5         | -0.41        | -0.43      |\n| angular/angular.js    | -1.37   | -0.49        | -0.43        | -0.45      |\n| mithriljs/mithril.js  | -1.4    | -0.49        | -0.45        | -0.46      |\n| jorgebucaran/hyperapp | -1.41   | -0.49        | -0.49        | -0.43      |\n| tastejs/todomvc       | -1.43   | -0.47        | -0.48        | -0.47      |\n| knockout/knockout     | -1.51   | -0.55        | -0.48        | -0.49      |\n| Polymer/polymer       | -1.52   | -0.53        | -0.5         | -0.49      |\n| riot/riot             | -1.54   | -0.54        | -0.5         | -0.5       |\n| jashkenas/backbone    | -1.56   | -0.54        | -0.52        | -0.5       |\n| aurelia/framework     | -1.58   | -0.56        | -0.52        | -0.49      |\n| dojo/dojo             | -1.6    | -0.59        | -0.51        | -0.5       |\n| daemonite/material    | -1.6    | -0.59        | -0.52        | -0.48      |\n| spine/spine           | -1.63   | -0.59        | -0.54        | -0.5       |\n| optimizely/nuclear-js | -1.63   | -0.6         | -0.53        | -0.5       |\n| finom/seemple         | -1.64   | -0.6         | -0.54        | -0.5       |\n+-----------------------+---------+--------------+--------------+------------+\n")))}m.isMDXComponent=!0},3701:function(e,n,r){n.Z=r.p+"assets/images/jsframework-2fb634d658b607f2d6c1a29173651bbf.png"}}]);