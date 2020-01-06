'use strict';

let compute_median = require('./compute_median.js');

let compute_chain_median = (collection) => {
  let temp = collection.split('->');
  temp = temp.map(number => Number(number));
  return compute_median(temp);
}

module.exports = compute_chain_median;
