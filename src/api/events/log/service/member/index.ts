import { ClientProvider } from "discord-nestjs";
import { GuildMember } from "discord.js";

import { getChannelToLog } from "../helpers/get-channel-to-log";
import { getEmbed } from "./get-embed";

import { GuildEnum } from "enums/guilds";

interface MemberParams {
	DiscordClient: ClientProvider;
	member: GuildMember;
	title: string;
	color: string;
}

export const member = ({
	DiscordClient,
	member,
	title,
	color,
}: MemberParams) => {
	const guildId = member.guild?.id as GuildEnum;

	const channel = getChannelToLog({
		DiscordClient,
		guildId,
		type: "member",
	});

	const embed = getEmbed({
		title,
		color,
		member,
	});

	return channel.send(embed);
};
