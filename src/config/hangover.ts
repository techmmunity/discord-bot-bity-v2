import { CronDayOfWeekEnum } from "enums/cron-day-of-week";
import { GuildEnum } from "enums/guilds";

interface HangoverType {
	day: Record<string, CronDayOfWeekEnum>;
}

export const HANGOVER: HangoverType = {
	day: {
		[GuildEnum.DEV]: CronDayOfWeekEnum.FRIDAY,
		/*
		 * [GuildsEnum.GRAPHIC]: "",
		 * [GuildsEnum.SOUND]: "",
		 * [GuildsEnum.ROBOTIC]: "",
		 * [GuildsEnum.MANAGEMENT]: "",
		 * [GuildsEnum.MARKETING]: "",
		 */
	},
};
