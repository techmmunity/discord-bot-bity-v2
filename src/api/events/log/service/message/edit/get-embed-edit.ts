import { Message, MessageEmbed } from "discord.js";

import { MessageUtil } from "utils/message";

interface GetEmbedEditParams {
	oldMessage: Message;
	newMessage: Message;
	color: string;
	title: string;
}

export const getIsBot = (message: Message) =>
	message.author.bot ? "Yes" : "No";

export const getEmbedEdit = ({
	oldMessage,
	newMessage,
	title,
	color,
}: GetEmbedEditParams) => {
	const messageContent = [
		"**User ID**: {userId}",
		"**User Tag**: {userTag}",
		"**Nickname**: {userNickname}",
		`**Channel**: <#${newMessage.channel.id}>`,
	].join("\n");

	const formmatedMessage = MessageUtil.formatMessage(
		newMessage,
		messageContent,
	);

	const oldMessageToSend = "\n**Old Message**:\n" + oldMessage.content;
	const newMessageToSend = "\n\n**New Message**:\n" + newMessage.content;

	const messageToSend = formmatedMessage + oldMessageToSend + newMessageToSend;

	const embed = new MessageEmbed()
		.setColor(color)
		.setTitle(title)
		.setDescription(messageToSend)
		.setThumbnail(newMessage.author.avatarURL({ dynamic: true }) as string);

	return embed;
};
