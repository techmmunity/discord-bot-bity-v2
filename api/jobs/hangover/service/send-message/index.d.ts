import { ClientProvider } from "discord-nestjs";
import { TextChannel } from "discord.js";
import { GuildEnum } from "enums/guilds";
interface SendMessageParams {
    discordClient: ClientProvider;
    guildId: GuildEnum;
    hangoverChannel: TextChannel;
}
export declare const sendMessage: ({ discordClient, guildId, hangoverChannel, }: SendMessageParams) => Promise<void>;
export {};
