import { Logger } from "@nestjs/common";

export const ready = (logger: Logger) => {
	logger.log("Bot is ready!");
};
