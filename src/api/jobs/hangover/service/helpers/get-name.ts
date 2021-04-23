import { CronDayOfWeekEnum } from "enums/cron-day-of-week";

const getDayOfWeek = (hangoverDay: CronDayOfWeekEnum) => {
	switch (hangoverDay) {
		case CronDayOfWeekEnum.SUNDAY:
			return "friday";
		case CronDayOfWeekEnum.MONDAY:
			return "monday";
		case CronDayOfWeekEnum.TUESDAY:
			return "tuesday";
		case CronDayOfWeekEnum.WEDNESDAY:
			return "wednesday";
		case CronDayOfWeekEnum.FRIDAY:
			return "friday";
		case CronDayOfWeekEnum.SATURDAY:
			return "saturday";
		default:
			return "";
	}
};

export const getCategoryName = (hangoverDay: CronDayOfWeekEnum) => {
	const baseName = "🍻 hangover ";

	return baseName + getDayOfWeek(hangoverDay);
};

export const getChannelName = (hangoverDay: CronDayOfWeekEnum) => {
	const baseName = "hangover-";

	return baseName + getDayOfWeek(hangoverDay);
};
