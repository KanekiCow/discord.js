const axios = require('axios');
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'cat',
	 aliases: [" "],
  description: "cat thingy",
  usage: "cat",
	run: async (client, message, args) => {
		const url = 'https://cataas.com/cat?json=true';

			let image;
		try {
			const { data } = await axios.get(url);
			console.log(data);
			image = "https://cataas.com/"+ data.url;
		} catch (e) {
			return message.channel.send('An error occured, please try again!');
		}

    

		const embed = new MessageEmbed()
			.setTitle('Random Cat girl Image')
			.setColor('#f3f3f3')
			.setImage(image);



		return message.channel.send(embed);
	},
};