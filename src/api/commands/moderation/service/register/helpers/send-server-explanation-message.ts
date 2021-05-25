import { Message, TextChannel } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";

interface GetMessagesParams {
	message: Message;
	unlockChannelsId: string;
	challenglesId: string;
}

const getMessages = ({
	message,
	unlockChannelsId,
	challenglesId,
}: GetMessagesParams) => {
	if (message.mentions.users.size > 1) {
		return [
			"Falem jovens, sejam bem vindos(as)!",
			`Depois deem uma passada no <#${unlockChannelsId}>`,
			"Lá vcs podem desbloquear canais pra postar suas duvidas / conteudos",
			`Nós tbm temos desafios diarios, ao meio dia, no <#${challenglesId}>`,
		];
	}

	return [
		"Fala jovem, seja bem vindo(a)!",
		`Depois dá uma passada no <#${unlockChannelsId}>`,
		"Lá vc pode desbloquear canais pra postar suas duvidas / conteudos",
		`Nós tbm temos desafios diarios, ao meio dia, no <#${challenglesId}>`,
	];
};

export const sendServerExplanationMessage = async (message: Message) => {
	const guildId = message.guild?.id as GuildEnum;

	const unlockChannelsId = ChannelEnum[guildId].UNLOCK_CHANNELS;
	const challenglesId = ChannelEnum[guildId].CHALLENGES;

	const welcomeMessageChannel = message.guild?.channels.cache.get(
		ChannelEnum[guildId].WELCOME_MESSAGE,
	) as TextChannel;

	const messages = getMessages({
		message,
		unlockChannelsId,
		challenglesId,
	});

	await welcomeMessageChannel?.send(messages.join("\n"));
};
