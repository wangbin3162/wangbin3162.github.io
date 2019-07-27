# 三、作用域和闭包

## 执行上下文

```js
// 示例代码:
    console.log(a);//undefined
    var a=100;
    fn('zhangsan');// zhangsan 20
    function fn(name){
        age=20;
        console.log(name,age);
        var age;
    }
// 解释:
// 范围 | 一段<script>标签或者一个函数
// 全局 | 变量定义,函数声明
// 函数 | 变量定义,函数声明,this,arguments  
```

在上述条件下会将变量定义,函数声明提前拿出来放到最前面,
这时如上的示例代码中a和fn函数声明会提前放到最上面,
但在打印时a并没有赋值所以是undefined,在函数
中var age仍然是会提到fn这个执行上下文的最上面,
所以打印的a已经赋值过了

## this指向

::: danger 注意
`this`要在执行时才能确认,定义时无法确认

使用`bind`的时候必须要使用函数表达式
:::

```js
// 示例代码:
    var a = {
        name:'A',
        fn:function(){
            console.lo(this.name);
        }
    }
    a.fn();//this===a
    a.fn.call({name:'B'});//this==={name:'B'}
    var fn1 = a.fn;
    fn1();//this===window
// 分析:
// 1.作为构造函数执行
// 2.作为对象属性执行
// 3.作为普通函数执行
// 4.call apply bind
    function fn1(name){
        alert(name);
        console.log(this);
    }
    fn1.call({x:100},'zhangsan');//call第一个参数就是this
    // 执行后弹出'zhangsan' 打印{x:100}
    var fn2 = function (name){
        alert(name);
        console.log(this);
    }.bind({y:200})
    fn2('zhangsan');
    // 执行后弹出'zhangsan' 打印{y:200}
```
## 作用域

es5没有块级作用域

```js
// 1.没有块级作用域
    if(true){
        var name = 'zhangsan';
    }
    console.log(name);

// 2.有函数和全局作用域
    var a = 100;
    function fn(){
        var a = 200;
        console.log('fn',a);
    }
    console.log('global',a);
    fn();

// 3.自由变量
    var a = 100;
    function fn(){
        var b = 200;
        console.log(a);//当前作用域没有定义的变量叫做自由变量
        console.log(b);
    }
// 注:这里打印a这个自由变量,则会去它的父级作用域去查询a,所谓的父级作用域就是在函数定义的时候的作用域

// 4.作用域链
    var a = 100;
    function F1(){
        var b = 200;
        function F2(){
            var c = 300;
            console.log(a);//a是自由变量,先去父级F1中找a,没有再去F1的父级作用域找
            console.log(b);//b是自由变量,先去父级F1中找b,找到后打印
            console.log(c);
        }
        F2();
    }
    F1();
// 注:F2的父级作用域是F1,F1的父级作用域是全局,这就是作用域链
```

对于作用域链，可以把它理解成包含自身变量对象和上级变量对象的列表，通过 `[[Scope]]` 属性查找上级变量

接下来让我们看一个老生常谈的例子，`var`

```js
b() // call b
console.log(a) // undefined

var a = 'Hello world'

function b() {
	console.log('call b')
}
```

想必以上的输出大家肯定都已经明白了，这是因为函数和变量提升的原因。通常提升的解释是说将声明的代码移动到了顶部，这其实没有什么错误，便于大家理解。但是更准确的解释应该是：在生成执行上下文时，会有两个阶段。第一个阶段是创建的阶段（具体步骤是创建 VO），JS 解释器会找出需要提升的变量和函数，并且给他们提前在内存中开辟好空间，函数的话会将整个函数存入内存中，变量只声明并且赋值为 undefined，所以在第二个阶段，也就是代码执行阶段，我们可以直接提前使用。

在提升的过程中，相同的函数会覆盖上一个函数，并且函数优先于变量提升

```js
b() // call b second

function b() {
	console.log('call b fist')
}
function b() {
	console.log('call b second')
}
var b = 'Hello world'
```

`var` 会产生很多错误，所以在 ES6中引入了 `let`。`let` 不能在声明前使用，但是这并不是常说的 `let` 不会提升，`let` 提升了声明但没有赋值，因为临时死区导致了并不能在声明前使用。

对于非匿名的立即执行函数需要注意以下一点

```js
var foo = 1
(function foo() {
    foo = 10
    console.log(foo)
}()) // -> ƒ foo() { foo = 10 ; console.log(foo) }
```

因为当 JS 解释器在遇到非匿名的立即执行函数时，会创建一个辅助的特定对象，然后将函数名称作为这个对象的属性，因此函数内部才可以访问到 `foo`，但是这个值又是只读的，所以对它的赋值并不生效，所以打印的结果还是这个函数，并且外部的值也没有发生更改。

 ```js
specialObject = {};
  
Scope = specialObject + Scope;
  
foo = new FunctionExpression;
foo.[[Scope]] = Scope;
specialObject.foo = foo; // {DontDelete}, {ReadOnly}
  
delete Scope[0]; // remove specialObject from the front of scope chain
```


## 闭包

闭包的定义很简单：函数 A 返回了一个函数 B，并且函数 B 中使用了函数 A 的变量，函数 B 就被称为闭包。

```js
function A() {
  let a = 1
  function B() {
      console.log(a)
  }
  return B
}
```

你是否会疑惑，为什么函数 A 已经弹出调用栈了，为什么函数 B 还能引用到函数 A 中的变量。因为函数 A 中的变量这时候是存储在堆上的。现在的 JS 引擎可以通过逃逸分析辨别出哪些变量需要存储在堆上，哪些需要存储在栈上。

经典面试题，循环中使用闭包解决 `var` 定义函数的问题

```Js
for ( var i=1; i<=5; i++) {
	setTimeout( function timer() {
		console.log( i );
	}, i*1000 );
}
```

首先因为 `setTimeout` 是个异步函数，所有会先把循环全部执行完毕，这时候 `i` 就是 6 了，所以会输出一堆 6。

解决办法两种，第一种使用闭包

```js
for (var i = 1; i <= 5; i++) {
  (function(j) {
    setTimeout(function timer() {
      console.log(j);
    }, j * 1000);
  })(i);
}
```

第二种就是使用 `setTimeout `  的第三个参数

```js
for ( var i=1; i<=5; i++) {
	setTimeout( function timer(j) {
		console.log( j );
	}, i*1000, i);
}
```

第三种就是使用 `let` 定义  `i` 了

```js
for ( let i=1; i<=5; i++) {
	setTimeout( function timer() {
		console.log( i );
	}, i*1000 );
}
```

因为对于 `let` 来说，他会创建一个块级作用域，相当于

```js
{ // 形成块级作用域
  let i = 0
  {
    let ii = i
    setTimeout( function timer() {
        console.log( ii );
    }, i*1000 );
  }
  i++
  {
    let ii = i
  }
  i++
  {
    let ii = i
  }
  ...
}
```

```js
//1.函数作为返回值
    function F1(){
        var a = 100;
        return function(){
            console.log(a);//回去父级作用域找a,所以打印100
        }
    }
    var f1 = F1();
    var a = 200;
    f1();//100
//2.函数作为参数传递
    function F1(){
        var a = 100;
        return function(){
            console.log(a);//回去父级作用域找a,所以打印100
        }
    }
    function F2(fn){
        var a = 200;
        fn();
    }
    var f1 = F1();
    F2(f1);//100
// 使用闭包打印标签的索引
for (var i = 0; i<10;i++){
    (function(i){
        alert(i)
    })(i)
    //将i作为参数执行内层的函数作用域
}

```

::: tip  闭包的应用
封装变量,收敛权限
:::