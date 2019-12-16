let testdata = [
  '2006/02/03',
  'test/07/sd',
  '2016/05/10',
  '1998-03-07',
  '12345/23/45678',
  '1234/23/45678',
  '12345/23/45'
]

console.log('match fn=====================================')
let regEXp = /^(\d{4})[/-](\d{1,2})[/-](\d{1,2})$/
for (const iterator of testdata) {
  console.log(iterator.match(regEXp))
}
console.log('exec fn=====================================')
for (const iterator of testdata) {
  console.log(regEXp.exec(iterator))
}
