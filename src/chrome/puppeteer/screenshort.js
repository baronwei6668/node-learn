const puppeteer = require('puppeteer')
const config = require('../../default/config')

let screenshort = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https:www.baidu.com')
  await page.screenshot({
    path: `${config.screenshortpath}/${Date.now()}.png`,
    fullPage: 'true'
  })
  await browser.close()
}

screenshort()
