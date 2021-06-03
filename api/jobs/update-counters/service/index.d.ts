/// <reference types="discord.js" />
import { ClientProvider } from "discord-nestjs";
import { GuildEnum } from "enums/guilds";
export declare const updateCounters: (discordClient: ClientProvider, guildId: GuildEnum) => Promise<(Promise<import("discord.js").VoiceChannel> | null)[]>;
