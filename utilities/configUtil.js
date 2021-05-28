const queue = new Map();
let config;
try {
    config = require('../config.json');
} catch (error) {
    throw new Error(`${error} check config.json`)
}

exports.token = config.token;
exports.prefix = config.prefix;
exports.presence = config.presence;

exports.queue = queue;