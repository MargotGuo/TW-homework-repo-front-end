"use strict";

const comput_median = require("../../reduce/compute_median.js");

const median_to_letter = (collection) =>
  numberToChar(Math.ceil(comput_median(collection)));

const numberToChar = (number) => {
  const quotient = Math.floor((number - 1) / 26);
  const remainder = (number - 1) % 26;
  if (quotient) {
    return numberToChar(quotient) + String.fromCharCode(remainder + 97);
  }
  return String.fromCharCode(remainder + 97);
};


module.exports = median_to_letter;
