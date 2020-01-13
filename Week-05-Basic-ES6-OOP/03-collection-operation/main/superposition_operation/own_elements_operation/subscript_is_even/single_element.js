'use strict';

let single_element = (collection) => {
  var evenNumber = collection.filter((number, index) => index % 2);
  return evenNumber.filter(number => 
    evenNumber.indexOf(number) === evenNumber.lastIndexOf(number));
};
module.exports = single_element;