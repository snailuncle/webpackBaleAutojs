# webpack打包autojs
## 必备条件
1. webpack基于nodejs,电脑上必须安装nodejs.
## 注意事项
2. 入口文件: packFilePath.js 这个里面放 入口文件 绝对路径, 如:   D:/webpackBaleAutojs/app/index.js
3. 出口文件: __dirname + "/public/bundle.js"
## 操作步骤
1.git地址: [https://github.com/snailuncle/webpackBaleAutojs](https://github.com/snailuncle/webpackBaleAutojs)
2. git clone git@github.com:snailuncle/webpackBaleAutojs.git
2. 以下指令均在cmd执行,记得cd到项目所在目录
2. npm install
3. webpack
4. 执行完以上命令,你就会看到public文件夹下多了一个bundle.js文件,它可以在autojs中正常执行.
## 备注:
之所以写这个打包, 是因为我想把文件合并成一个文件, 这样上传下载脚本都容易的多,一个脚本文件就好.
## 备注2
ui的话, 所有ui界面代码都写到layout.xml中,
如果入口文件的第一行是"ui",那么webpack就会在打包后, 在第一行添加"ui", 否则就不加.
<div align=center>
<img width="300" height="300" src="https://raw.githubusercontent.com/snailuncle/autojsDemo/master/111111111%E6%9F%B4%E6%88%BF/yeah.png"/>
<img width="300" height="300" src="https://raw.githubusercontent.com/snailuncle/autojsDemo/master/111111111%E6%9F%B4%E6%88%BF/%E5%BE%AE%E4%BF%A1%E8%B5%9E%E8%B5%8F%E7%A0%81.png"/>
<img width="300" height="467" src="https://raw.githubusercontent.com/snailuncle/autojsDemo/master/111111111%E6%9F%B4%E6%88%BF/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE%E7%A0%81.jpg"/>
</div>
