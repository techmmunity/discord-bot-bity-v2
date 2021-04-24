import { GuildMember, Message, MessageEmbed } from "discord.js";

import { MemberUtil } from "utils/member";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

interface SendSuccessEmbedParams {
	message: Message;
	member: GuildMember;
}

export const sendSuccessEmbed = ({
	member,
	message,
}: SendSuccessEmbedParams) => {
	const description = MemberUtil.formatMessage(
		member,
		"Thanks for bump the server {userMention} ({userTag})!",
	);

	const embed = new MessageEmbed()
		.setTitle("Thanks!")
		.setColor(Colors.turquoise)
		.setThumbnail(Images.treasure)
		.setDescription(description)
		.addFields([
			{
				name: "Bytes reward:",
				value: "0",
				inline: true,
			},
			{
				name: "Card progress:",
				value: "0 / 100",
				inline: true,
			},
		]);

	return message.channel.send(embed);
};
