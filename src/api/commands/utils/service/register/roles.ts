import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

export type Keys =
	| "GRAPHIC"
	| "MANAGEMENT"
	| "MARKETING"
	| "PROGRAMMING"
	| "ROBOTIC"
	| "SOUND";

export const getRoles = (guildId: GuildEnum) => {
	const defaultRoles = [
		RolesEnum[guildId].SENIORITY,
		RolesEnum[guildId].HEADLINE,
		RolesEnum[guildId].INTERESTS,
		RolesEnum[guildId].ETC,
		RolesEnum[guildId].REGISTERED,
		RolesEnum[guildId].STARTER,
	];

	switch (guildId) {
		case GuildEnum.DEV:
			return [...defaultRoles, RolesEnum[guildId].PROGRAMMING];
		case GuildEnum.GRAPHIC:
			return [...defaultRoles, RolesEnum[guildId].GRAPHIC];
		case GuildEnum.SOUND:
			return [...defaultRoles, RolesEnum[guildId].SOUND];
		case GuildEnum.ROBOTIC:
			return [...defaultRoles, RolesEnum[guildId].ROBOTIC];
		case GuildEnum.MANAGEMENT:
			return [...defaultRoles, RolesEnum[guildId].MANAGEMENT];
		case GuildEnum.MARKETING:
			return [...defaultRoles, RolesEnum[guildId].MARKETING];
		default:
			return [];
	}
};

export const getForeignRoles = (guildId: GuildEnum, flag: Keys) => [
	RolesEnum[guildId].HEADLINE,
	RolesEnum[guildId].INTERESTS,
	RolesEnum[guildId].ETC,
	RolesEnum[guildId].REGISTERED,
	RolesEnum[guildId][flag],
];
