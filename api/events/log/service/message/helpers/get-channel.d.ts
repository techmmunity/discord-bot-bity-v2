import { ClientProvider } from "discord-nestjs";
import { Message } from "discord.js";
interface GetChannelParams {
    DiscordClient: ClientProvider;
    message?: Message;
    newMessage?: Message;
}
export declare const getChannel: ({ DiscordClient, message, newMessage, }: GetChannelParams) => import("discord.js").TextChannel;
export {};
