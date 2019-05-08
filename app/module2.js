var module1=require('./module1')
module1.fn()
var module2={
  fn:()=>{console.log('module2')}
}
module.exports=module2
