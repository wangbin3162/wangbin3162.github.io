# VuePress

## 介绍

[VuePress](https://www.vuepress.cn/) 是尤大为了支持 Vue 及其子项目的文档需求而写的一个项目，VuePress界面十分简洁，并且非常容易上手，
一个小时就可以将项目架构搭好。现在已经有很多这种类型的文档，如果你有写技术文档的项目的需求，VuePress绝对可以成为你的备选项之一。

- VuePress特性：
    - 为技术文档而优化的 内置 Markdown 拓展
    - 在 Markdown 文件中使用 Vue 组件的能力
    - Vue 驱动的自定义主题系统
    - 自动生成 Service Worker
    - Google Analytics 集成
    - 基于 Git 的 “最后更新时间”
    - 多语言支持
    - 默认主题包含

## 开始搭建

### 全局安装VuePress
```bash
yarn global add vuepress
#OR
npm install -g vuepress
```

### 新建文件夹

可以手动右键新建，也可以使用下面的命令新建文件夹：

```bash
mkdir project
```

### 项目初始化

进入到project文件夹中，使用命令行初始化项目:

```bash
yarn init -y 
#OR
npm init -y
```

将会创建一个package.json文件，长这样子：
```json
{
  "name": "project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

**在project的根目录下新建docs文件夹**

这个文档将作为项目文档的根目录来使用：

```bash
mkdir docs
```

**在docs文件夹下创建.vuepress文件夹**

config.js是VuePress必要的配置文件，它导出一个javascript对象。

你可以先加入如下配置：

```js
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around'
}
```

**在.vuepress文件夹下面创建public文件夹:**

这个文件夹是用来放置静态资源的，打包出来之后会放在`.vuepress/dist/`的根目录。

## 首页

像VuePress文档主页一样

在docs文件夹下面创建一个README.md：

默认的主题提供了一个首页，像下面一样设置**home:true**即可，可以把下面的设置放入**README.md**中，待会儿你将会看到跟VuePress一样的主页。

    ---
    home: true
    heroImage: /logo.jpg
    actionText: 快速上手 →
    actionLink: /zh/guide/
    features:
    - title: 简洁至上
      details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
    - title: Vue驱动
      details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
    - title: 高性能
      details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
    footer: MIT Licensed | Copyright © 2019-present wang bin
    ---
    
ps：你需要放一张图片到public文件夹中。

**我们的项目结构已经搭好了：**

    project
    ├─── docs
    │   ├── README.md
    │   └── .vuepress
    │       ├── public
    │       └── config.js
    └── package.json

**在 package.json 里添加两个启动命令:**

```json
{
  "scripts": {
    "start": "vuepress dev docs",
    "build": "vuepress build docs"
  }
}
```

## 启动你的VuePress

默认是`localhost:8080`端口。

```bash
npm run start
```

## 构建

build生成静态的HTML文件,默认会在 **.vuepress/dist** 文件夹下

```bash
npm run build
```

## 基本配置

最标准的当然是[官方文档](https://www.vuepress.cn/config/),可以自己的需求来配置`config.js。`

可以参考我项目的文档配置

```js
module.exports = {
  title: '前端技术文档',
  description: '王彬的前端技术文档',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', {rel: 'icon', href: '/logo.png'}], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  dest: './dist',
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    sidebarDepth: 2, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
    lastUpdated: 'Last Updated', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      {
        text: '前端文档',
        items: [
          {text: 'html-css', link: '/web_html/'},
          {text: 'javascript', link: '/web_js/'},
          {text: 'vue', link: '/web_vue/'}
        ]
      },
      {
        text: '生态工具',
        items: [
          {
            text: '常用工具',
            items: [
              {text: 'Vue环境', link: helper},
              {text: 'Axios', link: helper},
              {text: 'VueX', link: helper},
              {text: 'VuePress', link: helper},
              {text: '阿里图标库', link: 'http://www.iconfont.cn/'},
              {text: '字体制作', link: 'https://icomoon.io/app/#/select'}
            ]
          },
          {
            text: '核心插件',
            items: [
              {text: 'Devtools', link: 'https://github.com/vuejs/vue-devtools'},
              {text: 'VueCli', link: 'https://cli.vuejs.org/zh/'},
              {text: 'VueLoader', link: 'https://vue-loader.vuejs.org/zh/'},
              {text: 'VueRouter', link: 'https://router.vuejs.org/zh/'}
            ]
          },
          {
            text: '辅助',
            items: [
              {text: 'Flow', link: helper},
              {text: 'Tinymce', link: helper},
              {text: 'Server', link: helper}
            ]
          }
        ]
      },
      {text: '个人主页', link: 'https://wangbin3162.github.io/Home/'},
      {text: 'GitHub', link: 'https://github.com/wangbin3162/web_document'}
    ],
    sidebar: {
      // 第一组侧边栏
      '/guide/': [
        {
          title: '快速指南',
          collapsable: false,
          children: [
            ['/guide/', 'Introduction']
          ]
        },
      ],
      // html css侧边栏
      '/web_html/': [
        {
          title: 'html-css',
          collapsable: false,
          children: [
            ['/web_html/', 'Introduction'],
            '/web_html/html',
            '/web_html/flex'
          ]
        }
      ]
    
    }
  }
}
```
