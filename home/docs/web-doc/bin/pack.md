---
sidebar: auto
---

# 第三方库构建

## 一、如何编写一个第三方库

为了实现一个vue transition组件结合钩子函数的css3动画库，基于es6来进行模块化开发。

具体代码参考[bin-animation源码](https://github.com/wangbin3162/bin-animation)，本文档旨在记录webpack打包构建过程

### 1.新建vue项目

```bash
vue create bin-animation
```

在src目录下新建bin-animation文件夹用于存储当前库的核心代码，代码部分详情参阅源码部分阅读。再src目录下新建一个index.js用于在全局暴露一个 Animation对象

```
import animations from './bin-animation/'

window.Animation = animations

```

### 2.打包构建准备

核心库完成编写并简单测试成功后来开始安装webpack基础依赖

#### 2.1安装

全局安装webpack4

```bash
yarn add global webpack
```

#### 2.1在一个项目中安装基础依赖

```bash
yarn add webpack webpack-cli --dev
```

#### 2.3安装编译es6的必备依赖

```bash
yarn add @babel/core @babel/preset-env @babel/plugin-transform-runtime  --dev
yarn add  @babel/polyfill  @babel/runtime
```

#### 2.4安装清除lib和拷贝插件

```bash
yarn add clean-webpack-plugin copy-webpack-plugin --dev
```

### 3.配置babel.config.js

我们需要配置babel插件，暂时先配置下方的基础配置
```
module.exports = {
  presets: [
    '@vue/app',
    [
      '@babel/env',
      {
        targets: ['last 2 versions', 'ie >= 7']
      }
    ]
  ],
  plugins: ['@babel/plugin-transform-runtime']
}

```

### 4.配置webpack.config.js

最后配置webpack的打包配置，这里因为打包时我们默认输出的是浏览器可直接饮用的js，但是我们也希望在发布npm包的时候有一个common版本，所以这里我们将bin-animation的源码拷贝至打包lib目录下，因为我们用es6编写的插件默认就是可以直接在es6环境下导入的。

```
const path = require('path')
// 清除文件
const CleanWebpackPlugin = require('clean-webpack-plugin')
// 拷贝插件
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, 'lib'), //输出目录
    filename: 'bin-animation.min.js' //输出文件名称，建议与源文件同名
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  // 插件
  plugins: [
    // 删除文件 保留新文件
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin([ // 复制插件
      {
        from: path.join(__dirname, './src/bin-animation'),
        to: path.join(__dirname, './lib')
      }
    ])
  ]
}

```

### 5.配置package.json

最后配置package.json来进行快速配置编译

```
 "scripts": {
     "build:lib": "webpack --mode production --config webpack.config.js"
  },
```

发布模式是生产模式 --config是指定配置文件。这样我们就生成了一个自定义的第三方库。


## 二、如何编写VUE组件库

如何编写一个组件库，具体组件参考[bin-ui源码](https://github.com/wangbin3162/bin-ui),这里只记录分包和构建过程。

### 1.分包

默认的cli3脚手架生成的src目录既是我们run serve运行的demo文件，那这时候我们第三方库的源码写到的src目录中，我们就要将example分离至单独的文件夹

像这样

- examples：示例演示的代码
- src：自己编写的组件或者第三方库

我们先将原有的demo文件统统放置到examples文件夹下，但是这时候我们默认的调试路径就不对了，因此我们需要重新编写指定路径

vue.config.js

```
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/bin-ui-doc' : '/',
  productionSourceMap: false,
  // 修改 pages 入口
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html', // 模板
      filename: 'index.html' // 输出文件
    }
  },
  // 扩展 webpack 配置
  chainWebpack: config => {
    // 把 packages 和 examples 加入编译，因为新增的文件默认是不被 webpack 处理的
    config.module
      .rule('js')
      .include
      .add('/src')
      .add('/examples')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
  }
}
```

注意：这里的publicPath是指默认打包发布的演示案例的基础路径，根据你的库来明明。

至此，运行，发现原有的demo已经运行成功了。

### 2.安装Markdown依赖

因为我们需要编写示例代码，这就避免不了上面看演示，下面直接显示代码这种情况，为此我们需要引入Markdown来让我们可以 再Markdown中编写vue或者代码组件

首先需要安装Markdown的支持


```
yarn add highlight.js markdown-it markdown-it-anchor markdown-it-container vue-markdown-loader --dev
```

安装成功后我们需要识别Markdown代码并进行高亮所以要用到highlight上面那个js，这里我们还需要配置一下vue.config.js

```
 ...
  // 扩展 webpack 配置
  chainWebpack: config => {
    
    config.module.rule('md')
      .test(/\.md/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true,
        use: [
          [require('markdown-it-container'), 'demo', {
            validate (params) {
              return params.trim().match(/^demo\s*(.*)$/)
            },
            render: function (tokens, idx) {
              const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
              if (tokens[idx].nesting === 1) {
                const description = m && m.length > 1 ? m[1] : ''
                const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : ''
                let descriptionHTML = description ? markdownRender.render(description) : ''
                // 2.使用自定义开发组件【DemoBlock】来包裹内容并且渲染成案例和代码示例
                return `<demo-block>
                          <div slot="source">${content}</div>
                          ${descriptionHTML}
                          <div slot="highlight">`
              } else {
                return '</div></demo-block>\n'
              }
            }
          }]
        ]
      })
  }
```

这里调试了很多次，结合自定义的demoblock组件可以达到比较好的渲染效果。

基础组件部分这里不做赘述，具体参考bin-ui源码部分，值得注意的是，我们的演示案例引用了自己编写的组件，所以在其他第三方库开发（如自己另行开发的bin-animation）的时候如果想引入这个examples模板，则推荐安装bin-ui组件后复制其示例文件夹并修改后使用。


### 3.编写demo基本架构

demo架构基本是按照左侧为路由菜单，右侧显示示例代码的这种模式，这里不做赘述，只说明几个注意点，

    1.assets：文件夹下的color-brewer这个是设置代码颜色的样式。其他的是demo的样式
    2.components：此文件夹下为基础模块，demo-block是代码演示区块
    3.docs：存储所有的doc代码，与路由匹配
    
demo-block这个组件和其内部的ui实现使用到了自己封装的ui库，因此需要引入

路由这里编写了一个nav.config.json来组装路由，如下

```
{
  "开发指南": [
    {
      "name": "giud",
      "path": "/giud",
      "desc": "介绍"
    }
  ]
}
```

路由:

路由的部分有个注意点，具体代码参考源码，路由index如下


```
import Vue from 'vue'
import VueRouter from 'vue-router'
import hljs from 'highlight.js'

import BinUI from 'bin-ui'

Vue.use(BinUI)

// 路由数据
import routes from './routes'

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  BinUI.LoadingBar.start()
  next()
})
router.afterEach(() => {
  Vue.nextTick(() => {
    const blocks = document.querySelectorAll('pre code:not(.hljs)')
    Array.prototype.forEach.call(blocks, hljs.highlightBlock)
  })
  BinUI.LoadingBar.done()
})

export default router

```

这里需要在路由结束时做一个操作，即调用highlight.js来给代码做设置，这里照着写即可

routers.js部分则是对nav.config.json做了一个统一遍历引入，后期则不需另行编写

```
import navConf from '../nav.config.json'

let routes = [
  {
    path: '/',
    redirect: 'giud',
    name: 'index'
  }
]

Object.keys(navConf).forEach((header) => {
  routes = routes.concat(navConf[header])
})

let addComponent = (router) => {
  router.forEach((route) => {
    if (route.items) {
      addComponent(route.items)
      routes = routes.concat(route.items)
    } else {
      if (!route.name) return
      route.meta = {desc: route.desc}
      route.component = r => require.ensure([], () =>
        r(require(`../docs/${route.name}.md`)))
    }
  })
}
addComponent(routes)
export default routes

```


### 4.编写基本配置

至此我们项目的基本架构即搭设完成，运行后也能看到项目的基本结构，针对不同库的介绍和部分修改则需要对代码进行局部编写

需要修改的地方

1.app.vue文件中的路由导航

```
watch: {
  '$route.path' () {
    // 触发伪滚动条更新
    this.componentScrollBox.scrollTop = 0
    this.$nextTick(() => {
      this.componentScrollBar.update()
      if (this.$route.meta.desc) {
        this.$util.title(this.$route.meta.desc+' - [bin-animation]')
      }
    })
  }
},
```

2.header.vue组件中的标题logo和git地址

```
<div class="logo"></div>
<div class="link">
    <router-link :to="{name: 'giud'}" class="active">指南</router-link>
    <a href="https://github.com/wangbin3162/bin-ui" class="github" target="_blank">GitHub</a>
</div>
```

3.footer.vue组件中的copyright


```
Copyright © 2019-present bin-animation
```

### 5.编写一个演示案例

首先添加一个演示案例1到nav.config.json中并在docs文件中创建demo01.md文件
 
```
"演示": [
    {
      "desc": "案例",
      "path": "/component",
      "items": [
        {
          "desc": "演示案例1",
          "icon": "ios-watch",
          "name": "demo01",
          "path": "/demo01"
        }
      ]
    }
  ]
```

md文件中只需要编写正常的代码即可实现功能

:::demo 
```html
<template>
 <div></div>
</template>

<script>
    export default{
        
    }
</script>
```
:::

### 6.库模式打包

当库开发完毕后。cli3脚手架默认有个打包模式，及lib模式

在package.json中配置
  
```
"scripts": {
    "serve": "vue-cli-service serve",
    "lint": "vue-cli-service lint",
    "build": "vue-cli-service build",
    "build:lib": "npm run lib && npm run style",
    "lib": "vue-cli-service build --target lib --name bin-ui --dest lib src/index.js",
    "style": "gulp build"
  },
```

打包后及可生成一个umd，和common方式的js，其中umd可以直接被浏览器引用

webpack打包待定。


### 7.gulp引入单独打包样式

因为样式这块区别于js，因此打算使用gulp去分别打包，这样可以按需引入

    "gulp": "^4.0.0",
    "gulp-autoprefixer": "^4.0.0",
    "gulp-cssmin": "^0.1.7",
    "gulp-stylus": "^2.7.0",
    
安装完毕后编写gulpfile.js

```
'use strict'
// 单独打包css
const {src, dest, series} = require('gulp')
const stylus = require('gulp-stylus')
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

// 打包默认的
function compile () {
  return src('./src/styles/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib/styles'))
}

// 打包common
function compileCommon () {
  return src('./src/styles/common/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib/styles/common'))
}

// 打包modules
function compileModule () {
  return src('./src/styles/modules/*.styl')
    .pipe(stylus())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(dest('./lib/styles/modules'))
}

// 复制字体包
function copyfont () {
  return src('./src/styles/fonts/**')
    .pipe(cssmin())
    .pipe(dest('./lib/styles/fonts'))
}

exports.build = series(compileCommon, compileModule, compile, copyfont)

```

## 三、发布npm

### 1.配置编译源代码

首先需要配置并编译源码至lib（或其他如dist）目录

### 2.配置基本文件

配置基本文件如.gitignore .npmignore LICENSE等基本文件

### 3.配置package.json

package.json文件必须包含，其中几个参数需要设置

name：库名称
version：版本号（每次npm发包的版本号必须不同）
description：库描述
main：默认引入时的入口文件
keywords：搜索关键字
files：npm发包时包含的文件夹，优先级最大
等等

```
{
  "name": "bin-[name]",
  "version": "1.0.0",
  "description": "",
  "main": "lib/index.js",
  "keywords": [
    "vue",
    "animations",
    "transition",
    "components"
  ],
  "author": "wang bin",
  "files": [
    "lib"
  ],
  "private": false,
  "license": "MIT",
  "scripts": {
    "build:lib": "webpack --mode production --config webpack.config.js"
  },
  "homepage": "https://wangbin3162.github.io/bin-animation-doc/",
```


### 4.登录npm

npm login 后输入wangbin3162 用户名密码邮箱即可

```
npm login
```

### 5.发包

执行命令，发包至npm

```
npm publish
```






