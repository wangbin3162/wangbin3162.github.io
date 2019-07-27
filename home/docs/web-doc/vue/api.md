# API简述

常用api，详细请参阅官方[API](https://cn.vuejs.org/v2/api/)

## 全局api
```js
Vue.nextTick(function () { });// 在下次 DOM 更新循环结束之后执行延迟回调
Vue.set( target, key, value );// 用于避开 Vue 不能检测属性被添加的限制。
// 注:先检测对象属性是否存在,如不存在则调用此方法给target添加一个key值,返回设置后的值
Vue.filter('my-filter', function (value) {
  // 返回处理后的值 
}); // 注册或获取全局的过滤器
Vue.component( id, [definition] );// 注册或获取全局组件
Vue.use( plugin ); //安装使用vuejs插件,如Vue.use(resource);  
```    
  
## 函数可选项 

组建中的js export default

```js
// 1.用于接收来自父组件的数据,允许配置高级选项，如类型检测,设置默认值等
props: {       
    age: {
        type: Number,
        default: 0,
        required: true
    }
 }
 // *注:如props中属性采用驼峰命名法如selectFoods 则传递参数时需要使用:select-foods
 
// 2.计算属性将被混入到 Vue 实例中
computed: {   
    aDouble: function () {// 仅读取
        return this.a * 2
    },
    aPlus: { // 读取和设置
        get: function () {
            return this.a + 1
        },
        set: function (value) {
            this.a = value - 1
        }
    }
 }
 // *注:计算属性不能使用箭头函数定义,箭头函数绑定了父级作用域的上下文不会指向当前的vue示例

// 3.方法属性用于添加自定义方法或监听相应事件
methods: {     
    _plus(){  //自定义方法 _表示此方法只能被当前组件使用,不带_则为可与其他组件通信的方法
        this.a++
    },
    plus(args,event){//用于相应事件
        if (!event._constructed) { // 如果是浏览器模式则阻止
            return;
        }
    }
 }
 // *注:如监听了点击事件@Click="plus"或@Click="plus($event)"则可以传递event对象,event.target可获取当前点击的dom对象

// 4.用于注册组件 需要import先导入
components: {    
   VHeader
}
// 5.用于观察对象的每一个属性,如过变化则执行对应的回调函数
watch: {   
    seller(){
          //回调函数
    }
 }
 // *注:不能使用箭头函数定义

// 6.Vue 实例的数据对象
data (){
    return {
        goods: []
    };
 }
 // *注:组件的定义只接受 function 即  data是特殊的数据选项
```

## 钩子函数

- `created` -> 在实例创建完成后被立即调用,挂载阶段还没开始，`$el` 属性目前不可见
- `beforeMount` -> 在挂载开始之前被调用：相关的 `render` 函数首次被调用。
- `mounted` -> el 被新创建的 `vm.$el` 替换，并挂载到实例上去之后调用该钩子

:::tip 注意 
`mounted`不会承诺所有的子组件也都一起被挂载。如果你希望等到整个视图都渲染完毕，可以用 `vm.$nextTick`
:::


## 实例方法事件

```js
 // 触发当前实例上的事件,附加参数都会回传
this.$emit('cart-add', event.target);  
//监听当前实例上的自定义事件,即methods中定义的test方法
vm.$on('test', function (msg) {  });     
```

:::tip 注意 
 - 此事件监听当前实例上的自定义事件,只能被当前实例的$emit触发
 - 如需要监听子组件触发的事件则需要在组件中使用 `@cart-add="_drop"` 来监听,@后为事件,不能使用大写
 - 通常父组件接收子组件A的事件,此时使用ref注册引用信息,通过`$refs`.组件来执行子组件中B的回调函数
:::
