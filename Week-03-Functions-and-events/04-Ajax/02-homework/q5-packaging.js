var options = {
  url: ["https://zhuanlan.zhihu.com/api/columns/biancheng/articles", "https://jsonplaceholder.typicode.com/posts"],
  method: ["GET", "POST"],
  headers: {},
  data: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 1
  }),
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
  var paraNum = arguments.length;
  if (paraNum === 2) {
    var method = arguments[1].toUpperCase();
  }
  if (paraNum === 1 || method === "GET") {
    requestGet(options);
  } else if (method === "POST") {
    requestPost(options);
  }
};

function requestGet(options) {
  let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  let xhr = new XMLHttpRequest();
  xhr.open(options.method[0], options.url[0]);
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
}

function requestPost(options) {
  let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
  let xhr = new XMLHttpRequest();
  xhr.open(options.method[1], options.url[1]);
  xhr.send(options.data);
  xhr.onload = function () {
    if (xhr.status !== 201) {
      options.err(xhr);
    } else {
      options.success(xhr);
    }
  };
  xhr.onerror = function () {
    options.fail();
  };
}

/*-----------测试GET方法--------------*/
// request(options, "get");
// request(options);

/*-----------测试POST方法--------------*/
request(options, "post");