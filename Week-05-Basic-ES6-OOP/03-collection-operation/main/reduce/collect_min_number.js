'use strict';

let collect_min_number = (collection) =>
  collection.reduce((min, current) => (min > current) ? current : min);

module.exports = collect_min_number;

