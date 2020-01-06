'use strict';

let calculate_elements_sum = (collection) =>
  collection.reduce((sum, number) => sum + number);

module.exports = calculate_elements_sum;

