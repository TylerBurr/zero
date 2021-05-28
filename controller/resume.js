const Discord = require('discord.js');
const { queue } = require('../utilities/configUtil');

function resumeMusic(message) {
    const serverQueue = queue.get(message.guild.id);
    if (!message.member.voice.channel)
        return message.channel.send(
            "You have to be in a voice channel to resume the music!"
        );
    if (!serverQueue)
        return message.channel.send("There is no song that i could resumed!");
    const resumeMusic = new Discord.MessageEmbed()
        .setColor('#ffab19')
        .setAuthor('ZERO', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setTitle('Resuming Song')
        .setTimestamp()
    serverQueue.connection.dispatcher.resume();
    serverQueue.textChannel.send({ embed: resumeMusic });
}


module.exports = {
    resumeMusic
}