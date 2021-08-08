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
	// Every Day, 14h
	REVIEW_REMINDER: "0 17 * * *",
	// Every Monday, Wednesday and Saturday, 19h
	SOCIO_REMINDER: "0 21 * * 1,3,6",
	// Every Day, 8h,14h,20h
	BUMP_RANK: "0 11,17,23 * * *",
	/**
	 * Challenges
	 */
	// Every Monday and Thursday, 12h
	CHALLENGE_DEV: "0 15 * * 1,4",
	// Every Monday, 12h
	CHALLENGE_GRAPHIC: "0 15 * * 1",
};
