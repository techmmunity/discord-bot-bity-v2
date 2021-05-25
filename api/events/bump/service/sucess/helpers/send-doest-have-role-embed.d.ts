import { Message } from "discord.js";
interface SendDoesntHasRoleEmbedParams {
    message: Message;
}
export declare const sendDoesntHasRoleEmbed: ({ message, }: SendDoesntHasRoleEmbedParams) => Promise<Message>;
export {};
