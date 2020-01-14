"use strict";

const even_to_letter = (collection) => {
  const even = collection.filter(number => number % 2 === 0);
  const letter = even.map(number => String.fromCharCode(number + 96));
  return letter;
};

module.exports = even_to_letter;
