const puppeteer = require('puppeteer')

describe('My First Puppeteer Test', () => {
    it('should launch the browser', async function(){
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()
        await page.goto('http://www.example.com/')
        await page.waitForSelector('h1')
        await page.waitForSelector('div')
        await page.waitForSelector('body')
        await page.waitForSelector('p')
        await browser.close()
    })
    
})
