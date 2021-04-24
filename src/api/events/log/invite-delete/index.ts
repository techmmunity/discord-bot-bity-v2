import { ClientProvider } from "discord-nestjs";
import { Guild, Invite, TextChannel } from "discord.js";

import { getEmbed } from "../helpers/get-embed";
import { notShouldCollectLogs } from "../helpers/not-should-collect-logs";

import { ChannelEnum } from "enums/channels";
import { GuildEnum, SpecialGuildEnum } from "enums/guilds";

interface InviteDeleteParams {
	DiscordClient: ClientProvider;
	invite: Invite;
}

export const inviteDelete = ({ DiscordClient, invite }: InviteDeleteParams) => {
	if (notShouldCollectLogs(invite.guild)) return;

	const currentGuildId = invite.guild?.id as GuildEnum;

	const guildToLog = DiscordClient.getClient().guilds.cache.get(
		SpecialGuildEnum.LOGS,
	) as Guild;

	const channel = guildToLog.channels.cache.get(
		ChannelEnum[currentGuildId].LOG_INVITE,
	) as TextChannel;

	const embed = getEmbed(invite, "INVITE CREATED");

	return channel.send(embed);
};
