var content = document.getElementsByTagName("a");
var presentMain = 1;
var left = 0;
var right = 2;
console.log(content);

window.setInterval(switchPage, 2000);

function switchPage() {
  content[presentMain].setAttribute("class", "");
  content[left].setAttribute("class", "");
  content[right].setAttribute("class", "");
  presentMain++;
  left++;
  right++;
  if (right === content.length) {
    right = 0;
  }
  if (presentMain === content.length) {
    presentMain = 0;
  }
  if (left === content.length) {
    left = 0;
  }
  content[presentMain].setAttribute("class", "show");
  content[left].setAttribute("class", "show left");
  content[right].setAttribute("class", "show right");
}