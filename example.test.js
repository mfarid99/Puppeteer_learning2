const puppeteer = require('puppeteer')

// describe('My First Puppeteer Test', () => {
//     it('should launch the browser', async function(){
//         const browser = await puppeteer.launch({headless: false, devtools: true})
//         const page = await browser.newPage()
//         await page.goto('http://www.example.com/')
//         await page.waitForTimeout(1000)
//         await page.waitForSelector('h1')
//         await page.reload()
//         await page.waitForTimeout(1000)
//         await page.waitForSelector('h1')
//         await browser.close()
//     })
    
// }, 120000)

describe('My Second Puppeteer Test', async () => {
    it('Should launch another browser', async () => {
        const browser = await puppeteer.launch({headless: false})
        const page = await browser.newPage()

        await page.goto('https://www.autodesk.com/products/maya/overview?term=1-YEAR')
        await browser.close()

    })
   


}, 120000)
