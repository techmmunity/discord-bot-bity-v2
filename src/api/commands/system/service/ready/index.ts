import { Logger } from "@nestjs/common";

export const ready = () => {
	const logger = new Logger("SystemLogger");

	logger.log("Bot is Ready!");
};
