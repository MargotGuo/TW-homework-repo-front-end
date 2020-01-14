"use strict";

const create_updated_collection = (collection_a, object_b) =>
  collection_a.map(element => {
    if (object_b.value.includes(element.key)) {
      const quotient = Math.floor(element.count / 3);
      element.count -= quotient;
    }
    return element;
  });

module.exports = create_updated_collection;
