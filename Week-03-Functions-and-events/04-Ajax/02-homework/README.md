# Q1 - 总结 Ajax 请求共有多少种回调呢？

1. `onSuccess`
2. `onFailure`
3. `onUninitialized`
4. `onLoading`
5. `onLoaded`
6. `onInteractive`
7. `onComplete`
8. `onException`

# Q2 - 编程实现，创建一个名为 ajax 的 XHR 对象： 

```javascript
let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let ajax = new XMLHttpRequest();

ajax.request = function request() {
  var paraNum = arguments.length;
  var url = arguments[0];
  var callbackFunc = arguments[2];
  var operate;
  if (paraNum === 4) {
    var sendInfo = arguments[3];
    operate = "POST";
    requestPost(operate, url, callbackFunc, sendInfo);
  } else if (paraNum === 3) {
    operate = "GET";
    requestGet(operate, url, callbackFunc);
  }
};

function requestGet(operate, url, callbackFunc) {
  ajax.open(operate, url);
  ajax.send();
  ajax.onload = function () {
    if (ajax.status !== 200) {
      console.log(`Error ${ajax.status}: ${ajax.statusText}`);
    } else {
      callbackFunc(ajax);
    }
  };
  ajax.onerror = function () {
    console.log("Request failed");
  };
}

function requestPost(operate, url, callbackFunc, sendInfo) {  //这个感觉没法测? 没法测我也不知道有没有写对QAQ
  ajax.open(operate, url);
  ajax.send(sendInfo);
  ajax.onload = function () {
    if (ajax.status !== 200) {
      console.log(`Error ${ajax.status}: ${ajax.statusText}`);
    } else {
      callbackFunc(ajax);
    }
  };
  ajax.onerror = function () {
    console.log("Request failed");
  };
}

function myCallback(xhr) { 
  console.log(xhr.responseText); 
}

ajax.request("https://zhuanlan.zhihu.com/api/columns/biancheng/articles", "get", myCallback);
// ajax.request("script.php", "post", myCallback, "first=John&last=Smith");
```

# Q3 - 造成跨域的原因有哪些？

* **浏览器的同源策略**限制了从同一个源加载的文档或脚本如何与来自另一个源的资源进行交互。
  * 注1：如果两个页面的**协议**，**端口**和**主机**都相同，则两个页面具有**相同的源**）
  * 注2：同源策略是一个用于**隔离潜在恶意文件**的重要**安全机制**
* 在浏览器中，`<script>`、`<img>`、`<iframe>`、`<link>`等标签都可以加载跨域资源，而不受同源限制，但浏览器会限制脚本中发起的**跨域请求**。比如，使用`XMLHttpRequest` 对象和Fetch发起 HTTP 请求就必须遵守同源策略。Web 应用程序通过 XMLHttpRequest 对象或Fetch能且只能向同域名的资源发起 HTTP 请求，而不能向任何其它域名发起请求。
* 不允许跨域访问并非是浏览器限制了发起跨站请求，而是**跨站请求可以正常发起**，但是**返回结果被浏览器拦截了**。

# Q4 - 有哪些办法可以解决跨域？

1. 通过`jsonp`跨域
2. 通过修改`document.domain`来跨子域
3. 使用`window.name`来进行跨域
4. 使用HTML5中新引进的`window.postMessage`方法来跨域传送数据
5. 使用代理服务器。使用代理方式跨域更加直接，因为同源限制是浏览器实现的。如果请求不是从浏览器发起的，就不存在跨域问题了。

# Q5 -编程实现：有一个方法，可以避免每次请求重复去写创建 XHR 的整个过程，请求方法现只考虑 `POST` 和 `GET`，要求默认请求方法是 `GET`，如下：

```javascript
var options = {
  url: "https://zhuanlan.zhihu.com/api/columns/biancheng/articles",
  method: "GET",
  headers: {},
  data: "",
  err: function(xhr) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  },
  success: function(xhr) {
    console.log(`Done, got ${JSON.stringify(xhr.responseText)}`);
  },
  fail: function() {
    console.log("Request failed");
  }
};


var request = function(options) {
  let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  let xhr = new XMLHttpRequest();

  xhr.open(options.method, options.url);
  xhr.send();

  xhr.onload = function () {
    if (xhr.status !== 200) {
      options.err(xhr);
    } else {
      options.success(xhr);
    }
  };

  xhr.onerror = function () {
    options.fail();
  };
};

request(options);
```

