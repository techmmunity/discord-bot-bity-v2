import { GuildMember, Role } from "discord.js";

export const getGuildRolesByRolesIds = (
	member: GuildMember,
	roles: Array<string>,
) =>
	roles
		.map(roleId => member.guild.roles.cache.get(roleId))
		.filter(Boolean) as Array<Role>;
