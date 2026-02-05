module.exports = {
    default: {
        paths: ['features/**/*.feature'],
        require: [
            'tests/step-definitions/**/*.js',
            'support/**/*.js'
        ],
        format: ['progress']
    }
};
