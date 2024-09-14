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

这段代码是使用 Vue 3 的 **Composition API** 编写的一个简单的组件实现。它定义了一个名为 `App` 的组件，该组件使用了 `ref` 和 Vue 的模板功能来实现双向数据绑定。下面是对每一部分代码的详细解释：

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">js</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-js">import { ref } from 'vue';
</code></div></div></pre>

* 从 `vue` 中导入 `ref`，`ref` 是 Vue 3 中的一个 API，用来创建响应式的数据。当 `ref` 中存储的数据改变时，依赖它的视图会自动更新。

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">js</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-js">const __sfc__ = {
  __name: 'App',
  setup(__props, { expose: __expose }) {
    __expose();
  
    const msg = ref('Hello World!')

    const __returned__ = { msg, ref }
    Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
    return __returned__;
  }
};
</code></div></div></pre>

* `__sfc__` 是一个组件对象，`__name` 属性表示组件名称为 `'App'`。
* `setup()` 是 Composition API 中用于定义组件逻辑的一个函数。所有逻辑和数据都会在 `setup` 函数中定义，并返回给模板使用。`setup()` 的参数：
* `__props`：表示组件接收到的属性（props）。
* `__expose`：是一个暴露方法的函数，可以让外部访问组件内部的某些逻辑和方法。这里调用了 `__expose()`，但没有实际传递任何暴露的内容。`setup()` 内的逻辑：
* `msg = ref('Hello World!')`：定义了一个响应式数据 `msg`，初始值为 `'Hello World!'`。由于它是 `ref` 类型，`msg` 的值存储在 `ref` 的 `.value` 属性中，Vue 会自动解包它（即在模板中可以直接使用 `msg` 而无需写 `.value`）。
* `__returned__`：这个对象返回了 `msg` 和 `ref`，以供模板使用。`Object.defineProperty()` 用于将一个内部属性 `__isScriptSetup` 标记为不可枚举，这是 Vue 内部机制的一部分。

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">js</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-js">function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (_openBlock(), _createElementBlock(_Fragment, null, [
    _createElementVNode("h1", null, _toDisplayString($setup.msg), 1 /* TEXT */),
    _withDirectives(_createElementVNode("input", {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.msg) = $event))
    }, null, 512 /* NEED_PATCH */), [
      [_vModelText, $setup.msg]
    ])
  ], 64 /* STABLE_FRAGMENT */))
}
</code></div></div></pre>

* `render()` 函数是 Vue 用于渲染组件的函数，由编译器自动生成。它负责将模板中的内容转换为虚拟 DOM 节点。1. **渲染 `<h1>` 元素**

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">js</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-js">_createElementVNode("h1", null, _toDisplayString($setup.msg), 1 /* TEXT */)
   </code></div></div></pre>

* 创建一个 `<h1>` 元素，使用 `msg` 的值来填充文本内容。`_toDisplayString($setup.msg)` 将 `msg` 的内容转换为字符串，并在 `<h1>` 标签内显示。

2. **渲染 `<input>` 元素并绑定双向数据**

   <pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">js</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-js">_withDirectives(_createElementVNode("input", {
     "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.msg) = $event))
   }, null, 512 /* NEED_PATCH */), [
     [_vModelText, $setup.msg]
   ])
   </code></div></div></pre>

   * 创建一个 `<input>` 元素，并绑定了一个 `v-model` 指令。`v-model` 实现了双向数据绑定，它将 `msg` 的值绑定到输入框的 `value`，并且监听输入框的输入事件，将修改后的值同步回 `msg`。
   * `onUpdate:modelValue` 是 Vue 3 中 `v-model` 的事件绑定方式，`$setup.msg = $event` 表示当输入框的值发生变化时，将输入的新值赋给 `msg`。
   * `_vModelText` 是 Vue 用于处理 `v-model` 的指令函数。

<pre class="!overflow-visible"><div class="dark bg-gray-950 contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative"><div class="flex items-center text-token-text-secondary bg-token-main-surface-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9">js</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-main-surface-secondary px-2 font-sans text-xs text-token-text-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>复制代码</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-js">__sfc__.render = render;
__sfc__.__file = "src/App.vue";
export default __sfc__;
</code></div></div></pre>

* `__sfc__.render = render`：将生成的 `render` 函数与 `__sfc__` 组件关联起来。
* `__sfc__.__file = "src/App.vue"`：指定这个组件的文件路径，通常用于调试或开发工具。
* `export default __sfc__`：导出这个组件，使其可以在其他文件中使用。
* 这个组件在页面上渲染了一个包含 `'Hello World!'` 的 `<h1>` 元素和一个 `<input>` 输入框。
* 输入框的内容与 `msg` 双向绑定，用户在输入框中输入的内容会更新 `msg` 的值，而更新后的 `msg` 会自动反映到 `<h1>` 元素中，达到数据和视图同步更新的效果。


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
