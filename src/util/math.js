'use strict'
module.exports = {
  add: (...agrs) => agrs.reduce((x, y) => x + y),
  mul: (...agrs) => agrs.reduce((x, y) => x * y)
}
