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