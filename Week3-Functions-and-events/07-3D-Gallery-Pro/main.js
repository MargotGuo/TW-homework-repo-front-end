var content = document.getElementsByTagName("a");
var presentMain = 1;
var left = 0;
var outleft = content.length -1;
var right = 2;
var outright = 3;
switchPage();
console.log(content);

window.setInterval(switchPage, 2000);

function switchPage() {
  content[presentMain].setAttribute("class", "");
  content[left].setAttribute("class", "");
  content[right].setAttribute("class", "");
  content[outleft].setAttribute("class", "");
  content[outright].setAttribute("class", "");
  presentMain++;
  left++;
  right++;
  outleft++;
  outright++;
  if (right === content.length) {
    right = 0;
  }
  if (presentMain === content.length) {
    presentMain = 0;
  }
  if (left === content.length) {
    left = 0;
  }
  if (outleft === content.length) {
    outleft = 0;
  }
  if (outright === content.length) {
    outright = 0;
  }
  content[presentMain].setAttribute("class", "show change current");
  content[left].setAttribute("class", "show left change");
  content[right].setAttribute("class", "show right change");
  content[outleft].setAttribute("class", "outleft change");
  content[outright].setAttribute("class", "outright change");
}