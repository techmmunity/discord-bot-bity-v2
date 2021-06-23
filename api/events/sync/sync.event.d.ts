import { ClientProvider } from "discord-nestjs";
import { GuildEmoji } from "discord.js";
export declare class SyncEvent {
    discordClient: ClientProvider;
    ban(guildId: string, userId: string): Promise<void>;
    emojiCreate(emoji: GuildEmoji): Promise<void>;
    emojiUpdate(oldEmoji: GuildEmoji, newEmoji: GuildEmoji): Promise<void>;
}
