'use strict';

let find_first_even = (collection) => {
  let status = true;
  return collection.reduce((firstEven, number) => {
    if (status === true && number % 2 === 0) {
      status = false;
      return number;
    }
    return firstEven;
  });
}

module.exports = find_first_even;

