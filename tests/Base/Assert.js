const chai = require('chai');
const expect = chai.expect;

class Assert {

    async assertElementContainsText(locator, text) {
        await locator.waitFor({ state: 'visible' });

        const actualText = (await locator.textContent()).trim();

        expect(actualText.toUpperCase()).to.contain(text.toUpperCase());

        console.log(`UI ASSERT: "${actualText}" contains "${text}"`);
    }

    async assertElementTextEquals(locator, expectedText) {
        await locator.waitFor({ state: 'visible' });

        const actualText = (await locator.textContent()).trim();

        expect(actualText).to.equal(expectedText);

        console.log(`UI ASSERT: "${actualText}" equals "${expectedText}"`);
    }

    async assertElementIsVisible(locator) {
        const isVisible = await locator.isVisible();
        expect(isVisible).to.be.true;

        console.log(`UI ASSERT: Element is visible`);
    }

    async assertElementCount(locator, count) {
        const actualCount = await locator.count();
        expect(actualCount).to.equal(count);

        console.log(`UI ASSERT: Element count is ${actualCount}`);
    }

    async assertUrlContains(page, value) {
        const url = page.url();
        expect(url).to.contain(value);

        console.log(`UI ASSERT: URL "${url}" contains "${value}"`);
    }
}

module.exports = {Assert};
