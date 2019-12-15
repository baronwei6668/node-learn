'use strict'
// mocha+chai+assert(原生)
const math = require('../../src/util/math')
// mocha 自动引入，此处导入只是为了eslint不报错
const { describe, it } = require('mocha')
// BDD
const { expect } = require('chai')
// TDD
const assert = require('assert')

assert.deepEqual(math.add(3, 5), 8)
assert.deepEqual(math.mul(3, 5), 15)

// chai.should()
// math.add(2, 1).should.to.equal(3)
// math.mul(2, 1).should.to.equal(2)

// expect(math.add(3, 5)).to.be.a('number')
// expect(math.mul(3, 6)).to.equal(18)

// npm coverage进行run
describe('math', function() {
  describe('#add()', function() {
    it('should return 5 when 2 + 3', function() {
      expect(math.add(2, 3)).to.be.a('number')
    })
    it.skip('should return 7 when 3 + 4', function() {
      expect(math.add(2, 3)).to.be.a('number')
    })
  }),
    describe('#mul()', function() {
      it('should return 6 when 2 * 3', function() {
        expect(math.mul(2, 3)).to.equal(6)
      })
    })
})
