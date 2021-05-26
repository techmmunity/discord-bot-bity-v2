import { Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";

export const incrementBumps = async (
	BumpRepository: BumpRepository,
	message: Message,
) => {
	const userId = message.mentions.users.first()?.id;

	if (!userId) return 0;

	const userBump = await BumpRepository.findOne({
		discordUserId: userId,
	});

	if (userBump) {
		await BumpRepository.update(
			{
				discordUserId: userId,
			},
			{
				bumps: userBump.bumps + 1,
			},
		);

		return userBump.bumps + 1;
	}

	await BumpRepository.save({
		discordUserId: userId,
		bumps: 1,
	});

	return 1;
};
