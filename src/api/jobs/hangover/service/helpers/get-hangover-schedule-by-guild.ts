import { JobsSchedule } from "config/jobs-schedule";

import { Hangover } from "config/hangover";

export const getHangoverScheduleByGuild = (guildId: string) => {
	const hangoverDay = Hangover.day[guildId];

	return `${JobsSchedule.HANGOVER}${hangoverDay}`;
};
