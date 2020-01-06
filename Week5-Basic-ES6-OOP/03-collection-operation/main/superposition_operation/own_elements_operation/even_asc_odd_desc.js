'use strict';
let rank_asc = require('../../map/rank_asc.js');
let rank_desc = require('../../map/rank_desc.js');

let even_asc_odd_desc = (collection) => {
  let even = collection.filter(number => number % 2 === 0);
  let odd = collection.filter(number => number % 2);
  let sortEven = rank_desc(even);
  let sortOdd = rank_asc(odd);
  return sortEven.concat(sortOdd);
};

module.exports = even_asc_odd_desc;
