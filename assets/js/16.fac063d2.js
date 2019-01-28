(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{189:function(s,a,e){"use strict";e.r(a);var n=e(0),t=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"五、浏览器运行环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#五、浏览器运行环境","aria-hidden":"true"}},[s._v("#")]),s._v(" 五、浏览器运行环境")]),s._v(" "),e("h2",{attrs:{id:"页面加载-渲染过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#页面加载-渲染过程","aria-hidden":"true"}},[s._v("#")]),s._v(" 页面加载-渲染过程")]),s._v(" "),e("p",[s._v("1.从输入URL到得到html的详细过程")]),s._v(" "),e("blockquote",[e("p",[s._v("加载资源的形式")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.输入URL(或跳转页面)加载html\n2.加载html的静态资源,如,scripts,css,image,video,audio等\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("blockquote",[e("p",[s._v("加载资源的过程(答案)")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.浏览器根据DNS服务器得到域名的IP地址\n2.向这个IP地址发送http请求\n3.服务器收到、处理并返回http请求\n4.浏览器得到返回内容\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("浏览器渲染页面的过程")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.根据html结构生成DOM Tree\n2.根据CSS生成CSSOM\n3.将DOM和CSSOM整合形成RenderTree(渲染树)\n4.根据RenderTree开始渲染和展示\n5.遇到<scripts>脚本,会执行并阻塞渲染\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("p",[s._v("2.window.onload和DOMContentLoaded的区别")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.window.onload:页面的全部资源加载完成才会执行,包括图片,视频等\n2.DOMContentLoaded:Dom渲染完即可执行,图片视频等可能还没加载完\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"性能优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能优化","aria-hidden":"true"}},[s._v("#")]),s._v(" 性能优化")]),s._v(" "),e("blockquote",[e("p",[s._v("原则:多使用内存缓存或者其他方法,减少CPU计算,减少网络")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.静态资源的合并压缩(webpack打包)\n2.使用静态缓存\n3.使用CDN让资源加载更快\n4.使用SSR后渲染,数据直接输出到HTML中\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("blockquote",[e("p",[s._v("从哪入手:加载页面和静态资源,页面渲染")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.css前置,js后置\n2.懒加载(图片懒加载,下拉加载,分页)\n3.减少DOM查询,对DOM做缓存\n4.减少DOM操作,多个操作合并执行\n5.事件节流\n6.今早执行操作(如DomContentLoaded)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"安全性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全性","aria-hidden":"true"}},[s._v("#")]),s._v(" 安全性")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.xss跨站请求攻击\n(发送一篇文字,插入一个script标签,获取cookie发送到自己服务器)\n替换关键字,如<替换&lt\n2.xsrf跨站请求伪造\n(登录网站购物,正在浏览商品,付费的接口是xx.com/pay?id=100,但是没有验证,然后收到了一个邮件,隐藏了一个img标签,然后你看到了后点击了邮件,然后就付费了)\n加入验证,如指纹,密码,短信密码等\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])}],!1,null,null,null);t.options.__file="environment.md";a.default=t.exports}}]);