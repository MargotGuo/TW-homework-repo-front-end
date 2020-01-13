var x = 10;
var y = 8;
var operator = '+';
var calcResult = calculator(x, y, operator);
console.log(calcResult);

function calculator(num1, num2, symbol) {
  switch (symbol) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
    case '%':
      return num1 % num2;
    default:
      return 'Please enter a valid operator';
  }
}