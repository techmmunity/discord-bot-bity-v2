import { Message, MessageEmbed } from "discord.js";
interface GetEmbedEditParams {
    oldMessage: Message;
    newMessage: Message;
    color: string;
    title: string;
}
export declare const getIsBot: (message: Message) => "Yes" | "No";
export declare const getEmbedEdit: ({ oldMessage, newMessage, title, color, }: GetEmbedEditParams) => MessageEmbed;
export {};
