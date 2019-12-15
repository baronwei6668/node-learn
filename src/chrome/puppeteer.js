const puppeteer = require('puppeteer')
const config = require('../../src/default/config')

// puppeteer-core
let screenshortfn = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https:www.baidu.com')
  await page.screenshot({
    path: `${config.screenshortpath}/${Date.now()}.png`,
    fullPage: 'true'
  })
  await browser.close()
}

screenshortfn()
