import { Injectable } from "@nestjs/common";
import { Client, ClientProvider, On, UseGuards } from "discord-nestjs";
import { GuildMember, Invite, Message } from "discord.js";

import { inviteLog } from "./service/invite";
import { member } from "./service/member";
import { messageLog } from "./service/message";

import { ActiveGuildGuard } from "api/common/active-guild.guard";

import { COLORS } from "assets/colors";

@Injectable()
@UseGuards(ActiveGuildGuard)
export class LogEvent {
	@Client()
	public discordClient: ClientProvider;

	@On({ event: "inviteCreate" })
	public inviteCreate(guildInvite: Invite) {
		return inviteLog({
			discordClient: this.discordClient,
			title: "INVITE CREATE",
			color: COLORS.green,
			invite: guildInvite,
		});
	}

	@On({ event: "inviteDelete" })
	public inviteDelete(guildInvite: Invite) {
		return inviteLog({
			discordClient: this.discordClient,
			title: "INVITE DELETE",
			color: COLORS.red,
			invite: guildInvite,
		});
	}

	@On({ event: "guildMemberAdd" })
	public memberAdd(guildMember: GuildMember) {
		return member({
			discordClient: this.discordClient,
			title: "MEMBER ADD",
			color: COLORS.green,
			memberData: guildMember,
		});
	}

	@On({ event: "guildMemberRemove" })
	public memberRemove(guildMember: GuildMember) {
		return member({
			discordClient: this.discordClient,
			title: "MEMBER REMOVE",
			color: COLORS.red,
			memberData: guildMember,
		});
	}

	@On({ event: "messageDelete" })
	public messageDelete(message: Message) {
		return messageLog({
			discordClient: this.discordClient,
			title: "MESSAGE DELETE",
			color: COLORS.red,
			message,
		});
	}

	@On({ event: "messageUpdate" })
	public messageEdit(oldMessageLog: Message, newMessageLog: Message) {
		return messageLog({
			discordClient: this.discordClient,
			title: "MESSAGE EDIT",
			color: COLORS.blue,
			oldMessage: oldMessageLog,
			newMessage: newMessageLog,
		});
	}
}
