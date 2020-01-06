'use strict'

let grouping_count = require('../../filter/grouping_count.js');

let count_same_elements = (collection) => {
  let countObj = grouping_count(collection);
  return formatObj(countObj);
}

let formatObj = (countObj) => {
  let result = [];
  for (let key in countObj) {
    let tempObj = {
      key,
      count: countObj[key]
    };
    result.push(tempObj);
  }
  return result;
}

module.exports = count_same_elements;