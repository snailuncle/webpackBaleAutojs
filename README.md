# webpack 打包 autojs
# 功能: 用于将autojs开发的模块化脚本, 多个js文件, 打包为一个js文件

## 必备条件

1. webpack 基于 nodejs,电脑上必须安装 nodejs.

## 注意事项

2. 入口文件: packFilePath.txt 这个里面放 入口文件 绝对路径, 如: D:\webpackBaleAutojs\app\index.js
3. 出口文件: \_\_dirname + "/public/bundle.js"

## 操作步骤

1. git 地址: [https://github.com/snailuncle/webpackBaleAutojs](https://github.com/snailuncle/webpackBaleAutojs)
2. git clone git@github.com:snailuncle/webpackBaleAutojs.git
3. 以下指令均在 cmd 执行,记得 cd 到项目所在目录
4. npm install
5. webpack
6. 执行完以上命令, public 文件夹下生成一个 bundle.js 文件,它可以在 autojs 中正常执行.

## 备注 

如果有ui, 就在ui.layout()后面加个;, 因为是通过正则来提取ui的, 正则是: /ui\\.layout\\(([^;]*?)\\);/

<div align=center>
<img width="300" height="300" src="https://raw.githubusercontent.com/snailuncle/autojsDemo/master/111111111%E6%9F%B4%E6%88%BF/yeah.png"/>
<img width="300" height="300" src="https://raw.githubusercontent.com/snailuncle/autojsDemo/master/111111111%E6%9F%B4%E6%88%BF/%E5%BE%AE%E4%BF%A1%E8%B5%9E%E8%B5%8F%E7%A0%81.png"/>
<img width="300" height="467" src="https://raw.githubusercontent.com/snailuncle/autojsDemo/master/111111111%E6%9F%B4%E6%88%BF/%E6%94%AF%E4%BB%98%E5%AE%9D%E6%94%B6%E6%AC%BE%E7%A0%81.jpg"/>
</div>
