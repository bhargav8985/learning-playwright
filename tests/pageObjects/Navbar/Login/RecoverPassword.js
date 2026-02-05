const locators=require("../../../../resources/Locators/Forms/RecoverPassword.json")
const { Browser} = require("../../../Base/Browser")
class RecoverPassword{
    constructor(page){
        this.page=page;
        this.browser=new Browser(page);
    }
}