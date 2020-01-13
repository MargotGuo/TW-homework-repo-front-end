'use strict';

let choose_no_repeat_number = (collection) =>
  collection.filter((number, index) => collection.indexOf(number) === index);

module.exports = choose_no_repeat_number;
