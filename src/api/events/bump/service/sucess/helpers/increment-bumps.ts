import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";

export const incrementBumps = async (
	bumpRepository: BumpRepository,
	message: Message,
) => {
	const userId = message.mentions.users.first()?.id;

	if (!userId) return 0;

	const userBump = await bumpRepository.findOne({
		discordUserId: userId,
	});

	if (userBump) {
		await bumpRepository.update(
			{
				discordUserId: userId,
			},
			{
				bumps: userBump.bumps + 1,
			},
		);

		return userBump.bumps + 1;
	}

	await bumpRepository.save({
		discordUserId: userId,
		bumps: 1,
	});

	return 1;
};
