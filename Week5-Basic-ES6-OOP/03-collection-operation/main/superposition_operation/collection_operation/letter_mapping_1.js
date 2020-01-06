'use strict';

let even_to_letter = (collection) => {
  let even = collection.filter(number => number % 2 === 0);
  let letter = even.map(number => String.fromCharCode(number + 96));
  return letter;
}

module.exports = even_to_letter;
