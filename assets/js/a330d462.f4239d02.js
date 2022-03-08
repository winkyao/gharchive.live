"use strict";(self.webpackChunkdocus=self.webpackChunkdocus||[]).push([[3029],{24162:function(e,t,a){a.d(t,{q:function(){return f},H:function(){return b}});var n=a(67294),r=a(50657),o=a(18557),i=a(87357),l=a(86886),s=a(99490),u=a(15861),m=a(88078),c=a(19055),d=a(11703),p=a(40044),h="yyyy-MM-dd HH:mm:ss",f=function(e){var t=e.query,a=e.data,l=e.open,s=e.onClose;return(0,n.useEffect)((function(){a||s()}),[a]),n.createElement(n.Fragment,null,n.createElement(r.Z,{open:l,maxWidth:"md",fullWidth:!0,onClose:s,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description"},n.createElement(o.Z,null,"[For Debug] SQL Execution info"),n.createElement(i.Z,{sx:{p:4}},Array.isArray(a)?n.createElement(v,{data:a,query:t}):y(t,a))))},v=function(e){var t=e.query,a=e.data,r=(0,n.useState)(0),o=r[0],i=r[1];return n.createElement(n.Fragment,null,n.createElement(d.Z,{value:o,onChange:function(e,t){return i(t)}},a.map((function(e,t){return n.createElement(p.Z,{label:"Request "+(t+1)})}))),a.map((function(e,a){return y(t,e,a,o!==a)})))},y=function(e,t,a,r){return void 0===a&&(a=void 0),void 0===r&&(r=!1),n.createElement("div",{hidden:r,key:a},b(null==t?void 0:t.sql),n.createElement(l.ZP,{container:!0,alignItems:"center"},n.createElement(g,{title:"Requested at",value:s.ou.fromISO(null==t?void 0:t.requestedAt).toFormat(h)}),n.createElement(g,{title:"Expires at",value:s.ou.fromISO(null==t?void 0:t.expiresAt).toFormat(h)}),n.createElement(g,{title:"Spent",value:(null==t?void 0:t.spent)+" seconds"}),n.createElement(g,{title:"Query",value:e}),n.createElement(g,{title:"Params",value:n.createElement("pre",null,JSON.stringify(null==t?void 0:t.params,void 0,2))})))},g=function(e){var t=e.title,a=e.value;return n.createElement(n.Fragment,null,n.createElement(l.ZP,{item:!0,xs:3},n.createElement("div",null,n.createElement(u.Z,{align:"right",variant:"body1"},t))),n.createElement(l.ZP,{item:!0,xs:1}),n.createElement(l.ZP,{item:!0,xs:8},n.createElement("div",null,n.createElement(u.Z,{align:"left",variant:"body2",component:"div"},a))))},b=function(e){return e?n.createElement(c.Z,{className:"language-sql"},e):n.createElement(i.Z,{sx:{pt:.5}},n.createElement(m.Z,{width:"80%"}),n.createElement(m.Z,{width:"50%"}),n.createElement(m.Z,{width:"70%"}))}},6971:function(e,t,a){a.d(t,{W:function(){return l}});var n=a(44008),r=a(21703),o=a(8100),i=(0,r.d)(),l=function(e,t,a,r){void 0===r&&(r=!0);var l=(0,o.ZP)(r?[e,t]:null,{fetcher:function(e,t){return i.get("/q/"+e,{params:t}).then((function(e){var t=e.data;return t.sql&&a&&(t.sql=(0,n.WU)(t.sql)),t}))},revalidateOnFocus:!1,revalidateOnReconnect:!1});return{data:l.data,loading:l.isValidating,error:l.error}}},64556:function(e,t,a){a.d(t,{F6:function(){return r},y:function(){return o}});var n=a(30454);function r(e){void 0===e&&(e=!0);var t=["#d87c7c","#919e8b","#d7ab82","#6e7074","#61a0a8","#efa18d","#787464","#cc7e63","#724e58","#4b565b"];n.aW("vintage",{color:t,backgroundColor:e?"#fef8ef":void 0,graph:{color:t}})}function o(){var e="#eee",t=function(){return{axisLine:{lineStyle:{color:e}},axisTick:{lineStyle:{color:e}},axisLabel:{textStyle:{color:e}},splitLine:{lineStyle:{type:"dashed",color:"#aaa"}},splitArea:{areaStyle:{color:e}}}},a=["#dd6b66","#759aa0","#e69d87","#8dc1a9","#ea7e53","#eedd78","#73a373","#73b9bc","#7289ab","#91ca8c","#f49f42"],r={color:a,backgroundColor:"#333",tooltip:{axisPointer:{lineStyle:{color:e},crossStyle:{color:e}}},legend:{textStyle:{color:e}},textStyle:{color:e},title:{textStyle:{color:e}},toolbox:{iconStyle:{normal:{borderColor:e}}},dataZoom:{textStyle:{color:e}},timeline:{lineStyle:{color:e},itemStyle:{normal:{color:a[1]}},label:{normal:{textStyle:{color:e}}},controlStyle:{normal:{color:e,borderColor:e}}},timeAxis:t(),logAxis:t(),valueAxis:t(),categoryAxis:t(),line:{symbol:"circle"},graph:{color:a},gauge:{title:{textStyle:{color:e}}},candlestick:{itemStyle:{normal:{color:"#FD1050",color0:"#0CF49B",borderColor:"#FD1050",borderColor0:"#0CF49B"}}}};r.categoryAxis.splitLine.show=!1,n.aW("dark",r)}},37087:function(e,t,a){var n=a(67294),r=a(68239),o=a(85350),i=a(71927),l=function(e){var t=e.children,a=(0,o.Z)().isDarkTheme,l=(0,r.Z)({palette:{mode:a?"dark":void 0,primary:{main:"rgb(37, 193, 159)"}}});return n.createElement(i.Z,{theme:l},t)};l.displayName="MuiThemeAdaptor",t.Z=l},21703:function(e,t,a){a.d(t,{_:function(){return o},d:function(){return i}});var n=a(9669),r=a.n(n),o="https://community-preview-contributor.tidb.io";function i(){return r().create({baseURL:o})}},39683:function(e,t,a){a.r(t),a.d(t,{default:function(){return we}});var n=a(67294),r=a(52263),o=a(12859),i=a(77019),l=a(5344),s=a(78700),u=a(86886),m=a(15861),c="mainContent_9+-R",d="mainSection_Lz-8",p="page_8gJN",h=a(37087),f=a(87462),v=a(80531),y=a(87757),g=a.n(y),b=a(61903),E=a(68245),x=a(98456);function S(){return"#"+Math.floor(255*Math.random()).toString(16)+Math.floor(255*Math.random()).toString(16)+Math.floor(255*Math.random()).toString(16)}var C=a(57144),Z=a(76798),N=a(46901),M=a(21703),R=a(8100),P=(0,M.d)();function A(e){var t,a=e.repo,r=e.label,o=e.defaultRepoName,i=e.onChange,l=e.onValid,s=(0,n.useState)(null!=o?o:""),u=s[0],m=s[1],c=(0,n.useState)(!1),d=c[0],p=c[1],h=(0,n.useState)(""),y=h[0],M=h[1],A=(0,n.useState)(!1),L=A[0],w=A[1],T=(0,n.useMemo)((function(){return(0,C.Z)(m,500)}),[m]),q=(0,R.ZP)([u||o],{fetcher:(t=(0,v.Z)(g().mark((function e(t){var a,n;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,t){e.next=3;break}return e.abrupt("return",[]);case 3:return e.next=5,P.get("/gh/repos/search",{params:{keyword:t}});case 5:return a=e.sent,n=a.data.data,e.abrupt("return",n.map((function(e){return{name:e.fullName,color:S()}})));case 8:return e.prev=8,w(!1),e.finish(8);case 11:case"end":return e.stop()}}),e,null,[[0,,8,11]])}))),function(e){return t.apply(this,arguments)}),fallbackData:[],revalidateOnFocus:!1,revalidateOnReconnect:!1}),I=q.data,k=q.isValidating,G=q.error,B=(0,n.useMemo)((function(){var e,t,a=(null==G||null==(e=G.response)||null==(t=e.data)?void 0:t.message)||String(G);return-1!==a.indexOf("API rate limit exceeded")?"Too frequent to operate, please try again after one minute.":a}),[G]);return n.createElement(n.Fragment,null,n.createElement(E.Z,{sx:{maxWidth:300,mx:"auto"},size:"small",isOptionEqualToValue:function(e,t){return e.name===t.name},getOptionLabel:function(e){return e.name},options:I,loading:k,value:a,onChange:function(e,t){var a=l(t);void 0!==a?(p(!0),M(a)):i(t)},onInputChange:function(){var e=(0,v.Z)(g().mark((function e(t,a,n){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:M(void 0),p(!1),T(a);case 3:case"end":return e.stop()}}),e)})));return function(t,a,n){return e.apply(this,arguments)}}(),renderInput:function(e){return n.createElement(b.Z,(0,f.Z)({},e,{error:d,variant:"standard",label:r,helperText:y,InputProps:Object.assign({},e.InputProps,{endAdornment:n.createElement(n.Fragment,null,k?n.createElement(x.Z,{color:"inherit",size:20}):null,e.InputProps.endAdornment)})}))}}),n.createElement(Z.Z,{open:!!G&&!L,autoHideDuration:3e3,onClose:function(){return w(!0)}},n.createElement(N.Z,{severity:"error",sx:{width:"100%"}},B)))}var L=a(42293),w=a(10155),T=a(8298),q=a(2734);function I(e){var t=e.children,a=e.target,r=(0,T.Z)({disableHysteresis:!0,threshold:0,target:a});return n.cloneElement(t,{elevation:r?1:0})}var k=function(e){var t,a=(0,q.Z)().breakpoints.up(1201);return n.createElement(I,null,n.createElement(L.Z,{color:"inherit",position:"sticky",sx:(t={},t[a]={borderRadius:1},t.my=2,t.top="var(--ifm-navbar-height)",t),enableColorOnDark:!0},n.createElement(w.Z,null,n.createElement(u.ZP,{container:!0},n.createElement(u.ZP,{item:!0,xs:5},n.createElement(A,{label:"Repo Name 1",defaultRepoName:"pingcap/tidb",repo:e.repo1,onChange:e.onRepo1Change,onValid:e.onRepo1Valid})),n.createElement(u.ZP,{item:!0,xs:2,zeroMinWidth:!0}),n.createElement(u.ZP,{item:!0,xs:5},n.createElement(A,{label:"Repo Name 2",defaultRepoName:"tikv/tikv",repo:e.repo2,onChange:e.onRepo2Change,onValid:e.onRepo2Valid}))))))},G=a(6971),B=a(50994),F=a(85350),W=a(66242),z=a(26447),O="basicCard_QV6f",D="basicCardHeader_K-YW",V="basicCardTitle_+ts1",_=a(24162);function U(e){var t,a,r=e.loading,o=void 0!==r&&r,i=e.error,l=void 0!==i&&i,s=e.shouldLoad,u=void 0===s||s,c=e.hideTitle,d=void 0!==c&&c,p=e.title,h=e.height,f=void 0===h?"100px":h,v=e.noLoadReason,y=e.children,g=e.query,b=e.data,E=(0,q.Z)(),S=(0,n.useState)(!1),C=S[0],Z=S[1];return n.createElement(n.Fragment,null,n.createElement(W.Z,{className:O,elevation:0,sx:{mt:2}},p&&!d&&n.createElement(z.Z,{className:D,direction:"row",justifyContent:"center",alignItems:"center"},n.createElement("a",{className:V,style:{color:E.palette.text.secondary},onClick:function(){null!=b&&Z(!0)}},p)),!u||o||l?n.createElement(z.Z,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:f}},o&&n.createElement(x.Z,{size:"1.5em"}),l&&n.createElement(m.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0},"Failed to load data: ",null==l||null==(t=l.response)||null==(a=t.data)?void 0:a.msg),!u&&n.createElement("div",null,v)):y),n.createElement(_.q,{query:g,data:b,open:C,onClose:function(){Z(!1)}}))}var H=a(91262),K=a(98396);function j(e){var t=e.queryName,a=e.params,r=void 0===a?{}:a,o=e.series,i=void 0===o?[]:o,l=e.shouldLoad,s=e.tooltip,u=e.grid,m=e.xAxis,c=e.yAxis,d=e.legend,p=e.seriesColumnName,h=(e.height,(0,q.Z)()),v=(0,K.Z)(h.breakpoints.down("md")),y=(0,G.W)(t,r,!0,l),g=y.data,b=y.loading,E=y.error,x=(0,F.Z)().isDarkTheme,S=(0,n.useMemo)((function(){var e;return null!=(e=null==g?void 0:g.data)?e:[]}),[g]),C=(0,n.useMemo)((function(){return{dataset:[{id:"dataset_raw",source:S}].concat(i.map((function(e){return{id:"dataset_of_"+e.name,fromDatasetId:"dataset_raw",transform:{type:"filter",config:{and:[{dimension:p,"=":e.name}]}}}}))),tooltip:Object.assign({trigger:"axis"},s),legend:Object.assign({orient:"horizontal",left:"center",icon:"circle",itemHeight:10,itemWidth:10,textStyle:{fontWeight:"bold"},data:i.map((function(e){return e.name}))},d),grid:Object.assign({top:48,bottom:32,left:24,right:24,containLabel:!0},u),xAxis:Object.assign({nameGap:30,nameLocation:"middle",nameTextStyle:{fontSize:13,fontWeight:"bold"},axisLabel:{fontWeight:"bold"},axisLine:{lineStyle:{width:2}},axisTick:{show:!1}},m),yAxis:Object.assign({nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold"},splitLine:{interval:5,lineStyle:{type:[5,10]}}},c),series:i.map((function(e){return{type:"line",name:e.name,datasetId:"dataset_of_"+e.name,label:{show:!v,position:"top",fontWeight:"bold",color:"#4e5771",formatter:function(e){var t=e.dataIndex,a=void 0===t?0:t,n=e.data,r=void 0===n?[]:n;return a%3==0||a===r.length-1?r[c.name]:""}},emphasis:{focus:"series"},encode:{x:m.name,y:c.name,tooltip:[c.name]}}}))}}),[S,x,v]);return n.createElement(U,(0,f.Z)({},e,{loading:b||l&&!g,error:E,query:t,data:g}),n.createElement(H.Z,null,(function(){var e,t;return n.createElement(B.Z,{option:C,notMerge:!0,lazyUpdate:!0,style:{width:"100%",height:"auto",aspectRatio:v?"16 / 9":"26 / 9",overflow:"hidden"},theme:x?"dark":"vintage",opts:{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",width:"auto",locale:"en"}})})))}var J=["0h","1h","2h","3h","4h","5h","6h","7h","8h","9h","10h","11h","12h","13h","14h","15h","16h","17h","18h","19h","20h","21h","22h","23h"],Y=["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];function Q(e){var t=e.queryName,a=e.params,r=void 0===a?{}:a,o=e.series,i=void 0===o?[]:o,l=e.shouldLoad,s=e.xAxisColumnName,u=e.yAxisColumnName,m=e.valueColumnName,c=e.xAxis,d=e.yAxis,p=(e.height,(0,G.W)(t,r,!0,l)),h=p.data,v=p.loading,y=p.error,g=(0,F.Z)().isDarkTheme,b=(0,q.Z)(),E=(0,K.Z)(b.breakpoints.down("sm")),x=(0,n.useMemo)((function(){var e=Number.MAX_VALUE,t=Number.MIN_VALUE;return{data:(null==h?void 0:h.data.map((function(a){var n=Number(a[m]);return n>t&&(t=n),n<e&&(e=n),E?[a[s],a[u],n]:[a[u],a[s],n]})))||[],min:e,max:t}}),[h,E]),S=x.data,C=x.min,Z=x.max,N=(0,n.useMemo)((function(){var e;return(e={tooltip:{position:"top"},grid:E?{top:"2%",bottom:"2%",left:"2%",right:"2%",containLabel:!0}:{top:"2%",bottom:"2%",left:"10%",right:"6%",containLabel:!0}})[E?"xAxis":"yAxis"]=Object.assign({type:"category",data:J,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold"},inverse:!E},c),e[E?"yAxis":"xAxis"]=Object.assign({type:"category",data:Y,splitArea:{show:!0},nameLocation:"middle",nameGap:50,nameTextStyle:{fontSize:13,fontWeight:"bold",color:"#959aa9"},axisLabel:{color:"#959aa9",fontWeight:"bold",rotate:E?0:-45,fontSize:E?8:void 0},position:"top"},d),e.visualMap={show:!E,min:C,max:Z,orient:"vertical",top:"center"},e.series=i.map((function(e){return Object.assign({type:"heatmap",data:S,label:{show:!E},emphasis:{itemStyle:{shadowBlur:10,shadowColor:"rgba(0, 0, 0, 0.5)"}}},e)})),e}),[S,g,E]);return n.createElement(U,(0,f.Z)({},e,{loading:v,error:y,query:t,data:h}),n.createElement(H.Z,null,(function(){var e,t;return n.createElement(B.Z,{option:N,notMerge:!0,lazyUpdate:!0,style:{height:"auto",aspectRatio:E?"24 / 7":"10 / 24",overflow:"hidden"},theme:g?"dark":"vintage",opts:{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",width:"auto",locale:"en"}})})))}var X=a(44267);function $(e){var t=e.height,a=e.children;return n.createElement(U,e,n.createElement(X.Z,{style:{height:t}},n.createElement(z.Z,{direction:"column",justifyContent:"left",alignItems:"top",style:{height:"100%"}},a)))}var ee={AF:"Afghanistan",AX:"\xc5land Islands",AL:"Albania",DZ:"Algeria",AS:"American Samoa",AD:"Andorra",AO:"Angola",AI:"Anguilla",AQ:"Antarctica",AG:"Antigua and Barbuda",AR:"Argentina",AM:"Armenia",AW:"Aruba",AU:"Australia",AT:"Austria",AZ:"Azerbaijan",BS:"Bahamas",BH:"Bahrain",BD:"Bangladesh",BB:"Barbados",BY:"Belarus",BE:"Belgium",BZ:"Belize",BJ:"Benin",BM:"Bermuda",BT:"Bhutan",BO:"Bolivia (Plurinational State of)",BQ:"Bonaire, Sint Eustatius and Saba",BA:"Bosnia and Herzegovina",BW:"Botswana",BV:"Bouvet Island",BR:"Brazil",IO:"British Indian Ocean Territory",BN:"Brunei Darussalam",BG:"Bulgaria",BF:"Burkina Faso",BI:"Burundi",KH:"Cambodia",CM:"Cameroon",CA:"Canada",CV:"Cabo Verde",KY:"Cayman Islands",CF:"Central African Republic",TD:"Chad",CL:"Chile",CN:"China",CX:"Christmas Island",CC:"Cocos (Keeling) Islands",CO:"Colombia",KM:"Comoros",CG:"Congo",CD:"Congo (Democratic Republic of the)",CK:"Cook Islands",CR:"Costa Rica",CI:"C\xf4te d'Ivoire",HR:"Croatia",CU:"Cuba",CW:"Cura\xe7ao",CY:"Cyprus",CZ:"Czech Republic",DK:"Denmark",DJ:"Djibouti",DM:"Dominica",DO:"Dominican Republic",EC:"Ecuador",EG:"Egypt",SV:"El Salvador",GQ:"Equatorial Guinea",ER:"Eritrea",EE:"Estonia",ET:"Ethiopia",FK:"Falkland Islands (Malvinas)",FO:"Faroe Islands",FJ:"Fiji",FI:"Finland",FR:"France",GF:"French Guiana",PF:"French Polynesia",TF:"French Southern Territories",GA:"Gabon",GM:"Gambia",GE:"Georgia",DE:"Germany",GH:"Ghana",GI:"Gibraltar",GR:"Greece",GL:"Greenland",GD:"Grenada",GP:"Guadeloupe",GU:"Guam",GT:"Guatemala",GG:"Guernsey",GN:"Guinea",GW:"Guinea-Bissau",GY:"Guyana",HT:"Haiti",HM:"Heard Island and McDonald Islands",VA:"Holy See",HN:"Honduras",HK:"Hong Kong (China)",HU:"Hungary",IS:"Iceland",IN:"India",ID:"Indonesia",IR:"Iran (Islamic Republic of)",IQ:"Iraq",IE:"Ireland",IM:"Isle of Man",IL:"Israel",IT:"Italy",JM:"Jamaica",JP:"Japan",JE:"Jersey",JO:"Jordan",KZ:"Kazakhstan",KE:"Kenya",KI:"Kiribati",KP:"Korea (Democratic People's Republic of)",KR:"Korea (Republic of)",KW:"Kuwait",KG:"Kyrgyzstan",LA:"Lao People's Democratic Republic",LV:"Latvia",LB:"Lebanon",LS:"Lesotho",LR:"Liberia",LY:"Libya",LI:"Liechtenstein",LT:"Lithuania",LU:"Luxembourg",MO:"Macao (China)",MK:"Macedonia (the former Yugoslav Republic of)",MG:"Madagascar",MW:"Malawi",MY:"Malaysia",MV:"Maldives",ML:"Mali",MT:"Malta",MH:"Marshall Islands",MQ:"Martinique",MR:"Mauritania",MU:"Mauritius",YT:"Mayotte",MX:"Mexico",FM:"Micronesia (Federated States of)",MD:"Moldova (Republic of)",MC:"Monaco",MN:"Mongolia",ME:"Montenegro",MS:"Montserrat",MA:"Morocco",MZ:"Mozambique",MM:"Myanmar",NA:"Namibia",NR:"Nauru",NP:"Nepal",NL:"Netherlands",NC:"New Caledonia",NZ:"New Zealand",NI:"Nicaragua",NE:"Niger",NG:"Nigeria",NU:"Niue",NF:"Norfolk Island",MP:"Northern Mariana Islands",NO:"Norway",OM:"Oman",PK:"Pakistan",PW:"Palau",PS:"Palestina, State of",PA:"Panama",PG:"Papua New Guinea",PY:"Paraguay",PE:"Peru",PH:"Philippines",PN:"Pitcairn",PL:"Poland",PT:"Portugal",PR:"Puerto Rico",QA:"Qatar",RE:"R\xe9union",RO:"Romania",RU:"Russian Federation",RW:"Rwanda",BL:"Saint Barth\xe9lemy",SH:"Saint Helena, Ascension and Tristan da Cunha",KN:"Saint Kitts and Nevis",LC:"Saint Lucia",MF:"Saint Martin (French part)",PM:"Saint Pierre and Miquelon",VC:"Saint Vincent and the Grenadines",WS:"Samoa",SM:"San Marino",ST:"Sao Tome and Principe",SA:"Saudi Arabia",SN:"Senegal",RS:"Serbia",SC:"Seychelles",SL:"Sierra Leone",SG:"Singapore",SX:"Sint Maarten (Dutch part)",SK:"Slovakia",SI:"Slovenia",SB:"Solomon Islands",SO:"Somalia",ZA:"South Africa",GS:"South Georgia and the South Sandwich Islands",SS:"South Sudan",ES:"Spain",LK:"Sri Lanka",SD:"Sudan",SR:"Suriname",SJ:"Svalbard and Jan Mayen",SZ:"Swaziland",SE:"Sweden",CH:"Switzerland",SY:"Syrian Arab Republic",TW:"Taiwan, Province of China",TJ:"Tajikistan",TZ:"Tanzania, United Republic of",TH:"Thailand",TL:"Timor-Leste",TG:"Togo",TK:"Tokelau",TO:"Tonga",TT:"Trinidad and Tobago",TN:"Tunisia",TR:"Turkey",TM:"Turkmenistan",TC:"Turks and Caicos Islands",TV:"Tuvalu",UG:"Uganda",UA:"Ukraine",AE:"United Arab Emirates",GB:"United Kingdom",US:"United States of America",UM:"United States Minor Outlying Islands",UY:"Uruguay",UZ:"Uzbekistan",VU:"Vanuatu",VE:"Venezuela (Bolivarian Republic of)",VN:"Viet Nam",VG:"Virgin Islands (British)",VI:"Virgin Islands (U.S.)",WF:"Wallis and Futuna",EH:"Western Sahara",YE:"Yemen",ZM:"Zambia",ZW:"Zimbabwe"},te=function(e){return ee[e]},ae=a(64556);var ne="undefined"==typeof window?function(e,t){var a=t.defaultValue;return(0,n.useState)(a)}:function(e,t){var a=t.defaultValue,r=t.deserialize,o=t.serialize,i=(0,n.useMemo)((function(){var t=new URLSearchParams(location.search);return t.has(e)?r(t.get(e)):a}),[]),l=(0,n.useState)(i),s=l[0],u=l[1];return(0,n.useEffect)((function(){var t=o(s);if(null!=t){var a=new URLSearchParams(location.search);a.set(e,t),window.history.replaceState(null,null,"?"+a.toString())}}),[s]),[s,u]};var re="compareNumbersContainer_+IF-",oe="compareNumbersContainerBody_q38y",ie="compareNumbers_7PGt",le="repo1_BV-c",se="repo2_-L+Z",ue="title_n1Hx";var me=a(92902),ce=a(78445),de=(0,M.d)();function pe(e){var t=e.title,a=e.children;return n.createElement(W.Z,{sx:{maxWidth:"max-content",mx:"auto",py:2,my:2},elevation:0},n.createElement(ce.Z,{title:t,titleTypographyProps:{component:"h2",variant:"h4",align:"center"}}),n.createElement("div",{className:re},n.createElement("div",{className:oe},a)))}function he(e){var t=e.tag,a=void 0===t?"div":t,r=e.title,o=e.query,i=e.repos,l=fe(o,i[0]),s=fe(o,i[1]);return n.createElement(a,{className:ie},n.createElement(m.Z,{className:le,component:"span",variant:"body1",fontFamily:"Lato",fontWeight:800},l.isValidating?n.createElement(x.Z,{size:"1em"}):n.createElement(me.Z,{title:l.data[0]},n.createElement("span",null,l.data[1]))),n.createElement(m.Z,{className:ue,component:"h3",variant:"h5",fontFamily:"Lato",gutterBottom:!0,fontWeight:400,sx:{borderColor:"gray"}},r),n.createElement(m.Z,{className:se,component:"span",variant:"body1",fontFamily:"Lato",fontWeight:800},s.isValidating?n.createElement(x.Z,{size:"1em"}):n.createElement(me.Z,{title:s.data[0]},n.createElement("span",null,s.data[1]))))}function fe(e,t){return(0,R.ZP)([e,t],{fetcher:function(e,t){return t?de.get("/q/"+e,{params:{repoName:t.name}}).then((function(e){var t,a,n,r=e.data.data,o=Object.values(r[0]);return[String(o),String((t=o,a=1,n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(e){return t>=e.value})),(n?(t/n.value).toFixed(a).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n.symbol:"0")||0))]})):Promise.resolve(["--","--"])},fallbackData:["--","--"],revalidateOnFocus:!1,revalidateOnReconnect:!1})}function ve(e){var t,a,r=e.loading,o=void 0!==r&&r,i=e.error,l=void 0!==i&&i,s=e.shouldLoad,u=void 0===s||s,c=e.hideTitle,d=void 0!==c&&c,p=e.title,h=e.height,f=void 0===h?"100px":h,v=e.noLoadReason,y=e.children,g=e.query,b=e.datas,E=(0,q.Z)(),S=(0,n.useState)(!1),C=S[0],Z=S[1];return n.createElement(n.Fragment,null,n.createElement(W.Z,{className:O,elevation:0,sx:{mt:2}},p&&!d&&n.createElement(z.Z,{className:D,direction:"row",justifyContent:"center",alignItems:"center"},n.createElement("a",{className:V,style:{color:E.palette.text.secondary},onClick:function(){b[0]&&b[1]&&Z(!0)}},p)),!u||o||l?n.createElement(z.Z,{direction:"column",justifyContent:"center",alignItems:"center",style:{height:f}},o&&n.createElement(x.Z,{size:"1.5em"}),l&&n.createElement(m.Z,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0},"Failed to load data: ",null==l||null==(t=l.response)||null==(a=t.data)?void 0:a.msg),!u&&n.createElement("div",null,v)):y),n.createElement(_.q,{query:g,data:b,open:C,onClose:function(){Z(!1)}}))}function ye(e){var t=e.queryName,a=e.params1,r=e.params2,o=e.series,i=void 0===o?[]:o,l=e.legend,s=e.tooltip,u=e.shouldLoad,m=e.xAxis,c=e.yAxis,d=e.grid,p=(e.height,e.dimensionColumnName),h=e.metricColumnName,v=(0,q.Z)(),y=(0,K.Z)(v.breakpoints.down("md")),g=(0,G.W)(t,a,!0,a&&u),b=(0,G.W)(t,r,!0,r&&u),E=(0,F.Z)().isDarkTheme,x=(0,n.useMemo)((function(){var e,t,a,n;return[null!=(e=null==(t=g.data)?void 0:t.data.sort((function(e,t){return Math.sign(t.count-e.count)})))?e:[],null!=(a=null==(n=b.data)?void 0:n.data.sort((function(e,t){return Math.sign(t.count-e.count)})))?a:[]]}),[g.data,b.data]),S=x[0],C=x[1],Z=(0,n.useMemo)((function(){return g.loading||b.loading}),[g.loading,b.loading]),N=(0,n.useMemo)((function(){return g.error||b.error}),[g.error,b.error]),M=(0,n.useMemo)((function(){return{tooltip:Object.assign({trigger:"item"},s),legend:Object.assign({type:"scroll",orient:y?"horizontal":"vertical",right:"20px",top:20,bottom:20,x:"right",formatter:"{name}"},l),series:i.filter((function(e){return null!=(null==e?void 0:e.name)})).flatMap((function(e){return[S,C].map((function(t,n){return Object.assign({type:"pie",name:[a,r][n].repoName,radius:["40%","70%"],center:[50+40*(n-.5)+"%","55%"],avoidLabelOverlap:!1,itemStyle:{borderColor:E?"#1e1e1f":"#ffffff",borderWidth:0},label:{show:!1,position:"center",formatter:"{b}: {d}%"},emphasis:{label:{show:!0,fontSize:"20",fontWeight:"bold",formatter:"{b}\n\n{c}"}},labelLine:{show:!1},data:t.map((function(t){var a=void 0!==e.nameMap?e.nameMap(t[p]):t[p];return{value:t[h],name:a}}))},e)}))})),xAxis:m,yAxis:c,grid:Object.assign({left:16,top:16,bottom:16,right:16,containLabel:!0},d)}}),[S,C,E,y]);return n.createElement(ve,(0,f.Z)({},e,{loading:Z,error:N,query:t,datas:[g.data,b.data]}),n.createElement(H.Z,null,(function(){var e,t;return n.createElement(B.Z,{option:M,notMerge:!0,lazyUpdate:!0,style:{width:"100%",height:"auto",aspectRatio:y?"16 / 9":"26 / 9",overflow:"hidden"},theme:E?"dark":"vintage",opts:{devicePixelRatio:null!=(e=null==(t=window)?void 0:t.devicePixelRatio)?e:1,renderer:"canvas",locale:"en"}})})))}var ge=function(e){return e.filter((function(e){return void 0!==e&&void 0!==(null==e?void 0:e.name)}))},be=function(e){return e.filter((function(e){return void 0!==e&&void 0!==(null==e?void 0:e.name)})).length===e.length},Ee=function(e){var t=e.title,a=e.repos,r=e.queries;return n.createElement(pe,{title:t},r.map((function(e){var t=e.title,r=e.query;return n.createElement(he,{key:r,title:t,query:r,repos:a})})))},xe=[{title:"Stars total",query:"stars-total"},{title:"Avg stars / week",query:"stars-average-by-week"},{title:"Max stars / week",query:"stars-max-by-week"}],Se=function(e){var t=e.title,a=e.repos;e.dateRange;return n.createElement(Ee,{title:t,repos:a,queries:xe})},Ce=[{title:"Pull requests",query:"pull-requests-total"},{title:"PR creators",query:"pull-request-creators-total"},{title:"Pull request reviews",query:"pull-request-reviews-total"},{title:"Pull request reviewers",query:"pull-request-reviewers-total"}],Ze=function(e){var t=e.title,a=e.repos;e.dateRange;return n.createElement(Ee,{title:t,repos:a,queries:Ce})},Ne=[{title:"Issues",query:"issues-total"},{title:"Issue creators",query:"issue-creators-total"},{title:"Issue comments",query:"issue-comments-total"},{title:"Issue commenters",query:"issue-commenters-total"}],Me=function(e){var t=e.title,a=e.repos;e.dateRange;return n.createElement(Ee,{title:t,repos:a,queries:Ne})},Re=[{title:"Commits",query:"commits-total"},{title:"Committers",query:"committers-total"},{title:"Pushes",query:"pushes-total"}],Pe=function(e){var t=e.title,a=e.repos;e.dateRange;return n.createElement(Ee,{title:t,repos:a,queries:Re})},Ae=function(e){return n.createElement("main",{className:c,style:{}},e.children)};(0,ae.y)(),(0,ae.F6)(!1);var Le=function(e){return{defaultValue:e,serialize:function(e){return e?e.name:void 0},deserialize:function(e){return e?{name:e,color:S()}:void 0}}};function we(){var e=(0,r.Z)().siteConfig,t=ne("repo1",Le(null)),a=t[0],c=t[1],f=ne("repo2",Le(null)),v=f[0],y=f[1],g=(0,n.useState)([null,null]),b=g[0],E=g[1];return n.createElement(i.Z,{wrapperClassName:p,title:"Project Compare | "+e.title},n.createElement(l.Z,{dateAdapter:s.Z},n.createElement(h.Z,null,n.createElement(o.Z,null,n.createElement("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Lato:300,400,500,700&display=swap"})),n.createElement(k,{repo1:a,onRepo1Change:c,onRepo1Valid:function(e){if(void 0!==(null==e?void 0:e.name)&&(null==e?void 0:e.name)===(null==v?void 0:v.name))return"Please select another repository to compare."},repo2:v,onRepo2Change:y,onRepo2Valid:function(e){if(void 0!==(null==e?void 0:e.name)&&(null==e?void 0:e.name)===(null==a?void 0:a.name))return"Please select another repository to compare."},dateRange:b,onDateRangeChange:E}),n.createElement(Ae,null,n.createElement("section",{className:d},n.createElement(u.ZP,{container:!0,spacing:1},n.createElement(u.ZP,{item:!0,xs:12},n.createElement(Se,{title:"Stars",repos:[a,v],dateRange:b})),n.createElement(u.ZP,{item:!0,xs:12},n.createElement(j,{title:"Stars History",queryName:"stars-history",params:{repoName1:null==a?void 0:a.name,repoName2:null==v?void 0:v.name,dateRange:b},shouldLoad:be([a,v]),noLoadReason:"Need select repo.",seriesColumnName:"repo_name",series:ge([a,v]).map((function(e){return{name:e.name,color:e.color||S(),axisLabel:{formatter:"{yyyy} {MMM}"}}})),xAxis:{type:"time",name:"event_month"},yAxis:{type:"value",name:"total"},height:"500px"})),n.createElement(u.ZP,{item:!0,xs:12},n.createElement(ye,{title:"The country / area of stargazers",queryName:"stars-map",params1:{repoName:null==a?void 0:a.name,dateRange:b},params2:{repoName:null==v?void 0:v.name,dateRange:b},shouldLoad:be([a,v]),noLoadReason:"Need select repo.",series:[{name:"country_or_area",nameMap:te}],dimensionColumnName:"country_or_area",metricColumnName:"count",height:"400px"})),n.createElement(u.ZP,{item:!0,xs:12},n.createElement(ye,{title:"Top 50 company of stargazers",queryName:"stars-top-50-company",params1:{repoName:null==a?void 0:a.name,dateRange:b},params2:{repoName:null==v?void 0:v.name,dateRange:b},shouldLoad:be([a,v]),noLoadReason:"Need select repo.",series:[{name:"company"}],dimensionColumnName:"company_name",metricColumnName:"stargazers",height:"400px"})))),n.createElement("section",{className:d},n.createElement(u.ZP,{container:!0,spacing:1},n.createElement(u.ZP,{item:!0,xs:12},n.createElement(Ze,{title:"Pull Request",repos:[a,v],dateRange:b})),n.createElement(u.ZP,{item:!0,xs:12},n.createElement(j,{title:"Pull Request History",queryName:"pull-requests-history",params:{repoName1:null==a?void 0:a.name,repoName2:null==v?void 0:v.name,dateRange:b},shouldLoad:be([a,v]),noLoadReason:"Need select repo.",seriesColumnName:"repo_name",series:ge([a,v]).map((function(e){return{name:e.name,color:e.color||S(),axisLabel:{formatter:"{yyyy} {MMM}"}}})),xAxis:{type:"time",name:"event_month"},yAxis:{type:"value",name:"total"},height:"500px"})),n.createElement(u.ZP,{item:!0,xs:12},n.createElement(j,{title:"Pull Request Creator per month",queryName:"pull-request-creators-per-month",params:{repoName1:null==a?void 0:a.name,repoName2:null==v?void 0:v.name,dateRange:b},shouldLoad:be([a,v]),noLoadReason:"Need select repo.",seriesColumnName:"repo_name",series:ge([a,v]).map((function(e){return{name:e.name,color:e.color||S(),axisLabel:{formatter:"{yyyy} {MMM}"}}})),xAxis:{type:"time",name:"event_month"},yAxis:{type:"value",name:"total"},height:"500px"})),n.createElement(u.ZP,{item:!0,xs:12},n.createElement(ye,{title:"The country / area of PR creators",queryName:"pull-request-creators-map",params1:{repoName:null==a?void 0:a.name,dateRange:b},params2:{repoName:null==v?void 0:v.name,dateRange:b},shouldLoad:be([a,v]),noLoadReason:"Need select repo.",series:[{name:"country_or_area",nameMap:te}],dimensionColumnName:"country_or_area",metricColumnName:"count",height:"400px"})))),n.createElement("section",{className:d},n.createElement(u.ZP,{container:!0,spacing:1},n.createElement(u.ZP,{item:!0,xs:12},n.createElement(Me,{title:"Issue",repos:[a,v],dateRange:b})))),n.createElement("section",{className:d},n.createElement(u.ZP,{container:!0,spacing:1},n.createElement(u.ZP,{item:!0,xs:12},n.createElement(Pe,{title:"Commits",repos:[a,v],dateRange:b})),n.createElement(u.ZP,{item:!0,xs:12},n.createElement($,{height:"auto"},n.createElement(n.Fragment,null,n.createElement(m.Z,{variant:"h6",gutterBottom:!0},"Commits Time Distribution"),n.createElement(m.Z,{variant:"body1"},"Commits time distribution describes the number of push events of the repository in different periods."),n.createElement("ul",null,n.createElement(m.Z,{variant:"body1",component:"li"},"The X-axis is 0 ~ 24 hours divided according to GMT(UTC+00:00) time zone"),n.createElement(m.Z,{variant:"body1",component:"li"},"The Y-axis is day of week, 0 means Sunday, 1 means Monday, and so on...")),n.createElement(m.Z,{variant:"body1"},"We use the ",n.createElement("a",{href:"https://en.wikipedia.org/wiki/Heat_map"},"heatmap")," to indicate the frequency of the code ",n.createElement("a",{href:"https://docs.github.com/en/developers/webhooks-and-events/events/github-event-types#pushevent"},"PUSH")," event on this time node. By analyzing the main distribution area of the large circle, we can roughly learn that the open-source repository is mainly the developers in that area in activities."),n.createElement("ul",null,n.createElement(m.Z,{variant:"body1",component:"li"},"If the hot spots are mainly concentrated on the Y-axis working day, then this open-source repository is likely to be an open-source project whose main contribution comes from one or two companies."),n.createElement(m.Z,{variant:"body1",component:"li"},"If the hot spots are mainly concentrated on the X-axis 2 - 14h (corresponding to 10 to 22h of GMT+8), then developers of this open-source repository may be mainly in the eastern hemisphere."),n.createElement(m.Z,{variant:"body1",component:"li"},"If the hot spots are concentrated on the X-axis 14h - 2h (+1) (corresponding to 2 to 18h of GMT-8), then developers of this open-source repository may be mainly in the western hemisphere."))))),n.createElement(u.ZP,{item:!0,md:3,xs:0,sx:{height:"1px",p:"0 !important"},zeroMinWidth:!0}),n.createElement(u.ZP,{item:!0,md:3,sm:6,xs:12},n.createElement(Q,{title:"Commits Time Distribution",queryName:"commits-time-distribution",params:{repoName:null==a?void 0:a.name,dateRange:b},shouldLoad:be([a]),noLoadReason:"Need select repo.",xAxisColumnName:"hour",yAxisColumnName:"dayofweek",valueColumnName:"pushes",series:ge([a]).map((function(e){return{name:e.name,color:e.color||S(),axisLabel:{formatter:"{yyyy} {MMM}"}}})),height:"400px"})),n.createElement(u.ZP,{item:!0,md:3,sm:6,xs:12},n.createElement(Q,{title:"Commits Time Distribution",queryName:"commits-time-distribution",params:{repoName:null==v?void 0:v.name,dateRange:b},shouldLoad:be([v]),noLoadReason:"Need select repo.",xAxisColumnName:"hour",yAxisColumnName:"dayofweek",valueColumnName:"pushes",series:ge([v]).map((function(e){return{name:e.name}})),height:"400px"}))))))))}}}]);