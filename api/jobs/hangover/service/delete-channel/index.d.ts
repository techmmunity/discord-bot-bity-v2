import { ClientProvider } from "discord-nestjs";
interface DeleteChannelParams {
    discordClient: ClientProvider;
    guildId: string;
    categoryName: string;
    channelName: string;
}
export declare const deleteChannel: ({ discordClient, guildId, categoryName, channelName, }: DeleteChannelParams) => () => Promise<void>;
export {};
