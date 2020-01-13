'use strict';

let get_integer_interval = (number_a, number_b) => {
  let temparr = [];
  let tempNumber = number_a;
  let operation = (number_a > number_b) ? -1 : 1;
  do {
    temparr.push(tempNumber);
    tempNumber += operation;
  } while (temparr.length <= Math.abs(number_a - number_b));
  return temparr;
}

module.exports = get_integer_interval;

