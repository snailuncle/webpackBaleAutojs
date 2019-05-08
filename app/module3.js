var module1=require('./module1')
var module2=require('./module2')
var module3=require('./module3')
module1.fn()
module2.fn()
var module3={
  fn:()=>{console.log('module3')}
}
module.exports=module3
