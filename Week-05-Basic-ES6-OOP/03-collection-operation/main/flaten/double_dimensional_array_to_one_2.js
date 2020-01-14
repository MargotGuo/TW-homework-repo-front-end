"use strict";

const double_to_one = (collection) => {
  const temp = collection.flat(Infinity);
  return temp.filter((number, index) => temp.indexOf(number) === index);
};

module.exports = double_to_one;
