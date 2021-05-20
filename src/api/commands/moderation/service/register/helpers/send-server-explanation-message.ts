import { Message, TextChannel } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

export const sendServerExplanationMessage = async (message: Message) => {
	const guildId = message.guild?.id as GuildEnum;

	const unlockChannelsId = ChannelEnum[guildId].UNLOCK_CHANNELS;
	const challenglesId = ChannelEnum[guildId].CHALLENGES;

	const welcomeMessageChannel = message.guild?.channels.cache.get(
		ChannelEnum[guildId].WELCOME_MESSAGE,
	) as TextChannel;

	await welcomeMessageChannel.send(
		[
			"Fala jovens, seja bem vindos(as)!",
			`Depois deem uma passada no <#${unlockChannelsId}>`,
			"Lá vcs podem desbloquear canais pra postar suas duvidas / conteudos",
			`Nós tbm temos desafios diarios, ao meio dia, no <#${challenglesId}>`,
		].join("\n"),
	);
};
