const { queue } = require('../utilities/configUtil');
function skip(message, serverQueue) {
  const serverQueue = queue.get(message.guild.id);
    if (!message.member.voice.channel)
      return message.channel.send(
        "You have to be in a voice channel to stop the music!"
      );
    if (!serverQueue)
      return message.channel.send("There is no song that I could skip!");
    serverQueue.connection.dispatcher.end();
  }

module.exports = {
  skip
}