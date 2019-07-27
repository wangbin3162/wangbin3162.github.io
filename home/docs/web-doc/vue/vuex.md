# Vuex状态管理

## Vuex 是什么？

[Vuex](https://vuex.vuejs.org/zh-cn/)是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，
并以相应的规则保证状态以一种可预测的方式发生变化。Vuex 也集成到 Vue 的官方调试工具 devtools extension，
提供了诸如零配置的 time-travel 调试、状态快照导入导出等高级调试功能。

## 安装Vuex

```bash
npm install vuex --save
```

## 状态管理包括以下几个部分

### 1.state

单一状态树记录状态

```js
const state = {xxx:0};
export default state;
```  

### 2.getters

获取状态

```js
export const xxx = state => state.xxx;
``` 

### 3.mutations-types

定义修改类型

```js
export const SET_XXX = 'SET_XXX';
``` 

### 4.mutations

更改Vuex的store中的状态的唯一方法是提交 `mutation`

```js
import * as types from './mutations-types';
const mutations = {
  [types.SET_XXX] (state, x) {
    state.xxx = x;
  }
};
export default mutations;
```

### 5.actions

Action 类似于mutation，提交的是mutation集合，而不是直接变更状态。

```js
export const action_1 = function ({commit, state}, {x, index}) {
    commit(types.SET_XXX, x);// 设置x
    commit(types._other, index);// 设置其他的mutation
};
```

### 6.Module

将 store 分割成模块（module）。每个模块拥有自己的 state、mutation、action、getter

```js
const moduleA = {
    state: { ... },
    mutations: { ... },
    actions: { ... },
    getters: { ... }
}
const store = new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
})
store.state.a // -> moduleA 的状态
```   

### 7.index: vuex入口(固定写法)

```js
import Vue from 'vue';
import Vuex from 'docs/web-doc/vue/vuex';
import * as actions from './actions';
import * as getters from './getters';
import state from './state';
import mutations from './mutations';

import createLogger from 'vuex/dist/logger';// vuex调试

Vue.use(Vuex);

// webpack打包的时候会判断是否是调试模式，如果是build后即为production
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  strict: debug,
  plugins: debug ? [createLogger()] : []
});

```

### 8.main.js添加store

```js
import store from './store';
new Vue({
  el: '#app',
  store,//添加store组件
  ...
});
```

## 使用已经创建好的vuex

```js
import { mapGetters, mapActions , mapMutations } from 'docs/web-doc/vue/vuex';
computed: {
  ...mapGetters([
    'xxx'
  ])
},
methods: {
    ...mapMutations({
      setXxx: 'SET_XXX'//设置单一的修改恰面key任意
    }),
  ...mapActions([
    'insertSong'//action.js中的方法名
  ])
}
this.xxx;//调用state里的状态值
this.setXxx(...);//设置一个单一的状态
this.action_1(...);//设置一系列状态修改
```
