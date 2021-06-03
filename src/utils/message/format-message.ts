import { Message, PartialMessage } from "discord.js";

import { formatUtil } from "utils/format";
import { timeUtil } from "utils/time";

export const formatMessage = (
	message: Message | PartialMessage,
	text: string,
) => {
	// User
	const userId = message.author?.id;
	const userName = message.author?.username;
	const userDiscriminator = message.author?.discriminator;
	const userNickname = message.member?.displayName;
	const userCreation = message.author?.createdAt
		? timeUtil.getDateFormatted(message.author?.createdAt)
		: "";

	// Server
	const serverName = message.guild?.name;
	const memberCount = message.guild?.memberCount;

	// Guild
	const guildName = message.guild?.name;

	return formatUtil.formatMessage(text, {
		userId,
		userName,
		userDiscriminator,
		userNickname,
		userCreation,
		serverName,
		memberCount,
		guildName,
	});
};
