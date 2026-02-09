const locators=require("../../../../resources/Locators/Forms/Register.json");
const {Browser}=require("../../../Base/Browser");
const{expect} =require('@playwright/test');

class Register{
    constructor(page){
        this.page=page;
        this.browser=new Browser(page);
    }
    async goto() {
        await this.page.goto(
            'https://qa-practice.razvanvancea.ro/register.html',
            { waitUntil: 'domcontentloaded', timeout: 60000 }
        );
    }
async fillform(user){
      await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.firstname),user.fname);
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.lastname),user.lname);
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.phone),user.phone);
    await this.browser.getLocator(locators.RegisterForm.country).selectOption(user.country);
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.email),user.email);
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.password),user.password);
}
 async clickRegisterlogin(){
        await this.browser.click(this.browser.getLocator(locators.RegisterForm.registerBtn));
}
    async RegisteredtextVisible() {
        await this.browser.getLocator(locators.RegisterForm.registertext).waitFor({ state: 'visible' });
        return await this.browser.getLocator(locators.RegisterForm.registertext).isVisible();
    }
    async checkValidationmessagespasswordfield(){
      await this.browser.click(this.browser.getLocator(locators.RegisterForm.registerBtn));
        const passwordInput = this.browser.getLocator(locators.RegisterForm.password);
        const message = await passwordInput.evaluate(el => el.validationMessage);
        expect(message).toContain('out this');
    }
}
module.exports={Register};