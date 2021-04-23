import { Collection, GuildMember, Message } from "discord.js";

import { addRoles } from "./helpers/add-roles";
import { sendWelcomeMessage } from "./helpers/send-welcome-message";

import { MessageUtil } from "utils/message";

import { GuildEnum } from "enums/guilds";

const getMembers = (message: Message) =>
	message.mentions.members as Collection<string, GuildMember>;

export const register = async (message: Message) => {
	const members = getMembers(message);

	const flags = MessageUtil.getFlags(message);

	if (members.size < 1) {
		throw new Error("MISSING_ARGUMENT");
	}

	const guildId = message.guild?.id as GuildEnum;

	const addRolesPromises = Promise.all(
		members.map(member => addRoles(member, guildId, flags)),
	);

	const sendWelcomeMessagesPromises = flags.silent
		? null
		: Promise.all(
				members.map(member => sendWelcomeMessage(message, member, guildId)),
		  );

	return Promise.all([addRolesPromises, sendWelcomeMessagesPromises]);
};
