import { Message } from "discord.js";

import { makeEmbed } from "./helpers/make-embed";

import { MessageUtil } from "utils/message";

import { Challenges } from "config/challenges";

export const getChallenge = async (message: Message) => {
	const challengeId = MessageUtil.getArgs(message).shift();

	const challenge = Challenges.find(challenge => challenge.id === challengeId);

	if (challenge) {
		const embed = makeEmbed(challenge);

		await message.channel.send(embed);

		return;
	}

	await message.channel.send("Challenge not found!");
};
