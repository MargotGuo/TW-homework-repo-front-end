'use strict';

let find_last_even = (collection) =>
  collection.reduce((lastEven, number) => number % 2 === 0 ? number : lastEven);

module.exports = find_last_even;
