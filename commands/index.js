
const { PREFIX } = require('../utilities/configUtil')
const execute = require('../controller/execute')
const stop = require('../controller/stop')
const pause = require('../controller/pause')
const skip = require('../controller/skip')
const resume = require('../controller/resume')
const viewQueue = require('../controller/viewQueue')

function start(message) {
  if (message.author.bot) return;
  if (!message.content.startsWith(PREFIX)) return;
  if (message.content.startsWith(`${PREFIX}play`)) {
      const validate = message.content.includes('youtube')
      if (validate == true) {
        execute.execute(message);
      } else {
        message.channel.send("You need to enter a valid Youtube Link.");
      }
    return;
  } else if (message.content.startsWith(`${PREFIX}skip`)) {
    skip.skip(message);
    return;
  } else if (message.content.startsWith(`${PREFIX}stop`)) {
    stop.stop(message);
    return;
  } else if (message.content.startsWith(`${PREFIX}pause`)) {
    pause.pause(message);
    return;
  } else if (message.content.startsWith(`${PREFIX}resume`)) {
    resume.resume(message);
    return;
  } else if (message.content.startsWith(`${PREFIX}queue`)) {
    viewQueue.viewQueue(message);
    return;
  } else if (message.content.startsWith(`${PREFIX}help`)) {
    return message.channel.send(
        "!play {youtube link}\n!pause - Pauses music\n!resume - Resume music\n!stop - Stop music"
      );
  } else {
    message.channel.send("You need to enter a valid command!");
  }
}

module.exports = {
    start
}
