import { Message, MessageEmbed } from "discord.js";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

export const sendStartEmbed = async (message: Message) => {
	const embed = new MessageEmbed()
		.setColor(Colors.turquoise)
		.setTitle("Please, wait!")
		.setDescription(
			"I still processing this command, please, wait a little bit.",
		)
		.setThumbnail(Images.bityGif);

	await message.channel.send(embed);
};
