import { ClientProvider } from "discord-nestjs";
import { Guild, TextChannel } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum, SpecialGuildEnum } from "enums/guilds";

type LogType = "invite" | "member" | "message";

interface GetChannelToLogParams {
	discordClient: ClientProvider;
	guildId: GuildEnum;
	type: LogType;
}

const getChannelId = (guildId: GuildEnum, type: LogType) => {
	switch (type) {
		case "invite":
			return ChannelEnum[guildId].LOG_INVITE;
		case "member":
			return ChannelEnum[guildId].LOG_MEMBER;
		case "message":
		default:
			return ChannelEnum[guildId].LOG_MESSAGE;
	}
};

export const getChannelToLog = ({
	discordClient,
	guildId,
	type,
}: GetChannelToLogParams) => {
	const guild = discordClient
		.getClient()
		.guilds.cache.get(SpecialGuildEnum.LOGS) as Guild;

	const channelId = getChannelId(guildId, type);

	const channel = guild.channels.cache.get(channelId) as TextChannel;

	return channel;
};
