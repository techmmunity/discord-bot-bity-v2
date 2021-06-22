import { GuildEnum } from "enums/guilds";
export declare type Keys = "GRAPHIC" | "MANAGEMENT" | "PROGRAMMING" | "ROBOTIC" | "SOUND";
export declare type Seniority = "JUNIOR" | "MIDDLE" | "SENIOR" | "SPECIALIST" | "STARTER";
export declare const getRoles: (guildId: GuildEnum, seniority: Seniority) => string[];
export declare const getForeignRoles: (guildId: GuildEnum, flag: Keys) => string[];
