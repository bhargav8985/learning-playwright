class Browser {
    constructor(page) {
        this.page = page;
    }
    async setValueInTextField(locator, value) {
        await locator.waitFor({ state: 'visible' });
        await locator.fill(value);
    }
async waitFor(locator) {
        await locator.waitFor({ state: 'visible' });
}
    async click(locator) {
        await locator.waitFor({ state: 'visible' });
        await locator.scrollIntoViewIfNeeded();
        await this.page.waitForLoadState('networkidle');
        try {
            await locator.click();

        } catch (e) {
            console.log("Normal click failed, trying force click...");
            await locator.click({ force: true });
        }
    }

    getLocator(selector) {
        if (selector.startsWith('//')) {
            return this.page.locator(`xpath=${selector}`);
        }
        return this.page.locator(selector);
    }


    }
    module.exports = { Browser };
