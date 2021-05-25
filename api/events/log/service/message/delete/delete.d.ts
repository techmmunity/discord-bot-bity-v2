import { Message, TextChannel } from "discord.js";
export interface DeleteMessageLogParams {
    channel: TextChannel;
    message: Message;
    title: string;
    color: string;
}
export declare const logDelete: ({ channel, message, color, title, }: DeleteMessageLogParams) => Promise<Message>;
