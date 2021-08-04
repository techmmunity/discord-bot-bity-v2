import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";

import { incrementBumps } from "./helpers/increment-bumps";
import { sendSuccessEmbed } from "./helpers/send-sucess-embed";

export const success = async (
	bumpRepository: BumpRepository,
	message: Message,
) => {
	const member = message.mentions.members?.first();

	if (!member) return;

	const promises: Array<Promise<any>> = [];

	const deleteBotMessagePromise = message.delete();

	promises.push(deleteBotMessagePromise);

	const userBumpsTotal = await incrementBumps(bumpRepository, message);

	const successMessagePromise = sendSuccessEmbed({
		message,
		member,
		userBumpsTotal,
	});

	promises.push(successMessagePromise);

	return Promise.all(promises);
};
