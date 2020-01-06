'use strict';

let get_integer_interval = require('./get_integer_interval.js')

let get_letter_interval_2 = (number_a, number_b) => {
  let number = get_integer_interval(number_a, number_b);
  let char = number.map(numberToChar);
  return char;
}

let numberToChar = (number) => {
  let quotient = Math.floor((number - 1) / 26);
  let remainder = (number - 1) % 26;
  if (quotient) {
    return numberToChar(quotient) + String.fromCharCode(remainder + 97);
  }
  return String.fromCharCode(remainder + 97);
}

module.exports = get_letter_interval_2;

