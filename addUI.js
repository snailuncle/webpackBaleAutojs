const fs = require('fs');
const path = require('path');

var entryFile = fs.readFileSync(
  path.join(__dirname, 'packFilePath.js'),
  'utf8'
);


console.log(entryFile);
function addUI(options) {}
addUI.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    fs.readFile(entryFile, 'utf8', (err, data) => {
      if (err) throw err;
      if (/['"]ui['"]/.test(data)) {
        console.log('包含"ui"');
        var layoutContentFileParentDirectory = path.join(path.dirname(entryFile), 'layout.xml')
        var layoutContent = fs.readFileSync(layoutContentFileParentDirectory);
        var UI = `ui.layout(${layoutContent});`;
        compilation.assets['bundle.js']._value =
          '"ui";' + UI + compilation.assets['bundle.js']._value;
      } else {
        console.log('不包含"ui"');
      }
      callback();
    });
  });
};
module.exports = addUI;
