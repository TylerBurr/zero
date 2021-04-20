const Discord = require("discord.js");
const client = new Discord.Client();
const { TOKEN } = require('./utilities/configUtil')
const command = require('./commands/index')

client.once("ready", (message) => {
  console.log("Bot ready to play music!");
});

client.once("reconnecting", () => {
  console.log("Reconnecting!");
});

client.once("disconnect", () => {
  console.log("Disconnect!");
});

client.on("message", async message => {
  command.start(message)
});

client.login(TOKEN);