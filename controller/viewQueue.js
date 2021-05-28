const { queue } = require('../utilities/configUtil');
const Discord = require('discord.js');

function viewQueue(message) {
  const serverQueue = queue.get(message.guild.id);
  if (!message.member.voice.channel)
    return message.channel.send(
      'You have to be in a voice channel to view the queue!'
    );
  if (!serverQueue) return message.channel.send('Unable to queue a song!');

  const songQueue = serverQueue.songs.map((song, index) => {
    return {
      name: '\u200b',
      value: `${index + 1} ) ${song.title}`,
    };
  });

  return new Discord.MessageEmbed()
    .setColor('#4a4e69')
    .setAuthor(
      'ZERO',
      'https://i.imgur.com/wSTFkRM.png',
      'https://discord.js.org'
    )
    .setTitle('Song Queue')
    .addFields(...songQueue)
    .addField('\u200b', 'End of queue')
    .addField('\u200b', '\u200b')
    .setFooter(
      'https://github.com/TylerBurr/zero',
      'https://i.imgur.com/wSTFkRM.png'
    );
}

module.exports = {
  viewQueue,
};
