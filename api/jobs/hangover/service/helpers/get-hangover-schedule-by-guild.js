"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getHangoverScheduleByGuild = void 0;
const jobs_schedule_1 = require("../../../../../config/jobs-schedule");
const hangover_1 = require("../../../../../config/hangover");
const getHangoverScheduleByGuild = (guildId) => {
    const hangoverDay = hangover_1.Hangover.day[guildId];
    return `${jobs_schedule_1.JobsSchedule.HANGOVER}${hangoverDay}`;
};
exports.getHangoverScheduleByGuild = getHangoverScheduleByGuild;
//# sourceMappingURL=get-hangover-schedule-by-guild.js.map