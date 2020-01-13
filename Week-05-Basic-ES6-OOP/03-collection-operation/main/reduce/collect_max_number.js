'use strict';

let collect_max_number = (collection) =>
  collection.reduce((max, current) => (max < current) ? current : max);

module.exports = collect_max_number;
