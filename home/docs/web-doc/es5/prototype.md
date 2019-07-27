# 二、js原型

![prototype](https://camo.githubusercontent.com/71cab2efcf6fb8401a2f0ef49443dd94bffc1373/68747470733a2f2f757365722d676f6c642d63646e2e786974752e696f2f323031382f332f31332f313632316538613962636230383732643f773d34383826683d35393026663d706e6726733d313531373232)

每个函数都有 `prototype` 属性，除了 `Function.prototype.bind()`，该属性指向原型。

每个对象都有 `__proto__` 属性，指向了创建该对象的构造函数的原型。其实这个属性指向了 `[[prototype]]`，但是 `[[prototype]]` 是内部属性，我们并不能访问到，所以使用 `_proto_` 来访问。

对象可以通过 `__proto__` 来寻找不属于该对象的属性，`__proto__` 将对象连接起来组成了原型链。

如果你想更进一步的了解原型，可以参考这个帖子 [深度解析原型中的各个难点](https://github.com/KieSun/Blog/issues/2)。

## 构造函数

```js
function Foo(name,age){
    this.name = name;
    this.age = age;
    //return this;默认有这一行
}
var f = new Foo('zhangshan',20);
//1.创建了一个新对象
//2.将this指向这个新对象
//3.执行构造函数里面的代码
//4.返回新对象（this）

var a={} //其实是var a = new Object()语法糖
var a=[]// 其实是var a = new Array()语法糖
function Foo(){}// 其实是var Foo = new Function()

// 使用instanceof判断一个函数是否是一个变量的构造函数
// f instanceof Foo  ==> true
// f.__proto__一层层往上寻找能否查询到Foo.prototype
// f instanceof Object  ==> true
```


## 原型的规则和示例

```js
// 1.所有的引用类型(数组,对象,函数),都具有对象特性,即可以自由扩展属性(null除外)  
    var obj={};obj.a=100;
    var arr={};arr.a=100;
    function fn(){} 
    fn.a=100;
// 2.所有的引用类型(数组,对象,函数),都有一个__proto__(隐式原型)属性,属性值是一个普通的对象
    console.log(obj.__proto__);
    console.log(arr.__proto__);
    console.log(fn.__proto__);
// 3.所有的函数,都有一个prototype属性(显式原型),属性值是一个普通的对象
    console.log(fn.prototype);
// 4.所有的引用类型(数组,对象,函数),__proto__属性指向它的构造函数的prototype属性值
    console.log(obj.__proto__===Object.prototype);
// 5.当视图得到一个对象的某个属性的时候,如果这个对象本身没有这个属性,那么回去它的__proto__(即它的构造函数prototype)中去找
    function Foo(name,age){
        this.name = name;
    }
    Foo.prototype.alertName = function(){
        alert(this.name);
    }
    //创建实例
    var f = new Foo('zhangsan');
    f.printName = function(){
        console.log(this.name);
    }
    f.printName();//可以获取到printName这个属性直接获取
    f.alertName();//获取不到alertName属性这是去找他的构造函数的prototype中去找
```

## 原型链

```js
var f = new Foo('zhangsan');
f.toString();
```
::: tip 分析:

1.首先去自身的属性中去找`toString`方法,没有则去隐式原型`__proto__`去找

2.`__proto__`指向其构造函数的显式原型`Foo.prototype`,如没找到再去`Foo.prototype`的隐式原型去找

3.`Foo.prototype`的`__proto__`又指向`Object.prototype`显式原型,然后再寻找其隐式原型`__proto__`即查询到`toString`方法,这就是原型链
:::

## 总结
`Object` 是所有对象的爸爸，所有对象都可以通过 `__proto__` 找到它
`Function` 是所有函数的爸爸，所有函数都可以通过 `__proto__` 找到它
`Function.prototype` 和 `Object.prototype` 是两个特殊的对象，他们由引擎来创建
除了以上两个特殊对象，其他对象都是通过构造器 `new` 出来的
函数的 `prototype` 是一个对象，也就是原型
对象的 `__proto__` 指向原型， `__proto__` 将对象和原型连接起来组成了原型链

