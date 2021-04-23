import { Collection, Guild, GuildMember } from "discord.js";

const removeBots = (members: Collection<string, GuildMember>) =>
	members.filter(member => !member.user.bot);

export const getRolesByMember = async (guild: Guild) => {
	const members = await guild.members.fetch();

	const guildMembers = removeBots(members);

	const rolesIdsByMember = guildMembers.map(member =>
		member.roles.cache.map(role => role.id),
	);

	return rolesIdsByMember;
};
