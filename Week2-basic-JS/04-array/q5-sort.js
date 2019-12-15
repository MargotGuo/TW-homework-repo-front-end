var a = [5, 1, 8, 10, 4];
var b = sorting(a);
console.log(b);

function sorting(inputArr) {
  var outputArr = Array.from(inputArr);
  for (var range = outputArr.length - 1; range > 0; range--) {
    for (var index = 0; index < range; index++) {
      if (outputArr[index] < outputArr[index + 1]) {
        var temp = outputArr[index + 1];
        outputArr[index + 1] = outputArr[index];
        outputArr[index] = temp;
      }
    }
  }
  return outputArr;
}