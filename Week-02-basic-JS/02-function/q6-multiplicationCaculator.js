function multiplicationCalculator() {
  var len = arguments.length;
  if (len === 0) {
    return 'Please enter a valid number';
  }
  var result = 1;
  for (var index = 0; index < len; index++) {
    result *= arguments[index];
  }
  return result;
}

var a = multiplicationCalculator(3, 6);
var b = multiplicationCalculator(3, 6, 2);
var c = multiplicationCalculator(1, 2, 5, 6);
var d = multiplicationCalculator();
console.log(a);
console.log(b);
console.log(c);
console.log(d);