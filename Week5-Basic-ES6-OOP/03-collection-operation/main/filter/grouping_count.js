'use strict';

let grouping_count = (collection) => {
  let result = {};
  collection.forEach(number => {
    result[number] ? result[number]++ : result[number] = 1;
  });
  return result;
}

module.exports = grouping_count;
