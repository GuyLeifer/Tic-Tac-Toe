const puppeteer=require("puppeteer")

describe("app test",()=>{
test ("check for x or o on click", async()=>{
    const browser=await puppeteer.launch()
    const page=await browser.newPage()
    await page.goto("http://localhost:4000/")
    await page.click("button:nth-child(1)")
    let b1=await page.$eval("button:nth-child(1)",(v)=>v.innerHTML)
    expect(b1).toBe("X")
    await page.click("button:nth-child(2)")
    let b2=await page.$eval("button:nth-child(2)",(v)=>v.innerHTML)
    expect(b2).toBe("O")
    await browser.close()
},10000)

test("can win",async()=>{
    const browser=await puppeteer.launch()
    const page=await browser.newPage()
    await page.goto("http://localhost:4000/")
    for (let i=1;i<8;i++){
        await page.click(`button:nth-child(${i})`)
    }
    winnerTag=await page.$eval("p",(p)=>p.innerHTML)
    expect(winnerTag).toBe("Winner: X")
    await browser.close()
},10000)

test("can win",async()=>{
    const browser=await puppeteer.launch()
    const page=await browser.newPage()
    await page.goto("http://localhost:4000/")
    for (let i=1;i<8;i++){
        await page.click(`button:nth-child(${i})`)
    }
    let modal=await page.$eval("div[role=presentation] div:nth-child(3)",(modal)=>modal.innerHTML)
    expect(modal).toBeDefined()

    await browser.close()
},10000)})