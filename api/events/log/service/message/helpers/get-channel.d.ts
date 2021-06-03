import { ClientProvider } from "discord-nestjs";
import { Message } from "discord.js";
interface GetChannelParams {
    discordClient: ClientProvider;
    message?: Message;
    newMessage?: Message;
}
export declare const getChannel: ({ discordClient, message, newMessage, }: GetChannelParams) => import("discord.js").TextChannel;
export {};
