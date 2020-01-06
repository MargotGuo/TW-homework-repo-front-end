'use strict';

let compute_average = require('../../../reduce/compute_average.js')

let calculate_average = (collection) => {
  let evenSubscript = collection.filter((number, index) => index % 2);
  return compute_average(evenSubscript);
};
module.exports = calculate_average;
