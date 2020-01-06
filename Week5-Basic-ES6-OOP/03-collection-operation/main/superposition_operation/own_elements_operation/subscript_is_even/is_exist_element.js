'use strict';

let is_exist_element = (collection, element) => {
  var evenNumber = collection.filter((number, index) => index % 2 === 0);
  return evenNumber.includes(element) ? true : false;
};

module.exports = is_exist_element;