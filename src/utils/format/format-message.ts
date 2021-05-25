export interface FormatConfig {
	userId?: string;
	userName?: string;
	userCreation?: string;
	userDiscriminator?: string;
	userNickname?: string;
	serverName?: string;
	memberCount?: number;
	guildName?: string;
}

// eslint-disable-next-line complexity
export const formatMessage = (
	text: string,
	{
		userId,
		userName,
		userCreation,
		userDiscriminator,
		userNickname,
		serverName,
		memberCount,
		guildName,
	}: FormatConfig,
) =>
	text
		.replace(/{userId}/g, userId || "")
		.replace(/{userName}/g, userName || "")
		.replace(/{userCreation}/g, userCreation || "")
		.replace(/{userDiscriminator}/g, userDiscriminator || "")
		.replace(/{userNickname}/g, userNickname || "")
		.replace(/{serverName}/g, serverName || "")
		.replace(/{guildName}/g, guildName || "")
		.replace(/{userMention}/g, userId ? `<@${userId}>` : "")
		.replace(/{memberCount}/g, memberCount ? memberCount.toString() : "")
		.replace(
			/{userTag}/g,
			userName && userDiscriminator ? `${userName}#${userDiscriminator}` : "",
		);
