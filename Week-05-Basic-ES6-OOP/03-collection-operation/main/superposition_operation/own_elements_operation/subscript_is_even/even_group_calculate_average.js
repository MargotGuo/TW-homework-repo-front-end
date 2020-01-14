"use strict";

const rank_asc = require("../../../map/rank_asc.js");
const compute_average = require("../../../reduce/compute_average.js");

const even_group_calculate_average = function(collection){
  const evenSubscript = collection.filter((number, index) => index % 2);
  const evenNumber = evenSubscript.filter(number => number % 2 === 0);
  return (evenNumber.length) ? getAverage(evenNumber) : [0];
};

const getAverage = (array) => {
  const result = [];
  const max = rank_asc(array)[0];
  const maxLength = max.toString().length;
  for (let magnitude = 1; magnitude <= maxLength; magnitude++) {
    const sameMagnitude = array.filter(num => num.toString().length === magnitude);
    if (sameMagnitude.length) {
      const average = compute_average(sameMagnitude);
      result.push(average);
    }
  }
  return result;
};

module.exports = even_group_calculate_average;