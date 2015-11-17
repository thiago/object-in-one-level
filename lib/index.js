'use strict';

var extend = require('util')._extend;

function objectToOneLevel(data, prefix, separator) {
  var obj = {};
  var value;
  separator = typeof separator === 'string' ? separator : '.';
  prefix = prefix ? prefix + separator : '';
  prefix = prefix.toLowerCase();

  for (var i in data) {
    value = data[i];
    if (typeof value === 'object') {
      extend(obj, objectToOneLevel(value, prefix + i, separator));
    } else {
      obj[prefix + i] = value;
    }
  }
  return obj;
}

module.exports = objectToOneLevel;
