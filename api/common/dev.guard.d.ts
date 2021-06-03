import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";
export declare class DevGuard implements DiscordGuard {
    canActive(event: keyof ClientEvents, [context]: [Message]): boolean;
}
