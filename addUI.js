const fs = require("fs");
const path = require("path");
const config = require("./config");

var entryFile = config.entry;

function addUI() {}
addUI.prototype.apply = function(compiler) {
  compiler.plugin("emit", function(compilation, callback) {
    fs.readFile(entryFile, "utf8", (err, data) => {
      if (err) throw err;
      if (/['"]ui['"]/.test(data)) {
        console.log('包含"ui"');
        var layoutContentFileParentDirectory = path.join(
          path.dirname(entryFile),
          "layout.xml"
        );
        var layoutContent = fs.readFileSync(layoutContentFileParentDirectory);
        var UI = `ui.layout(${layoutContent});`;
        compilation.assets["bundle.js"]._value =
          '"ui";' + UI + compilation.assets["bundle.js"]._value;

        var indexFileBackupPath = path.join(
          path.dirname(entryFile),
          "index.js.bak"
        );

        var indexContent = fs.readFileSync(indexFileBackupPath);
        fs.writeFileSync(entryFile, indexContent);
        console.log("index.js还原完毕");

        // 删除index.js.bak
        // 删除layout.xml

        fs.unlink(indexFileBackupPath, function(error) {
          if (error) {
            console.log(error);
            return false;
          }
          console.log("删除index.js.bak文件成功");
        });
        var layoutContentFileParentDirectory = path.join(
          path.dirname(entryFile),
          "layout.xml"
        );
        fs.unlink(layoutContentFileParentDirectory, function(error) {
          if (error) {
            console.log(error);
            return false;
          }
          console.log("删除index.js.bak文件成功");
        });
      } else {
        console.log('不包含"ui"');
      }
      if (config.base64) {
        var value = compilation.assets["bundle.js"]._value;
        compilation.assets["bundle.js"]._value = new Buffer(value).toString(
          "base64"
        );
      }
      callback();
    });
  });
};
module.exports = addUI;
