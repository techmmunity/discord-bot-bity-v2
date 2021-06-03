import { Message, MessageEmbed } from "discord.js";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

export const ping = async (message: Message) => {
	const embed = new MessageEmbed()
		.setTitle("Pong!")
		.setColor(COLORS.blue)
		.setThumbnail(IMAGES.lattency)
		.addField("Bot Latency", `${Date.now() - message.createdTimestamp}ms`);

	await message.channel.send(embed);
};
