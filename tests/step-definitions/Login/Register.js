const { When, Then, Given } = require("@cucumber/cucumber");
const logger = require("../../utils/loggerUtil");

const testData = require("../../../resources/Credentials/Logintab/Register.json");
const {Register} = require("../../pageObjects/Navbar/Login/Register");

Given('the user is in the register page', async function () {
    this.Register=new Register(this.page);
    logger.info("User is navigating to register page");
    await this.Register.goto();
});

When('the user registers using {string} data', async function(userKey){
    logger.info(`Using test data: ${userKey}`);
    const user = testData[userKey];
    await this.Register.fillform(user);
    await this.Register.clickRegisterlogin();

});

Then('the register element should be displayed', async function(){
    logger.info("Checking successful registration");
    await this.Register.RegisteredtextVisible();

});

Then('error message should be displayed', async function(){
    logger.info("Checking validation error");
    await this.Register.checkValidationmessagespasswordfield();

});
