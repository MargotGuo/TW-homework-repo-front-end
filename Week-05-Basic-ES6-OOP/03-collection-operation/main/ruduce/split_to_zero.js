"use strict";

const spilt_to_zero = (number, interval) => {
  const result = [number];
  while (1) {
    const temp = result[result.length - 1] - interval;
    result.push(Math.round(temp * 10) / 10);
    if (temp <= 0) {
      break;
    }
  }
  return result;
};

module.exports = spilt_to_zero;
