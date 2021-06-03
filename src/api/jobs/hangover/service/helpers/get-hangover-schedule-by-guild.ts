import { JOBS_SCHEDULE } from "config/jobs-schedule";

import { HANGOVER } from "config/hangover";

export const getHangoverScheduleByGuild = (guildId: string) => {
	const hangoverDay = HANGOVER.day[guildId];

	return `${JOBS_SCHEDULE.HANGOVER}${hangoverDay}`;
};
