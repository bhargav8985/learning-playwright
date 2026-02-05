const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const { setDefaultTimeout } = require('@cucumber/cucumber');
setDefaultTimeout(60 * 1000);

class CustomWorld {
    async init() {
        this.browser = await chromium.launch({ headless: false });
        this.page = await this.browser.newPage();
    }
    async close() {
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);
