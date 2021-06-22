import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

export type Keys =
	| "GRAPHIC"
	| "MANAGEMENT"
	| "PROGRAMMING"
	| "ROBOTIC"
	| "SOUND";

export type Seniority =
	| "JUNIOR"
	| "MIDDLE"
	| "SENIOR"
	| "SPECIALIST"
	| "STARTER";

export const getRoles = (guildId: GuildEnum, seniority: Seniority) => {
	const defaultRoles = [
		RolesEnum[guildId].SENIORITY,
		RolesEnum[guildId].HEADLINE,
		RolesEnum[guildId].INTERESTS,
		RolesEnum[guildId].ETC,
		RolesEnum[guildId].REGISTRED,
		RolesEnum[guildId][seniority],
	];

	switch (guildId) {
		case GuildEnum.PROGRAMMING:
			return [...defaultRoles, RolesEnum[guildId].PROGRAMMING];
		case GuildEnum.GRAPHIC:
			return [...defaultRoles, RolesEnum[guildId].GRAPHIC];
		case GuildEnum.SOUND:
			return [...defaultRoles, RolesEnum[guildId].SOUND];
		case GuildEnum.ROBOTIC:
			return [...defaultRoles, RolesEnum[guildId].ROBOTIC];
		case GuildEnum.MANAGEMENT:
			return [...defaultRoles, RolesEnum[guildId].MANAGEMENT];
		default:
			return [];
	}
};

export const getForeignRoles = (guildId: GuildEnum, flag: Keys) => [
	RolesEnum[guildId].HEADLINE,
	RolesEnum[guildId].INTERESTS,
	RolesEnum[guildId].ETC,
	RolesEnum[guildId].REGISTRED,
	RolesEnum[guildId][flag],
];
