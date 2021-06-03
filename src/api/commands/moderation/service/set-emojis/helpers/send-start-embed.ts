import { Message, MessageEmbed } from "discord.js";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

export const sendStartEmbed = async (message: Message) => {
	const embed = new MessageEmbed()
		.setColor(COLORS.turquoise)
		.setTitle("Please, wait!")
		.setDescription(
			"I still processing this command, please, wait a little bit.",
		)
		.setThumbnail(IMAGES.bityGif);

	await message.channel.send(embed);
};
