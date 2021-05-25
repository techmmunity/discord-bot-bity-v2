import { Message, MessageEmbed } from "discord.js";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

interface SendStartEmbedParams {
	message: Message;
	emojisCreatedQtd: number;
}

export const sendEndEmbed = async ({
	message,
	emojisCreatedQtd,
}: SendStartEmbedParams) => {
	const embed = new MessageEmbed()
		.setColor(Colors.green)
		.setTitle("Done!")
		.setDescription("All done!")
		.addFields([
			{
				name: "Emojis Created:",
				value: emojisCreatedQtd,
				inline: true,
			},
		])
		.setThumbnail(Images.bityGif);

	return message.channel.send(embed);
};
