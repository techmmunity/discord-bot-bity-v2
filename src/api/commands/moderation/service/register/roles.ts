import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

export type keys =
	| "PROGRAMMING"
	| "GRAPHIC"
	| "SOUND"
	| "ROBOTIC"
	| "MANAGEMENT";

export const getRoles = (guildId: GuildEnum) => {
	const defaultRoles = [
		RolesEnum[guildId].SENIORITY,
		RolesEnum[guildId].HEADLINE,
		RolesEnum[guildId].INTERESTS,
		RolesEnum[guildId].ETC,
		RolesEnum[guildId].REGISTRED,
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
	}
};

export const getForeignRoles = (guildId: GuildEnum, flag: keys) => [
	RolesEnum[guildId].HEADLINE,
	RolesEnum[guildId].INTERESTS,
	RolesEnum[guildId].ETC,
	RolesEnum[guildId].REGISTRED,
	RolesEnum[guildId][flag],
];
