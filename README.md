# object-in-one-level [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> serialize a object to one level

## Installation

```sh
$ npm install --save object-in-one-level
```

## Usage

```js
var objectInOneLevel = require('object-in-one-level');
var obj = {
  a: {
    b: {
      c: 'd'
    }
  }
};
var oneLevel = objectInOneLevel(obj);

// oneLevel['a.b.c'] === 'd'

```

### Options

objectInOneLevel(object, string, string)

 - data
 - prefix *optional*
 - separator *optional*

## License

MIT © [Thiago Rodrigues](http://trsweb.com.br)


[npm-image]: https://badge.fury.io/js/object-in-one-level.svg
[npm-url]: https://npmjs.org/package/object-in-one-level
[travis-image]: https://travis-ci.org/trsouz/object-in-one-level.svg?branch=master
[travis-url]: https://travis-ci.org/trsouz/object-in-one-level
[daviddm-image]: https://david-dm.org/trsouz/object-in-one-level.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/trsouz/object-in-one-level
[coveralls-image]: https://coveralls.io/repos/trsouz/object-in-one-level/badge.svg
[coveralls-url]: https://coveralls.io/r/trsouz/object-in-one-level
