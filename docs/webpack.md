# Webpack

## 参考文档

**webpack开发文档 **[Webpack 官方 Loader 文档](https://webpack.docschina.org/loaders/)

**入门文档** https://yk2012.github.io/sgg_webpack5/base/server.html#_1-%E4%B8%8B%E8%BD%BD%E5%8C%85

**vue和react的配置在项目标签中**

## 为什么使用

框架，比如vue，还有react，他都需要一个编译的过程，还有less，sass等样式表，都需要编译成浏览器能够理解的代码才能在浏览器中运行，所以，就需要一些打包工具，打包工具还可以压缩代码，兼容性处理，提示代码性能，常见的打包工具：webpack，vite，next等

## 基本使用

**`Webpack` 是一个静态资源打包工具。**

它会以一个或多个文件作为打包(编译)的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。

输出的文件就是编译好的文件，就可以在浏览器段运行了。

我们将 `Webpack` 输出的文件叫做 `bundle`。

### 模式

webpack有两个模式，一个是开发模式，一个是生产模式：

- 开发模式：仅能编译 JS 中的 `ES Module` 语法
- 生产模式：能编译 JS 中的 `ES Module` 语法，还能压缩 JS 代码

但是上面的，只能进行js的打包和编译

### 尝试使用

首先创建一个空目录，并在idea中打开

然后创建 `main.js`，以及一些其他的js文件

- count.js

```javascript
export default function count(x, y) {
  return x - y;
}
```

- sum.js

```javascript
export default function sum(...args) {
  return args.reduce((p, c) => p + c, 0);
}
```

- main.js

```javascript
import count from "./js/count";
import sum from "./js/sum";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
```

因为使用了es6的导入导出语法，所以无法直接在浏览器中使用

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
    <h1>hello webpack</h1>
    <script src="main.js">

    </script>
</body>
</html>
```

这时候就报错了控制台

所以，需要webpack来编译成可执行的js，提供给浏览器进行使用

### 下载webpack的包

首先初始化一个包描述文件，也就是package.json，执行 `npm init` 然后选择一些参数

```json
{
  "name": "webpackinit",
  "version": "1.0.0",
  "description": "none",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
```

然后下载webpack

```shell
npm install webpack webpack-cli -D
```

运行 要告诉以哪个入口文件开始

```shell
npx webpack ./src/main.js --mode=development
```

执行完毕会有以下输出

```cmd
asset main.js 4.75 KiB [emitted] (name: main)
runtime modules 670 bytes 3 modules
cacheable modules 200 bytes
  ./src/main.js 108 bytes [built] [code generated]
  ./src/count.js 43 bytes [built] [code generated]
  ./src/sum.js 49 bytes [built] [code generated]
webpack 5.90.3 compiled successfully in 120 ms
```

打包后的目录在dist中

然后尝试在html中引入这个打包后的js 看看能不能运行

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
<h1>hello webpack</h1>
<script src="../dist/main.js">

</script>
</body>
</html>
```

但是有一些箭头函数是不会被编译的，并且没有压缩，所以我们使用生产环境进行压缩

```shell
npx webpack ./src/main.js --mode=production 
```

打包后的main.js文件非常小

```js
(()=>{"use strict";console.log(1),console.log(3)})();
```

### 基本配置

五个概念要明确

入口 `entry`：指示 Webpack 从哪个文件开始打包，上一个案例中就是从main.js开始打包的

输出 `output`：指示 Webpack 打包完的文件输出到哪里去，如何命名等

加载器：`loader`

webpack 本身只能处理 js、json 等资源，其他资源需要借助 loader，Webpack 才能解析

插件：`plugins`

扩展 Webpack 的功能

模式：`mode`

主要由两种模式：

- 开发模式：development
- 生产模式：production

#### 配置文件

要位于项目的根目录，并且要指明文件名称为 `webpack.config.js`

然后从模块导出开始

```js
module.exports = {
  
}
```

对于入口和文件输出的配置

```js
module.exports = {
    //入口
    entry: './src/main.js',     //使用相对路径
    //输出
    output: {
        //输出路径
        path: "",                //使用绝对路径
        //文件输出名称
        //[name]表示文件名,[hash]表示文件内容hash，[ext]表示文件扩展名
        // 例如：filename: "[name].[hash].js"
        filename: "main.js"
    }
}
```

因为path要使用绝对路径，我们可以使用一个node的模块叫做path，可以用来处理路径问题

```js
const path = require("path")	//引入node的模块
```

然后使用

```js
path: path.resolve(__dirname,'dist'),  //__dirname表示当前文件，'dist'表示当前文件下的dist文件夹
```

配置加载器module

```js
const path = require("path")

module.exports = {
    //入口
    entry: './src/main.js',     //使用相对路径
    //输出
    output: {
        //输出路径
        path: path.resolve(__dirname, 'dist'),                //使用绝对路径
        //文件输出名称
        //[name]表示文件名,[hash]表示文件内容hash，[ext]表示文件扩展名
        // 例如：filename: "[name].[hash].js"
        filename: ""
    },
    //加载器的配置
    module: {
        rules: [

        ],
    },
    //插件的配置
    plugins: [

    ],
    //模式的配置 就是开发环境还是生产环境
    mode: "development"
}
```

然后运行  webpack会从根目录下找webpack.config.js文件，根据配置来执行打包操作

```shell
npx webpack
```

### 开发模式介绍

开发模式顾名思义就是我们开发代码时使用的模式。

这个模式下我们主要做两件事：

1. `编译代码`，使浏览器能识别运行

开发时我们有样式资源、字体图标、图片资源、html 资源等，webpack 默认都不能处理这些资源，所以我们要加载配置来编译这些资源

   2.`代码质量检查`，树立代码规范

提前检查代码的一些隐患，让代码运行时能更加健壮。

提前检查代码规范和格式，统一团队编码风格，让代码更优雅美观。

## 处理样式资源css

Webpack 本身是不能识别样式资源的，所以我们需要借助 Loader 来帮助 Webpack 解析样式资源

比如，我们创建 `src/css/index.css`

```css
.box {
    width: 100px;
    height: 100px;
    background-color: red;
}
```

然后，在main.js中 `引入`这个样式表，再打包，因为webpack以某个js为入口

```js
import {count} from "./count";
import {sum} from "./sum";
import './css/index.css'	  //引入css样式表


console.log(count());
console.log(sum(1, 2));
```

然后运行

```shell
npx webpack
```

发现报错了

```cmd
   ....
      Field 'browser' doesn't contain a valid alias configuration
      /css/index.css.js doesn't exist
    .json
      Field 'browser' doesn't contain a valid alias configuration
      /css/index.css.json doesn't exist
    .wasm
      Field 'browser' doesn't contain a valid alias configuration
      /css/index.css.wasm doesn't exist
    as directory
      /css/index.css doesn't exist

webpack 5.90.3 compiled with 1 error in 120 ms
```

所以，我们需要加入 `cssloader`，来让webpack可以处理css样式资源

> **webpack开发文档 **[Webpack 官方 Loader 文档](https://webpack.docschina.org/loaders/)

1.处理css样式，需要下载

```shell
npm i css-loader style-loader -D
```

- `css-loader`：负责将 Css 文件编译成 Webpack 能识别的模块
- `style-loader`：会动态创建一个 Style 标签，里面放置 Webpack 中 Css 模块内容

2.下载后，`package.json`文件内容是这样的:

```json
{
  "name": "webpackinit",
  "version": "1.0.0",
  "description": "none",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "css-loader": "^6.10.0",	//引入的loader
    "style-loader": "^3.3.4",
    "webpack": "^5.90.3",
    "webpack-cli": "^5.1.4"
  }
}
```

3.如果需要处理其他的，可以去官方文档找，里面有很多的loader

![](C:\Users\大帅比的电脑\OneDrive\桌面\案例\前端\前端笔记-html+css+js\4-webpack入门\实例\imgs\loader.png)

4.接下来配置 `webpack.config.js`

```js
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [],
  mode: "development",
};
```

5.打包完成

```shell
asset main.js 24.6 KiB [emitted] (name: main)
runtime modules 972 bytes 5 modules
cacheable modules 10 KiB
  modules by path ./node_modules/ 8.15 KiB
    modules by path ./node_modules/style-loader/dist/runtime/*.js 5.84 KiB 6 modules
    modules by path ./node_modules/css-loader/dist/runtime/*.js 2.31 KiB
      ./node_modules/css-loader/dist/runtime/noSourceMaps.js 64 bytes [built] [code generated]
      ./node_modules/css-loader/dist/runtime/api.js 2.25 KiB [built] [code generated]
  modules by path ./src/ 1.86 KiB
    modules by path ./src/*.js 228 bytes
      ./src/main.js 136 bytes [built] [code generated]
      + 2 modules
    modules by path ./src/css/*.css 1.63 KiB
      ./src/css/index.css 1.14 KiB [built] [code generated]
      ./node_modules/css-loader/dist/cjs.js!./src/css/index.css 508 bytes [built] [code generated]
webpack 5.90.3 compiled successfully in 399 ms

```

然后网页中查看，发现动态添加了一个style

![](C:\Users\大帅比的电脑\OneDrive\桌面\案例\前端\前端笔记-html+css+js\4-webpack入门\实例\imgs\css.png)

## 处理less

一样的道理，先创建一个less，然后在main中引入

```js
import './less/index.less' 
```

然后下载lessloader

```shell
npm install less less-loader --save-dev
```

配置

```json
{
    test: /\.less$/i,
    use: [
      // compiles Less to CSS
      'style-loader',
      'css-loader',
      'less-loader',
    ],
  },
```

打包

```js
npx webpack
```

## 处理图片资源

之前处理图片资源通过 `file-loader` 和 `url-loader` 进行处理

现在 Webpack5 已经将两个 Loader 功能内置到 Webpack 里了，我们只需要简单配置即可处理图片资源

配置

```json
{
    test: /\.(png|jpe?g|gif|webp)$/,
    type: "asset",
  },
```

添加图片资源

```js
import '../imgs/loader.png'
```

使用图片

```js
background-image: url(../../imgs/dist.png);
```

然后

```shell
npx webpack
```

#### 优化图片资源

将小于某个大小的图片转化成 data URI 形式（Base64 格式）

```json
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
        //处理图片资源
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024 // 小于10kb的图片会被base64处理
          }
        }
      },
    ],
  },
  plugins: [],
  mode: "development",
};

```

- 优点：减少请求数量
- 缺点：体积变得更大

## 输出目录管理

图片输出到imgs，js输出到js，。。etc

### **修改输出**

尝试修改配置文件，将所有输出到 `dist/js`目录下 path下的是所有的文件都输出会到的

```json
output: {
        //输出路径
        path: path.resolve(__dirname, 'dist/js'),                //使用绝对路径
        //文件输出名称
        //[name]表示文件名,[hash]表示文件内容hash，[ext]表示文件扩展名
        // 例如：filename: "[name].[hash].js"
        filename: "main.js"
    },
```

这时候会发现都输出到dist的js下了

![](C:\Users\大帅比的电脑\OneDrive\桌面\案例\前端\前端笔记-html+css+js\4-webpack入门\实例\imgs\dist2.png)

如果希望js打包到js目录下

```json
output: {
    //输出路径
    path: path.resolve(__dirname, 'dist'),                //使用绝对路径
    filename: "js/main.js"
},
```

图片修改到imgs下

```json
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
          //和图片的base64转在一个对象中
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
    ],
  },
  plugins: [],
  mode: "development",
};

```

## 打包自动删除原包

```json
output: {
    //输出路径
    path: path.resolve(__dirname, 'dist'),                //使用绝对路径
    //文件输出名称
    //[name]表示文件名,[hash]表示文件内容hash，[ext]表示文件扩展名
    // 例如：filename: "[name].[hash].js"
    filename: "static/js/main.js",
    clean: true
},
```

## 处理字体图标资源

#### 下载字体图标文件

#### 添加图标资源

引入

```js
import { add } from "./math";
import count from "./js/count";
import sum from "./js/sum";
// 引入资源，Webpack才会对其打包
import "./css/iconfont.css";
import "./css/index.css";
import "./less/index.less";
import "./sass/index.sass";
import "./sass/index.scss";
import "./styl/index.styl";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));

```

使用字体图标

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>webpack5</title>
  </head>
  <body>
    <h1>Hello Webpack5</h1>
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
    <!-- 使用字体图标 -->
    <i class="iconfont icon-arrow-down"></i>
    <i class="iconfont icon-ashbin"></i>
    <i class="iconfont icon-browse"></i>
    <script src="../dist/static/js/main.js"></script>
  </body>
</html>

```

配置

```json
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true, // 自动将上次打包目录资源清空
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
        //字体资源
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
    ],
  },
  plugins: [],
  mode: "development",
};

```

## 处理音视频

```json
const path = require("path");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true, // 自动将上次打包目录资源清空
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff2?|map4|map3|avi)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
    ],
  },
  plugins: [],
  mode: "development",
};

```

## 启动服务器

node版本用20的

## 输出html

https://yk2012.github.io/sgg_webpack5/base/html.html#_1-%E4%B8%8B%E8%BD%BD%E5%8C%85

注意 html放在根目录

# 生产模式和配置运行脚本

https://yk2012.github.io/sgg_webpack5/base/production.html#%E7%94%9F%E4%BA%A7%E6%A8%A1%E5%BC%8F%E5%87%86%E5%A4%87

注意文件的目录 如果是根目录，就去掉一个点

```javascript
const path = require("path");
const ESLintWebpackPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname, "../dist"), // 生产模式需要输出
    filename: "static/js/main.js", // 将 js 文件输出到 static/js 目录中
    clean: true,
  },
  module: {
    rules: [
      {
        // 用来匹配 .css 结尾的文件
        test: /\.css$/,
        // use 数组里面 Loader 执行顺序是从右到左
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.s[ac]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.styl$/,
        use: ["style-loader", "css-loader", "stylus-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        type: "asset",
        parser: {
          dataUrlCondition: {
            maxSize: 10 * 1024, // 小于10kb的图片会被base64处理
          },
        },
        generator: {
          // 将图片文件输出到 static/imgs 目录中
          // 将图片文件命名 [hash:8][ext][query]
          // [hash:8]: hash值取8位
          // [ext]: 使用之前的文件扩展名
          // [query]: 添加之前的query参数
          filename: "static/imgs/[hash:8][ext][query]",
        },
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: "asset/resource",
        generator: {
          filename: "static/media/[hash:8][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除node_modules代码不编译
        loader: "babel-loader",
      },
    ],
  },
  plugins: [
    new ESLintWebpackPlugin({
      // 指定检查文件的根目录
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      // 以 public/index.html 为模板创建文件
      // 新的html文件有两个特点：1. 内容和源文件一致 2. 自动引入打包生成的js等资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  // devServer: {
  //   host: "localhost", // 启动服务器域名
  //   port: "3000", // 启动服务器端口号
  //   open: true, // 是否自动打开浏览器
  // },
  mode: "production",
};
```

然后可以在package.json中配置一个运行脚本 要注意运行脚本的目录

```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npm run dev",
    "dev": "npx webpack serve --config ./webpack.config.js",
    "build": "npx webpack --config ./webpack.prod.js"
  },
```

# 高级

[介绍 | 尚硅谷 Web 前端之 Webpack5 教程 (yk2012.github.io)](https://yk2012.github.io/sgg_webpack5/senior/)
