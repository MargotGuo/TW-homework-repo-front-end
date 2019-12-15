function multiplicationCalculator() {
  var result = 1;
  for (var index = 0, len = arguments.length; index < len; index++) {
    result *= arguments[index];
  }
  return result;
}

var a = multiplicationCalculator(3, 6);
var b = multiplicationCalculator(3, 6, 2);
var c = multiplicationCalculator(1, 2, 5, 6);
console.log(a);
console.log(b);
console.log(c);