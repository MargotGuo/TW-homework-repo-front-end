'use strict';

let choose_divisible_integer = (collection_a, collection_b) =>
  collection_a.filter(dividend =>
    collection_b.reduce((temp, divisor) => temp || dividend % divisor === 0, false));

module.exports = choose_divisible_integer;
