const { Given, When, Then } = require("@cucumber/cucumber");
const{AuthLogin}=require("../../../tests/pageObjects/Navbar/Login/AuthLogin")
Given('the user is on the home page', async function () {
    this.AuthLogin= new AuthLogin(this.page);
   await  this.AuthLogin.goto();
});
When(
    'the user logs in with email {string} and password {string}',
    async function (email, password) {
        await this.AuthLogin.login(email, password);
    }
);
Then('the Shopping Cart page should be displayed', async function () {
    await this.AuthLogin.isLogoutLinkVisible();
});
