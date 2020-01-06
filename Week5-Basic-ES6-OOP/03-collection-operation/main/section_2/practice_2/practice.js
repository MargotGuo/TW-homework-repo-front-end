'use strict'

let count_same_elements = (collection) => {
  let countObj = grouping_count(collection);
  return formatObj(countObj);
}

let grouping_count = (collection) => {
  let result = {};
  collection.forEach(element => {
    if (element.match(/\d+/)) {
      let key = element.charAt(0);
      let count = Number(element.match(/\d+/));
      result[key] ? result[key] += count : result[key] = count;
    } else {
      result[element] ? result[element]++ : result[element] = 1;
    }
  });
  return result;
};


let formatObj = (countObj) => {
  let result = [];
  for (let key in countObj) {
    let tempObj = {
      key,
      count: countObj[key]
    };
    result.push(tempObj);
  }
  return result;
}

module.exports = count_same_elements;