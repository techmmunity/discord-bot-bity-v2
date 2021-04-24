import { GuildMember, MessageEmbed } from "discord.js";

import { MemberUtil } from "utils/member";

interface GetEmbedParams {
	member: GuildMember;
	color: string;
	title: string;
}

export const getIsBot = (member: GuildMember) =>
	member.user.bot ? "Yes" : "No";

export const getMemberEmbed = ({ member, title, color }: GetEmbedParams) => {
	const isBot = getIsBot(member);

	const message = [
		"**ID**: {userId}",
		"**Tag**: {userTag}",
		"**Name**: {userName}",
		"**Nickname**: {userNickname}",
		`**Bot**: ${isBot}`,
		"**Creation**: {userCreation}",
	].join("\n");

	const formmatedMessage = MemberUtil.formatMessage(member, message);

	const embed = new MessageEmbed()
		.setColor(color)
		.setTitle(title)
		.setDescription(formmatedMessage)
		.setThumbnail(member.user.avatarURL({ dynamic: true }) as string);

	return embed;
};
