import { ClientProvider } from "discord-nestjs";
import { GuildMember } from "discord.js";

import { getChannelToLog } from "../helpers/get-channel-to-log";
import { getEmbed } from "./get-embed";

import { GuildEnum } from "enums/guilds";

interface MemberParams {
	discordClient: ClientProvider;
	memberData: GuildMember;
	title: string;
	color: string;
}

export const member = ({
	discordClient,
	memberData,
	title,
	color,
}: MemberParams) => {
	const guildId = memberData.guild?.id as GuildEnum;

	const channel = getChannelToLog({
		discordClient,
		guildId,
		type: "member",
	});

	const embed = getEmbed({
		title,
		color,
		member: memberData,
	});

	return channel.send(embed);
};
