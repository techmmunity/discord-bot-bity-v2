import { Message, MessageEmbed } from "discord.js";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

export const ping = async (message: Message) => {
	const embed = new MessageEmbed()
		.setTitle("Pong!")
		.setColor(Colors.blue)
		.setThumbnail(Images.lattency)
		.addField("Bot Latency", `${Date.now() - message.createdTimestamp}ms`);

	await message.channel.send(embed);
};
