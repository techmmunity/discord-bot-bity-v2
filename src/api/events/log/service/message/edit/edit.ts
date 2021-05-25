import { Message, TextChannel } from "discord.js";

import { getEmbedEdit } from "./get-embed-edit";

export interface EditMessageLogParams {
	channel: TextChannel;
	oldMessage: Message;
	newMessage: Message;
	title: string;
	color: string;
}

export const logEdit = ({
	channel,
	oldMessage,
	newMessage,
	color,
	title,
}: EditMessageLogParams) => {
	const embed = getEmbedEdit({
		title,
		color,
		newMessage,
		oldMessage,
	});

	return channel.send(embed);
};
