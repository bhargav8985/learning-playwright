const { Given, When, Then } = require("@cucumber/cucumber");
const{AuthLogin}=require("../../pageObjects/Navbar/Login/AuthLogin")
const{ShoppingKart}=require("../../pageObjects/Navbar/Login/ShoppingKart")
const credentials=require("../../../resources/Credentials/Logintab/ShoppingKart.json")
const logger = require("../../utils/loggerUtil");
Given('the user is in the home page', async function () {
    this.AuthLogin= new AuthLogin(this.page);
    this.ShoppingKart= new ShoppingKart(this.page);
    await  this.AuthLogin.goto();
});
When(
    'the user logs in the website with email {string} and password {string}',
    async function (email, password) {
        logger.info("When the user is in the home page", email, password);
        await this.AuthLogin.login(email, password);
    }
);
When('the Shopping  page should be displayed', async function () {
    logger.info("When the shopping page should be displayed");
    await this.AuthLogin.isLogoutLinkVisible();
});
When('Add an iphone item to the cart', async function () {
    logger.info("clicking Add to Cart button");
await this.ShoppingKart.clickAddtoCartBtn();
await this.ShoppingKart.isspanelementVisible();
});

When('clicked proceed to checkout button the details should be opened',async function () {
    logger.info("clicked Proceed to Checkout button");
    await this.ShoppingKart.clickProceedCheckout();
});
When('fill the details in the details page using {string} data click submit',async function (userKey) {
    logger.info(`Using test data: ${userKey}`);
    const user = credentials[userKey];
    await this.ShoppingKart.fillform(user);
    await this.ShoppingKart.clickSubmitBtn();
});
Then('the Congrats message should be visible',
    async function () {
    await this.ShoppingKart.checkCongratsMsgisVisible();
    })