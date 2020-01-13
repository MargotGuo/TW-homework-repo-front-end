'use strict'

let count_same_elements = (collection) => {
  let countObj = grouping_count(collection);
  return formatObj(countObj);
}

let grouping_count = (collection) => {
  let result = {};
  collection.forEach(element => {
    if (element.match(/\d+/)) {
      let name = element.charAt(0);
      let summary = Number(element.match(/\d+/));
      result[name] ? result[name] += summary : result[name] = summary;
    } else {
      result[element] ? result[element]++ : result[element] = 1;
    }
  });
  return result;
};


let formatObj = (countObj) => {
  let result = [];
  for (let name in countObj) {
    let tempObj = {
      name,
      summary: countObj[name]
    };
    result.push(tempObj);
  }
  return result;
}

module.exports = count_same_elements;