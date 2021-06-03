import { ClientProvider } from "discord-nestjs";
import { TextChannel } from "discord.js";
import { GuildEnum } from "enums/guilds";
declare type LogType = "invite" | "member" | "message";
interface GetChannelToLogParams {
    discordClient: ClientProvider;
    guildId: GuildEnum;
    type: LogType;
}
export declare const getChannelToLog: ({ discordClient, guildId, type, }: GetChannelToLogParams) => TextChannel;
export {};
