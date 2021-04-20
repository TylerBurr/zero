const { queue } = require('../utilities/configUtil');
function resume(message) {
    const serverQueue = queue.get(message.guild.id);
      if (!message.member.voice.channel)
          return message.channel.send(
              "You have to be in a voice channel to resume the music!"
            );
      if (!serverQueue)
          return message.channel.send("There is no song that I could resumed!");
      serverQueue.textChannel.send(`Resuming...`);
      serverQueue.connection.dispatcher.resume();
  }

  module.exports = {
    resume
}