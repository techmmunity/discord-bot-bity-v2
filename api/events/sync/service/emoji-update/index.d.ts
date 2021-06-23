import { Client, GuildEmoji } from "discord.js";
interface EmojiUpdateParams {
    client: Client;
    oldEmoji: GuildEmoji;
    newEmoji: GuildEmoji;
}
export declare const emojiUpdate: ({ client, oldEmoji, newEmoji, }: EmojiUpdateParams) => Promise<void>;
export {};
