import { Message } from "discord.js";

import { sendEmbed } from "./helpers/send-embed";

import { BotsEnum } from "enums/bots";

const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === "production";

const getBotId = () => (isProduction ? BotsEnum.BITY : BotsEnum.BITY_TEST);

export const bot = (message: Message) => {
	const botId = getBotId();

	const user = message?.mentions.users?.get(botId);

	if (!user) return;

	return sendEmbed(message);
};
