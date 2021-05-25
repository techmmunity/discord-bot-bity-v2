import { GuildEnum } from "enums/guilds";
export declare type keys = "PROGRAMMING" | "GRAPHIC" | "SOUND" | "ROBOTIC" | "MANAGEMENT";
export declare const getRoles: (guildId: GuildEnum) => string[];
export declare const getForeignRoles: (guildId: GuildEnum, flag: keys) => string[];
