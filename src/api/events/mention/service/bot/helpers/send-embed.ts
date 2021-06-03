import { Message, MessageEmbed, User } from "discord.js";

import { messageUtil } from "utils/message";

import { CONFIG } from "config";

import { COLORS } from "assets/colors";
import { IMAGES } from "assets/images";

const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === "production";

const getEmbedColor = () => (isProduction ? COLORS.turquoise : COLORS.red);

const getEmbedImage = (user: User) =>
	isProduction ? IMAGES.bityGif : (user.avatarURL() as string);

export const sendEmbed = (message: Message) => {
	const user = message.author;

	const embed = new MessageEmbed()
		.setColor(getEmbedColor())
		.setTitle(`Hello, I'm ${user.username}!`)
		.setDescription(`My prefix is: \`${CONFIG.prefix}\``)
		.setThumbnail(getEmbedImage(user));

	return messageUtil.sendAndDelete(message, embed, 2.5);
};
