(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{175:function(n,e,t){"use strict";t.r(e);var r=t(0),a=Object(r.a)({},function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"入门"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#入门","aria-hidden":"true"}},[n._v("#")]),n._v(" 入门")]),n._v(" "),t("p",[t("a",{attrs:{href:"https://www.npmjs.com/package/bin-ui",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://img.shields.io/npm/v/bin-ui.svg",alt:"NPM version"}}),t("OutboundLink")],1)]),n._v(" "),t("p",[n._v("本项目是基于 Vue2.6，配合使用 "),t("a",{attrs:{href:"https://github.com/wangbin3162/bin-ui/",target:"_blank",rel:"noopener noreferrer"}},[n._v("bin-ui"),t("OutboundLink")],1),n._v(" 作为组件库来进行搭建wcm后台管理系统，在基于"),t("a",{attrs:{href:"https://github.com/wangbin3162/vue-admin/",target:"_blank",rel:"noopener noreferrer"}},[n._v("vue-admin1.0"),t("OutboundLink")],1),n._v("\n版本基础上进行二次重构，增加了登录的token验证和简单主题配置功能，目前暂时为2.0.0版本初稿，后续会进行持续更新。")]),n._v(" "),t("h2",{attrs:{id:"功能概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能概述","aria-hidden":"true"}},[n._v("#")]),n._v(" 功能概述")]),n._v(" "),t("pre",[t("code",[n._v("- 全局功能\n  - 动态侧边栏（支持多级路由嵌套）\n  - 动态面包屑\n  - 快捷导航(标签页)\n  - 阿里iconfont图标嵌入\n  - Easy-Mock数据\n  - 自适应收缩侧边栏\n    \n- 错误页面\n  - 401\n  - 403\n  - 404\n  - 500\n\n- 組件\n  - 按钮组\n  - ECharts 图表\n  - Divider 分割线\n  - Drawer 抽屉\n  - 标题栏、文本栏\n  - SplitPane 分隔区块\n  - Tinymce 富文本封装\n")])]),n._v(" "),t("p",[n._v("注：仅列举部分组件和功能")]),n._v(" "),t("h2",{attrs:{id:"环境搭建"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建","aria-hidden":"true"}},[n._v("#")]),n._v(" 环境搭建")]),n._v(" "),t("p",[n._v("需要在本地安装 node 和 vue-cli3。本项目技术栈基于\n"),t("a",{attrs:{href:"http://es6.ruanyifeng.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("ES6"),t("OutboundLink")],1),n._v("、\n"),t("a",{attrs:{href:"https://cn.vuejs.org/index.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("vue"),t("OutboundLink")],1),n._v("、\n"),t("a",{attrs:{href:"https://vuex.vuejs.org/zh/guide/",target:"_blank",rel:"noopener noreferrer"}},[n._v("vuex"),t("OutboundLink")],1),n._v("、\n"),t("a",{attrs:{href:"https://router.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"}},[n._v("vue-router"),t("OutboundLink")],1),n._v("、\n"),t("a",{attrs:{href:"https://github.com/axios/axios",target:"_blank",rel:"noopener noreferrer"}},[n._v("axios"),t("OutboundLink")],1),n._v("、\n"),t("a",{attrs:{href:"https://github.com/wangbin3162/bin-ui/",target:"_blank",rel:"noopener noreferrer"}},[n._v("bin-ui"),t("OutboundLink")],1),n._v("\n学习相关内容在开发项目时将会很有帮助。")]),n._v(" "),t("p",[n._v("此外，为实现图表、加载进度，请求参数转换，数字累加等功能，本项目还安装依赖了一些辅助库， 如\n"),t("a",{attrs:{href:"https://echarts.baidu.com/index.html",target:"_blank",rel:"noopener noreferrer"}},[n._v("echarts"),t("OutboundLink")],1),n._v("、\n"),t("a",{attrs:{href:"https://www.npmjs.com/package/qs",target:"_blank",rel:"noopener noreferrer"}},[n._v("qs"),t("OutboundLink")],1),n._v("、\n"),t("a",{attrs:{href:"https://www.npmjs.com/package/vue-count-to",target:"_blank",rel:"noopener noreferrer"}},[n._v("vue-count-to"),t("OutboundLink")],1),n._v(" "),t("a",{attrs:{href:"https://www.npmjs.com/package/good-storage",target:"_blank",rel:"noopener noreferrer"}},[n._v("good-storage"),t("OutboundLink")],1),n._v("、等。")]),n._v(" "),t("p",[n._v("所有的请求数据都使用"),t("a",{attrs:{href:"https://easy-mock.com/",target:"_blank",rel:"noopener noreferrer"}},[n._v("Easy-Mock"),t("OutboundLink")],1),n._v("模拟")]),n._v(" "),t("h2",{attrs:{id:"目录结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#目录结构","aria-hidden":"true"}},[n._v("#")]),n._v(" 目录结构")]),n._v(" "),t("p",[n._v("整个项目的目录结构如下，具体包含内容后续会进行详细介绍和解释")]),n._v(" "),t("pre",[t("code",[n._v("├── docs                       // 文档目录\n├── public                     // 公共资源，第三方,不打包资源\n├── src                        // 源代码\n│   ├── api                    // 所有请求相关资源\n│   ├── assets                 // 静态资源，会打包的资源\n│   ├── components             // 全局公用组件\n│   ├── config                 // 自定义配置参数\n│   ├── layout                 // 全局布局和相关组件\n│   ├── mock                   // mock server 数据\n│   ├── plugin                 // 自定义插件，注入指令，全局mixin\n│   ├── router                 // 路由\n│   ├── store                  // 全局 store \n│   ├── utils                  // 全局工具包\n│   ├── views                  // views 所有页面\n│   ├── App.vue                // 入口页面\n│   └── main.js                // 入口文件 加载组件 初始化等\n├── .eslintrc.js               // eslint 配置项\n├── .gitignore                 // git 忽略项\n├── babel.config.js            // babel 配置项\n├── vue.config.js              // vue-cli3集成配置项\n└── package.json               // package.json\n")])]),n._v(" "),t("h2",{attrs:{id:"安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装","aria-hidden":"true"}},[n._v("#")]),n._v(" 安装")]),n._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 克隆项目")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("git")]),n._v(" clone https://github.com/wangbin3162/bin-admin.git\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 安装依赖")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("install")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# 本地开发 启动项目")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("npm")]),n._v(" run serve\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[n._v("# OR vue ui 图形化界面启动")]),n._v("\nvue ui\n")])]),n._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[n._v("1")]),t("br"),t("span",{staticClass:"line-number"},[n._v("2")]),t("br"),t("span",{staticClass:"line-number"},[n._v("3")]),t("br"),t("span",{staticClass:"line-number"},[n._v("4")]),t("br"),t("span",{staticClass:"line-number"},[n._v("5")]),t("br"),t("span",{staticClass:"line-number"},[n._v("6")]),t("br"),t("span",{staticClass:"line-number"},[n._v("7")]),t("br"),t("span",{staticClass:"line-number"},[n._v("8")]),t("br"),t("span",{staticClass:"line-number"},[n._v("9")]),t("br"),t("span",{staticClass:"line-number"},[n._v("10")]),t("br")])]),t("p",[n._v("实际工作中可直接克隆在此基础包中进行开发。")]),n._v(" "),t("p",[n._v("文档持续更新中...")])])},[],!1,null,null,null);e.default=a.exports}}]);