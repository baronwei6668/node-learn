'use strict'
const { num1, num2 } = require('../../src//util/fn')
const Benchmark = require('benchmark')
const suite = new Benchmark.Suite()

// add tests
suite
  .add('parseInt', () => {
    num1('123456')
  })
  .add('Number', () => {
    num2('123456')
  })

  // add tests
  // suite
  //   .add('RegExp#test', function() {
  //     ;/o/.test('Hello World!')
  //   })
  //   .add('String#indexOf', function() {
  //     'Hello World!'.indexOf('o') > -1
  //   })
  //   .add('String#match', function() {
  //     !!'Hello World!'.match(/o/)
  //   })
  // add listeners
  .on('cycle', event => {
    console.log(String(event.target))
  })
  .on('complete', function() {
    // 有this的api修改简写时，不要轻易的换成箭头函数
    console.log('Fastest is ' + this.filter('fastest').map('name'))
  })
  // run async
  .run({ async: true })

// 有外界因素干扰，数据不专业
// const s1 = Date.now()
// for (let i = 0; i < 50000; i++) {
//   num1('123456')
// }
// const e1 = Date.now()

// console.info(e1 - s1)

// const s2 = Date.now()
// for (let i = 0; i < 50000; i++) {
//   num2('123456')
// }
// const e2 = Date.now()

// console.info(e2 - s2)
