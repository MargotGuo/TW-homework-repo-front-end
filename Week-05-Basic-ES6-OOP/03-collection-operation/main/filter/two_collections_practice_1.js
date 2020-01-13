'use strict';

let choose_common_elements = (collection_a, collection_b) =>
  collection_a.filter(number => collection_b.includes(number));

module.exports = choose_common_elements;
