import { Injectable } from "@nestjs/common";
import { Client, ClientProvider, On } from "discord-nestjs";
import { Invite } from "discord.js";

import { inviteCreate } from "./invite-create";
import { inviteDelete } from "./invite-delete";

@Injectable()
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
}
