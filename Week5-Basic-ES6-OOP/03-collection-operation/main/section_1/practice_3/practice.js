'use strict'

let collect_same_elements = (collection_a, object_b) =>
  collection_a.filter(element => object_b.value.includes(element));


module.exports = collect_same_elements;
