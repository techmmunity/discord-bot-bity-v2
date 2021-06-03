import { ClientProvider } from "discord-nestjs";
import { Message } from "discord.js";

import { getChannelToLog } from "../../helpers/get-channel-to-log";

import { GuildEnum } from "enums/guilds";

interface GetChannelParams {
	discordClient: ClientProvider;
	message?: Message;
	newMessage?: Message;
}

export const getChannel = ({
	discordClient,
	message,
	newMessage,
}: GetChannelParams) => {
	const guildId = (message?.guild?.id || newMessage?.guild?.id) as GuildEnum;

	return getChannelToLog({
		discordClient,
		guildId,
		type: "message",
	});
};
