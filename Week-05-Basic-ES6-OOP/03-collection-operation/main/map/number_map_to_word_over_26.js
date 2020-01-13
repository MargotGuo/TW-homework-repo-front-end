'use strict';

let number_map_to_word_over_26 = (collection) => collection.map(numberToChar);

let numberToChar = (number) => {
  let quotient = Math.floor((number - 1) / 26);
  let remainder = (number - 1) % 26;
  if (quotient) {
    return numberToChar(quotient) + String.fromCharCode(remainder + 97);
  }
  return String.fromCharCode(remainder + 97);
}

module.exports = number_map_to_word_over_26;
