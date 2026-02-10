const { Before, After } = require('@cucumber/cucumber');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);
const logger=require("../tests/utils/loggerUtil")
const {Register} = require("../tests/pageObjects/Navbar/Login/Register");
const {chromium} = require("@playwright/test");
Before(async function () {
    logger.info("Launching browser");
    this.browser = await chromium.launch({
        headless: false,
        args: ['--start-maximized']   // maximizes window
    });
    this.context = await this.browser.newContext({
        viewport: null   // makes viewport match full window size
    });
    this.page = await this.context.newPage();
});

After(async function () {
    logger.info("the test is closed");
    await this.close();
});
