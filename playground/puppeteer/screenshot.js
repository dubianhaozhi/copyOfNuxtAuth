/**
 * Execute this script on the command line.
 * ```
 * $ node <path-to-this-file>
 * ```
 */

const path = require("path")
const puppeteer = require('puppeteer')

;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://example.com')
  await page.screenshot({ path: path.join(__dirname, 'example.png') })

  await browser.close()
})()