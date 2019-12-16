var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var out = count(a);
console.log(out);

function count(inputArr) {
  var arrCount = {};
  for (var index = 0, len = inputArr.length; index < len; index++) {
    var key = inputArr[index];
    if (arrCount[key]) {
      arrCount[key] += 1;
    } else {
      arrCount[key] = 1;
    }
  }
  var result = findMax(arrCount);
  return result;
}

function findMax(inputObj) {
  var maxNum = 0;
  var maxKey;
  for (var key in inputObj) {
    if (maxNum < inputObj[key]) {
      maxNum = inputObj[key];
      maxKey = key;
    }
  }
  return maxKey;
}