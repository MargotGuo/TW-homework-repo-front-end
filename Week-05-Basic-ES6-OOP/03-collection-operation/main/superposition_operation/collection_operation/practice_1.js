'use strict';

let hybrid_operation = (collection) =>
  collection.reduce((result, number) => result + number * 3 + 2, 0);

module.exports = hybrid_operation;

