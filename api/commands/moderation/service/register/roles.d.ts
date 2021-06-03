import { GuildEnum } from "enums/guilds";
export declare type Keys = "GRAPHIC" | "MANAGEMENT" | "PROGRAMMING" | "ROBOTIC" | "SOUND";
export declare const getRoles: (guildId: GuildEnum) => string[];
export declare const getForeignRoles: (guildId: GuildEnum, flag: Keys) => string[];
