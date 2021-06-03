import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, GuildMember, Invite, Message } from "discord.js";
export declare class ActiveGuildGuard implements DiscordGuard {
    canActive(_: keyof ClientEvents, [context]: [GuildMember | Invite | Message]): boolean;
}
