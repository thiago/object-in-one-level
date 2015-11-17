'use strict';

var assert = require('assert');
var objectInOneLevel = require('../lib');

describe('object-in-one-level', function () {

  it('should a function', function () {
    assert('function', typeof objectInOneLevel);
  });

  it('should serialize object', function () {
    var obj = {
      a: {
        b: {
          c: 'd'
        }
      }
    };
    var parsed = objectInOneLevel(obj);
    assert(Object.keys(parsed).length, 1);
    assert(parsed['a.b.c'], 'd');
  });

  it('should serialize object with prefix', function () {
    var obj = {
      a: {
        b: {
          c: 'd'
        }
      }
    };
    var parsed = objectInOneLevel(obj, 'myrefix');
    assert(Object.keys(parsed).length, 1);
    assert(parsed['myrefix.a.b.c'], 'd');
  });

  it('should serialize object with separator', function () {
    var obj = {
      a: {
        b: {
          c: 'd'
        }
      }
    };
    var parsed = objectInOneLevel(obj, '', ' ');
    assert(Object.keys(parsed).length, 1);
    assert(parsed['a b c'], 'd');
  });

  it('should serialize object with prefix and separator', function () {
    var obj = {
      a: {
        b: {
          c: 'd'
        }
      }
    };
    var parsed = objectInOneLevel(obj, 'myprefix', ' ');
    assert(Object.keys(parsed).length, 1);
    assert(parsed['myprefix a b c'], 'd');
  });

  it('should serialize object with multiple values', function () {
    var obj = {
      a: {
        b: {
          c: 'd',
          d: {
            e: {
              f: 'g'
            }
          }
        }
      }
    };

    var parsed = objectInOneLevel(obj);
    assert(Object.keys(parsed).length, 2);
    assert(parsed['a.b.c'], 'd');
    assert(parsed['a.b.d.e.f'], 'g');
  });
});
