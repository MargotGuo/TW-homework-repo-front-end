"use strict";

const grouping_count = require("../../filter/grouping_count.js");

const count_same_elements = (collection) => {
  const countObj = grouping_count(collection);
  return formatObj(countObj);
};

const formatObj = (countObj) => {
  const keyArr = Object.keys(countObj);
  const result = keyArr.map(key => ({
    key,
    count: countObj[key]
  }));
  return result;
};

module.exports = count_same_elements;