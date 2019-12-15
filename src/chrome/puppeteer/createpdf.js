const puppeteer = require('puppeteer')
const config = require('../../default/config')

let createpdf = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https:www.baidu.com', { waitUntil: 'networkidle2' })
  await page.pdf({
    path: `${config.pdfpath}/${Date.now()}.pdf`,
    format: 'A4'
  })

  await browser.close()
}

createpdf()
