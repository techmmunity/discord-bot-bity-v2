import { GuildMember } from "discord.js";

export const getGuildMemberCount = (member: GuildMember) => {
	const guild = member.guild;

	const memberCount = guild.members.cache.filter(member => !member.user.bot)
		.size;

	return memberCount;
};
