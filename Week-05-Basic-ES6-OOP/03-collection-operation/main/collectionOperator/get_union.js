"use strict";

const get_union = (collection_a, collection_b) =>
  collection_a.concat(get_different(collection_a, collection_b));

const get_different = (collection_a, collection_b) =>
  collection_b.filter(number => !collection_a.includes(number));

module.exports = get_union;

