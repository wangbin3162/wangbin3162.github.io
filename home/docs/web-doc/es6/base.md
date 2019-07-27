# ES6 基础

## 1、let、const

在 ES2015 的新语法中，影响速度最为直接，范围最大的，恐怕得数 `let` 和 `const` 了，它们是继 var 之后，
新的变量定义方法。与 let 相比，const 更容易被理解，用于定义常量，即不可变量。

但由于在 ES6 之前的 ECMAScript 标准中，并没有原生的实现，所以在降级编译中，会马上进行引用检查，然后使用 var 代替。

```js
// foo.js
const foo = 'bar'
foo = 'newvalue'
```

## 2、块级作用域

在 ES6 诞生之前，我们在给 JavaScript 新手解答困惑时，经常会提到一个观点：

**JavaScript 没有块级作用域**

没有块级作用域的。这个问题之所以为人所熟知，是因为它引发了诸如历遍监听事件需要使用闭包解决等问题。

```html
<button>一</button>
<button>二</button>
<button>三</button>
<button>四</button>
<div id="output"></div>
<script>
  var buttons = document.querySelectorAll('button')
  var output = document.querySelector('#output')

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      output.innerText = buttons[i].innerText
    })
  }
</script>
```

前端新手非常容易写出类似的代码，因为从直观的角度看这段代码并没有语义上的错误，但是当我们点击任意一个按钮时，就会报出这样的错误信息：

出现这个错误的原因是因为 `buttons[i]` 不存在，即为 `undefined`。

为什么会出现按钮不存在结果呢？通过排查，我们可以发现，每次我们点击按钮时，事件监听回调函数中得到的变量 `i` 都会等于 `buttons.length`，
也就是这里的 4。而 `buttons[4]` 恰恰不存在，所以导致了错误的发生。

再而导致 i 得到的值都是 `buttons.length` 的原因就是因为 `JavaScript` 中没有块级作用域，而使对 i 的变量引用(Reference)一直保持在上一层作用域（循环语句所在层）上，
而当循环结束时 i 则正好是` buttons.length`。

而在 ES6 中，我们只需做出一个小小的改动，便可以解决该问题（假设所使用的浏览器已经支持所需要的特性）：

```js
for (/* var */ let i = 0; i < buttons.length; i++) {
  // ...
}
```
通过把 for 语句中对计数器 i 的定义语句从 var 换成 let，即可。因为 let 语句会使该变量处于一个块级作用域中，
从而让事件监听回调函数中的变量引用得到保持。我们不妨看看改进后的代码经过 babel 的编译会变成什么样子：
```js
// ...
var _loop = function (i) {
  buttons[i].addEventListener('click', function () {
    output.innerText = buttons[i].innerText
  })
}

for (var i = 0; i < buttons.length; i++) {
  _loop(i)
}
// ...
```

## 3、箭头函数(Arrow Function)

继 `let` 和 `const` 之后，箭头函数就是使用率最高的新特性了。当然了，如果你了解过 Scala 或者曾经如日中天的 JavaScript 衍生语言 CoffeeScript，
就会知道箭头函数并非 ES6 独创。

箭头函数，顾名思义便是使用箭头`(=>)`进行定义的函数，属于匿名函数（`Lambda`）一类。当然了，也可以作为定义式函数使用，但我们并不推荐这样做，随后会详细解释。

### 使用

箭头函数有好几种使用语法：

```js
// 1.means return `foo + ' world'`
foo => foo + ' world' 
// 2.  
(foo, bar) => foo + bar
// 3. 
foo => {
  return foo + ' world'
}
// 4.
(foo, bar) => {
  return foo + bar
}
```

以上都是被支持的箭头函数表达方式，其最大的好处便是简洁明了，省略了 function 关键字，而使用 => 代替。

箭头函数语言简洁的特点使其特别适合用於单行回调函数的定义：

```js
let names = [ 'Will', 'Jack', 'Peter', 'Steve', 'John', 'Hugo', 'Mike' ]

let newSet = names
  .map((name, index) => {
    return {
      id: index,
      name: name
    }
  })
  .filter(man => man.id % 2 == 0)
  .map(man => [man.name])
  .reduce((a, b) => a.concat(b))

console.log(newSet) //=> [ 'Will', 'Peter', 'John', 'Mike' ]
```
分析

    1.将原本的由名字组成的数组转换为一个格式为 { id, name } 的对象，id 则为每个名字在原数组中的位置
    2.剔除其中 id 为奇数的元素，只保留 id 为偶数的元素
    3.将剩下的元素转换为一个包含当前元素中原名字的单元数组，以方便下一步的处理
    4.通过不断合并相邻的两个数组，最后能得到的一个数组，便是我们需要得到的目标值
    
### 箭头函数与上下文绑定

事实上，箭头函数在 ES2015 标准中，并不只是作为一种新的语法出现。就如同它在 CoffeeScript 中的定义一般，
是用于对函数内部的上下文 （this）绑定为定义函数所在的作用域的上下文。

```js
let obj = {
  hello: 'world',
  foo() {
    let bar = () => {
      return this.hello
    }
    return bar
  }
}

window.hello = 'ES6'
window.bar = obj.foo()
window.bar() //=> 'world'
```

上面代码中的 obj.foo 等价于：
```js
// ...
foo(){
  let bar = (function() {
    return this.hello
  }).bind(this)

  return bar
}
// ...
```

## 4、模板字符串

它的出现可以让非常多的字符串使用变得尤为轻松。

模板字符串要求使用 ` 代替原本的单/双引号来包裹字符串内容。它有两大特点：

- 支持变量注入
- 支持换行

### 支持变量注入

模板字符串之所以称之为“模板”，就是因为它允许我们在字符串中引用外部变量，而不需要像以往需要不断地相加、相加、相加……
```js
let name = 'Will Wen Gunn'
let title = 'Founder'
let company = 'LikMoon Creation'

let greet = `Hi, I'm ${name}, I am the ${title} at ${company}`
console.log(greet) //=> Hi, I'm Will Wen Gunn, I am the Founder at LikMoon Creation
```

### 支持换行

在 Node.js 中，如果我们没有支持换行的模板字符串，若需要拼接一条SQL，则很有可能是这样的：
```js
var sql =
  "SELECT * FROM Users " +
  "WHERE FirstName='Mike' " +
  "LIMIT 5;"
```

或者是这样的：

```js
var sql = [
  "SELECT * FROM Users",
  "WHERE FirstName='Mike'",
  "LIMIT 5;"
].join(' ')
```

无论是上面的哪一种，都会让我们感到很不爽。但若使用模板字符串，仿佛打开了新世界的大门~
```js
let sql = `
SELECT * FROM Users
WHERE FirstName='Mike'
LIMIT 5;
`
```

## 5、对象字面量扩展语法

### 方法属性省略 function

这个新特性可以算是比较有用但并不是很显眼的一个。

```js
let obj = {
  // before
  foo: function() {
    return 'foo'
  },
  // after
  bar() {
    return 'bar'
  }
}
```

### 支持 __proto__ 注入

在 ES2015 中，我们可以给一个对象硬生生的赋予其 __proto__，这样它就可以成为这个值所属类的一个实例了。

```js
class Foo {
  constructor() {
    this.pingMsg = 'pong'
  }
  ping() {
    console.log(this.pingMsg)
  }
}
let o = {
  __proto__: new Foo()
}
o.ping() //=> pong
```

## 6、表达式解构

来了来了来了，相当有用的一个特性。

```js
// Matching with object
function search(query) {
  // ...
  // let users = [ ... ]
  // let posts = [ ... ]
  // ...
  return {
    users: users,
    posts: posts
  }
}
let { users, posts } = search('iwillwen')
// Matching with array
let [ x, y ] = [ 1, 2 ]
// missing one
[ x, ,y ] = [ 1, 2, 3 ]
function g({name: x}) {
  console.log(x)
}
g({name: 5})
```

## 7、函数参数表达、传参

这个特性有非常高的使用频率，一个简单的语法糖解决了从前需要一两行代码才能实现的功能。

### 默认参数值

这个特性在类库开发中相当有用，比如实现一些可选参数：

```js
import fs from 'fs'
import readline from 'readline'
import path from 'path'
function readLineInFile(filename, callback = noop, complete = noop) {
  let rl = readline.createInterface({
    input: fs.createReadStream(path.resolve(__dirname, filename))
  })
  rl.on('line', line => {
    //... do something with the current line
    callback(line)
  })
  rl.on('close', complete)
  return rl
}
function noop() { return false }
readLineInFile('big_file.txt', line => {
  // ...
})
```

### 后续参数

我们知道，函数的 `call` 和 `apply` 在使用上的最大差异便是一个在首参数后传入各个参数，一个是在首参数后传入一个包含所有参数的数组。
如果我们在实现某些函数或方法时，也希望实现像 `call` 一样的使用方法，在 ES2015 之前，我们可能需要这样做：
```js
function fetchSomethings() {
  var args = [].slice.apply(arguments)
  // ...
}
function doSomeOthers(name) {
  var args = [].slice.apply(arguments, 1)
  // ...
}
```

而在 ES2015 中，我们可以很简单的使用 … 语法糖来实现：

```js
function fetchSomethings(...args) {
  // ...
}
function doSomeOthers(name, ...args) {
  // ...
}
```

要注意的是，.`..args` 后不可再添加

虽然从语言角度看，`arguments` 和 `...args` 是可以同时使用 ，但有一个特殊情况则不可：arguments 在箭头函数中，
会跟随上下文绑定到上层，所以在不确定上下文绑定结果的情况下，尽可能不要再箭头函数中再使用 arguments，而使用 ...args。

虽然 ECMA 委员会和各类编译器都无强制性要求用 `...args` 代替 `arguments`，但从实践经验看来，`...args` 确实可以在绝大部份场景下可以代替 `arguments` 使用，
除非你有很特殊的场景需要使用到 `arguments.callee` 和 `arguments.caller`。所以我推荐都使用 `...args` 而非 `arguments`。

### 解构传参

在 ES2015 中，... 语法还有另外一个功能：无上下文绑定的 apply。什么意思？看看代码你就知道了。

```js
function sum(...args) {
  return args.map(Number)
    .reduce((a, b) => a + b)
}
console.log(sum(...[1, 2, 3])) //=> 6
```
