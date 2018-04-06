const puppeteer = require('puppeteer');

async function run () {
  const browser = await puppeteer.launch({headless: !!process.env.CI});
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await browser.close();
}

run();
