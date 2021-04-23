import { ChannelsEnum } from "enums/channels";
import { RolesEnum } from "enums/roles";

export interface ICounterConfig {
	channelId: string;
	channelName: string;
	hasAllRoles?: Array<string>;
	doesntHasAnyOfRoles?: Array<string>;
}

export const getCountersConfig = (guildId: string) => [
	{
		channelId: ChannelsEnum[guildId].COUNTER_DEV,
		channelName: "Dev",
		hasAllRoles: [RolesEnum[guildId].DEV],
	},
	{
		channelId: ChannelsEnum[guildId].COUNTER_GRAPHIC,
		channelName: "Graphic",
		hasAllRoles: [RolesEnum[guildId].GRAPHIC],
	},
	{
		channelId: ChannelsEnum[guildId].COUNTER_SOUND,
		channelName: "Sound",
		hasAllRoles: [RolesEnum[guildId].SOUND],
	},
	{
		channelId: ChannelsEnum[guildId].COUNTER_ROBOTIC,
		channelName: "Robotic",
		hasAllRoles: [RolesEnum[guildId].ROBOTIC],
	},
	{
		channelId: ChannelsEnum[guildId].COUNTER_MANAGEMENT,
		channelName: "Management",
		hasAllRoles: [RolesEnum[guildId].MANAGEMENT],
	},
	{
		channelId: ChannelsEnum[guildId].COUNTER_UNREGISTRED,
		channelName: "Unregistred",
		doesntHasAnyOfRoles: [RolesEnum[guildId].REGISTRED],
	},
	{
		channelId: ChannelsEnum[guildId].COUNTER_TOTAL,
		channelName: "Total",
		doesntHasAnyOfRoles: [],
	},
];
