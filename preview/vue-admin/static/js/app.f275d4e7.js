(function(e){function t(t){for(var a,r,o=t[0],c=t[1],l=t[2],u=0,d=[];u<o.length;u++)r=o[u],i[r]&&d.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(d.length)d.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],a=!0,r=1;r<n.length;r++){var o=n[r];0!==i[o]&&(a=!1)}a&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},i={app:0},s=[];function o(e){return c.p+"static/js/"+({"charts~main":"charts~main",charts:"charts",main:"main",errorPage:"errorPage",example:"example"}[e]||e)+"."+{"charts~main":"c4bda87a",charts:"feb7773d",main:"4afac34c",errorPage:"abe29915",example:"faeb50fd"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={main:1,errorPage:1,example:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="static/css/"+({"charts~main":"charts~main",charts:"charts",main:"main",errorPage:"errorPage",example:"example"}[e]||e)+"."+{"charts~main":"31d6cfe0",charts:"31d6cfe0",main:"80ef3a5b",errorPage:"5c0b232b",example:"3e28940b"}[e]+".css",i=c.p+a,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var l=s[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===i))return t()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===a||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||i,s=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=a,delete r[e],f.parentNode.removeChild(f),n(s)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var s=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=s);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(e),l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,s=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");s.type=a,s.request=r,n[1](s)}i[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:u})},12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/preview/vue-admin/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2856:function(e,t,n){},"385e":function(e,t,n){"use strict";var a=n("b9d7"),r=n.n(a);r.a},4555:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("46a1"),n("450d");var a=n("e5f2"),r=n.n(a),i=(n("be4f"),n("896a")),s=n.n(i),o=(n("5e32"),n("6721")),c=n.n(o),l=(n("f4f9"),n("c2cc")),u=n.n(l),d=(n("7a0f"),n("0f6c")),f=n.n(d),h=(n("672e"),n("101e")),p=n.n(h),m=(n("5466"),n("ecdf")),v=n.n(m),b=(n("38a0"),n("ad41")),g=n.n(b),w=(n("10cb"),n("f3ad")),y=n.n(w),A=(n("6611"),n("e772")),V=n.n(A),x=(n("1f1a"),n("4e4b")),C=n.n(x),T=(n("a586"),n("7464")),E=n.n(T),O=(n("1951"),n("eedf")),B=n.n(O),S=(n("eca7"),n("3787")),P=n.n(S),j=(n("425f"),n("4105")),k=n.n(j),L=(n("34db"),n("3803")),M=n.n(L),R=(n("8bd8"),n("4cb2")),G=n.n(R),W=(n("ce18"),n("f58e")),D=n.n(W),U=(n("4ca3"),n("443e")),H=n.n(U),Y=(n("bd49"),n("18ff")),N=n.n(Y),X=(n("960d"),n("defb")),_=n.n(X),Z=(n("cb70"),n("b370")),I=n.n(Z),q=(n("551c"),n("2b0e")),Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},J=[],z=(n("5c0b"),n("2877")),F={},K=Object(z["a"])(F,Q,J,!1,null,null,null),$=K.exports,ee=n("a18c"),te=n("2f62"),ne=n("335a"),ae="__sidebarStatus__";function re(){var e=ne["a"].get(ae,!0);return e}function ie(e){var t=ne["a"].set(ae,e);return t}var se={state:{sidebar:{opened:re()}},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened?ie(!1):ie(!0),e.sidebar.opened=!e.sidebar.opened}},actions:{ToggleSideBar:function(e){var t=e.commit;t("TOGGLE_SIDEBAR")}}},oe=se,ce=n("8afe"),le=n("9393"),ue=(n("ac4d"),n("8a81"),n("cadf"),n("ac6a"),n("7f7f"),{state:{visitedViews:[],cachedViews:[]},mutations:{ADD_VISITED_VIEWS:function(e,t){e.visitedViews.some(function(e){return e.path===t.path})||(e.visitedViews.push({name:t.name,path:t.path,title:t.meta.title||"no-name"}),t.meta.noCache||e.cachedViews.push(t.name))},DEL_VISITED_VIEWS:function(e,t){var n=!0,a=!1,r=void 0;try{for(var i,s=e.visitedViews.entries()[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=Object(le["a"])(i.value,2),c=o[0],l=o[1];if(l.path===t.path){e.visitedViews.splice(c,1);break}}}catch(v){a=!0,r=v}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}var u=!0,d=!1,f=void 0;try{for(var h,p=e.cachedViews[Symbol.iterator]();!(u=(h=p.next()).done);u=!0){c=h.value;if(c===t.name){var m=e.cachedViews.indexOf(c);e.cachedViews.splice(m,1);break}}}catch(v){d=!0,f=v}finally{try{u||null==p.return||p.return()}finally{if(d)throw f}}},DEL_OTHERS_VIEWS:function(e,t){var n=!0,a=!1,r=void 0;try{for(var i,s=e.visitedViews.entries()[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=Object(le["a"])(i.value,2),c=o[0],l=o[1];if(l.path===t.path){e.visitedViews=e.visitedViews.slice(c,c+1);break}}}catch(v){a=!0,r=v}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}var u=!0,d=!1,f=void 0;try{for(var h,p=e.cachedViews[Symbol.iterator]();!(u=(h=p.next()).done);u=!0){c=h.value;if(c===t.name){var m=e.cachedViews.indexOf(c);e.cachedViews=e.cachedViews.slice(m,c+1);break}}}catch(v){d=!0,f=v}finally{try{u||null==p.return||p.return()}finally{if(d)throw f}}},DEL_ALL_VIEWS:function(e){e.visitedViews=[],e.cachedViews=[]}},actions:{addVisitedViews:function(e,t){var n=e.commit;n("ADD_VISITED_VIEWS",t)},delVisitedViews:function(e,t){var n=e.commit,a=e.state;return new Promise(function(e){n("DEL_VISITED_VIEWS",t),e(Object(ce["a"])(a.visitedViews))})},delOthersViews:function(e,t){var n=e.commit,a=e.state;return new Promise(function(e){n("DEL_OTHERS_VIEWS",t),e(Object(ce["a"])(a.visitedViews))})},delAllViews:function(e){var t=e.commit,n=e.state;return new Promise(function(e){t("DEL_ALL_VIEWS"),e(Object(ce["a"])(n.visitedViews))})}}}),de=ue,fe={sidebar:function(e){return e.app.sidebar},user:function(e){return e.app.user},visitedViews:function(e){return e.tagsView.visitedViews},cachedViews:function(e){return e.tagsView.cachedViews}},he=fe;q["default"].use(te["a"]);var pe=new te["a"].Store({getters:he,modules:{app:oe,tagsView:de}}),me=n("5409"),ve=n.n(me),be=(n("9fe7"),n("6861"),n("a481"),n("28a5"),n("3b2b"),n("96eb")),ge=n.n(be),we=[{url:"/table/tree",type:"get",response:function(e){return{data:[{label:"一级 1",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}]}}},{url:"/table/list",type:"get",response:function(e){return{"rows|10":[{"id|+1":1,"name|+1":["蛋奶小方","胡萝卜奶酪棒","全麦面包","椰蓉蛋糕","草莓慕斯","蔓越莓面包","香草蛋糕"],"category|+1":["零食","日用品"],desc:"荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻荷兰优质淡奶，奶香浓而不腻",address:"上海市普陀区真北路",shop:"王小虎夫妻店 @integer(0, 75)",shopId:"@integer(0, 75)"}]}}}],ye=Object(ce["a"])(we);function Ae(){function e(e){return function(t){var n=null;if(e instanceof Function){var a=t.body,r=t.type,i=t.url;n=e({method:r,body:JSON.parse(a),query:Ve(i)})}else n=e;return ge.a.mock(n)}}ge.a.XHR.prototype.proxy_send=ge.a.XHR.prototype.send,ge.a.XHR.prototype.send=function(){this.custom.xhr&&(this.custom.xhr.withCredentials=this.withCredentials||!1,this.responseType&&(this.custom.xhr.responseType=this.responseType)),this.proxy_send.apply(this,arguments)};var t=!0,n=!1,a=void 0;try{for(var r,i=ye[Symbol.iterator]();!(t=(r=i.next()).done);t=!0){var s=r.value;ge.a.mock(new RegExp(s.url),s.type||"get",e(s.response))}}catch(o){n=!0,a=o}finally{try{t||null==i.return||i.return()}finally{if(n)throw a}}}function Ve(e){var t=e.split("?")[1];return t?JSON.parse('{"'+decodeURIComponent(t).replace(/"/g,'\\"').replace(/&/g,'","').replace(/=/g,'":"').replace(/\+/g," ")+'"}'):{}}var xe=function(e,t,n){return{url:new RegExp("/mock".concat(e)),type:t||"get",response:function(e,t){t.json(ge.a.mock(n instanceof Function?n(e,t):n))}}};ye.map(function(e){return xe(e.url,e.type,e.response)});Ae(),q["default"].use(I.a),q["default"].use(_.a),q["default"].use(N.a),q["default"].use(H.a),q["default"].use(D.a),q["default"].use(G.a),q["default"].use(M.a),q["default"].use(k.a),q["default"].use(P.a),q["default"].use(B.a),q["default"].use(E.a),q["default"].use(C.a),q["default"].use(V.a),q["default"].use(y.a),q["default"].use(g.a),q["default"].use(v.a),q["default"].use(p.a),q["default"].use(f.a),q["default"].use(u.a),q["default"].use(c.a),q["default"].use(s.a.directive),q["default"].prototype.$notify=r.a,q["default"].use(ve.a),q["default"].prototype.$EventBus=new q["default"],q["default"].prototype.$base="/vue-admin-site",new q["default"]({router:ee["a"],store:pe,render:function(e){return e($)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var a=n("2856"),r=n.n(a);r.a},"61bd":function(e,t,n){},"62b0":function(e,t,n){"use strict";var a=n("61bd"),r=n.n(a);r.a},6861:function(e,t,n){},"9d64":function(e,t){e.exports="data:image/png;base64,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"},a18c:function(e,t,n){"use strict";var a=n("2b0e"),r=n("8c4f"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-wrapper"},[a("div",{staticClass:"sidebar-container",class:{hide:e.isCollapse}},[a("div",{staticClass:"logo"},[a("img",{staticClass:"icon",attrs:{src:n("9d64"),alt:"logo"}}),a("transition",{attrs:{name:"fade-in"}},[a("span",{directives:[{name:"show",rawName:"v-show",value:!e.isCollapse,expression:"!isCollapse"}],staticClass:"title"},[e._v("vue-admin")])])],1),a("menu-bar",{attrs:{routes:e.routes,isCollapse:e.isCollapse}})],1),a("div",{staticClass:"main-container",class:{hide:e.isCollapse}},[a("nav-bar"),a("tags-view"),a("div",{staticClass:"app-main"},[a("transition",{attrs:{name:"fade-transverse",mode:"out-in"}},[a("keep-alive",{attrs:{include:e.cachedViews}},[a("router-view")],1)],1)],1)],1)])},s=[],o=n("c93e"),c=n("2f62"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-scrollbar",{staticStyle:{height:"100%"}},[n("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{mode:"vertical","default-active":e.$route.path,collapse:e.isCollapse,"unique-opened":e.unique,"background-color":"#001529","text-color":"#bfcbd9"}},[e._l(e.routes,function(t){return[!t.hidden&&t.children?[1===t.children.length&&t.children[0]&&"home"===t.children[0].name?n("router-link",{key:t.children[0].name,attrs:{to:t.path+"/"+t.children[0].path}},[n("el-menu-item",{attrs:{index:t.path+"/"+t.children[0].path}},[t.children[0].meta&&t.children[0].meta.icon?n("i",{staticClass:"iconfont",class:t.children[0].meta.icon}):e._e(),t.children[0].meta&&t.children[0].meta.title?n("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(t.children[0].meta.title))]):e._e()])],1):n("el-submenu",{key:t.name,attrs:{index:t.name||t.path}},[n("template",{slot:"title"},[t.meta&&t.meta.icon?n("i",{staticClass:"iconfont",class:t.meta.icon}):e._e(),t.meta&&t.meta.title?n("span",[e._v(e._s(t.meta.title))]):e._e()]),e._l(t.children,function(a){return[a.children?e._e():n("router-link",{key:a.name,attrs:{to:t.path+"/"+a.path}},[n("el-menu-item",{attrs:{index:t.path+"/"+a.path}},[a.meta&&a.meta.icon?n("i",{staticClass:"iconfont",class:a.meta.icon}):e._e(),a.meta&&a.meta.title?n("span",[e._v(e._s(a.meta.title))]):e._e()])],1)]})],2)]:e._e()]})],2)],1)},u=[],d={props:{isCollapse:{type:Boolean,default:!1},routes:{type:Array,default:function(){return[]}},unique:{type:Boolean,default:!0}}},f=d,h=n("2877"),p=Object(h["a"])(f,l,u,!1,null,null,null),m=p.exports,v=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"nav-bar"},[a("div",{staticClass:"hamburger-container"},[a("b-icon",{class:{open:e.sidebar.opened},attrs:{name:"ios-menu"},nativeOn:{click:function(t){return e.toggleSideBar(t)}}})],1),a("breadcrumb"),a("div",{staticClass:"right-menu"},[a("div",{staticClass:"welcome"},[e._v(e._s(e.title))]),a("div",{staticClass:"avatar"},[a("el-dropdown",{attrs:{size:"medium"},on:{command:e.handleCommand}},[a("span",{staticClass:"el-dropdown-link"},[a("img",{attrs:{src:n("a8d2"),alt:"avatar"}})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:{type:"home"}}},[e._v("首页")])],1)],1)],1)])],1)},b=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.levelList,function(t,a){return n("b-breadcrumb-item",{key:t.path},["noRedirect"===t.redirect||a===e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v("\n        "+e._s(t.meta.title)+"\n      ")]):n("router-link",{staticClass:"redirect",attrs:{to:t.redirect||t.path}},[e._v(e._s(t.meta.title))])],1)}),1)],1)},w=[],y=(n("7f7f"),{data:function(){return{levelList:[]}},created:function(){this.getBreadcrumb()},watch:{$route:function(){this.getBreadcrumb()}},methods:{getBreadcrumb:function(){var e=this.$route.matched.filter(function(e){return!!e.name}),t=e[0];this.levelList=[],t&&"home"!==t.name&&this.levelList.push({path:"/home",meta:{title:"首页"}}),t.parent&&t.parent.meta&&"home"!==t.parent.redirect&&this.levelList.push(t.parent),this.levelList.push(t)}}}),A=y,V=(n("ea95"),Object(h["a"])(A,g,w,!1,null,"7167014d",null)),x=V.exports,C={computed:Object(o["a"])({},Object(c["b"])(["sidebar"]),{title:function(){return"欢迎您，王彬"}}),methods:{toggleSideBar:function(){this.$store.dispatch("ToggleSideBar")},handleCommand:function(e){"home"===e.type&&this.$router.push({path:"/home"})}},components:{Breadcrumb:x}},T=C,E=(n("62b0"),Object(h["a"])(T,v,b,!1,null,"173d1fb7",null)),O=E.exports,B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tags-view-container"},[n("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-wrapper"},e._l(Array.from(e.visitedViews),function(t){return n("router-link",{key:t.path,ref:"tag",refInFor:!0,staticClass:"tags-view-item",class:e.isActive(t)?"active":"",attrs:{to:t.path},nativeOn:{contextmenu:function(n){return n.preventDefault(),e.openMenu(t,n)}}},[e._v("\n      "+e._s(t.title)+"\n      "),"/home"!==t.path?n("i",{staticClass:"iconfont icon-ios-close",on:{click:function(n){return n.preventDefault(),n.stopPropagation(),e.closeSelectedTag(t)}}}):e._e()])}),1),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticClass:"contextmenu",style:{left:e.left+"px",top:e.top+"px"}},[n("li",{on:{click:function(t){return e.closeSelectedTag(e.selectedTag)}}},[e._v("关闭")]),n("li",{on:{click:e.closeOthersTags}},[e._v("关闭其他")]),n("li",{on:{click:e.closeAllTags}},[e._v("关闭所有")])])],1)},S=[],P=(n("ac4d"),n("8a81"),n("ac6a"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{wheel:function(t){return t.preventDefault(),e.handleScroll(t)}}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{left:e.left+"px"}},[e._t("default")],2)])}),j=[],k=15,L={name:"scrollPane",data:function(){return{left:0}},methods:{handleScroll:function(e){var t=e.wheelDelta||3*-e.deltaY,n=this.$refs.scrollContainer,a=n.offsetWidth,r=this.$refs.scrollWrapper,i=r.offsetWidth;t>0?this.left=Math.min(0,this.left+t):a-k<i?this.left<-(i-a+k)?this.left=this.left:this.left=Math.max(this.left+t,a-i-k):this.left=0},moveToTarget:function(e){var t=this.$refs.scrollContainer,n=t.offsetWidth,a=e.offsetLeft,r=e.offsetWidth;a<-this.left?this.left=-a+k:a+k>-this.left&&a+r<-this.left+n-k||(this.left=-(a-(n-r)+k))}}},M=L,R=(n("d20d"),Object(h["a"])(M,P,j,!1,null,"514d7e2a",null)),G=R.exports,W={data:function(){return{visible:!1,top:0,left:0,selectedTag:{}}},computed:{visitedViews:function(){return this.$store.state.tagsView.visitedViews}},watch:{$route:function(){this.addViewTags(),this.moveToCurrentTag()},visible:function(e){e?document.body.addEventListener("click",this.closeMenu):document.body.removeEventListener("click",this.closeMenu)}},mounted:function(){this.addViewTags()},methods:{generateRoute:function(){return!!this.$route.name&&this.$route},isActive:function(e){return e.path===this.$route.path||e.name===this.$route.name},addViewTags:function(){var e=this.generateRoute();if(!e)return!1;this.$store.dispatch("addVisitedViews",e)},moveToCurrentTag:function(){var e=this,t=this.$refs.tag;this.$nextTick(function(){var n=!0,a=!1,r=void 0;try{for(var i,s=t[Symbol.iterator]();!(n=(i=s.next()).done);n=!0){var o=i.value;if(o.to===e.$route.path){e.$refs.scrollPane.moveToTarget(o.$el);break}}}catch(c){a=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(a)throw r}}})},closeSelectedTag:function(e){var t=this;this.$store.dispatch("delVisitedViews",e).then(function(n){if(t.isActive(e)){var a=n.slice(-1)[0];a?t.$router.push(a.path):t.$router.push("/")}})},closeOthersTags:function(){var e=this;this.$router.push(this.selectedTag.path),this.$store.dispatch("delOthersViews",this.selectedTag).then(function(){e.moveToCurrentTag()})},closeAllTags:function(){this.$store.dispatch("delAllViews"),this.$router.push("/")},openMenu:function(e,t){this.visible=!0,this.selectedTag=e,this.left=t.clientX,this.top=t.clientY},closeMenu:function(){this.visible=!1}},components:{ScrollPane:G}},D=W,U=(n("d1a8"),Object(h["a"])(D,B,S,!1,null,"80ec8416",null)),H=U.exports,Y={data:function(){return{user:{date:"1990-4-27",name:"王彬",address:"徐州市叶语雅园"}}},computed:Object(o["a"])({},Object(c["b"])(["sidebar","cachedViews"]),{routes:function(){return this.$router.options.routes},isCollapse:function(){return!this.sidebar.opened}}),components:{MenuBar:m,NavBar:O,TagsView:H}},N=Y,X=(n("385e"),Object(h["a"])(N,i,s,!1,null,"c1b1dfec",null)),_=X.exports,Z=function(){return n.e("errorPage").then(n.bind(null,"13da"))},I=function(){return n.e("errorPage").then(n.bind(null,"ecc2"))},q=function(){return n.e("errorPage").then(n.bind(null,"8f9c"))},Q=function(){return n.e("errorPage").then(n.bind(null,"4933"))},J=function(){return Promise.all([n.e("charts~main"),n.e("main")]).then(n.bind(null,"f5b8"))},z=function(){return Promise.all([n.e("charts~main"),n.e("charts")]).then(n.bind(null,"cda4"))},F=function(){return Promise.all([n.e("charts~main"),n.e("charts")]).then(n.bind(null,"9600"))},K=function(){return Promise.all([n.e("charts~main"),n.e("charts")]).then(n.bind(null,"d7f8"))},$=function(){return n.e("example").then(n.bind(null,"9519"))},ee=function(){return n.e("example").then(n.bind(null,"19d0"))},te=function(){return n.e("example").then(n.bind(null,"8042"))},ne=[{path:"/404",component:q,hidden:!0},{path:"/401",component:Z,hidden:!0},{path:"/403",component:I,hidden:!0},{path:"/500",component:Q,hidden:!0},{path:"",component:_,redirect:"home",meta:{title:"首页",icon:"icon-ios-home"},children:[{path:"home",component:J,name:"home",meta:{title:"首页",icon:"icon-ios-home",noCache:!0}}]}],ae=[{path:"/example",component:_,redirect:"noRedirect",meta:{title:"演示案例",icon:"icon-ios-apps"},children:[{path:"tableExample",component:$,name:"TableExample",meta:{title:"综合演示"}},{path:"richText",component:ee,name:"RichText",meta:{title:"富文本"}},{path:"splitPanel",component:te,name:"SplitPanel",meta:{title:"分隔区块"}}]},{path:"/charts",component:_,redirect:"noRedirect",meta:{title:"图表示例",icon:"icon-ios-stats"},children:[{path:"keyBoard",component:z,name:"KeyBoard",meta:{title:"键盘图"}},{path:"lineMarker",component:F,name:"LineMarker",meta:{title:"折线图"}},{path:"mixChart",component:K,name:"MixChart",meta:{title:"混合图"}}]},{path:"/errorPage",component:_,redirect:"noRedirect",meta:{title:"错误页面",icon:"icon-ios-information-circle"},children:[{path:"page401",component:Z,name:"Page401",meta:{title:"401"}},{path:"page403",component:I,name:"Page403",meta:{title:"403"}},{path:"page404",component:q,name:"Page404",meta:{title:"404"}},{path:"page500",component:Q,name:"Page500",meta:{title:"500"}}]},{path:"*",redirect:"/404"}],re=ne.concat(ae),ie=re,se=n("5409"),oe=n.n(se);a["default"].use(oe.a),a["default"].use(r["a"]);var ce=new r["a"]({base:"/preview/vue-admin/",routes:ie});ce.beforeEach(function(e,t,n){oe.a.LoadingBar.start(),n()}),ce.afterEach(function(){oe.a.LoadingBar.done()});t["a"]=ce},a8d2:function(e,t,n){e.exports=n.p+"static/img/avtar.652cfe5a.png"},b9d7:function(e,t,n){},c17f:function(e,t,n){},c957:function(e,t,n){},d1a8:function(e,t,n){"use strict";var a=n("4555"),r=n.n(a);r.a},d20d:function(e,t,n){"use strict";var a=n("c957"),r=n.n(a);r.a},ea95:function(e,t,n){"use strict";var a=n("c17f"),r=n.n(a);r.a}});