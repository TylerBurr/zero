const { queue } = require('../utilities/configUtil');
function pause(message) {
    const serverQueue = queue.get(message.guild.id);
        if (!message.member.voice.channel)
            return message.channel.send(
                "You have to be in a voice channel to pause the music!"
              );
        if (!serverQueue)
            return message.channel.send("There is no song that I could pause!");
        serverQueue.textChannel.send(`Pausing...`);
        serverQueue.connection.dispatcher.pause(true);
    }

  module.exports = {
    pause
}