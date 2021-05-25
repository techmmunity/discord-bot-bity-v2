import { GuildMember } from "discord.js";
import { Flags } from "utils/message";
import { GuildEnum } from "enums/guilds";
export declare const addRoles: (member: GuildMember, guildId: GuildEnum, flags: Flags) => Promise<GuildMember>;
