const locators=require("../../../../resources/Locators/Forms/Register.json");
const {Browser}=require("../../../Base/Browser");
const{expect} =require('@playwright/test');

class Register{
    constructor(page){
        this.page=page;
        this.browser=new Browser(page);
    }
async fillform(fname,lname,phone,country,email,password){
      await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.firstname),fname);
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.lastname),lname);
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.phone),phone);
    await this.browser.getLocator(locators.RegisterForm.country).selectOption(country);
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.email),email);
    await this.browser.setValueInTextField(this.browser.getLocator(locators.RegisterForm.password),password);
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