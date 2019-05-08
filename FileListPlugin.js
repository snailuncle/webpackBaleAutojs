const fs = require('fs');

function FileListPlugin(options) {}
FileListPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function (compilation, callback) {
    fs.readFile(__dirname + "/app/index.js", 'utf8', (err, data) => {
      if (err) throw err;
      if (/['"]ui['"]/.test(data)) {
        console.log('包含"ui"')
        compilation.assets['bundle.js']._value = '"ui";' + compilation.assets['bundle.js']._value
      } else {
        console.log('不包含"ui"')
      }
      callback();
    });
  });
};
module.exports = FileListPlugin;
