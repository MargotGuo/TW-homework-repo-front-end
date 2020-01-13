'use strict';

let compare_collections = (collection_a, collection_b) =>
  collection_a.reduce((status, number, index) =>
    status && number === collection_b[index], true);

module.exports = compare_collections;


