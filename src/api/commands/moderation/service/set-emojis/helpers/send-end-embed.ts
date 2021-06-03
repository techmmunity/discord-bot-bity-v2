import { Message, MessageEmbed } from "discord.js";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

interface SendStartEmbedParams {
	message: Message;
	emojisCreatedQtd: number;
}

export const sendEndEmbed = ({
	message,
	emojisCreatedQtd,
}: SendStartEmbedParams) => {
	const embed = new MessageEmbed()
		.setColor(COLORS.green)
		.setTitle("Done!")
		.setDescription("All done!")
		.addFields([
			{
				name: "Emojis Created:",
				value: emojisCreatedQtd,
				inline: true,
			},
		])
		.setThumbnail(IMAGES.bityGif);

	return message.channel.send(embed);
};
