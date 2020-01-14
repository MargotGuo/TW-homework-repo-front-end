"use strict";

const one_add_next_multiply_three = (collection) => {
  const result = collection.map((number, index) => 
    Number(number + collection[index + 1]) * 3);
  result.pop();
  return result;
};

module.exports = one_add_next_multiply_three;