# Q1 - 总结 Ajax 请求共有多少种回调呢？

1. `onSuccess`
2. `onFailure`
3. `onUninitialized`
4. `onLoading`
5. `onLoaded`
6. `onInteractive`
7. `onComplete`
8. `onException`

# Q2 - 编程实现，创建一个名为 ajax 的 XHR 对象，其示例用法如下： 

```javascript
 function myCallback(xhr) { 
   alert(xhr.responseText); 
 }
 ajax.request(“somefile.txt”, ”get”, myCallback);
 ajax.request(“script.php”, ”post”, myCallback, ”first=John&last=Smith”);
```

编程编程编程编程

# Q3 - 造成跨域的原因有哪些？

原因原因原因原因

# Q4 - 有哪些办法可以解决跨域？

办法办法办法办法

# Q5 -编程实现：有一个方法，可以避免每次请求重复去写创建 XHR 的整个过程，请求方法现只考虑 `POST` 和 `GET`，要求默认请求方法是 `GET`，如下：

~~~javascript
/**
options = {
  url: "",
  method: "",
  headers: {},   // 传给
  data: "",     // 传给服务器的参数
  success: function(result) {},  // 请求成功后调用此方法
  fail: function(error) {}    // 请求失败或出错后调用此方法
}
**/
var request = function(options) {
   // code this here
}
    ```
~~~

编程编程编程编程

