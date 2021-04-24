import { Message } from "discord.js";

export const suggest = (message: Message) => {
	return Promise.all([message.react("👍"), message.react("👎")]);
};
