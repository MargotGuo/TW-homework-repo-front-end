"use strict";

const compute_average = require("../../../reduce/compute_average.js");

const calculate_average = (collection) => {
  const evenSubscript = collection.filter((number, index) => index % 2);
  return compute_average(evenSubscript);
};
module.exports = calculate_average;
