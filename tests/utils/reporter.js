const {AllureRuntime} = require('allure-js-commons')
const {CucumberJSAllureFormatter} = require('allure-cucumberjs')

module.exports = class extends CucumberJSAllureFormatter {
    constructor(options) {
        super(
            options,
            new AllureRuntime({ resultsDir: "./allure-results" }),
            options.parsedArgvOptions,
        );
    }

};