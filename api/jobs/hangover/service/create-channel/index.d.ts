/// <reference types="discord.js" />
import { ClientProvider } from "discord-nestjs";
import { GuildEnum } from "enums/guilds";
interface CreateChannelParams {
    discordClient: ClientProvider;
    guildId: GuildEnum;
    categoryName: string;
    channelName: string;
}
export declare const createChannel: ({ discordClient, guildId, categoryName, channelName, }: CreateChannelParams) => Promise<import("discord.js").TextChannel>;
export {};
