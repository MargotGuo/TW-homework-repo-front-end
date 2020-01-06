'use strict';

let get_integer_interval = require('./get_integer_interval.js')

let get_letter_interval = (number_a, number_b) => {
  let number = get_integer_interval(number_a, number_b);
  let char = number.map((number) => String.fromCharCode(number + 96));
  return char;
}

module.exports = get_letter_interval;
