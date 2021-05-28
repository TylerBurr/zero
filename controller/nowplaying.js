const Discord = require('discord.js');

const { queue } = require('../utilities/configUtil');
function nowplaying(message) {
    const serverQueue = queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to view the queue!"
              );
        if (!serverQueue)
            return message.channel.send("There are no active songs!");
        serverQueue.songs.forEach(function (value, index) {
            if (index === 0) {
                const nowPlaying = new Discord.MessageEmbed()
                .setColor('#22e335')
                .setAuthor('ZERO', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
                .addFields(
                    { name: 'Now Playing', value: `${song.title}`, inline: true},
                )
                .setTimestamp()
                serverQueue.textChannel.send({ embed: nowPlaying });
            }
        })
    }

  module.exports = {
    nowplaying
}