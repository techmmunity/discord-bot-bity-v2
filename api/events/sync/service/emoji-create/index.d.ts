import { Client, GuildEmoji } from "discord.js";
interface EmojiCreateParams {
    client: Client;
    emoji: GuildEmoji;
}
export declare const emojiCreate: ({ client, emoji }: EmojiCreateParams) => Promise<void>;
export {};
