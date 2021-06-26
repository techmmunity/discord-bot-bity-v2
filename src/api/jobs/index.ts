import { BumpRushJob } from "./bump-rush/bump-rush.job";
import { ChallengeJob } from "./challenge/challenge.job";
import { HangoverJob } from "./hangover/hangover.job";
import { ReminderJob } from "./reminder/reminder.job";
import { UpdateCountersJob } from "./update-counters/update-counters.job";

export const JOBS = [
	BumpRushJob,
	ChallengeJob,
	HangoverJob,
	ReminderJob,
	UpdateCountersJob,
];
