import { ClientProvider } from "discord-nestjs";
import { Guild } from "discord.js";
export declare const getGuild: (DiscordClient: ClientProvider, guildId: string) => Guild;
