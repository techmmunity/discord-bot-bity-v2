import { GuildMember } from "discord.js";
import { Flags } from "utils/message";
import { GuildEnum } from "enums/guilds";
interface AddRolesParams {
    member: GuildMember;
    guildId: GuildEnum;
    flags: Flags;
}
export declare const addRoles: ({ guildId, flags, member }: AddRolesParams) => Promise<GuildMember>;
export {};
