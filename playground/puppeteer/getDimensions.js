/**
 * Execute this script on the command line.
 * ```
 * $ node <path-to-this-file>
 * ```
 */

const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://example.com')

  // Get the "viewport" of the page, as reported by the page.
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientHeight,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  })

  console.log('Dimensions', dimensions)

  await browser.close()
})()