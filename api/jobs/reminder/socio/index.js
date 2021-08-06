"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSocioReminder = void 0;
const channels_1 = require("../../../../enums/channels");
const guilds_1 = require("../../../../enums/guilds");
const users_1 = require("../../../../enums/users");
const sendSocioReminder = async (discordClient, guildId) => {
    const guild = discordClient.getClient().guilds.cache.get(guildId);
    const channel = guild.channels.cache.get(channels_1.ChannelEnum[guildId].NETWORKING);
    await channel.send(`Fala galera!

	Eu to procurando um sócio pra fazer parte da Techmmunity, e como isso é um assunto importante, acho legal divulgar aqui também.

	Pra quem não sabe, a Tech tem o objetivo de ser uma **empresa** de educação e criação de ferramentas que auxiliam no dia a dia das empresas.

	Eu por enquanto estou levando esse barco sozinho, mas precisava de outra pessoa full time nisso, com sangue nos olhos pra fazer acontecer.

	Eu sei como é foda vender teu sonho pra outra pessoa, mas acho q em dupla daria pra ter muito mais resultado e bem mais rapido do que sozinho.

	Eu to procurando alguém que tenha principois parecidos e habilidades complementarem (frase feita de "Primo Rico", mas não deixa de ser verdade):
	- Meu objetivo com a tech é fazer com que ela tenha sempre foco em **qualidade**, já que acho que isso é um dos pilares que sustentam uma empresa (Só q no começo vai sair tudo "cagado" mesmo, já que não temos pessoal suficiente e precisamos fazer as coisas **rapido**).
	- Eu quero alguém que realmente queira dar a alma por isso mano, sartup no Brasil é um inferno, e precisa ter muita dedicação e vontade pra fazer isso dar certo
	- Eu tenho uma experiencia bacana com startup e contato com uma galera que realmente manja muito de negocios, o que falta mesmo é mais braços pra fazer a tech acontecer.
	- De preferência, a pessoa faria um papel mais de "CEO", cuidando da parte "externa" da empresa, conversando com socios e vendendo a ideia pra investidores, além de cuidar de uma parte mais de marketing no começo, esse tipo de coisa, enquanto eu posso focar nos produtos e fazer uma coisa FODA.

	Se você tiver interesse e achar que é qualificado, seja pelas coisas que eu citei ou por alguma outra skill sua, manda uma DM pra mim (<@${users_1.UsersEnum.RAZAL}>) e bora trocar uma ideia a respeito, eu posso te apresentar mais sobre a Tech, sobre o que já temos construido e o que planejo pro futuro.`);
};
exports.sendSocioReminder = sendSocioReminder;
//# sourceMappingURL=index.js.map