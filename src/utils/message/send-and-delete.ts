import { Message, MessageEmbed } from "discord.js";

import { timeUtil } from "utils/time";

export const sendAndDelete = (
	message: Message,
	messageToSend: MessageEmbed | string,
	secondsToWait = 5,
) =>
	message.channel.send(messageToSend).then(async inviteBlockedMessage => {
		await timeUtil.delay(secondsToWait);

		inviteBlockedMessage.delete();
	});
