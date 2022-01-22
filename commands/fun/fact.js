const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'fact',
	 aliases: [" "],
  description: "get a fact",
  usage: "fact",
	run: async (client, message, args) => {
		const url = 'https://no-api-key.com/api/v2/facts';

		let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = data.fact;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}

		const embed = new MessageEmbed()

      .setTitle("A random fact for you")
			.setColor('#f3f3f3')
			.setDescription(image)
			.setImage();

		return message.channel.send(embed);
	},
};