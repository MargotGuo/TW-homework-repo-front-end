'use strict';

let average_to_letter = (collection) => {
  let average = collection.reduce((ave, number, index) =>
    (ave * index + number) / (index + 1));
  average = Math.ceil(average);
  return String.fromCharCode(average + 96);
}

module.exports = average_to_letter;

