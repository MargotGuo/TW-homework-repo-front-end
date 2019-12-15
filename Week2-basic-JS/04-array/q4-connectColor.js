var colors = ["Red", "Green", "White", "Black"];
var number = 3;
var result = connect(number, colors);
console.log(result);

function connect(number, inputArr) {
  switch (number) {
    case 1:
      var operator = ' ';
      break;
    case 2:
      var operator = '+';
      break;
    case 3:
      var operator = ',';
      break;
  }
  var newString = inputArr.join(operator);
  return newString;
}