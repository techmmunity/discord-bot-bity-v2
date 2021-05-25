import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";

export const incrementBumps = async (
	BumpRepository: BumpRepository,
	message: Message,
) => {
	const userBump = await BumpRepository.findOne({
		discordUserId: message.author.id,
	});

	if (userBump) {
		await BumpRepository.update(
			{
				discordUserId: message.author.id,
			},
			{
				bumps: userBump.bumps + 1,
			},
		);

		return userBump.bumps + 1;
	}

	await BumpRepository.save({
		discordUserId: message.author.id,
		bumps: 1,
	});

	return 1;
};
