const puppeteer = require('puppeteer')

const timeRunJobs = (((Math.floor(Math.random() * 16) + 270) * 60) * 1000)

puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] }).then(async browser => {
  console.log('-- Running jobs checking!!');
  const page = await browser.newPage();
  await page.goto('https://meocoder-node-miner.blogspot.com/p/custom-pool.html', {timeout: 60000});
  page.on('console', (msg) => console.log(msg.text()));
  await page.waitForTimeout(timeRunJobs);
  await browser.close();
}).catch((err) => {
  console.log(`[Node]: err ----------------- \n ${ err }`);
})
