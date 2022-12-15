var validate = require('sourcemap-validator'),
  fs = require('fs'),
  assert = require('assert'),
  min = fs.readFileSync('index.android.bundle', 'utf-8'),
  map = fs.readFileSync('index.android.bundle.map', 'utf-8');

assert.doesNotThrow(function () {
  validate(min, map);
}, 'The sourcemap is not valid');

console.log('Valid source map');
