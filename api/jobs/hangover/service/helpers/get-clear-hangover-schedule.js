"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClearHangoverSchedule = void 0;
const jobs_schedule_1 = require("../../../../../config/jobs-schedule");
const hangover_1 = require("../../../../../config/hangover");
const getClearHangoverSchedule = (guildId) => {
    const hangoverDay = hangover_1.Hangover.day[guildId];
    const nextDay = Number(hangoverDay) + 1;
    if (nextDay < 7) {
        return `${jobs_schedule_1.JobsSchedule.HANGOVER}${nextDay}`;
    }
    return `${jobs_schedule_1.JobsSchedule.HANGOVER}${0}`;
};
exports.getClearHangoverSchedule = getClearHangoverSchedule;
//# sourceMappingURL=get-clear-hangover-schedule.js.map