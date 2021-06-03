import { ClientProvider } from "discord-nestjs";
import { Message } from "discord.js";
interface MessageParams {
    discordClient: ClientProvider;
    message?: Message;
    oldMessage?: Message;
    newMessage?: Message;
    title: string;
    color: string;
}
export declare const messageLog: (params: MessageParams) => Promise<Message> | undefined;
export {};
