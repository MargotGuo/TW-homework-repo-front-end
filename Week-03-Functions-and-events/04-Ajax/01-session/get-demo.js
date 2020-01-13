let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL
xhr.open("GET", "https://zhuanlan.zhihu.com/api/columns/biancheng/articles");

// 3. Send the request over the network
xhr.send();

// 4. This will be called after the response is received
xhr.onload = function () {
  if (xhr.status != 200) { // analyze HTTP status of the response
    console.log(`Error ${xhr.status}: ${xhr.statusText}`); // e.g. 404: Not Found
  } else { // show the result
    console.log(`Done, got ${JSON.stringify(xhr.responseText)}`); // responseText is the server
  }
};

// 5. if the network is down or other errors
xhr.onerror = function () {
  console.log("Request failed");
};