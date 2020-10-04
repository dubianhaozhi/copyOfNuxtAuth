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
  await page.goto('https://news.ycombinator.com', { waitUntil: 'networkidle2' })
  await page.pdf({ path: path.join(__dirname, 'example.pdf'), format: 'A4' })

  await browser.close()
})()