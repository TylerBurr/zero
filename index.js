const Discord = require("discord.js");
const client = new Discord.Client();
const { token } = require('./utilities/configUtil')
const { prefix } = require('./utilities/configUtil')
const { presence } = require('./utilities/configUtil')
const command = require('./commands/index')

client.once("ready", (message) => {
  client.user.setActivity(prefix + "help  ", { type: "LISTENING" });
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

client.login(token);