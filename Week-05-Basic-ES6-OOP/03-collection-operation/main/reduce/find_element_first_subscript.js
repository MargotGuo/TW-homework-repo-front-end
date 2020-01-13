'use strict';

let calculate_elements_sum = (collection, element) => {
  let status = true;
  return collection.reduce((subscript, number, index) => {
    if (status === true && number === element) {
      status = false;
      return index;
    }
    return subscript;
  });
}

module.exports = calculate_elements_sum;

