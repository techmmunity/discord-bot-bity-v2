import { Message, MessageEmbed } from "discord.js";
interface GetEmbedDeleteParams {
    message: Message;
    color: string;
    title: string;
}
export declare const getIsBot: (message: Message) => "Yes" | "No";
export declare const getEmbedDelete: ({ message, title, color, }: GetEmbedDeleteParams) => MessageEmbed;
export {};
