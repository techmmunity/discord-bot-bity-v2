import { Message, User } from "discord.js";
interface SendEmbedParams {
    message: Message;
    user: User;
}
export declare const sendEmbed: ({ message, user }: SendEmbedParams) => Promise<void>;
export {};
