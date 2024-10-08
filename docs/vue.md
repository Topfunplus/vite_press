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

关于node_modules的路径导入：

现有以下路径，html.js的路径如下

project/
├── node_modules/
│   └── jsondiffpatch/
│       ├── lib/
│       │   └── formatters/
│       │       └── html.js
├── src/
│   └── app_test.js



package.json如下:

```json
"exports": {
  ".": "./lib/index.js",
  "./with-text-diffs": "./lib/with-text-diffs.js",
  "./formatters/*": "./lib/formatters/*.js",
  "./formatters/styles/*.css": "./lib/formatters/styles/*.css"
}
```



在这里，exports定义了导出的规则，所以直接通过相对路径引入是不合理的：

```js
 import { format } from 'jsondiffpatch/lib/formatters/html'
```

因为定义了导出规则，所以导入要按照导出的规则来：

```js
import {format} from "jsondiffpatch/formatters/html";
```







#### 原型对象

##### 1.prototype

要理解 JavaScript 的 **原型（prototype）**，可以想象原型是一个“共享的工具箱”，这个工具箱里装着每个对象可以用的工具（属性和方法）。当你创建一个对象时，如果你需要用到某个工具（例如一个方法），它首先会在自己的盒子里找找看是否有这个工具；如果没有，它会去“共享工具箱”（即原型）里寻找这个工具。如果它在工具箱里找到了，就直接拿来用。如果整个链条上都找不到这个工具，它才会告诉你“没有这个工具”。

```js
function Person(name) {
  this.name = name; // 每个对象都可以有自己的名字
}

Person.prototype.greet = function() {
  console.log('Hello, my name is ' + this.name);
};

const alice = new Person('Alice');
alice.greet(); // Hello, my name is Alice
```

但是，`alice` 没有 `greet` 方法！所以，JavaScript 会去找这个对象的原型（共享工具箱）里看看有没有 `greet`。幸运的是，在 `Person.prototype`（共享工具箱）里找到了 `greet` 这个方法，所以它能调用 `greet()`

**原型（`Person.prototype`）** 是这个对象的共享工具箱。所有用 `Person` 构造函数创建出来的人（对象），都可以从这个工具箱里拿到工具使用，而不用自己重新定义。

```js
const bob = new Person('Bob');
bob.greet(); // Hello, my name is Bob
```

##### 2.__proto__

每个对象都有一个 `__proto__` 属性，指向它的原型（即共享的工具箱 `Person.prototype`）。你可以把 `__proto__` 想象成一条链接，连接到对象背后的工具箱。我们可以通过这个属性查看对象的原型。

```js
console.log(alice.__proto__ === Person.prototype); // true
console.log(bob.__proto__ === Person.prototype);   // true
```

