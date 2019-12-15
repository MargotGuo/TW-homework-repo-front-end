var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
var out = count(a);
console.log(out);

function count(inputArr) {
  var arrCount = {};
  for (var index = 0, len = inputArr.length; index < len; index++) {
    if (arrCount.hasOwnProperty(inputArr[index])) {
      arrCount[inputArr[index]] += 1;
    }
    else {
      arrCount[inputArr[index]] = 1;
    }
  }
  var result = findMax(arrCount);
  return result;
}

function findMax(inputObj) {
  var max = 0;
  for (var key in inputObj) {
    if (max < inputObj[key]) {
      max = inputObj[key];
    }
  }
  for (key in inputObj) {
    if (inputObj[key] === max) {
      return key;
    }
  }
}