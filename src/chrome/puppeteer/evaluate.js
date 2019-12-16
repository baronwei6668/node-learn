const puppeteer = require('puppeteer')
/*
  在页面中执行脚本
  fn:getdimensions
*/

let getdimensions = async () => {
  const browser = await puppeteer.launch({
    // 默认就是true，这里就是展示
    headless: true
  })
  const page = await browser.newPage()
  await page.goto('https:www.baidu.com')
  // 改变页面大小(headless:true的前提)
  await page.setViewport({
    width: 400,
    height: 300,
    deviceScaleFactor: 2
  })

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  })

  console.log('Dimensions:', dimensions)
  await browser.close()
}

getdimensions()
