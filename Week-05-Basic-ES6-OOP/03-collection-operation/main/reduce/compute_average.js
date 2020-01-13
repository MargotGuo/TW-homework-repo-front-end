'use strict';

let compute_average = (collection) =>
  collection.reduce((average, number, index) =>
    (average * index + number) / (index + 1));

module.exports = compute_average;

