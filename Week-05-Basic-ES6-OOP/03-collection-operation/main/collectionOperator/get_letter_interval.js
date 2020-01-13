'use strict';

let get_integer_interval = require('./get_integer_interval.js');
let number_map_to_word_over_26 = require('../map/number_map_to_word_over_26.js');

let get_letter_interval = (number_a, number_b) => {
  let number = get_integer_interval(number_a, number_b);
  let char = number_map_to_word_over_26(number);
  return char;
}

module.exports = get_letter_interval;
