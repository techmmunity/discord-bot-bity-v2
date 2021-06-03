import { ClientProvider } from "discord-nestjs";
import { Guild } from "discord.js";
export declare const getGuild: (discordClient: ClientProvider, guildId: string) => Guild;
