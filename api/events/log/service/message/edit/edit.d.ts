import { Message, TextChannel } from "discord.js";
export interface EditMessageLogParams {
    channel: TextChannel;
    oldMessage: Message;
    newMessage: Message;
    title: string;
    color: string;
}
export declare const logEdit: ({ channel, oldMessage, newMessage, color, title, }: EditMessageLogParams) => Promise<Message>;
