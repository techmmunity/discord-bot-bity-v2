import { GuildMember, Message, MessageEmbed } from "discord.js";

import { memberUtil } from "utils/member";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

interface SendSuccessEmbedParams {
	message: Message;
	member: GuildMember;
	userBumpsTotal: number;
}

export const sendSuccessEmbed = ({
	member,
	message,
	userBumpsTotal,
}: SendSuccessEmbedParams) => {
	const description = memberUtil.formatMessage(
		member,
		"Thanks for bump the server {userMention} ({userTag})!",
	);

	const embed = new MessageEmbed()
		.setTitle("Thanks!")
		.setColor(COLORS.turquoise)
		.setThumbnail(IMAGES.treasure)
		.setDescription(description)
		.addFields([
			{
				name: "Bytes reward:",
				value: "0",
				inline: true,
			},
			{
				name: "Card progress:",
				value: `${userBumpsTotal} / 100`,
				inline: true,
			},
		]);

	return message.channel.send(embed);
};
