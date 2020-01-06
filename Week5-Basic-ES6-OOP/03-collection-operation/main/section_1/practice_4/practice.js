'use strict'

let collect_same_elements = (collection_a, object_b) => {
  let content_a = collection_a.map(obj => obj.key);
  return content_a.filter(element => object_b.value.includes(element));
}
module.exports = collect_same_elements;
