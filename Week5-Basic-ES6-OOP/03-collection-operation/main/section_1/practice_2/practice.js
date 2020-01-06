'use strict'

let collect_same_elements = (collection_a, collection_b) =>
  collection_a.filter(element => collection_b.flat(Infinity).includes(element));

module.exports = collect_same_elements;
