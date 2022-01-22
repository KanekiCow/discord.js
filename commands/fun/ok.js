const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "ok",
  aliases: [],
  description: "ok",
  usage: "ok",
  run: async (client, message, args) => {
    //Start

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`ok`)
      
    message.channel.send(embed);

    //End
  }
};
