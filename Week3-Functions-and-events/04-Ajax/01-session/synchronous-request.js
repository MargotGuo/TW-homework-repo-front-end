let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// 1. Create a new XMLHttpRequest object
let xhr = new XMLHttpRequest();

// 2. Configure it: GET-request for the URL
xhr.open("GET", "https://zhuanlan.zhihu.com/api/columns/biancheng/articles", false);

try {
  xhr.send();
  if (xhr.status != 200) {
    console.log(`Error ${xhr.status}: ${xhr.statusText}`);
  } else {
    console.log(xhr.responseText);
  }
} catch (err) { // instead of onerror
  console.log("Request failed");
}