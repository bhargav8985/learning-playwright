class Browser {
    constructor(page) {
        this.page = page;
    }
    async setValueInTextField(locator, value) {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(value);
    }

    async click(locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }
    getLocator(selector) {
        if (selector.startsWith('//')) {
            return this.page.locator(`xpath=${selector}`);
        }
        return this.page.locator(selector);
    }


    }
    module.exports = { Browser };
