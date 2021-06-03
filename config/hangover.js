"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HANGOVER = void 0;
const cron_day_of_week_1 = require("../enums/cron-day-of-week");
const guilds_1 = require("../enums/guilds");
exports.HANGOVER = {
    day: {
        [guilds_1.GuildEnum.PROGRAMMING]: cron_day_of_week_1.CronDayOfWeekEnum.FRIDAY,
    },
};
//# sourceMappingURL=hangover.js.map