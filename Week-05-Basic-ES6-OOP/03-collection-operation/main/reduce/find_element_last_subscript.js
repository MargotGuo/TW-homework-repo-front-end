'use strict';

let calculate_elements_sum = (collection, element) =>
  collection.reduce((subscript, number, index) =>
    number === element ? index : subscript);

module.exports = calculate_elements_sum;
