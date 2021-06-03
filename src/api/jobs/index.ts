import { BumpRushJob } from "./bump-rush/bump-rush.job";
import { ChallengeJob } from "./challenge/challenge.job";
import { HangoverJob } from "./hangover/hangover.job";
import { ReviewReminderJob } from "./review-reminder/review-reminder.job";
import { UpdateCountersJob } from "./update-counters/update-counters.job";

export const JOBS = [
	BumpRushJob,
	ChallengeJob,
	HangoverJob,
	ReviewReminderJob,
	UpdateCountersJob,
];