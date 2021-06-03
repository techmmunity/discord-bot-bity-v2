import { GuildMember, Message } from "discord.js";
import { BumpRepository } from "entities/bump.entity";

import { incrementBumps } from "./helpers/increment-bumps";
import { sendDoesntHasRoleEmbed } from "./helpers/send-doest-have-role-embed";
import { sendSuccessEmbed } from "./helpers/send-sucess-embed";

import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

const getBumpRole = (member: GuildMember) => {
	const guildId = member.guild.id as GuildEnum;

	const bumpRole = member.roles.cache.get(RolesEnum[guildId].BUMP);

	return bumpRole;
};

export const success = async (
	bumpRepository: BumpRepository,
	message: Message,
) => {
	const member = message.mentions.members?.first();

	if (!member) return;

	const bumpRole = getBumpRole(member);

	const promises: Array<Promise<any>> = [];

	const deleteBotMessagePromise = message.delete();

	promises.push(deleteBotMessagePromise);

	if (bumpRole) {
		const userBumpsTotal = await incrementBumps(bumpRepository, message);

		const succesMessagePromise = sendSuccessEmbed({
			message,
			member,
			userBumpsTotal,
		});

		promises.push(succesMessagePromise);
	} else {
		const doesntHasRolePromise = sendDoesntHasRoleEmbed({
			message,
		});

		promises.push(doesntHasRolePromise);
	}

	return Promise.all(promises);
};
