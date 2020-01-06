'use strict';

let double_to_one = (collection) => {
  let temp = collection.flat(Infinity);
  return temp.filter((number, index) => temp.indexOf(number) === index);
}

module.exports = double_to_one;
