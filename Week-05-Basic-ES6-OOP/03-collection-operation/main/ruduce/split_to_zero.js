'use strict';

let spilt_to_zero = (number, interval) => {
  let result = [number];
  while (1) {
    let temp = result[result.length - 1] - interval;
    result.push(Math.round(temp * 10) / 10);
    if (temp <= 0) {
      break;
    }
  }
  return result;
}

module.exports = spilt_to_zero;
