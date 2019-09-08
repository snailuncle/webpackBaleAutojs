const fs = require("fs");
const path = require("path");
const config = require("./config");

if (!config.log) {
  console.log = function() {};
}

var addUI = require("./addUI");
var entryFile = config.entry;
console.log("webpack entryFile = " + entryFile);

var indexContent = fs.readFileSync(entryFile, "utf8");
console.log("indexContent:");
console.log(indexContent);

var indexFileBackupPath = path.join(path.dirname(entryFile), "index.js.bak");
console.log("indexFileBackupPath:");
console.log(indexFileBackupPath);

fs.writeFileSync(indexFileBackupPath, indexContent);
console.log("index.js备份完毕");

var layoutContent = indexContent.match(/ui\.layout\(([^;]*?)\);/)[1];
console.log("layoutContent:");
console.log(layoutContent);

layoutContent = layoutContent.replace(/ui\.layout\(|\);/, "");

var layoutContentFileParentDirectory = path.join(
  path.dirname(entryFile),
  "layout.xml"
);

var UI = layoutContent.match(/<vertical>[\s\S]*<\/vertical>/)[0];
console.log("提取的UI:");
console.log(UI);

// 去除index.js中的ui部分
indexContent = indexContent.replace(UI, "");
indexContent = indexContent.replace(/ui.layout\([\s\S]*?\)/, "");

console.log("去除index.js中的ui部分");
console.log("indexContent:");
console.log(indexContent);

fs.writeFileSync(layoutContentFileParentDirectory, UI);
console.log("ui界面写入完毕");

fs.writeFileSync(entryFile, indexContent);
console.log("index.js重写完毕");

var result = {
  entry: entryFile, //已多次提及的唯一入口文件
  output: {
    path: path.resolve(".", "public"),
    filename: "bundle.js" //打包后输出文件的文件名
  },
  plugins: [new addUI({ options: true })],
  mode: "production", // production  development
  module: {
    rules: [
      //添加 xml-loader
      {
        test: /\.xml$/,
        use: ["xml-loader"]
      }
    ]
  }
};
console.log("webpack.config:");
console.log(result);
module.exports = result;
