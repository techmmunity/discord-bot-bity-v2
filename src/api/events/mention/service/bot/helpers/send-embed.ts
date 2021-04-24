import { Message, MessageEmbed, User } from "discord.js";

import { MessageUtil } from "utils/message";

import { Config } from "config";

import { Colors } from "assets/colors";
import { Images } from "assets/images";

const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === "production";

const getEmbedColor = () => (isProduction ? Colors.turquoise : Colors.red);

const getEmbedImage = (user: User) =>
	isProduction ? Images.bityGif : (user.avatarURL() as string);

export const sendEmbed = (message: Message) => {
	const user = message.author;

	const embed = new MessageEmbed()
		.setColor(getEmbedColor())
		.setTitle(`Hello, I'm ${user.username}!`)
		.setDescription(`My prefix is: \`${Config.prefix}\``)
		.setThumbnail(getEmbedImage(user));

	return MessageUtil.sendAndDelete(message, embed, 2.5);
};
