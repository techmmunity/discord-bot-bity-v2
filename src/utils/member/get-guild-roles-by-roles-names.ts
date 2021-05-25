import { GuildMember, Role } from "discord.js";

export const getGuildRolesByRolesNames = (
	member: GuildMember,
	roles: Array<string>,
) =>
	roles
		.map(roleName =>
			member.guild.roles.cache.find(role => role.name === roleName),
		)
		.filter(Boolean) as Array<Role>;
