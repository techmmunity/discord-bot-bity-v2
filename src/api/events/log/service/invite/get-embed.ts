import { Invite, MessageEmbed } from "discord.js";

import { inviteUtil } from "utils/invite";
import { timeUtil } from "utils/time";

interface GetEmbedParams {
	invite: Invite;
	color: string;
	title: string;
}

const getExpiresAt = (invite: Invite) => {
	if (invite.expiresAt) {
		return timeUtil.getDateFormatted(invite.expiresAt);
	}

	return "--";
};

const isTemporary = (invite: Invite) => (invite.expiresAt ? "Yes" : "No");

export const getEmbed = ({ invite, title, color }: GetEmbedParams) => {
	const messageToSend = inviteUtil.formatMessage(
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
		.setColor(color)
		.setTitle(title)
		.setDescription(messageToSend)
		.setThumbnail(invite.inviter?.avatarURL({ dynamic: true }) as string);

	return embed;
};
