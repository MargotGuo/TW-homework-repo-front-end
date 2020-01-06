'use strict'

let create_updated_collection = (collection_a, object_b) =>
  collection_a.map(element => {
    if (object_b.value.includes(element.key)) {
      element.count--;
    }
    return element;
  });

module.exports = create_updated_collection;
