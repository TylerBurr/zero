
const { prefix, help } = require('../utilities/configUtil')
const execute = require('../controller/execute')
const stop = require('../controller/stop')
const pause = require('../controller/pause')
const skip = require('../controller/skip')
const resume = require('../controller/resume')
const viewQueue = require('../controller/viewQueue')
const nowplaying = require('../controller/nowplaying')
const search = require('../controller/search')

function start(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(`${prefix}play`)) {
      const validate = message.content.includes('https://youtube.com')
      if (validate == true) {
        execute.execute(message);
      } 
      else if (message.content.includes('https://open.spotify.com/') || message.content.includes('https://soundcloud.com') || message.content.includes('https://music.apple.com' )) {
        return message.channel.send('We are adding support for Spotify, Soundcloud & Apple Music')
      } 
      else {
        search.search(message)
        return;
      }
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip.skip(message);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop.stop(message);
    return;
  } else if (message.content.startsWith(`${prefix}pause`)) {
    pause.pause(message);
    return;
  } else if (message.content.startsWith(`${prefix}resume`)) {
    resume.resume(message);
    return;
  } else if (message.content.startsWith(`${prefix}queue`)) {
    viewQueue.viewQueue(message);
    return;
  } else if (message.content.startsWith(`${prefix}nowplaying`)) {
    nowplaying.nowplaying(message);
    return;
  } else if (message.content.startsWith(`${prefix}help`)) {
    return message.channel.send({ embed: help });
  } else {
    message.channel.send(`You need to enter a valid command!\n Use ${prefix}help for a list of Commands`);
  }
}

module.exports = {
    start
}
