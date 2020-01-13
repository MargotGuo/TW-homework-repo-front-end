'use strict';

let number_map_to_word = (collection) =>
  collection.map(number => String.fromCharCode(number + 96));

module.exports = number_map_to_word;
