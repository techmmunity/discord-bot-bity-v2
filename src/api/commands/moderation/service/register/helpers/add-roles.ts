import { GuildMember, Role } from "discord.js";

import { getRoles, getForeignRoles, Seniority } from "../roles";

import { Flags } from "utils/message";

import { GuildEnum } from "enums/guilds";

interface AddRolesParams {
	member: GuildMember;
	guildId: GuildEnum;
	flags: Flags;
	seniority: Seniority;
}

interface GetMemberRolesParams {
	guildId: GuildEnum;
	flags: Flags;
	seniority: Seniority;
}

const getMemberRoles = ({
	guildId,
	flags,
	seniority,
}: GetMemberRolesParams) => {
	const { dev, graphic, sound, robotic, management } = flags;

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
		default:
			return getRoles(guildId, seniority);
	}
};

export const addRoles = ({
	guildId,
	flags,
	member,
	seniority,
}: AddRolesParams) => {
	const roles = getMemberRoles({ guildId, flags, seniority });

	const rolesToAdd = roles.map(
		roleId => member.guild.roles.cache.get(roleId) as Role,
	);

	return member.roles.add(rolesToAdd);
};
