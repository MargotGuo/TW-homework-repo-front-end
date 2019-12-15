var a = [1, 2, 3, 4, 5];
var b = double(a);
console.log(b);

function double(inputArr) {
  var outputArr = [];
  for (var index = 0, len = inputArr.length; index < len; index++) {
    outputArr[index] = inputArr[index] * 2;
  }
  return outputArr;
}