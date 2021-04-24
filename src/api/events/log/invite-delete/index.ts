import { ClientProvider } from "discord-nestjs";
import { Invite } from "discord.js";

import { getChannelToLog } from "../helpers/get-channel-to-log";
import { getInviteEmbed } from "../helpers/get-invite-embed";

import { GuildEnum } from "enums/guilds";

import { Colors } from "assets/colors";

interface InviteDeleteParams {
	DiscordClient: ClientProvider;
	invite: Invite;
}

export const inviteDelete = ({ DiscordClient, invite }: InviteDeleteParams) => {
	const guildId = invite.guild?.id as GuildEnum;

	const channel = getChannelToLog({
		DiscordClient,
		guildId,
		type: "invite",
	});

	const embed = getInviteEmbed({
		invite,
		title: "INVITE DELETE",
		color: Colors.red,
	});

	return channel.send(embed);
};
