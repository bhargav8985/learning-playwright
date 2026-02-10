const locators=require("../../../../resources/Locators/Forms/ShoppingKart.json");
const {Browser}=require("../../../../tests/Base/Browser");
const logger = require("../../../utils/loggerUtil");
const{Assert}=require("../../../Base/Assert");
const assert=new Assert();
class ShoppingKart{
constructor(page){
  this.page = page;
  this.browser=new Browser(page);
}
    async clickAddtoCartBtn(){
        logger.info("Clicking Add to Cart button");

        const locator = this.browser.getLocator(locators.phone.AddtoCartBtn);

        await locator.highlight(); // debug

        await this.browser.click(locator);

        logger.info("Clicked Add to Cart successfully");
    }

async clickProceedtoCheckout(){
    logger.info("clickProceedtoCheckout");
    await this.browser.click(this.browser.getLocator(locators.phone.ProceedtocheckoutBth));
}
async fillform(user){
    logger.info("Filling form Phone number");
    await this.browser.setValueInTextField(this.browser.getLocator(locators.form.Phoneno),user.Pno);
    logger.info("Filling form Street");
    await this.browser.setValueInTextField(this.browser.getLocator(locators.form.Street),user.Street);
    logger.info("Filling form city");
    await this.browser.setValueInTextField(this.browser.getLocator(locators.form.city),user.city);
    logger.info("Filling form country");
    await this.browser.getLocator(locators.form.country).selectOption(user.country);
}
async clickSubmitBtn(user){
    logger.info("clickSubmitBtn");
    await this.browser.click(this.browser.getLocator(locators.form.SubmitBtn));
}
async checkCongratsMsgisVisible(){
    logger.info("check Congrats Msg is Visible");
    await assert.assertElementContainsText(this.browser.getLocator(locators.SucessMsg),"Congrats!");
}
    async isspanelementVisible(){
        logger.info("isspanelementVisible");
        await this.browser.waitFor(this.browser.getLocator(locators.phone.spanelement));
    }
}

module.exports ={ShoppingKart};