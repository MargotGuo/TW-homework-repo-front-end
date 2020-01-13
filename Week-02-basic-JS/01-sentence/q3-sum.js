var result = summation();
console.log(result);

function summation() {
  var sum = 0;
  for (var num = 1; num < 101; num++) {
    if ((num % 10) !== 3) {
      sum += num;
    } 
  }
  return sum;
}