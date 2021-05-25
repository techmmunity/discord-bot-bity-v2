import { Message } from "discord.js";
interface AddEmojiParams {
    message: Message;
    name: string;
    url: string;
}
export declare const addEmoji: ({ message, name, url }: AddEmojiParams) => Promise<import("discord.js").GuildEmoji | undefined>;
export {};
