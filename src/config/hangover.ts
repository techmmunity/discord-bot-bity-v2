import { CronDayOfWeekEnum } from "enums/cron-day-of-week";
import { GuildsEnum } from "enums/guilds";

interface HangoverType {
	day: {
		[guildId: string]: CronDayOfWeekEnum;
	};
}

export const Hangover: HangoverType = {
	day: {
		[GuildsEnum.PROGRAMMING]: CronDayOfWeekEnum.FRIDAY,
		// [GuildsEnum.GRAPHIC]: "",
		// [GuildsEnum.SOUND]: "",
		// [GuildsEnum.ROBOTIC]: "",
		// [GuildsEnum.MANAGEMENT]: "",
	},
};
