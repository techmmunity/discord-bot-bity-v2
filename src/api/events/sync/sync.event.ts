import { Injectable } from "@nestjs/common";
import { Client, ClientProvider, On } from "discord-nestjs";
import { GuildEmoji } from "discord.js";

import { ban } from "./service/ban";
import { emojiCreate } from "./service/emoji-create";
import { emojiUpdate } from "./service/emoji-update";

@Injectable()
export class SyncEvent {
	@Client()
	public discordClient: ClientProvider;

	@On({ event: "guildBanAdd" })
	public ban(guildId: string, userId: string) {
		return ban({
			client: this.discordClient.getClient(),
			guildId,
			userId,
		});
	}

	@On({ event: "emojiCreate" })
	public emojiCreate(emoji: GuildEmoji) {
		return emojiCreate({
			client: this.discordClient.getClient(),
			emoji,
		});
	}

	@On({ event: "emojiUpdate" })
	public emojiUpdate(oldEmoji: GuildEmoji, newEmoji: GuildEmoji) {
		return emojiUpdate({
			client: this.discordClient.getClient(),
			oldEmoji,
			newEmoji,
		});
	}
}
