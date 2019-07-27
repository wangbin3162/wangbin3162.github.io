# 四、异步和单线程

## 异步
```js
//异步:
console.log(100);
setTimeout(function(){
  console.log(200)  
},1000);
console.log(300);
// 同步:
console.log(100);
alert(200);//阻塞,点击后才会执行下方代码
console.log(300);
```

何时需要异步
- 可能发生等待的情况
- 不能阻塞程序运行
- 所有的等待情况都需要异步

使用异步的场景
- 定时任务:setTimeout
- 网络请求:ajax请求,动态<img>加载(img.onload)
- 时间绑定:点击事件等

## 单线程

```js
console.log(100);
setTimeout(function(){
  console.log(200)  
});//不写时间
console.log(300);
// 分析:
// 1.执行第一行打印100
// 2.执行setTimeout后,传入其中的函数会被暂存不会立即执行
// 3.执行最后一行打印300
// 4.等待所有程序执行完,处于空闲状态时,立即查看有没有暂存的执行队列
// 5.发现暂存的执行函数,如没有等待时间则立即执行
```
