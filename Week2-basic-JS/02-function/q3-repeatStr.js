var result = repeatStr("hello", 3);
console.log(result);

function repeatStr(inputStr, num) {
  var sumstr = ""
  if (num > 0) {
    for (var i = 1; i <= num; i++) {
      sumstr += inputStr;
    }
    return sumstr;
  }
  return inputStr;
}