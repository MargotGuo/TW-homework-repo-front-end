'use strict';

let rank_desc = require('../../map/rank_desc.js');

let rank_by_two_large_one_small = (collection) => {
  let sortTemp = rank_desc(collection);
  return sortTemp.map((number, index) => {
    if (sortTemp[index + 2]) {
      return (index % 3 !== 2) ? sortTemp[index + 1] : sortTemp[index - 2];
    }
    return number;
  });
}
module.exports = rank_by_two_large_one_small;