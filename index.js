// `md5-file` Return an md5sum of a given file
// by Rory Bradford (@roryrjb)
// license: MIT

module.exports = function (filename) {
  var crypto = require('crypto');
  var fs = require('fs');
  var sum = crypto.createHash('md5');
  sum.update(fs.readFileSync(filename));
  return sum.digest('hex');
}