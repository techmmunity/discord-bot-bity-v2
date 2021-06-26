import { GuildEnum } from "enums/guilds";

export const COLORS = {
	dev: "#01d2ce",
	graphic: "#fe0077",
	sound: "#6500ea",
	robotic: "#007deb",
	management: "#ff9901",
	marketing: "#f40428",
	turquoise: "#2BA097",
	green: "#07ed1e",
	yellow: "#ffc800",
	red: "#e30e0e",
	blue: "#4287f5",
	twitch: "#9146FF",
};

export const getMainColor = (guildId: string) => {
	switch (guildId) {
		case GuildEnum.DEV:
			return COLORS.dev;
		case GuildEnum.GRAPHIC:
			return COLORS.graphic;
		case GuildEnum.SOUND:
			return COLORS.sound;
		case GuildEnum.ROBOTIC:
			return COLORS.robotic;
		case GuildEnum.MANAGEMENT:
			return COLORS.management;
		case GuildEnum.MARKETING:
			return COLORS.marketing;
		default:
			return "";
	}
};
