import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

export class SuggestionGuard implements DiscordGuard {
	// eslint-disable-next-line require-await
	public async canActive(_: keyof ClientEvents, [context]: [Message]) {
		const isBot = context.author.bot;

		if (isBot) return false;

		const guildId = context.guild?.id as GuildEnum;
		const channelId = context.channel.id;

		const suggestionsChannelId = ChannelEnum[guildId].SUGGESTIONS;

		return channelId === suggestionsChannelId;
	}
}
