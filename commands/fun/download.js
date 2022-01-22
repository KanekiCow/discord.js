const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "download",
  aliases: [],
  description: "Download valaint",
  usage: "download",
  run: async (client, message, args) => {
    //Start

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`Valiant Download
Valiant website https://valiantexecutor.000webhostapp.com/Home.html
Cheatsquad.gg https://cheatsquad.gg/cheat/6nt0nX
Pandatechnology https://pandatechnology.xyz/Exploits/ValiantFree`)
      .setFooter(`Requested By ${message.author.username}`)
      .setTimestamp();

    message.channel.send(embed);

    //End
  }
};
