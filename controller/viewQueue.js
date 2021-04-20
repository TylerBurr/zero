const { queue } = require('../utilities/configUtil');
function viewQueue(message) {
    const serverQueue = queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to view the queue!"
              );
        if (!serverQueue)
            return message.channel.send("There is no song that you could queue!");
        serverQueue.songs.forEach(function (value, i) {
            serverQueue.textChannel.send(value.title);
        })

    }

  module.exports = {
    viewQueue
}