import { JobsSchedule } from "config/jobs-schedule";

import { Hangover } from "config/hangover";

export const getClearHangoverSchedule = (guildId: string) => {
	const hangoverDay = Hangover.day[guildId];

	const nextDay = Number(hangoverDay) + 1;

	if (nextDay < 7) {
		return `${JobsSchedule.HANGOVER}${nextDay}`;
	}

	return `${JobsSchedule.HANGOVER}${0}`;
};
