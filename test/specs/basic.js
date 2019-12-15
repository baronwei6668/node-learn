const assert = require('assert')

describe('webdriver.io page', () => {
  // it('should have the right title', async () => {
  //   await browser.url('https://www.baidu.com')
  //   const title = await browser.getTitle()
  //   assert.strictEqual(title, '百度一下，你就知道')
  // })
  it('can handle commands using async/await', async function() {
    await browser.url('https://www.baidu.com')
    const inputElement = await $('#kw')
    const button = await $('#su')

    let r = await inputElement.setValue('test123')
    let value = await inputElement.getValue()
    await button.click()
    const rr = await $('head title')
    await browser.pause(1000)
    let rrv = await rr.getValue()
    const title = await browser.getTitle()
    // console.log(title)
    console.log(rrv)

    // assert.strictEqual(title, '百度一下，你就知道')
    // assert.strictEqual(value, 'test123')
    // assert.strictEqual(value, 'test')
  })

  // it('should have the right title', async () => {
  //   browser.capabilities['goog:chromeOptions'] = {
  //     debuggerAddress: 'localhost:53727',
  //     w3c: false,
  //     args: ['headless']
  //   }
  //   console.log(browser.capabilities)
  //   await browser.url('https://www.baidu.com')
  //   it('can handle commands using async/await', async function() {
  //     const inputElement = await $('#input')
  //     let value = await inputElement.getValue()
  //     console.log(value) // outputs: some value
  //   })
  //   console.log(browser.$('#kw').getAttribute('value'))
  //   const ip = await browser.$('#kw').getValue() //.setValue('test')
  //   console.log(ip)

  //   // await browser.$('#su').click()
  //   const title = await browser.getTitle()
  //   assert.strictEqual(title, '百度一下，你就知道')
  // })
})
