const locators = require("../../../../resources/Locators/Forms/AuthLogin.json");
const { Browser } = require("../../../Base/Browser");

class AuthLogin {
    constructor(page) {
        this.page = page;
        this.browser = new Browser(page);
        this.usernameInput = this.page.locator(locators.AuthLogin.usernameInput);
        this.passwordInput = this.page.locator(locators.AuthLogin.passwordInput);
        this.loginBtn = this.page.locator(locators.AuthLogin.loginBtn);
        this.errorMsg = this.page.locator(locators.AuthLogin.errorMsg);
        this.logoutLink = this.page.locator(locators.AuthLogin.logoutLink);
    }
    async goto() {
        await this.page.goto(
            'https://qa-practice.razvanvancea.ro/auth_ecommerce.html',
            { waitUntil: 'domcontentloaded', timeout: 60000 }
        );
    }

    async login(username, password) {
        await this.browser.setValueInTextField(this.usernameInput, username);
        await this.browser.setValueInTextField(this.passwordInput, password);
        await this.browser.click(this.loginBtn);
    }
    async isLogoutLinkVisible() {
        await this.logoutLink.waitFor({ state: 'visible' });
        return await this.logoutLink.isVisible();
    }
    async isErrorMsgVisible() {
        await this.errorMsg.waitFor({ state: 'visible' });
        return await this.errorMsg.isVisible();
    }
}
module.exports = {AuthLogin} ;
