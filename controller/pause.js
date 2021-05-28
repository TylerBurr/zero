const Discord = require('discord.js');

const { queue } = require('../utilities/configUtil');
function pauseMusic(message) {
    const serverQueue = queue.get(message.guild.id);
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to pause the music!"
        );
    if (!serverQueue)
        return message.channel.send("There is no song that I could pause!");
    const pauseMusic = new Discord.MessageEmbed()
        .setColor('#ffab19')
        .setAuthor('ZERO', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setTitle('Pausing Song')
        .setTimestamp()
    serverQueue.connection.dispatcher.pause(true);
    serverQueue.textChannel.send({ embed: pauseMusic });
}

module.exports = {
    pauseMusic
}