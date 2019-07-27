# 五、浏览器运行环境

## 同源策略和跨域

```html
<!--协议,域名,端口不同就算跨域-->
<!--三个标签可以实现跨域加载资源-->
<!--用于打点统计,或者引用外部资源-->
<img src=xxx>
<!--可以引用外部样式-->
<link href=xxx>
<!--可以实现跨域jsonp调用接口-->
<script src=xxx>
```

## 什么是JSONP

首先抛出浏览器同源策略这个概念，为了保证用户访问的安全，现代浏览器使用了同源策略，即不允许访问非同源的页面。

这里大家只要知道，在ajax中，不允许请求非同源的URL就可以了，比如www.a.com下的一个页面，
其中的ajax请求是不允许访问www.b.com/c.php这样一个页面的。

### JSONP原理

ajax请求受同源策略影响，不允许进行跨域请求，而script标签src属性中的链接却可以访问跨域的js脚本，
利用这个特性，服务端不再返回JSON格式的数据，而是返回一段调用某个函数的js代码，在src中进行了调用，这样实现了跨域。

### JSONP具体实现
```js
// 1.首先看下ajax中如果进行跨域请求会如何。 
// 前端代码在域www.practice.com下面，使用ajax发送了一个跨域的get请求
function jsonhandle(data){
    alert("age:" + data.age + "name:" + data.name);
}
// <script type="text/javascript" src="jquery-1.8.3.min.js"></script>
// 调用
$(document).ready(function(){
    $.ajax({
        type : "get",
        async: false,
        url : "http://www.practice-zhao.com/student.php?id=1",
        type: "json",
        success : function(data) {
            jsonhandle(data);
        }
    });
});
// 后端PHP代码放在域www.practice-zhao.com下，简单的输出一段json格式的数据
jsonhandle({"age" : 15,"name": "John"})
// 当访问前端代码http://www.practice.com/gojsonp/index.html 时 chrome报错 提示了不同源的URL禁止访问

// 2.下面使用JSONP，将前端代码中的ajax请求去掉，添加了一个script标签，标签的src指向
// 了另一个域www.practice-zhao.com下的remote.js脚本
// <script type="text/javascript" src="http://www.practice-zhao.com/remote.js"></script>
// 这里调用了跨域的remote.js脚本，remote.js代码如下：jsonhandle({"age" : 15,"name": "John"})
// 也就是这段远程的js代码执行了上面定义的函数，弹出了提示框 

// 3.将前端代码再进行修改，代码如下：
    function jsonhandle(data){
        alert("age:" + data.age + "name:" + data.name);
    }
    // 提供jsonp服务的url地址（不管是什么类型的地址，最终生成的返回值都是一段javascript代码）
    var url = "http://www.practice-zhao.com/student.php?id=1&callback=jsonhandle";
    var script = document.createElement('script');    // 创建script标签，设置其属性
    script.setAttribute('src', url);
    document.body.appendChild(script); //添加执行
// 这里动态的添加了一个script标签，src指向跨域的一个php脚本，并且将上面的js函数名作为callback参数传入
```

### Jquery封装的jsonp格式

```js
$(document).ready(function(){
    $.ajax({
        type : "get",
        async: false,
        url : "http://www.practice-zhao.com/student.php?id=1",
        dataType: "jsonp",
        jsonp:"callback", //请求php的参数名
        jsonpCallback: "jsonhandle",//要执行的回调函数
        success : function(data) {
            alert("age:" + data.age + "name:" + data.name);
        }
    });
});
```

### 模块化的jsonp  

[参考地址](https://github.com/webmodules/jsonp)

> npm install jsonp --save

```
方法名
	jsonp(url, opts, fn)
参数
	url (String) - url获取
	opts (Object), 可选参数
		param (String) 指定回调的查询字符串参数的名称(默认为回调)
		timeout (Number) 超时错误发出后的时间。0禁用(默认为60000)
		prefix (String) 处理jsonp响应的全局回调函数的前缀(默认为__jp)
		name (String) 处理jsonp响应的全局回调函数的名称(默认为前缀+递增计数器)
	fn callback
该回调用err、data参数调用。
如果它超时，错误将是一个错误对象，它的消息是超时。
返回一个函数，当调用时，将取消正在执行的jsonp请求(不会调用fn)。
```

## 存储

```js
    // cookie:用于客户端服务器通信,但是有本地存储的功能
    // localStorage:本地存储,永久存储
    localStorage.setItem(key,value)
    localStorage.getItem(key)
    // sessionStorage:浏览器窗口存在时存储,关闭即销毁,使用同上
```

## bom函数

```js
    //navigator浏览器相关
    var ua = navigator.userAgent;
    var isChrome = ua.indexOf('Chrome');
    //screen屏幕相关
    screen.width;//宽
    //location url地址栏相关
    location.href;//全路径
    location.protocol;//协议;http , https
    location.host;//域名
    location.pathname;//路径
    location.search;//参数
    location.hash;//#
    // history
    history.back();//后退
    history.forward();//前进
```

## 事件绑定

```js
var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault();//阻止默认行为,如a标签的跳转
    e.stopPropagation();//阻止事件冒泡
    e.target;//点击对象
    console.log('clicked');
})
```

## 页面加载-渲染过程 
 
1.从输入URL到得到html的详细过程  

> 加载资源的形式

```
1.输入URL(或跳转页面)加载html
2.加载html的静态资源,如,scripts,css,image,video,audio等
```
> 加载资源的过程

```
1.浏览器根据DNS服务器得到域名的IP地址
2.向这个IP地址发送http请求
3.服务器收到、处理并返回http请求
4.浏览器得到返回内容
```
> 浏览器渲染页面的过程

```
1.根据html结构生成DOM Tree
2.根据CSS生成CSSOM
3.将DOM和CSSOM整合形成RenderTree(渲染树)
4.根据RenderTree开始渲染和展示
5.遇到<scripts>脚本,会执行并阻塞渲染
```

2.window.onload和DOMContentLoaded的区别

```
1.window.onload:页面的全部资源加载完成才会执行,包括图片,视频等
2.DOMContentLoaded:Dom渲染完即可执行,图片视频等可能还没加载完
```

## 性能优化

> 原则:多使用内存缓存或者其他方法,减少CPU计算,减少网络

```
1.静态资源的合并压缩(webpack打包)
2.使用静态缓存
3.使用CDN让资源加载更快
4.使用SSR后渲染,数据直接输出到HTML中
```

> 从哪入手:加载页面和静态资源,页面渲染

```
1.css前置,js后置
2.懒加载(图片懒加载,下拉加载,分页)
3.减少DOM查询,对DOM做缓存
4.减少DOM操作,多个操作合并执行
5.事件节流
6.今早执行操作(如DomContentLoaded)
```
