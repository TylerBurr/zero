
const queue = new Map();

let config;

try {
    config = require('../config.json');
} catch (error) {
    config = null;
}

exports.TOKEN = config.TOKEN;
exports.PREFIX = config.PREFIX;
exports.queue = queue