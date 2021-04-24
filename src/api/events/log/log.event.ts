import { Injectable } from "@nestjs/common";
import { Client, ClientProvider, On, UseGuards } from "discord-nestjs";
import { GuildMember, Invite, Message } from "discord.js";

import { invite } from "./invite";
import { member } from "./member";
import { message } from "./message";

import { LogGuard } from "api/common/log.guard";

import { Colors } from "assets/colors";

@Injectable()
@UseGuards(LogGuard)
export class LogEvent {
	@Client()
	public DiscordClient: ClientProvider;

	@On({ event: "inviteCreate" })
	public inviteCreate(guildInvite: Invite) {
		return invite({
			DiscordClient: this.DiscordClient,
			title: "INVITE CREATE",
			color: Colors.green,
			invite: guildInvite,
		});
	}

	@On({ event: "inviteDelete" })
	public inviteDelete(guildInvite: Invite) {
		return invite({
			DiscordClient: this.DiscordClient,
			title: "INVITE DELETE",
			color: Colors.red,
			invite: guildInvite,
		});
	}

	@On({ event: "guildMemberAdd" })
	public memberAdd(guildMember: GuildMember) {
		return member({
			DiscordClient: this.DiscordClient,
			title: "MEMBER ADD",
			color: Colors.green,
			member: guildMember,
		});
	}

	@On({ event: "guildMemberRemove" })
	public memberRemove(guildMember: GuildMember) {
		return member({
			DiscordClient: this.DiscordClient,
			title: "MEMBER REMOVE",
			color: Colors.red,
			member: guildMember,
		});
	}

	@On({ event: "messageDelete" })
	public messageDelete(messageLog: Message) {
		return message({
			DiscordClient: this.DiscordClient,
			title: "MESSAGE DELETE",
			color: Colors.red,
			message: messageLog,
		});
	}

	@On({ event: "messageUpdate" })
	public messageEdit(messageLog: Message) {
		return message({
			DiscordClient: this.DiscordClient,
			title: "MESSAGE EDIT",
			color: Colors.blue,
			message: messageLog,
		});
	}
}
