import { ClientProvider } from "discord-nestjs";
import { Message } from "discord.js";

import { getChannelToLog } from "../../helpers/get-channel-to-log";

import { GuildEnum } from "enums/guilds";

interface GetChannelParams {
	DiscordClient: ClientProvider;
	message?: Message;
	newMessage?: Message;
}

export const getChannel = ({
	DiscordClient,
	message,
	newMessage,
}: GetChannelParams) => {
	const guildId = (message?.guild?.id || newMessage?.guild?.id) as GuildEnum;

	return getChannelToLog({
		DiscordClient,
		guildId,
		type: "message",
	});
};
