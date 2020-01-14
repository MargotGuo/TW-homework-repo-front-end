"use strict";

const grouping_count = (collection) => {
  const result = {};
  collection.forEach(number => {
    result[number] ? result[number]++ : result[number] = 1;
  });
  return result;
};

module.exports = grouping_count;
