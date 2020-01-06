'use strict';

let amount_even = (collection) => {
  let targetEven = collection.filter(number =>
    number <= 10 && number > 1 && number % 2 === 0);
  return targetEven.reduce((sum, number) => sum + number);
}

module.exports = amount_even;
