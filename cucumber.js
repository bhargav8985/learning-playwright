module.exports = {
    default: {
        paths: ['tests/features/**/*.feature'],
        require: [
            'tests/step-definitions/**/*.js',
            'support/**/*.js'
        ],
        format: ['progress']
    }
};
