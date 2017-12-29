const isBuffer = require('util').isBuffer;
const stream = require('stream');
const Transform = stream.Transform;
const toReg = function (str) {
  return str instanceof RegExp ? str : new RegExp(str, 'g');
};
module.exports = function (search, replace, options) {
  var _write = Transform.prototype._write;
  search = toReg(search);
  const transform = new Transform({
    encoding: 'utf8',
    transform: function (chunk, encoding, callback) {
      const str = chunk.toString();
      const str1 = str.replace(search, replace);
      callback(null, Buffer(str1))
    },
  });
  return transform;
};