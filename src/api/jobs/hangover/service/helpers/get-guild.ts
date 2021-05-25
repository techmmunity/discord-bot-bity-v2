import { ClientProvider } from "discord-nestjs";
import { Guild } from "discord.js";

export const getGuild = (DiscordClient: ClientProvider, guildId: string) => {
	return DiscordClient.getClient().guilds.cache.get(guildId) as Guild;
};
