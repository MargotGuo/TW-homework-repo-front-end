let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

let ajax = new XMLHttpRequest();

function myCallback(xhr) { 
  console.log(xhr.responseText); 
}

ajax.request = function request(url, operate) {
  operate = operate.toUpperCase();
  ajax.open(operate, url);
  ajax.send();
  ajax.onload = function () {
    if (ajax.status !== 200) {
      console.log(`Error ${ajax.status}: ${ajax.statusText}`);
    } else {
      myCallback(ajax);
    }
  };
  ajax.onerror = function () {
    console.log("Request failed");
  };
};

ajax.request("https://zhuanlan.zhihu.com/api/columns/biancheng/articles", "get");