'use strict';

let comput_median = require('../../reduce/compute_median.js');

let median_to_letter = (collection) =>
  numberToChar(Math.ceil(comput_median(collection)));

let numberToChar = (number) => {
  let quotient = Math.floor((number - 1) / 26);
  let remainder = (number - 1) % 26;
  if (quotient) {
    return numberToChar(quotient) + String.fromCharCode(remainder + 97);
  }
  return String.fromCharCode(remainder + 97);
}


module.exports = median_to_letter;
