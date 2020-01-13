'use strict';

let rank_asc = require("../map/rank_asc.js");

let compute_median = (collection) => {
  let sorted = rank_asc(collection);
  let median = sorted.length % 2 ?
    sorted[(sorted.length - 1) / 2] :
    0.5 * sorted[sorted.length / 2] + 0.5 * sorted[sorted.length / 2 - 1];
  return median;
}

module.exports = compute_median;

