import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

export interface CounterConfig {
	channelId: string;
	channelName: string;
	hasAllRoles?: Array<string>;
	doesntHasAnyOfRoles?: Array<string>;
}

export const getCountersConfig = (guildId: GuildEnum) => [
	{
		channelId: ChannelEnum[guildId].COUNTER_DEV,
		channelName: "Dev",
		hasAllRoles: [RolesEnum[guildId].PROGRAMMING],
	},
	{
		channelId: ChannelEnum[guildId].COUNTER_GRAPHIC,
		channelName: "Graphic",
		hasAllRoles: [RolesEnum[guildId].GRAPHIC],
	},
	{
		channelId: ChannelEnum[guildId].COUNTER_SOUND,
		channelName: "Sound",
		hasAllRoles: [RolesEnum[guildId].SOUND],
	},
	{
		channelId: ChannelEnum[guildId].COUNTER_ROBOTIC,
		channelName: "Robotic",
		hasAllRoles: [RolesEnum[guildId].ROBOTIC],
	},
	{
		channelId: ChannelEnum[guildId].COUNTER_MANAGEMENT,
		channelName: "Management",
		hasAllRoles: [RolesEnum[guildId].MANAGEMENT],
	},
	{
		channelId: ChannelEnum[guildId].COUNTER_UNREGISTRED,
		channelName: "Unregistred",
		doesntHasAnyOfRoles: [RolesEnum[guildId].REGISTRED],
	},
	{
		channelId: ChannelEnum[guildId].COUNTER_TOTAL,
		channelName: "Total",
		doesntHasAnyOfRoles: [],
	},
];
