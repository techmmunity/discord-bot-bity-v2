import { ClientProvider } from "discord-nestjs";
import { Guild, Invite, TextChannel } from "discord.js";

import { getEmbed } from "./helpers/get-embed";

import { ChannelEnum } from "enums/channels";
import { GuildEnum, SpecialGuildEnum } from "enums/guilds";

import { getActiveGuilds } from "config/active-guilds";

interface InviteCreatedParams {
	DiscordClient: ClientProvider;
	invite: Invite;
}

const notShouldCollectLogs = (invite: Invite) =>
	!getActiveGuilds().includes(invite.guild?.id as GuildEnum);

export const inviteCreated = ({
	DiscordClient,
	invite,
}: InviteCreatedParams) => {
	if (notShouldCollectLogs(invite)) return;

	const currentGuildId = invite.guild?.id as GuildEnum;

	const guildToLog = DiscordClient.getClient().guilds.cache.get(
		SpecialGuildEnum.LOGS,
	) as Guild;

	const channel = guildToLog.channels.cache.get(
		ChannelEnum[currentGuildId].LOG_INVITE,
	) as TextChannel;

	const embed = getEmbed(invite);

	return channel.send(embed);
};
