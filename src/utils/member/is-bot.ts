import { GuildMember, PartialGuildMember } from "discord.js";

export const isBot = async (member: GuildMember | PartialGuildMember) => {
	let memberWithAllInformations = member as GuildMember;

	if (member.partial) {
		memberWithAllInformations = await member.fetch();
	}

	return memberWithAllInformations.user.bot;
};
