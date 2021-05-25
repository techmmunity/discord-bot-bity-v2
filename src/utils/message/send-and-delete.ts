import { Message, MessageEmbed } from "discord.js";

import { TimeUtil } from "utils/time";

export const sendAndDelete = (
	message: Message,
	messageToSend: string | MessageEmbed,
	secondsToWait = 5,
) =>
	message.channel.send(messageToSend).then(async inviteBlockedMessage => {
		await TimeUtil.delay(secondsToWait);

		inviteBlockedMessage.delete();
	});
