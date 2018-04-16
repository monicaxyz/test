const puppeteer = require('puppeteer');

async function run () {
  const browser = await puppeteer.launch({args: ['--no-sandbox'], headless: !!process.env.CI});
  const page = await browser.newPage();
  await test(browser, page);
  await browser.close();
}

async function test (browser, page) {
  await page.goto('https://www.google.com');
}

run().catch(error => {
  console.error(error);
  process.exit(1);
});
