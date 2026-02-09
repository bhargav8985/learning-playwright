const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, '../logs');

// create logs folder if not exists
if (!fs.existsSync(logDir)) {
    fs.mkdirSync(logDir);
}

const logFile = path.join(logDir, 'test.log');

function getTimestamp() {
    return new Date().toISOString();
}

function writeToFile(message) {
    fs.appendFileSync(logFile, message + '\n');
}

function format(level, message) {
    return `[${getTimestamp()}] [${level}] ${message}`;
}

const logger = {

    info: (message) => {
        const msg = format('INFO', message);
        console.log(msg);
        writeToFile(msg);
    },

    warn: (message) => {
        const msg = format('WARN', message);
        console.warn(msg);
        writeToFile(msg);
    },

    error: (message) => {
        const msg = format('ERROR', message);
        console.error(msg);
        writeToFile(msg);
    },

    debug: (message) => {
        const msg = format('DEBUG', message);
        console.debug(msg);
        writeToFile(msg);
    },

    step: (message) => {
        const msg = format('STEP', `➡ ${message}`);
        console.log(msg);
        writeToFile(msg);
    }

};

module.exports = logger;
