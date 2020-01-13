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

function requestPost(operate, url, callbackFunc, sendInfo) {
  ajax.open(operate, url);
  ajax.send(sendInfo);
  ajax.onload = function () {
    if (ajax.status !== 201) {
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

/*-----------测试GET方法--------------*/
// ajax.request("https://zhuanlan.zhihu.com/api/columns/biancheng/articles", "get", myCallback);

/*-----------测试POST方法--------------*/
var postInfo = JSON.stringify({
  title: "foo",
  body: "bar",
  userId: 1
});
ajax.request("https://jsonplaceholder.typicode.com/posts", "post", myCallback, postInfo);