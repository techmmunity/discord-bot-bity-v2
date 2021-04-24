import { Logger } from "@nestjs/common";

export const ready = (logger: Logger) => {
	logger.log("\n\n\nBot is ready!\n\n\n");
};
