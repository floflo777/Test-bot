const Discord = require("discord.js");
const client = new Discord.Client();

const datas = require("./datas.json");
client.datas = datas

const fs = require("fs");
const path = require("path");

client.login(process.env.TOKEN);
console.log("Test-bot is on");

client.on("message", message => {
  if (message.content.startsWith("!test")) {
    message.channel.send("ok");
    fs.appendFile('./datas.json', JSON.stringify("donnees"), (err) => {
      if (err) {
        throw err;
      }
      console.log("Test-bot datas file is updated.");
    });
  }
});
