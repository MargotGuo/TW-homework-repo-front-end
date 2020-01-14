"use strict";

const hybrid_operation_to_uneven = (collection) => {
  const odd = collection.filter(number => number % 2);
  return odd.map(number => number * 3 + 2);
};

module.exports = hybrid_operation_to_uneven;

