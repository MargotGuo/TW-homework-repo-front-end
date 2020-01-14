"use strict";

const grouping_count = require("../../section_2/practice_2/practice.js");
const operation = require("../practice_2/practice.js");

const create_updated_collection = (collection_a, object_b) => {
  const countArray = grouping_count(collection_a);
  return operation(countArray, object_b);
};

module.exports = create_updated_collection;
