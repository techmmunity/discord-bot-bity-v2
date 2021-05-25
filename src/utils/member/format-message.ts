import { GuildMember, PartialGuildMember } from "discord.js";

import { FormatUtil } from "utils/format";
import { TimeUtil } from "utils/time";

export const formatMessage = (
	member: GuildMember | PartialGuildMember,
	text: string,
) => {
	// User
	const userId = member.user?.id as string;
	const userName = member.user?.username as string;
	const userDiscriminator = member.user?.discriminator as string;
	const userNickname = member.displayName;
	const userCreation = member.user?.createdAt
		? TimeUtil.getDateFormatted(member.user?.createdAt)
		: "";

	// Server
	const serverName = member.guild.name;
	const memberCount = member.guild.memberCount;

	// Guild
	const guildName = member.guild.name;

	return FormatUtil.formatMessage(text, {
		userId,
		userName,
		userDiscriminator,
		userNickname,
		userCreation,
		serverName,
		guildName,
		memberCount,
	});
};
