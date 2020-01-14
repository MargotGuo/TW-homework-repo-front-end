"use strict";

const hybrid_operation_to_uneven = (collection) => {
  const odd = collection.filter(number => number % 2);
  return odd.reduce((result, number) => result + number * 3 + 5, 0);
};

module.exports = hybrid_operation_to_uneven;

