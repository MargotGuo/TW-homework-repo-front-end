'use strict';

let choose_no_common_elements = (collection_a, collection_b) =>
  collection_a.filter(number => !collection_b.includes(number));

module.exports = choose_no_common_elements;
