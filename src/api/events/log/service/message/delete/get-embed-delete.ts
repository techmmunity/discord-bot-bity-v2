import { Message, MessageEmbed } from "discord.js";

import { messageUtil } from "utils/message";

interface GetEmbedDeleteParams {
	message: Message;
	color: string;
	title: string;
}

export const getIsBot = (message: Message) =>
	message.author.bot ? "Yes" : "No";

export const getEmbedDelete = ({
	message,
	title,
	color,
}: GetEmbedDeleteParams) => {
	const messageContent = [
		"**User ID**: {userId}",
		"**User Tag**: {userTag}",
		"**Nickname**: {userNickname}",
		`**Channel**: <#${message.channel.id}>`,
	].join("\n");

	const formmatedMessage = messageUtil.formatMessage(message, messageContent);

	const messageToSend = `${formmatedMessage}\n**Message**:\n${message.content}`;

	const embed = new MessageEmbed()
		.setColor(color)
		.setTitle(title)
		.setDescription(messageToSend)
		.setThumbnail(message.author.avatarURL({ dynamic: true }) as string);

	return embed;
};
