const fs = require('fs');
const path = require('path');

var addUI = require('./addUI');
var entryFile = fs.readFileSync(
  path.join(__dirname, 'packFilePath.js'),
  'utf8'
);
console.log('webpack entryFile = ' + entryFile);
module.exports = {
  entry: entryFile, //已多次提及的唯一入口文件
  output: {
    path: __dirname + '/public', //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  plugins: [new addUI({ options: true })],
  mode: 'production',
  module: {
    rules: [
      //添加 xml-loader
      {
        test: /\.xml$/,
        use: ['xml-loader']
      }
    ]
  }
};
