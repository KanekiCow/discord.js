const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const { Color } = require("../../config.js");

module.exports = {
  name: "egg",
  aliases: [],
  description: "egg",
  usage: "egg",
  run: async (client, message, args) => {
    //Start

    const embed = new MessageEmbed()
      .setColor(Color)
      .setDescription(`egg`)
      	.setImage("https://upload.wikimedia.org/wikipedia/en/5/58/Instagram_egg.jpg");
      
    message.channel.send(embed);

    //End
  }
};
