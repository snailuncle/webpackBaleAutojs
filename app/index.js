"ui";
var module1=require('./module1')
var module2=require('./module2')
var module3=require('./module3')
module1.fn()
module2.fn()
module3.fn()
console.log('this is index.js')
ui.btn.on('click',function(){
  threads.start(
    function(){
      launchApp('QQ')
      sleep(1000)
      console.log('开始输入QQ消息')
      var 输入框=id('input').findOne()
      输入框.setText('webpack打包autojs')
      var 发送按钮=text('发送').findOne()
      发送按钮.click()
    }
  )

})

