import { ClientProvider } from "discord-nestjs";
import { Invite } from "discord.js";

import { getChannelToLog } from "../helpers/get-channel-to-log";
import { getEmbed } from "./get-embed";

import { GuildEnum } from "enums/guilds";

interface InviteParams {
	discordClient: ClientProvider;
	invite: Invite;
	title: string;
	color: string;
}

export const inviteLog = ({
	discordClient,
	invite,
	title,
	color,
}: InviteParams) => {
	const guildId = invite.guild?.id as GuildEnum;

	const channel = getChannelToLog({
		discordClient,
		guildId,
		type: "invite",
	});

	const embed = getEmbed({
		invite,
		title,
		color,
	});

	return channel.send(embed);
};
