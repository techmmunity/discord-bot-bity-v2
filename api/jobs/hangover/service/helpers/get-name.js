"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelName = exports.getCategoryName = void 0;
const cron_day_of_week_1 = require("../../../../../enums/cron-day-of-week");
const getDayOfWeek = (hangoverDay) => {
    switch (hangoverDay) {
        case cron_day_of_week_1.CronDayOfWeekEnum.SUNDAY:
            return "friday";
        case cron_day_of_week_1.CronDayOfWeekEnum.MONDAY:
            return "monday";
        case cron_day_of_week_1.CronDayOfWeekEnum.TUESDAY:
            return "tuesday";
        case cron_day_of_week_1.CronDayOfWeekEnum.WEDNESDAY:
            return "wednesday";
        case cron_day_of_week_1.CronDayOfWeekEnum.FRIDAY:
            return "friday";
        case cron_day_of_week_1.CronDayOfWeekEnum.SATURDAY:
            return "saturday";
        default:
            return "";
    }
};
const getCategoryName = (hangoverDay) => {
    const baseName = "🍻 hangover ";
    return baseName + getDayOfWeek(hangoverDay);
};
exports.getCategoryName = getCategoryName;
const getChannelName = (hangoverDay) => {
    const baseName = "hangover-";
    return baseName + getDayOfWeek(hangoverDay);
};
exports.getChannelName = getChannelName;
//# sourceMappingURL=get-name.js.map