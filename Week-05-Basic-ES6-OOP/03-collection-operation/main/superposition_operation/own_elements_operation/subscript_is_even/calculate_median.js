'use strict';

let rank_desc = require('../../../map/rank_desc.js');
let comput_median = require('../../../reduce/compute_median.js');

let calculate_median = (collection) => {
  let evenSubscript = collection.filter((number, index) => index % 2);
  let sortArr = rank_desc(evenSubscript)
  let median = comput_median(sortArr);
  return median;
};

module.exports = calculate_median;