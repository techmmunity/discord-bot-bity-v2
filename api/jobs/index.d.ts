import { ChallengeJob } from "./challenge/challenge.job";
import { HangoverJob } from "./hangover/hangover.job";
import { ReviewReminderJob } from "./review-reminder/review-reminder.job";
import { UpdateCountersJob } from "./update-counters/update-counters.job";
export declare const Jobs: (typeof ChallengeJob | typeof HangoverJob | typeof ReviewReminderJob | typeof UpdateCountersJob)[];
