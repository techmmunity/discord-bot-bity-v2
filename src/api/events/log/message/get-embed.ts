import { Message, MessageEmbed } from "discord.js";

import { MessageUtil } from "utils/message";

interface GetEmbedParams {
	message: Message;
	color: string;
	title: string;
}

export const getIsBot = (message: Message) =>
	message.author.bot ? "Yes" : "No";

export const getEmbed = ({ message, title, color }: GetEmbedParams) => {
	const messageContent = [
		"**User ID**: {userId}",
		"**User Tag**: {userTag}",
		"**Nickname**: {userNickname}",
		`**Channel**: <#${message.channel.id}>`,
	].join("\n");

	const formmatedMessage = MessageUtil.formatMessage(message, messageContent);

	const embed = new MessageEmbed()
		.setColor(color)
		.setTitle(title)
		.setDescription(formmatedMessage)
		.setThumbnail(message.author.avatarURL({ dynamic: true }) as string);

	return embed;
};
