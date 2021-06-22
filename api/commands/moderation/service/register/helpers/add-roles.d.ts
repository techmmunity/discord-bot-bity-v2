import { GuildMember } from "discord.js";
import { Seniority } from "../roles";
import { Flags } from "utils/message";
import { GuildEnum } from "enums/guilds";
interface AddRolesParams {
    member: GuildMember;
    guildId: GuildEnum;
    flags: Flags;
    seniority: Seniority;
}
export declare const addRoles: ({ guildId, flags, member, seniority, }: AddRolesParams) => Promise<GuildMember>;
export {};
