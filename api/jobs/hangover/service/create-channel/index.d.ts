/// <reference types="discord.js" />
import { ClientProvider } from "discord-nestjs";
import { GuildEnum } from "enums/guilds";
interface CreateChannelParams {
    DiscordClient: ClientProvider;
    guildId: GuildEnum;
    categoryName: string;
    channelName: string;
}
export declare const createChannel: ({ DiscordClient, guildId, categoryName, channelName, }: CreateChannelParams) => Promise<import("discord.js").TextChannel>;
export {};
