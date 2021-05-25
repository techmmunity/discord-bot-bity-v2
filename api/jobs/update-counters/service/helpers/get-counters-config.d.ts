import { GuildEnum } from "enums/guilds";
export interface ICounterConfig {
    channelId: string;
    channelName: string;
    hasAllRoles?: Array<string>;
    doesntHasAnyOfRoles?: Array<string>;
}
export declare const getCountersConfig: (guildId: GuildEnum) => ({
    channelId: string;
    channelName: string;
    hasAllRoles: string[];
    doesntHasAnyOfRoles?: undefined;
} | {
    channelId: string;
    channelName: string;
    doesntHasAnyOfRoles: string[];
    hasAllRoles?: undefined;
})[];
