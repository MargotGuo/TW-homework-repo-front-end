'use strict';

let hybrid_operation_to_uneven = (collection) => {
  let odd = collection.filter(number => number % 2);
  return odd.reduce((result, number) => result + number * 3 + 5, 0);
}

module.exports = hybrid_operation_to_uneven;

