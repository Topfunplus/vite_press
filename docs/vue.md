## Vue2响应式原理

#### 1.Vue对象

Vue对象是如何作用于HTML元素的?

（1）可以使用 `new Vue()` 来创建一个 Vue 实例，传入一个配置对象来定义 Vue 应用的行为

```js
var vm = new Vue({
  el: '#app', // Vue实例控制的DOM元素
  data: {
    message: 'Hello Vue!' // 响应式的数据
  },
  methods: {
    greet: function() {
      console.log(this.message);
    }
  }
});

```

Vue 2 使用 `Object.defineProperty()` 来拦截对象的属性读写操作。在对象初始化时，Vue 会遍历对象的每个属性，并通过 `getter` 和 `setter` 方法对它们进行劫持。

#### 2.单文件组件

如下面代码

```js
<script setup>
import { ref } from 'vue'

const msg = ref('Hello World!')
</script>

<template>
  <h1>{{ msg }}</h1>
  <input v-model="msg" />
</template>

```

他被编译后，其实是导出了一个对象

```js
/* Analyzed bindings: {
  "ref": "setup-const",
  "msg": "setup-ref"
} */
import { ref } from 'vue'


const __sfc__ = {
  __name: 'App',
  setup(__props, { expose: __expose }) {
  __expose();

const msg = ref('Hello World!')

const __returned__ = { msg, ref }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

};
import { toDisplayString as _toDisplayString, createElementVNode as _createElementVNode, vModelText as _vModelText, withDirectives as _withDirectives, Fragment as _Fragment, openBlock as _openBlock, createElementBlock as _createElementBlock } from "vue"
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("h1", null, _toDisplayString($setup.msg), 1 /* TEXT */),
    _withDirectives(_createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.msg) = $event))
    }, null, 512 /* NEED_PATCH */), [
      [_vModelText, $setup.msg]
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
__sfc__.render = render
__sfc__.__file = "src/App.vue"
export default __sfc__
```


#### 3.Vue.component

使用Vue.component来注册一个组件并且给一个组件名

```js
Vue.component('my-component-name', { /* ... */ })
```

例如以下代码:

```js
Vue.component('MyComponentName', {
  template: '<div>这是一个全局组件</div>',
  data() {
    return {
      message: 'Hello from MyComponentName'
    };
  },
  methods: {
    someMethod() {
      console.log('This is a method in MyComponentName');
    }
  }
});

```

注册上面的组件后就可以直接使用了

```vue
<div id="app">
  <my-component-name></my-component-name>
</div>

<script>
  new Vue({
    el: '#app'
  });
</script>
```







# 开发经验

1.响应式数据赋值Object.assgin()

```
使用 Object.assign() 来赋值不会导致失去响应式，但有一些细节需要注意。

在 Vue 2 中，响应式系统是基于数据对象的属性进行追踪的。当你使用 Object.assign() 给已有的对象（如 this.currentInfo）赋值时，Vue 会检测到这些属性的改变，从而触发响应式更新。所以在这种情况下，Object.assign() 不会导致失去响应式。

但是，如果你使用 Object.assign() 给 this.currentInfo 添加新的属性（即之前未在 data 或 currentInfo 中声明过的属性），那么这些新添加的属性是非响应式的。Vue 2 的响应式系统只能追踪到组件初始化时已经存在的属性。为了解决这个问题，可以使用 this.$set() 手动添加新的属性。

在你给出的例子中，this.currentInfo 中的属性（如 relationName, id, relationTel 等）应该已经在 data 中定义过，所以直接使用 Object.assign() 是不会失去响应式的。
```

例如以下代码减轻了this:

```js
jumpBankNo(row) {
      this.currentInfo = Object.assign(this.currentInfo, {
        relationName: row.relationName,
        id: row.id,
        relationTel: row.relationTel,
        address: row.address,
        surplusMoney: row.surplusMoney,
        salesman: row.salesman,
        leader: row.leader,
        leaderTel: row.leaderTel,
        region: row.region,
        salesManager: row.salesManager,
        province: row.province,
        city: row.city,
        county: row.county,
        comments: row.comments,
        companyName: row.companyName
      });
      //查询已绑定的银行卡信息
      listBankAccount({companyId: row.id, acountsType: '客户'})
        .then(res => {
          this.singleInfo = res.rows
        })
      listBankAccount({acountsType: '客户默认', companyId: row.id})
        .then(res => {
          if (res.rows.length > 0) {
            this.defaultBankCardInfo = res.rows[0]
          } else {
            this.defaultBankCardInfo.not = true
          }
          setTimeout(() => {
            this.dialogFormVisible = true
          }, 20)
        })
    },
```

## JS

### 1. 使用双感叹号 (`!!`) 和逻辑运算符

你可以使用 `!item` 来检查一个值是否是 `null`、`undefined`、`false`、`0`、`NaN` 或空字符串，或者通过 `||` 来指定默认值：

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">if (!item) {
    // item 为 null、undefined、空字符串、0 或 NaN 时都会执行
}
</code></div></div></pre>

### 2. 使用 `== null` 检查 `null` 和 `undefined`

`item == null` 会同时检查 `item` 是否为 `null` 或 `undefined`，从而省略 `item === null || item === undefined` 的写法：

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">if (item == null || item === '') {
    // 处理 item 为 null、undefined 或空字符串的情况
}
</code></div></div></pre>

### 3. 使用 ES6+ 的 `??` 运算符

在 ES6+ 中，你可以使用空值合并运算符 `??`，用于处理 `null` 和 `undefined`：

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">let value = item ?? 'default value'; // 当 item 为 null 或 undefined 时，value 为 'default value'
</code></div></div></pre>

### 4. 自定义一个检查函数

你可以封装一个函数来简化这个检查过程：

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">javascript</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-javascript">function isEmpty(item) {
    return item == null || item === '';
}

if (isEmpty(item)) {
    // 处理 item 为空的情况
}</code></div></div></pre>
