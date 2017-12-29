var fs = require('fs');
var replace = require('..');
fs.createReadStream(__dirname+'/file.txt')
.pipe(replace('birthday',function (params) {
  return "ABCDEFG"
}))
.pipe(process.stdout);