import { ClientProvider } from "discord-nestjs";
interface DeleteChannelParams {
    DiscordClient: ClientProvider;
    guildId: string;
    categoryName: string;
    channelName: string;
}
export declare const deleteChannel: ({ DiscordClient, guildId, categoryName, channelName, }: DeleteChannelParams) => () => Promise<void>;
export {};
