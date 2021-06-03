import { CronDayOfWeekEnum } from "enums/cron-day-of-week";
interface HangoverType {
    day: Record<string, CronDayOfWeekEnum>;
}
export declare const HANGOVER: HangoverType;
export {};
