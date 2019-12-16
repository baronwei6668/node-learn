const puppeteer = require('puppeteer')
const config = require('../../default/config')
const srcToImg = require('../../helper/srcToImg')

let crawlergo = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://image.baidu.com/')

  // 改变页面大小(headless:true的前提)
  // 反爬虫，一屏都显示点
  await page.setViewport({
    width: 1920,
    height: 300
  })

  // 获取焦点
  await page.focus('#kw')
  // 键盘输入
  await page.keyboard.sendCharacter('狗')
  // 点击按钮
  // await page.click('.s_btn')
  // Error: Node is either not visible or not an HTMLElement
  // s_btn被设置成不显示，所以puppeteer取不到
  // .home_search #search .s_btn {
  //   display: none;
  // }
  // await page.click('.s_btn')
  // 换document原生的方法来取
  await page.evaluate(() => {
    document.querySelector('.s_btn').click()
  })
  // await page.waitFor(100000)
  page.on('load', async () => {
    console.log('page loading done, start fetch...')

    // 老方法
    // const srcs = await page.evaluate(() => {
    //   const images = document.querySelectorAll('img.main_img')
    //   return Array.prototype.map.call(images, img => img.src)
    // })

    // 新方法
    const srcs = await page.$$eval('img.main_img', els => els.map(it => it.src))
    // srcs = await images.map(img => img.getProperty('src'))
    console.log(srcs)
    // console.log(`get ${srcs.length} images, start download`)

    srcs.forEach(async src => {
      // sleep
      await page.waitFor(200)
      await srcToImg(src, config.crawlerpath)
    })

    await browser.close()
  })
}
crawlergo()
