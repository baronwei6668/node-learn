'use strict'
/*
  RegExp对象
  JavaScript通过内置对象RegExp支持正则表达式
  有两种方法实例化RegExp对象
    字面量
    构造函数
*/
let testdata = 'He is a boy. This is a dog. Where is she?'
let reg1 = /\bis\b/g
let result1 = testdata.replace(reg1, 'aa')
console.log(result1)

// 使用RegExp类声明时，\需要转义
let reg2 = new RegExp('\\bis\\b', 'g')
let result2 = testdata.replace(reg2, 'bb')
console.log(result2)
