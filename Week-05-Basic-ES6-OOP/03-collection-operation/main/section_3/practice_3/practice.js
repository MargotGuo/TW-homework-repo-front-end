'use strict'

let grouping_count = require('../../section_2/practice_1/practice.js');
let operation = require('../practice_2/practice.js')

let create_updated_collection = (collection_a, object_b) => {
  let countArray = grouping_count(collection_a);
  return operation(countArray, object_b);
}

module.exports = create_updated_collection;
