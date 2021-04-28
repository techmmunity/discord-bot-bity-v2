import { Message, TextChannel } from "discord.js";

import { getEmbedDelete } from "./get-embed-delete";

export interface DeleteMessageLogParams {
	channel: TextChannel;
	message: Message;
	title: string;
	color: string;
}

export const logDelete = ({
	channel,
	message,
	color,
	title,
}: DeleteMessageLogParams) => {
	const embed = getEmbedDelete({
		title,
		color,
		message,
	});

	return channel.send(embed);
};
