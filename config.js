const path = require("path");
console.log('__dirname: '+__dirname)
var config = {
  entry: path.resolve('.', "app", "index.js"),
  base64: false,
  log: true
};

module.exports = config;
