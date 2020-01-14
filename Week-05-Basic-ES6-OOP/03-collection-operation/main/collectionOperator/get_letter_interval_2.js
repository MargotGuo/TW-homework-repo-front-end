"use strict";

const get_integer_interval = require("./get_integer_interval.js");
const number_map_to_word_over_26 = require("../map/number_map_to_word_over_26.js");

const get_letter_interval_2 = (number_a, number_b) => {
  const number = get_integer_interval(number_a, number_b);
  return number_map_to_word_over_26(number);
};

module.exports = get_letter_interval_2;

