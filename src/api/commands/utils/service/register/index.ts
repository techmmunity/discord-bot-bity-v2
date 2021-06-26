import { GuildMember, Message } from "discord.js";

import { addRoles } from "./helpers/add-roles";
import { sendWelcomeMessage } from "./helpers/send-welcome-message";

import { messageUtil } from "utils/message";

import { GuildEnum } from "enums/guilds";
import { RolesEnum } from "enums/roles";

export const register = async (message: Message) => {
	const guildId = message.guild?.id as GuildEnum;
	const member = message.member as GuildMember;

	const registered = member.roles.cache.get(RolesEnum[guildId].REGISTERED);
	if (registered) {
		return;
	}

	const flags = messageUtil.getFlags(message);

	await addRoles({
		member,
		guildId,
		flags,
	});

	await sendWelcomeMessage(message, member, guildId);

	await message.delete();
};
