'use strict';

let rank_asc = require('../../../map/rank_asc.js');
let compute_average = require('../../../reduce/compute_average.js')

let even_group_calculate_average = function(collection){
  let evenSubscript = collection.filter((number, index) => index % 2);
  let evenNumber = evenSubscript.filter(number => number % 2 === 0);
  return (evenNumber.length) ? getAverage(evenNumber) : [0];
};

let getAverage = (array) => {
  let result = [];
  let max = rank_asc(array)[0];
  let maxLength = max.toString().length;
  for (let magnitude = 1; magnitude <= maxLength; magnitude++) {
    let sameMagnitude = array.filter(num => num.toString().length === magnitude);
    if (sameMagnitude.length) {
      let average = compute_average(sameMagnitude);
      result.push(average);
    }
  }
  return result;
}

module.exports = even_group_calculate_average;