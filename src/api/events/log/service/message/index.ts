import { ClientProvider } from "discord-nestjs";
import { Message } from "discord.js";

import { logDelete, DeleteMessageLogParams } from "./delete/delete";
import { logEdit, EditMessageLogParams } from "./edit/edit";
import { getChannel } from "./helpers/get-channel";

interface MessageParams {
	DiscordClient: ClientProvider;
	message?: Message;
	oldMessage?: Message;
	newMessage?: Message;
	title: string;
	color: string;
}

export const message = (params: MessageParams) => {
	const { message, newMessage, oldMessage } = params;

	const channel = getChannel(params);

	if (message) {
		return logDelete({
			channel,
			...params,
		} as DeleteMessageLogParams);
	}

	if (oldMessage && newMessage) {
		return logEdit({
			channel,
			...params,
		} as EditMessageLogParams);
	}
};
