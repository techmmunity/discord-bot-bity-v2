import { Message } from "discord.js";
interface SendStartEmbedParams {
    message: Message;
    emojisCreatedQtd: number;
}
export declare const sendEndEmbed: ({ message, emojisCreatedQtd, }: SendStartEmbedParams) => Promise<Message>;
export {};
