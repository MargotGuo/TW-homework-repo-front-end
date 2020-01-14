"use strict";

const count_same_elements = (collection) => {
  const countObj = grouping_count(collection);
  return formatObj(countObj);
};

const grouping_count = (collection) => {
  const result = {};
  collection.forEach(element => {
    if (element.match(/\d+/)) {
      const key = element.charAt(0);
      const count = Number(element.match(/\d+/));
      result[key] ? result[key] += count : result[key] = count;
    } else {
      result[element] ? result[element]++ : result[element] = 1;
    }
  });
  return result;
};


const formatObj = (countObj) => {
  const result = [];
  for (const key in countObj) {
    const tempObj = {
      key,
      count: countObj[key]
    };
    result.push(tempObj);
  }
  return result;
};

module.exports = count_same_elements;