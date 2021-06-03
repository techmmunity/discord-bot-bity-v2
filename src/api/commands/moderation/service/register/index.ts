import { Collection, GuildMember, Message } from "discord.js";

import { addRoles } from "./helpers/add-roles";
import { sendServerExplanationMessage } from "./helpers/send-server-explanation-message";
import { sendWelcomeMessage } from "./helpers/send-welcome-message";

import { messageUtil } from "utils/message";

import { GuildEnum } from "enums/guilds";

const getMembers = (message: Message) =>
	message.mentions.members as Collection<string, GuildMember>;

export const register = async (message: Message) => {
	const members = getMembers(message);

	const flags = messageUtil.getFlags(message);

	if (members.size < 1) {
		throw new Error("MISSING_ARGUMENT");
	}

	const guildId = message.guild?.id as GuildEnum;

	const promises: Array<Promise<any>> = [];

	/**
	 * Add Roles
	 */

	const addRolesPromises = Promise.all(
		members.map(member => addRoles(member, guildId, flags)),
	);
	promises.push(addRolesPromises);

	/**
	 * Send Welcome Message
	 */

	if (!flags.silent) {
		const sendWelcomeMessagesPromises = Promise.all(
			members.map(member => sendWelcomeMessage(message, member, guildId)),
		);
		promises.push(sendWelcomeMessagesPromises);
	}

	/**
	 * Return Promises
	 */

	await Promise.all(promises);

	/**
	 * Send server explanation message
	 */

	if (!flags.silent) {
		await sendServerExplanationMessage(message);
	}
};
