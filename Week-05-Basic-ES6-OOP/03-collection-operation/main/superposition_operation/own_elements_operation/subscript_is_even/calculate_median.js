"use strict";

const rank_desc = require("../../../map/rank_desc.js");
const comput_median = require("../../../reduce/compute_median.js");

const calculate_median = (collection) => {
  const evenSubscript = collection.filter((number, index) => index % 2);
  const sortArr = rank_desc(evenSubscript);
  const median = comput_median(sortArr);
  return median;
};

module.exports = calculate_median;