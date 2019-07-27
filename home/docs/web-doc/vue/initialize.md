#  Vue环境搭建

##  一、安装Node.js

下载[Node.js](http://nodejs.cn/)最新版本，安装包含最新版`npm (node -v)`查看版本  

安装`nodejs` 后给 `npm` 配置淘宝镜像

```bash
npm config set registry https://registry.npm.taobao.org
```

查看是否成功

```bash
npm config get registry
```

##  二、webpack

[Webpack](https://webpack.js.org/) 是一个前端资源加载/打包工具。它将根据模块的依赖关系进行静态分析，
然后将这些模块按照指定的规则生成对应的静态资源。

```bash
npm install -g webpack 
```

##  三、vue-cli脚手架

以下内容摘录自vue-cli3官方文档，详情请参阅 [Vue CLI](https://cli.vuejs.org/zh/guide/)

`Vue CLI` 是一个基于 Vue.js 进行快速开发的完整系统，提供：
- 通过 @vue/cli 搭建交互式的项目脚手架。
- 通过 @vue/cli + @vue/cli-service-global 快速开始零配置原型开发。
- 一个运行时依赖 (@vue/cli-service)，该依赖：
    - 可升级；
    - 基于 webpack 构建，并带有合理的默认配置；
    - 可以通过项目内的配置文件进行配置；
    - 可以通过插件进行扩展。
- 一个丰富的官方插件集合，集成了前端生态中最好的工具。
- 一套完全图形化的创建和管理 Vue.js 项目的用户界面。
Vue CLI 致力于将 Vue 生态中的工具基础标准化。它确保了各种构建工具能够基于智能的默认配置即可平稳衔接，
这样你可以专注在撰写应用上，而不必花好几天去纠结配置的问题。与此同时，它也为每个工具提供了调整配置的灵活性，无需 eject

::: warning 关于旧版本
Vue CLI 的包名称由 `vue-cli` 改成了 `@vue/cli`。 如果你已经全局安装了旧版本的 `vue-cli (1.x 或 2.x)`，
你需要先通过 `npm uninstall vue-cli -g` 或 `yarn global remove vue-cli` 卸载它。
:::

::: tip Node 版本要求
Vue CLI 需要 [Node.js](http://nodejs.cn/) 8.9 或更高版本 (推荐 8.11.0+)。
你可以使用 nvm 或 nvm-windows 在同一台电脑中管理多个 Node 版本。
:::

可以使用下列任一命令安装这个新的包：

```bash
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```

安装之后，你就可以在命令行中访问 vue 命令。你可以通过简单运行 vue，看看是否展示出了一份所有可用命令的帮助信息，来验证它是否安装成功。

你还可以用这个命令来检查其版本是否正确 (3.x)：

```bash
vue --version
```

运行以下命令来创建一个新项目：
```bash
vue create hello-world
# OR 图形化创建
vue ui
```

初始化项目成功后可以配置eslint规则如下

- 根目录eslintrc.js配置在rules后添加
   - 'indent': 'off',
   - 'space-before-function-paren': 'off',
   - 'no-unused-vars': 'off'

## 四、其他常用工具包

### 1.stylus

[Stylus](https://github.com/stylus/stylus) 基于node.js的css预处理器 - 富有表现力的、动态的、健壮的CSS

```bash
npm install stylus stylus-loader --save-dev
```

### 2.sass

[Sass](https://sass-lang.com/) 是世界上最成熟，最稳定，最强大的专业级CSS扩展语言。

```bash
npm install node-sass sass-loader --save-dev
```

### 3.babel-runtime  babel-polyfill

(es6语法转义) (es6-api转义)

```bash
npm install babel-runtime --save

npm install babel-polyfill --save-dev
```

```js
// 用法:
import 'babel-polyfill';//(需要写在main.js最上边)
```

### 4.fastclick

移动端浏览器 300 毫秒点击延迟，因为移动浏览器上支持的双击缩放操作，以及IOS Safari 上的双击滚动操作，是导致300ms的点击延迟主要原因。

[FastClick](https://github.com/ftlabs/fastclick) 是 FT Labs 专门为解决移动端浏览器 300 毫秒点击延迟问题所开发的一个轻量级的库。

```bash
npm install fastclick --save
```

用法:
```js
    import fastclick from 'fastclick';
    fastclick.attach(document.body);
```

### 5.vue-lazyload图片懒加载

```bash
npm install vue-lazyload --save
```

用法
```js
  // -main.js
    import VueLazyload from 'vue-lazyload';
    Vue.use(VueLazyload, {
        loading: '/static/loading/loading-bars.svg'
    });
```

```html
    <!--在引入图片的位置使用v-lazy指令替代原有指令如-->
    <img src=''>
    <!--替换为-->
    <img v-lazy=''>
    <!-- 注:loading为载入时图片地址,可用svg,gif,png等-->
```

### 6.better-scroll
 
滚动插件，配置参考[文档](http://ustbhuangyi.github.io/better-scroll/doc/zh-hans)
 
```bash
npm install better-scroll --save
```

简单使用
```js
this.scroll = new BScroll(this.$refs.wrapper, {
    click: true, // 可以点击
    probeType: 3, // 检测时时滚动的位置
    scrollX: true,// 是否可以横向滚动
    eventPassthrough: 'vertical'// 保留竖向滚动
})
this.scroll.on('scroll', (pos) => {//监听滚动事件
    this.scrollY = Math.abs(Math.round(pos.y));// 将y值转换成正 整数
});
this.scroll.refresh();//用于刷新滚动
this.scroll.scrollToElement(el, 300);//滚动到指定element位置,参数为滚动时间
```

### 7.jsonp安装

[jsonp](../es5/jsonp.md) 详情可参考JavaScript部分专题

```bash
npm install jsonp --save
```

简单使用
```js
import originJsonp from 'jsonp'; 
originJsonp(url, opts, fn);
```

### 8.create-keyframe-animation
(第三方js生成css3动画)

```bash
npm install create-keyframe-animation --save
```

```js
import animations from 'create-keyframe-animation';
// 可在transition 钩子函数中执行
let animation = {
    0: {css...},
    100: {css...}
};
animations.registerAnimation({
    name: 'move',
    animation,
    presets: {
        duration: 400,
        easing: 'linear'
    }
});
animations.runAnimation(this.$refs.cdWrapper, 'move', done);

animations.unregisterAnimation('move');//注销动画
```

### 9.base64.js解码

```bash
npm install js-base64 --save
```

```js
import { Base64 } from 'js-base64';

Base64.encode('dankogai');  // ZGFua29nYWk=
Base64.encode('小飼弾');    // 5bCP6aO85by+
Base64.encodeURI('小飼弾'); // 5bCP6aO85by-

Base64.decode('ZGFua29nYWk=');  // dankogai
Base64.decode('5bCP6aO85by+');  // 小飼弾
Base64.decode('5bCP6aO85by-');  // 小飼弾
```

### 10.lyric-parser歌词封装组件

```bash
npm install lyric-parser --save
```

```js
 import Lyric from 'lyric-parser'
 let lyric = new Lyric(lyricStr, handler)

 function hanlder({lineNum, txt}){
   // this hanlder called when lineNum change
 }
```

### 11.storage本地存储库

```bash
npm install good-storage --save
```

```js
import storage from 'good-storage'
 // localStorage
 storage.set(key,val) 
 storage.get(key, def)
 // sessionStorage
 storage.session.set(key, val)
 storage.session.get(key, val)
```

### 12.vconsole腾讯移动端调试插件

```bash
npm install vconsole --save
```

```js
import VConsole from 'vconsole/dist/vconsole.min';
/* eslint-disable no-unused-vars */
var vConsole = new VConsole();
```
