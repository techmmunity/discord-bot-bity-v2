import { GuildMember } from "discord.js";

export const getGuildInvitesUrls = async (member: GuildMember) => {
	const invites = await member.guild.fetchInvites();

	return invites.map(invite => invite.url);
};
