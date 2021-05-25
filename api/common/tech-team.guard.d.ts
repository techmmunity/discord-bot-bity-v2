import { DiscordGuard } from "discord-nestjs";
import { ClientEvents, Message } from "discord.js";
export declare class TechTeamGuard implements DiscordGuard {
    canActive(event: keyof ClientEvents, [context]: [Message]): Promise<boolean>;
    private isSpecialGuild;
    private isTechTeamSpecialMember;
    private isTechTeamMember;
}
