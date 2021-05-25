import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, GuildMember, Invite, Message } from "discord.js";
export declare class ActiveGuildGuard implements DiscordGuard {
    canActive(_: keyof ClientEvents, [context]: [Message | Invite | GuildMember]): boolean;
}
