const locators=require("../../../../resources/Locators/Forms/Register.json");
const {Browser}=require("../../../Base/Browser");
const{expect} =require('@playwright/test');
const logger=require("../../../utils/loggerUtil")
class Register{
    constructor(page){
        this.page=page;
        this.browser=new Browser(page);
    }
    async goto() {
        logger.info("Opening link");
        await this.page.goto(
            'https://qa-practice.razvanvancea.ro/register.html',
            { waitUntil: 'domcontentloaded', timeout: 60000 }
        );
        logger.info("Link is Opened");
    }
async fillform(user){
        logger.info("Filling form fname");
      await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.firstname),user.fname);
    logger.info("Filling form lname");
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.lastname),user.lname);
    logger.info("Filling form phone");
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.phone),user.phone);
    logger.info("Filling form country");
    await this.browser.getLocator(locators.RegisterForm.country).selectOption(user.country);
    logger.info("Filling form email");
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.email),user.email);
    logger.info("Filling form password");
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.password),user.password);
}
 async clickRegisterlogin(){
        logger.info("Click Register login");
        await this.browser.click(this.browser.getLocator(locators.RegisterForm.registerBtn));
}
    async RegisteredtextVisible() {
        logger.info("RegisteredtextVisible");
        await this.browser.getLocator(locators.RegisterForm.registertext).waitFor({ state: 'visible' });
        return await this.browser.getLocator(locators.RegisterForm.registertext).isVisible();
    }
    async checkValidationmessagespasswordfield(){
        logger.info("Check validationmessagespasswordfield");
      await this.browser.click(this.browser.getLocator(locators.RegisterForm.registerBtn));
        const passwordInput = this.browser.getLocator(locators.RegisterForm.password);
        const message = await passwordInput.evaluate(el => el.validationMessage);
        expect(message).toContain('out this');
    }
}
module.exports={Register};