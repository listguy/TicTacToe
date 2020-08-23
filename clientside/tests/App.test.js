const puppeteer = require("puppeteer");

describe("Can choose square with the right sign", () => {
  test("first click changes selected square to X", async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250,
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: "",
    });

    await page.goto("http://localhost:4000/");
    await page.waitForSelector("#board");
    await page.click("#\\30");

    const squareValue = await page.$eval("#\\30", (e) => e.innerHTML);
    expect(squareValue).toBe("X");

    browser.close();
  }, 16000);
});

describe("Can win a game", () => {
  test("When the board is in a winning state, check if the win modal prompts", async () => {
    let browser = await puppeteer.launch({
      headless: false,
      devtools: true,
      slowMo: 250,
    });
    let page = await browser.newPage();

    page.emulate({
      viewport: {
        width: 500,
        height: 2400,
      },
      userAgent: "",
    });

    await page.goto("http://localhost:4000/");
    await page.waitForSelector("#board");
    await page.click("#board #\\30");
    await page.click("#board #\\31");
    await page.click("#board #\\33");
    await page.click("#board #\\34");
    await page.click("#board #\\36");

    expect(page.$eval(".MuiDialog-root") !== null).toBe(true);

    browser.close();
  }, 16000);
});
