import { JOBS_SCHEDULE } from "config/jobs-schedule";

import { HANGOVER } from "config/hangover";

export const getClearHangoverSchedule = (guildId: string) => {
	const hangoverDay = HANGOVER.day[guildId];

	const nextDay = Number(hangoverDay) + 1;

	if (nextDay < 7) {
		return `${JOBS_SCHEDULE.HANGOVER}${nextDay}`;
	}

	return `${JOBS_SCHEDULE.HANGOVER}${0}`;
};
