const chromedriver = require('chromedriver')
const _ = require('lodash')

module.exports = {
  before: function (done) {
    chromedriver.start()
    done()
    console.log('before:done', _.isFunction(done), done)
  },
  after: function (done) {
    chromedriver.stop()
    done()
    console.log('after:done', _.isFunction(done), done)
  }
}