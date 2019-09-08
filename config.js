const path = require("path");

var config = {
  entry: path.join(__dirname, "app", "index.js"),
  base64: false,
  log: false
};

module.exports = config;
