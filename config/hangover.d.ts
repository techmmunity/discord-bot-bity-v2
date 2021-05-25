import { CronDayOfWeekEnum } from "enums/cron-day-of-week";
interface HangoverType {
    day: {
        [guildId: string]: CronDayOfWeekEnum;
    };
}
export declare const Hangover: HangoverType;
export {};
