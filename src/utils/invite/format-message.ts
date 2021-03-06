import { Invite } from "discord.js";

import { formatUtil } from "utils/format";
import { timeUtil } from "utils/time";

export const formatMessage = (invite: Invite, text: string) => {
	// User
	const userId = invite.inviter?.id as string;
	const userName = invite.inviter?.username as string;
	const userDiscriminator = invite.inviter?.discriminator as string;
	const userNickname = "";
	const userCreation = invite.inviter?.createdAt
		? timeUtil.getDateFormatted(invite.inviter?.createdAt)
		: "";

	// Server
	const serverName = invite.guild?.name;
	const memberCount = invite.guild?.memberCount;

	return formatUtil.formatMessage(text, {
		userId,
		userName,
		userDiscriminator,
		userNickname,
		userCreation,
		serverName,
		memberCount,
	});
};
