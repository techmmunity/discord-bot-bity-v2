import { ClientProvider } from "discord-nestjs";
import { TextChannel } from "discord.js";
import { GuildEnum } from "enums/guilds";
interface SendMessageParams {
    DiscordClient: ClientProvider;
    guildId: GuildEnum;
    hangoverChannel: TextChannel;
}
export declare const sendMessage: ({ DiscordClient, guildId, hangoverChannel, }: SendMessageParams) => Promise<void>;
export {};
