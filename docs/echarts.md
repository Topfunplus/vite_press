# Echarts的使用

主要围绕封装和基本API的使用开始

## Echarts的封装实现

Echarts开发的时候，一定要把option搞明白是什么东西，option是echarts的核心，盒子是装echarts的容器，setOption是用来渲染表格并且配置的.



### 下载echarts

```shell
npm install echarts
```

### 使用echarts

所有步骤都可以总结为 `获取dom`，`通过echarts对象的init()获取一个echarts实例对象`，`设置option`

它对应的一个option如下：

```js
option = {
  //横轴
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  //纵轴 一般是自动生成
  yAxis: {
    type: 'value'
  },
  //系列
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
};
```

#### 简单使用

我们将echarts的组件封装为方法，然后在`mounted`中直接调用方法就可以完成渲染操作



1.导入echart对象

```shell
import * as echarts from 'echarts'
```

2.声明一个盒子用来渲染echarts

```html
<div id="chart1" style="width: 600px; height: 600px; border: 1px solid rebeccapurple"></div>
```

3.封装一个方法 用来渲染表格

```js
//初始化折线图方法 我们可以在这个方法中去定义横轴数组和纵轴数组以及系列数组
function initChartLine(xAxisData, yAxisData, seriesData) {
    //首先声明一个option对象 用来配置echarts
    const option = {
      //横轴
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      //纵轴 一般是自动生成
      yAxis: {
        type: 'value',
      },
      //系列
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'line',
        },
      ],
    }
    //然后 获取dom
    const dom = document.getElementById('chart1')
    //初始化echarts对象
    const echart_dom = echarts.init(dom)
    //设置配置
    echart_dom.setOption(option)
},
```

4.随意调用方法 可以完成渲染

```js
mounted(){
  //调用渲染方法
  this.initChartLine()
},
```





### 封装echarts组件

我们可以把echarts的渲染过程封装到一个独立的组件中，这样以后，`created`中接收数据，`mounted`去获取dom，并且调用方法去渲染图表

- option我们放在了data()中
- 在`created`中通过`this.option.xAxis.data`来赋值
- `methods`中去声明`initChart(dom)`方法 接收一个dom，渲染echarts

```vue
<template>
  <div>
    <div id="chart2" style="width: 500px; height: 500px"></div>
  </div>
</template>

<script>
  import * as echarts from 'echarts'
  export default {
    name: 'FrontVueMyChart',

    data() {
      return {
        //echarts的配置信息
        option: {
          xAxis: {
            type: 'category',
            data: [],
          },
          yAxis: {
            type: 'value',
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: 'line',
            },
            {
              data: [155, 250, 214, 238, 185, 127, 220],
              type: 'line',
            },
            {
              data: [168, 152, 32, 25, 18, 2, 169],
              type: 'line',
            },
          ],
        },
      }
    },

    mounted() {
      //dom这时候已经挂载好了，我们获取dom
      const dom = document.getElementById('chart2')
      this.initChart(dom)
    },
    created() {
      //模拟获取数据 渲染到图表的option
      this.option.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    methods: {
      //传入一个dom
      initChart(dom) {
        //生成一个echartInstance
        const echartInstance = echarts.init(dom)
        echartInstance.setOption(this.option)
      },
    },
  }
</script>
```



### echarts的技巧

可以现在官网进行定制，因为官网有专属的代码提示，然后复制option到本地项目，最后封装组件

官网定制，以折线图为例

> https://echarts.apache.org/examples/zh/editor.html?c=line-simple





### echarts的各个属性

#### series

对于下面的图表：

它对应的option，可以看到，他的系列有两个对象，里面分别有两个属性 `data`和`type`

```js
option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  //这里有两个系列
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    },
    {
      data: [155, 250, 214, 238, 185, 127, 220],
      type: 'line'
    }
  ]
};
```

如果对系列进行添加，对应的会多出一条线

```js
series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    },
    {
      data: [155, 250, 214, 238, 185, 127, 220],
      type: 'line'
    },
    {
      data: [168, 152, 32, 25, 18, 2, 169],
      type: 'line'
    }
  ]
```



## EchartsAPI

**Echarts的官网API分为四个对象 `echarts`，`echartsInstance`，`action`，`events`**



### 1.echarts对象

**全局 echarts 对象，在 script 标签引入 `echarts.js` 文件后获得，或者在 AMD 环境中通过 `require('echarts')` 获得，作用就是为了来获取`echartsInstance`对象的**

```js
import * as echarts from 'echarts'
```



#### 1.init()方法

创建一个 ECharts 实例，返回 [echartsInstance](https://echarts.apache.org/zh/api.html#echartsInstance)，不能在单个容器上初始化多个 ECharts 实例。

#### 2.其他方法

https://echarts.apache.org/zh/api.html#echarts

从左边选echarts对象即可



### 2.echartsInstance对象

通过 [echarts.init](https://echarts.apache.org/zh/api.html#echarts.init) 创建的实例，主要就是通过这个对象来对图表进行渲染操作

```js
const echartsInstance = echarts.init()
```



#### 1.setOption()方法

设置图表实例的配置项以及数据，万能接口，所有参数和数据的修改都可以通过 `setOption` 完成例如下面用法：

```js
//配置信息
option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  //这里有两个系列
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    },
    {
      data: [155, 250, 214, 238, 185, 127, 220],
      type: 'line'
    }
  ]
};
//在这里对于配置进行设置
echartsInstance.setOption(option)
```

#### 2.其他的方法

`getWitgh() && getHeight()`

```js
console.log(echartsInstance.getHeight(), echartsInstance.getWidth())
```

`on()`

```js
//给系列添加点击事件
echartsInstance.on('click', 'series', () => {
  console.log(1)
})
```

`showLoading() && hideLoading()`

```js
//设置配置
echartsInstance.showLoading()  //展示loading效果
echartsInstance.setOption(option)
setTimeout(() => {
  echartsInstance.hideLoading() //销毁loading效果
}, 1000)
```



参考https://echarts.apache.org/zh/api.html#echartsInstance





### 3.option配置项对象

配置对象是option，是最大的对象，下面有很多底层的对象



#### -option

##### 1.title

下面是一个简单的使用，这时候，点击标题后，回去跳转到`http.baidu.com`，详情见文档

> https://echarts.apache.org/zh/option.html#title.link

```js
title:{
    text:'testchart',
    link:'http://baidu.com',
    textStyle:{
      color:'#5470c6',
      fontWeight:'bolder',
      fontSize:'30px',
      textBorderColor:'#fac858',
      textBorderWidth:2
    }
},
```

##### 2.legend

##### 3.grid

##### 4.xAxis

##### 5.yAxis

##### 6.polar

##### 7.radiusAxis

##### 8.angleAxis

##### 9.radar

##### 10.dataZoom

##### 11.visualMap

##### 12.series

##### 更多

##### https://echarts.apache.org/zh/option.html#title




