# XHR 和 Fetch 的区别


当谈论Web开发中的数据请求时，XHR（XMLHttpRequest）和Fetch API是两个常用的工具。它们都是用于从服务器获取数据的技术，但在实现和功能上存在一些区别。下面将详细讨论XHR和Fetch的区别。

### XMLHttpRequest（XHR）

#### 1. 发起请求

XHR是一个用于发起HTTP请求的JavaScript对象。通过实例化一个XHR对象，可以设置请求的各种参数，如请求类型（GET、POST等）、URL、是否异步等。

```javascript
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://example.com/data', true);
xhr.send();
```

#### 2. 异步处理

XHR默认是异步的，可以通过设置第三个参数为 `false`来将其变为同步。异步请求通过事件处理函数来处理响应。

```javascript
xhr.onreadystatechange = function() {
   
  if (xhr.readyState == 4 && xhr.status == 200) {
   
    console.log(xhr.responseText);
  }
};
```

#### 3. 请求和响应类型

XHR支持多种请求和响应类型，包括文本、JSON、XML等。可以通过设置 `xhr.responseType`来指定希望得到的响应类型。

```javascript
xhr.responseType = 'json';
```

### Fetch API

#### 1. 简化的API

Fetch是一种更现代的API，提供了一种更简单和灵活的方式来进行网络请求。

```javascript
fetch('https://example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

#### 2. 返回Promise

Fetch返回一个Promise，使得代码更加清晰和易于处理。它采用了链式调用，可以方便地处理请求和响应。

#### 3. 请求和响应对象

Fetch引入了 `Request`和 `Response`对象，可以更方便地构建请求和处理响应。

```javascript
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

var myInit = {
   
  method: 'POST',
  headers: myHeaders,
  body: JSON.stringify({
    key: 'value' }),
  mode: 'cors',
  cache: 'default'
};

fetch('https://example.com/data', myInit)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
```

### 总结

XHR和Fetch都是用于进行数据请求的工具，但Fetch提供了更简单、灵活和现代的API。Fetch返回Promise，采用了更直观的链式调用，同时引入了 `Request`和 `Response`对象，使得请求和响应的处理更加清晰。XHR仍然是许多项目中的标准，但Fetch逐渐成为首选工具，特别是在现代Web开发中。在选择使用其中之一时，开发者应该根据项目需求和个人偏好做出明智的选择。
