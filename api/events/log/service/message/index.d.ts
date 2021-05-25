import { ClientProvider } from "discord-nestjs";
import { Message } from "discord.js";
interface MessageParams {
    DiscordClient: ClientProvider;
    message?: Message;
    oldMessage?: Message;
    newMessage?: Message;
    title: string;
    color: string;
}
export declare const message: (params: MessageParams) => Promise<Message> | undefined;
export {};
