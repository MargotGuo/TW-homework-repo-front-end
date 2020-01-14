"use strict";

const count_same_elements = (collection) => {
  const countObj = grouping_count(collection);
  return formatObj(countObj);
};

const grouping_count = (collection) => {
  const result = {};
  collection.forEach(element => {
    if (element.match(/\d+/)) {
      const name = element.charAt(0);
      const summary = Number(element.match(/\d+/));
      result[name] ? result[name] += summary : result[name] = summary;
    } else {
      result[element] ? result[element]++ : result[element] = 1;
    }
  });
  return result;
};

const formatObj = (countObj) => {
  const keyArr = Object.keys(countObj);
  const result = keyArr.map(name => ({
    name,
    summary: countObj[name]
  }));
  return result;
};

module.exports = count_same_elements;