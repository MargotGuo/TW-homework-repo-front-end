'use strict';

let get_intersection = (collection_a, collection_b) =>
  collection_b.filter(number => collection_a.includes(number));

module.exports = get_intersection;
