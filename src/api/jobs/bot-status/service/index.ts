import { ClientProvider } from "discord-nestjs";

import { BotStatus } from "config/bot-status";
import { Urls } from "config/url";

const getCurrentStatus = (DiscordClient: ClientProvider) => {
	const currentActivity = DiscordClient.getClient().user?.presence
		.activities[0];

	if (currentActivity) return currentActivity.name;

	return undefined;
};

const getBotStatus = (DiscordClient: ClientProvider) => {
	const currentStatus = getCurrentStatus(DiscordClient);

	const statusIndex = BotStatus.findIndex(status => status === currentStatus);

	const newIndex = statusIndex + 1;

	return BotStatus[newIndex] ? BotStatus[newIndex] : BotStatus[0];
};

export const setStatus = (DiscordClient: ClientProvider) => async () => {
	const status = getBotStatus(DiscordClient);

	await DiscordClient.getClient()
		.user?.setActivity({
			name: status,
			type: "STREAMING",
			url: Urls.TWITCH,
		})
		.catch();
};
