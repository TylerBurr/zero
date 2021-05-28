const { prefix, queue } = require('../utilities/configUtil');
const execute = require('../controller/execute');
const stop = require('../controller/stop');
const pauseMusic = require('../controller/pause');
const skip = require('../controller/skip');
const resumeMusic = require('../controller/resume');
const viewQueue = require('../controller/viewQueue');
const nowplaying = require('../controller/nowplaying');
const search = require('../controller/search');
const help = require('../controller/help')

function start(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
  if (message.content.startsWith(`${prefix}play`)) {
    const validate = message.content.includes('https://youtube.com');
    if (validate == true) {
      execute.execute(message);
    } else if (
      message.content.includes('https://open.spotify.com') ||
      message.content.includes('https://soundcloud.com') ||
      message.content.includes('https://music.apple.com')
    ) {
      return message.channel.send(
        'We not support Spotify, Soundcloud & Apple Music we are actively working to support this. :)'
      );
    } else {
      search.search(message);
      return;
    }
  } else if (message.content.startsWith(`${prefix}skip`)) {
    skip.skip(message);
    return;
  } else if (message.content.startsWith(`${prefix}stop`)) {
    stop.stop(message);
    return;
  } else if (message.content.startsWith(`${prefix}pause`)) {
    pauseMusic.pauseMusic(message);
    return;
  } else if (message.content.startsWith(`${prefix}resume`)) {
    resumeMusic.resumeMusic(message);
    return;
  } else if (message.content.startsWith(`${prefix}queue`)) {
    viewQueue.viewQueue(message)
    return;
  } else if (message.content.startsWith(`${prefix}nowplaying`)) {
    nowplaying.nowplaying(message);
    return;
  } else if (message.content.startsWith(`${prefix}help`)) {
    help.help()
    return;
  } else {
    message.channel.send(
      `You need to enter a valid command!\n Use ${prefix}help for a list of Commands`
    );
  }
}

module.exports = {
  start,
};
