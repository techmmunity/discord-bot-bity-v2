import { Invite, MessageEmbed } from "discord.js";

import { InviteUtil } from "utils/invite";
import { TimeUtil } from "utils/time";

import { Colors } from "assets/colors";

const getExpiresAt = (invite: Invite) => {
	if (invite.expiresAt) {
		return TimeUtil.getDateFormatted(invite.expiresAt);
	}

	return "--";
};

const isTemporary = (invite: Invite) => (invite.expiresAt ? "Yes" : "No");

export const getEmbed = (invite: Invite, title: string) => {
	const messageToSend = InviteUtil.formatMessage(
		invite,
		[
			"**Inviter ID**: {userId}",
			"**Inviter Tag**: {userTag}",
			`**Code:** ${invite.code}`,
			`**Temporary:** ${isTemporary(invite)}`,
			`**Expires At:** ${getExpiresAt(invite)}`,
			`**Url:** ${invite.url}`,
		].join("\n"),
	);

	const embed = new MessageEmbed()
		.setColor(Colors.green)
		.setTitle(title)
		.setDescription(messageToSend)
		.setThumbnail(invite.inviter?.avatarURL({ dynamic: true }) as string);

	return embed;
};
