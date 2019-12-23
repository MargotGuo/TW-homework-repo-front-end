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