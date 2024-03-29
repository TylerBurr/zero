const ytdl = require("ytdl-core");
const sleep = require('../utilities/functionUtil')
const { STAY_TIME } = require('../utilities/configUtil')
const { queue } = require('../utilities/configUtil');

const Discord = require('discord.js');

async function execute(message) {
    const serverQueue = queue.get(message.guild.id);
    const args = message.content.split(" ");
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel)
      return message.channel.send(
        "You need to be in a voice channel to play music!"
      );
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if (!permissions.has("CONNECT") || !permissions.has("SPEAK")) {
      return message.channel.send(
        "I need the permissions to join and speak in your voice channel!"
      );
    }

    const songInfo = await ytdl.getInfo(args[1]);
    const song = {
          title: songInfo.videoDetails.title,
          url: songInfo.videoDetails.video_url,
     };

    if (!serverQueue) {
      const queueContruct = {
        textChannel: message.channel,
        voiceChannel: voiceChannel,
        connection: null,
        songs: [],
        volume: 5,
        playing: true
      };

      queue.set(message.guild.id, queueContruct);
      queueContruct.songs.push(song);
      try {
        const connection = await voiceChannel.join();
        queueContruct.connection = connection;
        play(message.guild, queueContruct.songs[0]);
      } catch (err) {
        console.log(err);
        queue.delete(message.guild.id);
        return message.channel.send(err);
      }
    } else {
      serverQueue.songs.push(song);
      console.log(`${song.title} has been added to the queue!`)
      return message.channel.send(`${song.title} has been added to the queue!`);
    }
  }

function play(guild, song) {
    const serverQueue = queue.get(guild.id);
    if (!song) {
      sleep.sleep(STAY_TIME).then(() => {
        serverQueue.voiceChannel.leave();
        queue.delete(guild.id);
      });
      return;
    }
    const dispatcher = serverQueue.connection
      .play(ytdl(song.url))
      .on("finish", () => {
        serverQueue.songs.shift();
        play(guild, serverQueue.songs[0]);
      })
      .on("error", error => console.error(error));
    dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
    console.log(`Start playing: **${song.title}**`)
    const nowPlaying = new Discord.MessageEmbed()
        .setColor('#22e335')
        .setAuthor('ZERO', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .addFields(
            { name: 'Now Playing', value: `${song.title}`, inline: true},
        )
        .setTimestamp()
    serverQueue.textChannel.send({ embed: nowPlaying });
    }
    

  module.exports = {
    execute,
}

