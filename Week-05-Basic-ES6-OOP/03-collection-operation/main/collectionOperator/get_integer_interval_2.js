"use strict";

const get_integer_interval_2 = (number_a, number_b) => {
  const temparr = [];
  let tempNumber = number_a;
  const operation = (number_a > number_b) ? -1 : 1;
  do {
    temparr.push(tempNumber);
    tempNumber += operation;
  } while (temparr.length <= Math.abs(number_a - number_b));
  return temparr.filter(number => number % 2 === 0);
};

module.exports = get_integer_interval_2;
