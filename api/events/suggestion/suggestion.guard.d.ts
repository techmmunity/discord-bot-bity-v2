import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";
export declare class SuggestionGuard implements DiscordGuard {
    canActive(_: keyof ClientEvents, [context]: [Message]): Promise<boolean>;
}
