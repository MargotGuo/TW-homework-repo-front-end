"use strict";

const rank_asc = require("../map/rank_asc.js");

const compute_median = (collection) => {
  const sorted = rank_asc(collection);
  const median = sorted.length % 2 ?
    sorted[(sorted.length - 1) / 2] :
    0.5 * sorted[sorted.length / 2] + 0.5 * sorted[sorted.length / 2 - 1];
  return median;
};

module.exports = compute_median;

