import { CronDayOfWeekEnum } from "enums/cron-day-of-week";
import { GuildEnum } from "enums/guilds";

interface HangoverType {
	day: {
		[guildId: string]: CronDayOfWeekEnum;
	};
}

export const Hangover: HangoverType = {
	day: {
		[GuildEnum.PROGRAMMING]: CronDayOfWeekEnum.FRIDAY,
		// [GuildsEnum.GRAPHIC]: "",
		// [GuildsEnum.SOUND]: "",
		// [GuildsEnum.ROBOTIC]: "",
		// [GuildsEnum.MANAGEMENT]: "",
	},
};
