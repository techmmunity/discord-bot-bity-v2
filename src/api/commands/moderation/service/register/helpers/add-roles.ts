import { GuildMember, Role } from "discord.js";

import { getRoles, getForeignRoles } from "../roles";

import { Flags } from "utils/message";

import { GuildEnum } from "enums/guilds";

const getMemberRoles = (guildId: GuildEnum, flags: Flags) => {
	const { dev, graphic, sound, robotic, management } = flags;

	switch (true) {
		case dev && guildId !== GuildEnum.PROGRAMMING:
			return getForeignRoles(guildId, "PROGRAMMING");
		case graphic && guildId !== GuildEnum.GRAPHIC:
			return getForeignRoles(guildId, "GRAPHIC");
		case sound && guildId !== GuildEnum.SOUND:
			return getForeignRoles(guildId, "SOUND");
		case robotic && guildId !== GuildEnum.ROBOTIC:
			return getForeignRoles(guildId, "ROBOTIC");
		case management && guildId !== GuildEnum.MANAGEMENT:
			return getForeignRoles(guildId, "MANAGEMENT");
		default:
			return getRoles(guildId);
	}
};

export const addRoles = (
	member: GuildMember,
	guildId: GuildEnum,
	flags: Flags,
) => {
	const roles = getMemberRoles(guildId, flags);

	const rolesToAdd = roles.map(
		roleId => member.guild.roles.cache.get(roleId) as Role,
	);

	return member.roles.add(rolesToAdd);
};
