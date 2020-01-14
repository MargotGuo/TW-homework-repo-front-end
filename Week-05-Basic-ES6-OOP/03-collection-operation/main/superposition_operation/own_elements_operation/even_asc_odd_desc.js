"use strict";
const rank_asc = require("../../map/rank_asc.js");
const rank_desc = require("../../map/rank_desc.js");

const even_asc_odd_desc = (collection) => {
  const even = collection.filter(number => number % 2 === 0);
  const odd = collection.filter(number => number % 2);
  const sortEven = rank_desc(even);
  const sortOdd = rank_asc(odd);
  return sortEven.concat(sortOdd);
};

module.exports = even_asc_odd_desc;
