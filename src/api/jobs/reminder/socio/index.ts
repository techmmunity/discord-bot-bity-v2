import { ClientProvider } from "discord-nestjs";
import { Guild, TextChannel } from "discord.js";

import { ChannelEnum } from "enums/channels";
import { GuildEnum } from "enums/guilds";
import { UsersEnum } from "enums/users";

export const sendSocioReminder = async (
	discordClient: ClientProvider,
	guildId: GuildEnum,
) => {
	const guild = discordClient.getClient().guilds.cache.get(guildId) as Guild;

	const channel = guild.channels.cache.get(
		ChannelEnum[guildId].NETWORKING,
	) as TextChannel;

	await channel.send(`Fala galera!

	Eu to procurando um sócio pra fazer parte da Techmmunity, e como isso é um assunto importante, acho legal divulgar aqui também.

	Pra quem não sabe, a Tech tem o objetivo de ser uma **empresa** de educação e criação de ferramentas que auxiliam no dia a dia das empresas.

	Eu por enquanto estou levando esse barco "sozinho" (temos uma equipe foda que ajuda em muita coisa || Vlw Alessandro e Ju, é nóis :love: ||), mas precisava de outra pessoa full time nisso, com sangue nos olhos pra fazer esse ngc dar certo.

	Eu sei como é foda vender teu sonho pra outra pessoa, mas acho q em dupla daria pra ter muito mais resultado e bem mais rapido do que sozinho.

	Eu to procurando alguém que tenha principois parecidos e habilidades complementarem (frase feita de "Primo Rico", mas não deixa de ser verdade):
	- Meu objetivo com a tech é fazer com que ela tenha uma qualidade absurda, já que acho que isso é um dos pilares que sustentam uma empresa (Só q no começo vai sair tudo "cagado" mesmo, já que não temos pessoal suficiente e precisamos fazer as coisas **rapido**).
	- O que eu tenho pra oferecer pra empresa é a habilidade tecnica e o capital financeiro, e eu preciso de uma pessoa que seja **OU** muito boa com pessoas, carismatica, etc, **OU** que seja um otimo dev.

	Observações importantes que acho que possam despertar mais do seu interesse:
	- Eu já fali duas empresas, então confia que eu tenho experiencia no que **NÃO** fazer :joy:
	- Temos um "consultor", que tem uma empresa multimilionária, e tá ajudando muito com conselhos e acompanhando o desenvolvimento da Tech.

	Se você tiver interesse e achar que é qualificado, seja pelas coisas que eu citei ou por alguma outra skill sua, manda uma DM pra mim (<@${UsersEnum.RAZAL}>) e bora trocar uma ideia respeito, eu posso te apresentar mais sobre a Tech, sobre o que já temos construido e o que planejo pro futuro.

	PS: Por motivos obvios, sim, você precisa ser maior de 18.`);
};
