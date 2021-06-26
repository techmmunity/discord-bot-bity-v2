import { GuildMember, Role } from "discord.js";

import { getRoles, getForeignRoles } from "../roles";

import { Flags } from "utils/message";

import { GuildEnum } from "enums/guilds";

interface AddRolesParams {
	member: GuildMember;
	guildId: GuildEnum;
	flags: Flags;
}

interface GetMemberRolesParams {
	guildId: GuildEnum;
	flags: Flags;
}

const getMemberRoles = ({ guildId, flags }: GetMemberRolesParams) => {
	const { dev, graphic, sound, robotic, management, marketing } = flags;

	switch (true) {
		case dev && guildId !== GuildEnum.DEV:
			return getForeignRoles(guildId, "PROGRAMMING");
		case graphic && guildId !== GuildEnum.GRAPHIC:
			return getForeignRoles(guildId, "GRAPHIC");
		case sound && guildId !== GuildEnum.SOUND:
			return getForeignRoles(guildId, "SOUND");
		case robotic && guildId !== GuildEnum.ROBOTIC:
			return getForeignRoles(guildId, "ROBOTIC");
		case management && guildId !== GuildEnum.MANAGEMENT:
			return getForeignRoles(guildId, "MANAGEMENT");
		case marketing && guildId !== GuildEnum.MARKETING:
			return getForeignRoles(guildId, "MARKETING");
		default:
			return getRoles(guildId);
	}
};

export const addRoles = ({ guildId, flags, member }: AddRolesParams) => {
	const roles = getMemberRoles({ guildId, flags });

	const rolesToAdd = roles.map(
		roleId => member.guild.roles.cache.get(roleId) as Role,
	);

	return member.roles.add(rolesToAdd);
};
