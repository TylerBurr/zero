const Discord = require('discord.js');
const queue = new Map();
let config;
try {
    config = require('../config.json');
} catch (error) {
    config = null;
}

const help = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setAuthor('ZERO', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Zero Discord Music Bot')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: '!play', value: 'Play some Music!' },
		{ name: '!pause', value: 'Pause the music!' },
		{ name: '!resume', value: 'Resume the music!' },
		{ name: '!stop', value: 'Stop the music!' },
        { name: '!skip', value: 'Skip a song!' },
        { name: '!queue', value: 'Show the music queue' },
        { name: '!nowplaying', value: 'Show what is playing!' },
	)
	.setTimestamp()
	.setFooter('https://github.com/TylerBurr/zero', 'https://i.imgur.com/wSTFkRM.png');

exports.token = config.token;
exports.prefix = config.prefix;
exports.presence = config.presence;

exports.help = help;
exports.queue = queue;