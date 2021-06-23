/**
 *
 * Remember: Cron Schedules works with timezone 0,
 * and Brazil is timezone -3.
 *
 * You must add 3 hours to be the same timezone that Brazil
 *
 */
export const JOBS_SCHEDULE = {
	// Every Hour
	UPDATE_COUNTERS: "0 * * * *",
	// 19h30
	HANGOVER: "30 22 * * ", // DOESN'T HAS DAY OF WEEK BECAUSE IT'S SET DYNAMICALLY
	// Every Monday, 12h
	GRAPHIC_AGENCY: "0 15 * * 1",
	// Every Day, 14h
	REVIEW_REMINDER: "0 17 * * *",
	// Every Week Day, 12h
	CHALLENGE: "0 15 * * 1,2,3,4,5",
	// Every Day, 8h,14h,20h
	BUMP_RANK: "0 11,17,23 * * *",
};
