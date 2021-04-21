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
                serverQueue.textChannel.send(value.title);
            }
        })
    }

  module.exports = {
    nowplaying
}