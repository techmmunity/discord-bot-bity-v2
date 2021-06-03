import { Message } from "discord.js";

import { makeEmbed } from "./helpers/make-embed";

import { messageUtil } from "utils/message";

import { CHALLENGES } from "config/challenges";

export const getChallenge = async (message: Message) => {
	const challengeId = messageUtil.getArgs(message).shift();

	const challenge = CHALLENGES.find(
		challengeData => challengeData.id === challengeId,
	);

	if (challenge) {
		const embed = makeEmbed(challenge);

		await message.channel.send(embed);

		return;
	}

	await message.channel.send("Challenge not found!");
};
