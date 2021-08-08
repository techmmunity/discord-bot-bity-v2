import { ClientProvider } from "discord-nestjs";
import { Guild, TextChannel } from "discord.js";

import { MESSAGE } from "./message";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

export const sendSocioReminder = async (
	discordClient: ClientProvider,
	guildId: GuildEnum,
) => {
	const guild = discordClient.getClient().guilds.cache.get(guildId) as Guild;

	const channel = guild.channels.cache.get(
		ChannelEnum[guildId].NETWORKING,
	) as TextChannel;

	await channel.send(MESSAGE);
};
