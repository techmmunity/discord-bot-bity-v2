import { Injectable } from "@nestjs/common";
import { Client, ClientProvider, On } from "discord-nestjs";
import { Invite } from "discord.js";

import { inviteCreated } from "./invite-created";

@Injectable()
export class LogEvent {
	@Client()
	public DiscordClient: ClientProvider;

	@On({ event: "inviteCreate" })
	public inviteCreated(invite: Invite) {
		return inviteCreated({
			DiscordClient: this.DiscordClient,
			invite,
		});
	}
}
