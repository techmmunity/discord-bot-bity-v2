/**
 *
 * Remeber: Cron Schedules works with timezone 0,
 * and Brazil is timezone -3.
 *
 * You must add 3 hours to be the same timezone that Brazil
 *
 */
export const JobsSchedule = {
	// Every 10 seconds
	SET_BOT_STATUS: "*/10 * * * * *",
	// Every Hour
	UPDATE_COUNTERS: "0 * * * *",
	// 20h
	HANGOVER: "0 23 * * ", // DOESN'T HAS DAY OF WEEK BECAUSE IT'S SETTED DYNAMICALY
	// Every Monday, 12h
	GRAPHIC_AGENCY: "0 15 * * 1",
	// Every Tuesday, 12h
	REVIEW_REMINDER: "0 15 * * 2",
};
