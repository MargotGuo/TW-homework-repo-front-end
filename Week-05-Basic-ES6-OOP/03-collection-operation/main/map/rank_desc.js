'use strict';

let rank_desc = (collection) => collection.sort((a, b) => (a > b) ? 1 : -1);

module.exports = rank_desc;
