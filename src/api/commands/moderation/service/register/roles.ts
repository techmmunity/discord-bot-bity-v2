import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

export type keys =
	| "PROGRAMMING"
	| "GRAPHIC"
	| "SOUND"
	| "ROBOTIC"
	| "MANAGEMENT";

export const getRoles = (guildId: GuildEnum) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const role = GuildEnum[guildId] as keys;

	return [
		RolesEnum[guildId].SENIORITY,
		RolesEnum[guildId].HEADLINE,
		RolesEnum[guildId].INTERESTS,
		RolesEnum[guildId].ETC,
		RolesEnum[guildId].REGISTRED,
		RolesEnum[guildId][role],
	];
};

export const getForeignRoles = (guildId: GuildEnum, flag: keys) => [
	RolesEnum[guildId].HEADLINE,
	RolesEnum[guildId].INTERESTS,
	RolesEnum[guildId].ETC,
	RolesEnum[guildId].REGISTRED,
	RolesEnum[guildId][flag],
];
