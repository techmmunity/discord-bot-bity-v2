"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jobs = void 0;
const bump_rush_job_1 = require("./bump-rush/bump-rush.job");
const challenge_job_1 = require("./challenge/challenge.job");
const hangover_job_1 = require("./hangover/hangover.job");
const review_reminder_job_1 = require("./review-reminder/review-reminder.job");
const update_counters_job_1 = require("./update-counters/update-counters.job");
exports.Jobs = [
    bump_rush_job_1.BumpRushJob,
    challenge_job_1.ChallengeJob,
    hangover_job_1.HangoverJob,
    review_reminder_job_1.ReviewReminderJob,
    update_counters_job_1.UpdateCountersJob,
];
//# sourceMappingURL=index.js.map