# ES6 进阶

## 1、新的数据结构

 ES2015 之前，`JavaScript` 中有哪些基本的数据结构。

- String 字符串
- Number 数字（包含整型和浮点型）
- Boolean 布尔值
- Object 对象
- Array 数组

其中又分为**值类型**和**引用类型**，`Array` 其实是 `Object` 的一种子类。

### Set 和 WeakSet

在 ES2015 中，ECMA 委员会为 ECMAScript 增添了集(Set)和“弱”集(WeakSet)。它们都具有元素唯一性，若添加了已存在的元素，会被自动忽略。

```js
let s = new Set()
s.add('hello').add('world').add('hello')
console.log(s.size) //=> 2
console.log(s.has('hello')) //=> true
```

在实际开发中，我们有很多需要用到集的场景，如搜索、索引建立等。

WeakSet 在 JavaScript 底层作出调整（在非降级兼容的情况下），检查元素的变量引用情况。如果元素的引用已被全部解除，则该元素就会被删除，
以节省内存空间。这意味著无法直接加入数字或者字符串。另外 WeakSet 对元素有严格要求，必须是 Object，当然了，你也可以用 new String('...') 等形式处理元素。

```js
let weaks = new WeakSet()
weaks.add("hello") //=> Error
weaks.add(3.1415) //=> Error

let foo = new String("bar")
let pi = new Number(3.1415)
weaks.add(foo)
weaks.add(pi)
weaks.has(foo) //=> true
foo = null
weaks.has(foo) //=> false
```

### Map 和 WeakMap

从数据结构的角度来说，映射（Map）跟原本的 Object 非常相似，都是 Key/Value 的键值对结构。
但是 Object 有一个让人非常不爽的限制：key 必须是字符串或数字。在一般情况下，我们并不会遇上这一限制，但若我们需要建立一个对象映射表时，这一限制显得尤为棘手。

而 Map 则解决了这一问题，可以使用任何对象作为其 key，这可以实现从前不能实现或难以实现的功能，如在项目逻辑层实现数据索引等。

```js
let map = new Map()
let object = { id: 1 }

map.set(object, 'hello')
map.set('hello', 'world')
map.has(object) //=> true
map.get(object) //=> hello
```

而 WeakMap 和 WeakSet 很类似，只不过 WeakMap 的键和值都会检查变量引用，只要其一的引用全被解除，该键值对就会被删除。

```js
let weakm = new WeakMap()
let keyObject = { id: 1 }
let valObject = { score: 100 }

weakm.set(keyObject, valObject)
weakm.get(keyObject) //=> { score: 100 }
keyObject = null
weakm.has(keyObject) //=> false
```

## 2、类(Classes)

类，作为自 JavaScript 诞生以来最大的痛点之一，终于在 ES2015 中得到了官方的妥协，“实现”了 ECMAScript 中的标准类机制。
为什么是带有双引号的呢？因为我们不难发现这样一个现象：

```js
// $ node
> class Foo {}
// [Function: Foo]
```
回想一下在 ES2015 以前的时代中，我们是怎么在 JavaScript 中实现类的？

```js
function Foo() {}
var foo = new Foo()
```

是的，ES6 中的类只是一种语法糖，用于定义原型(Prototype)的。当然，饿死的厨师三百斤，有总比没有强，我们还是很欣然地接受了这一设定。

### 语法

与大多数人所期待的一样，ES2015 所带来的类语法确实与很多 C 语言家族的语法相似。

```js
class Person {
  constructor(name, gender, age) {
    this.name = name
    this.gender = gender
    this.age = age
  }
  isAdult() {
    return this.age >= 18
  }
}
let me = new Person('iwillwen', 'man', 19)
console.log(me.isAdult()) //=> true
```

与 JavaScript 中的对象字面量不一样的是，类的属性后不能加逗号，而对象字面量则必须要加逗号。

然而，让人很不爽的是，ES2015 中对类的定义依然不支持默认属性的语法：

```js
// 理想型 但是没实现
class Person {
  name: String
  gender = 'man'
  // ...
}
```

### 继承

ES2015 的类继承总算是为 JavaScript 类继承之争抛下了一根定海神针了。

```js
class Animal {
  yell() {
    console.log('yell')
  }
}
class Person extends Animal {
  constructor(name, gender, age) {
    super() // must call `super` before using `this` if this class has a superclass

    this.name = name
    this.gender = gender
    this.age = age
  }

  isAdult() {
    return this.age >= 18
  }
}

class Man extends Person {
  constructor(name, age) {
    super(name, 'man', age)
  }
}
let me = new Man('iwillwen', 19)
console.log(me.isAdult()) //=> true
me.yell()
```

同样的，继承的语法跟许多语言中的很类似，ES2015 中若要是一个类继承于另外一个类而作为其子类，只需要在子类的名字后面加上 extends {SuperClass} 即可。

### 静态方法

ES2015 中的类机制支持 static 类型的方法定义，比如说 Man 是一个类，而我希望为其定义一个 Man.isMan() 方法以用于类型检查，我们可以这样做：

```js
class Man {
  // ...
  static isMan(obj) {
    return obj instanceof Man
  }
}
let me = new Man()
console.log(Man.isMan(me)) //=> true
```

就目前来说，ES2015 的类机制依然很鸡肋：

- 1.不支持私有属性（private）
- 2.不支持前置属性定义，但可用 get 语句和 set 语句实现
- 3.不支持多重继承
- 4.没有类似于协议（Protocl）或接口（Interface）等的概念

## 3、原生的模块化

在 JavaScript 的发展历史上，曾出现过多种模块加载库，如 RequireJS、SeaJS、FIS 等，而由它们衍生出来的 JavaScript 模块化标准有 CommonJS、AMD、CMD 和 UMD 等。

其中最为典型的是 Node.js 所遵循的 CommonJS 和 RequireJS 的 AMD。

### 基本用法

```js
import name from "module-name"
import * as name from "module-name"
import { member } from "module-name"
import { member as alias } from "module-name"
import { member1 , member2 } from "module-name"
import { member1 , member2 as alias2 , [...] } from "module-name"
import defaultMember, { member [ , [...] ] } from "module-name"
import defaultMember, * as alias from "module-name"
import defaultMember from "module-name"
import "module-name"
```

如上所示，ES2015 中有很多种模块引入方式，我们可以根据实际需要选择一种使用。

#### 全局引入

全局引入是最基本的引入方式，这跟 CommonJS、AMD 等模块化标准并无两样，都是把目标模块的所有暴露的接口引入到一个命名空间中。

```js
import name from 'module-name'
import * as name from 'module-name'
```
这跟 Node.js 所用的 CommonJS 类似：

```js
var name = require('module-name')
```

#### 局部引入

与 CommonJS 等标准不同的是，ES2015 的模块引入机制支持引入模块的部份暴露接口，这在大型的组件开发中显得尤为方便，如 React 的组件引入便是使用了该特性。

```js
import { A, B, C } from 'module-name'
A()
B()
C()
```

#### 接口暴露

ES2015 的接口暴露方式比 CommonJS 等标准都要丰富和健壮，可见 ECMA 委员会对这一部份的重视程度之高。

ES2015 的接口暴露有几种用法：

**暴露单独接口**

```js
// module.js
export function method() { /* ... */ }

// main.js
import M from './module'
M.method()
```

基本的 export 语句可以调用多次，单独使用可暴露一个对象到该模块外。

**暴露复盖模块**

若需要实现像 CommonJS 中的 module.exports = {} 以覆盖整个模块的暴露对象，则需要在 export 语句后加上 default。

```js
// module.js
export default {
  method1,
  method2
}
// main.js
import M from './module'
M.method1()
```

## 4、Promise


### Promise的含义

Promise是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理更强大。

所谓Promise，简单说就是一个容器，里面保存着某个未来才会结束的事件 (通常是一个异步操作)的结果。从语法上说，Promise是一个对象，从它可以获取异步操作的消息。

Promise对象有以下2个特点： 

- 1.对象的状态不受外界影响。Promise对象代表一个异步操作，有三种状态：Pending(进行中)、
Resolved(已完成)和Rejected(已失败)。只有异步操作的结果，可以决定当前是哪一种状态，
任何其他操作都无法改变这个状态。这也是Promise这个名字的由来，它的英语意思就是“承诺”，
表示其他手段无法改变。 

- 2.一旦状态改变，就不会再变，任何时候都可以得到这个结果。Promise对象的状态改变，只有两种可能：
从Pending变为Resolved；从Pending变为Rejected。只要这两种情况发生，状态就凝固了，不会再变了，
会一直保持这个结果。就算改变已经发生了，你再对Promise对象田静回调函数，也会立即得到这个结果。
这与事件(Event)完全不同，事件的特点是，如果你错过了它，再去监听，是得不到结果的。

有了Promise对象，就可以把异步操作以同步操作的流程表达出来，避免了层层嵌套的回调函数。此外，
Promise对象提供了统一的接口，使得控制异步操作更加容易。

### 基本用法

ES6规定，Promise对象是一个构造函数，用来生成Promise实例

```js
var promise = new Promise(function(resolve,reject){
  // ... some code
  if(/* 异步操作成功 */){
    resolve(value);
  }else{
    reject(error);
  }
});
```

- Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject。它们是两个函数，由JavaScript引擎提供，不是自己部署。

- resolve函数的作用，将Promise对象的状态从“未完成”变成“成功”(即从Pending变为Resolved)，在异步操
作成功时调用，并将异步操作的结果，作为参数传递出去； 

- reject函数的作用是，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

Promise实例生成以后，可以用then方法分别制定Resolved状态和Rejected状态的回调函数：

```js
    promise.then(function(value){
        // sucess
    },function(error){
        // failure
    });
```

then方法可以接受2个回调函数作为参数，第二个函数是可选的，不一定要提供。这两个函数都接受Promise对象传出的值作为参数。

下面是一个Promise对象的简单例子：

```js
function timeout(ms){
  return new Promise((resolve,reject)=>{
    setTimeout(resolve,ms,'done');
  });
}

timeout(100).then((value)=>{
  console.log(value);
});
```

上面代码中，timeout方法返回一个Promise实例，表示一段事件以后才会发生的结果。过了指定的时间(ms参数)以后，Promise实例的状态变为Resolved，
就会触发then方法绑定的回调函数。

Promise新建后就会立即执行

```js
let promise = new Promise(function(resolve,rejeact){
  console.log('Promise');
  resolve();
});

promise.then(function(){
  console.log('Resolved');
});

console.log('Hi');

// Promise
// Hi
// Resolved
```
上面代码中，Promise新建后立即执行，所以首先输出的是”Promise”，然后then方法指定的回调函数，将在当前脚本所有同步任务执行完才会执行，所以”Resolved”最后输出。

下面是异步加载图片的例子：
```js
function loadImageAsync(url){
  return new Promise(function(resolve,reject){
    var image = new Image();
    image.onload = function(){
      resolve(image);
    };
    image.onerror = function(){
      reject(new Error('Could not load image at' + url));
    };
    image.src = url;
  });
}
```

下面是一个用Promise对象实现Ajax操作的例子：

```js
var getJSON = function(url){
  var promise = new Promise(function(resolve,reject){
    var client = new XMLHttpRequest();
    client.open('GET',url);
    client.onreadystatechange = handler;
    client.responseType = 'json';
    client.setRequestHeader('Accept','application/json');
    client.send();

    function handler(){
      if(this.readyState !== 4){
        return;
      }
      if(this.status === 200){
        resolve(this.response);
      }else{
        reject(new Error(this.statusText));
      }
    }
  });

  return promise;
};
getJSON('/posts.jons').then(function(json){
  consoloe.log(json);
},function(error){
  console.log('出错了');
});
```
