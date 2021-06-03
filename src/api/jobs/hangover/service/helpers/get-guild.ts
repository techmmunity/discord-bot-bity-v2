import { ClientProvider } from "discord-nestjs";
import { Guild } from "discord.js";

export const getGuild = (discordClient: ClientProvider, guildId: string) => {
	return discordClient.getClient().guilds.cache.get(guildId) as Guild;
};
