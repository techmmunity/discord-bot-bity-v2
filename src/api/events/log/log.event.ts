import { Injectable } from "@nestjs/common";
import { Client, ClientProvider, On, UseGuards } from "discord-nestjs";
import { GuildMember, Invite } from "discord.js";

import { inviteCreate } from "./invite-create";
import { inviteDelete } from "./invite-delete";
import { memberAdd } from "./member-add";

import { LogGuard } from "api/common/log.guard";

@Injectable()
@UseGuards(LogGuard)
export class LogEvent {
	@Client()
	public DiscordClient: ClientProvider;

	@On({ event: "inviteCreate" })
	public inviteCreate(invite: Invite) {
		return inviteCreate({
			DiscordClient: this.DiscordClient,
			invite,
		});
	}

	@On({ event: "inviteDelete" })
	public inviteDelete(invite: Invite) {
		return inviteDelete({
			DiscordClient: this.DiscordClient,
			invite,
		});
	}

	@On({ event: "guildMemberAdd" })
	public memberAdd(member: GuildMember) {
		return memberAdd({
			DiscordClient: this.DiscordClient,
			member,
		});
	}
}
